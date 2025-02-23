import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { motion } from "framer-motion";
import { Code2, Brain, Cpu, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Softwareutvikling",
    description: "Moderne og skalerbare digitale løsninger for web og mobil.",
    Icon: Code2
  },
  {
    title: "Kunstig intelligens",
    description: "Utvikling av AI-drevne systemer for analyse, automatisering og beslutningsstøtte.",
    Icon: Brain
  },
  {
    title: "IoT og Smart Teknologi",
    description: "Tilkobling av fysiske enheter for smarte og effektive løsninger.",
    Icon: Cpu
  },
  {
    title: "Datadrevet Innsikt",
    description: "Avansert dataanalyse og visualisering for bedre forretningsbeslutninger.",
    Icon: BarChart3
  }
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Hva Vi Jobber Med
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 rounded-lg bg-card"
              >
                <feature.Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}