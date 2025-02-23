import { motion } from "framer-motion";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(40deg,var(--primary)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(220deg,var(--primary)_0%,transparent_40%)]" />
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Velkommen til
            <span className="text-primary block mt-2">Muninn Utvikling AS</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Et innovativt teknologiselskap med fokus på utvikling av programvare og digitale løsninger for fremtiden.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium"
              onClick={() => scrollToSection('tjenester')}
            >
              Våre Tjenester
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium"
              onClick={() => scrollToSection('about')}
            >
              Kontakt Oss
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Animated geometric shapes */}
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 -translate-x-1/2 translate-y-1/2"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border-2 border-primary/20 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute top-0 right-0 w-96 h-96 translate-x-1/2 -translate-y-1/2"
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border-2 border-primary/10 rounded-full" />
      </motion.div>
    </div>
  );
}