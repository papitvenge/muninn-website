import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechApproach } from "@/components/TechApproach";
import { motion } from "framer-motion";
import { Code2, Brain, Cpu, BarChart3 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  const features = [
    {
      title: t('services.items.0.title'),
      description: t('services.items.0.description'),
      Icon: Code2
    },
    {
      title: t('services.items.1.title'),
      description: t('services.items.1.description'),
      Icon: Brain
    },
    {
      title: t('services.items.2.title'),
      description: t('services.items.2.description'),
      Icon: Cpu
    },
    {
      title: t('services.items.3.title'),
      description: t('services.items.3.description'),
      Icon: BarChart3
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="scroll-smooth"
    >
      <Hero />
      <section id="about">
        <About />
      </section>

      <TechApproach />

      <section id="tjenester" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('services.title')}
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

      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">{t('contact.cta.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('contact.cta.description')}
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}