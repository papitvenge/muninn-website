import { motion } from "framer-motion";
import { Activity, Link2, Navigation, Brain } from "lucide-react";

const approaches = [
  {
    title: "Monitoring",
    description: "Innsamling, behandling og analyse av store datamengder for å gi sanntidsinnsikt og forbedret beslutningstaking. Vi skaper systemer som kan tolke og reagere på data i dynamiske miljøer.",
    Icon: Activity
  },
  {
    title: "Unifying",
    description: "Vi integrerer ulike teknologier for å skape helhetlige løsninger. Våre systemer er utformet for å fungere sømløst på tvers av plattformer, enten det er innen AI, automatisering eller datastrukturer.",
    Icon: Link2
  },
  {
    title: "Navigating",
    description: "Intelligente og autonome systemer som kan tilpasse seg ulike scenarioer og miljøer. Vi jobber med løsninger som muliggjør presis navigasjon og optimalisering av prosesser.",
    Icon: Navigation
  },
  {
    title: "Integrating Neural Networks",
    description: "Vi utnytter kunstig intelligens og maskinlæring for å skape fleksible og skalerbare løsninger. Ved å bruke avanserte nevrale nettverk kan våre systemer lære, tilpasse seg og forbedre seg over tid.",
    Icon: Brain
  }
];

export function TechApproach() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Vår teknologi og tilnærming</h2>
          <p className="text-lg text-muted-foreground mb-12">
            MUNINN – Monitoring, Unifying, Navigating, Integrating Neural Networks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-6 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <approach.Icon className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{approach.title}</h3>
                  <p className="text-muted-foreground">{approach.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
