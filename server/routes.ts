import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Handle client-side routing by serving index.html for all non-API routes
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      next();
      return;
    }
    // Let Vite handle the response in development
    if (process.env.NODE_ENV === 'development') {
      next();
      return;
    }
    // In production, serve the static files
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });

  const httpServer = createServer(app);
  return httpServer;
}