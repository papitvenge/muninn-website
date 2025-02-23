import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Handle client-side routing
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      next();
      return;
    }

    if (process.env.NODE_ENV === 'development') {
      next();
      return;
    }

    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });

  const httpServer = createServer(app);
  return httpServer;
}