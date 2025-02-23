import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">{t('about.title')}</h2>

          <div className="space-y-6 text-lg text-muted-foreground">
            <p>{t('about.intro')}</p>
            <p>{t('about.approach')}</p>

            <div className="bg-card p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">{t('about.collaboration.title')}</h3>
              <p>{t('about.collaboration.text')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}