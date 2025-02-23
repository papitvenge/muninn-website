import { motion } from "framer-motion";

export function About() {
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
          <h2 className="text-3xl font-bold mb-8 text-center">Om Oss</h2>

          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I en verden der teknologi utvikler seg i et stadig raskere tempo, er Muninn Utvikling AS 
              dedikert til å ligge i forkant av innovasjon. Vi spesialiserer oss på å utvikle avanserte 
              teknologiske løsninger som kombinerer kunstig intelligens, nettverksbaserte systemer og 
              autonome prosesser.
            </p>

            <p>
              Vår tilnærming bygger på en filosofi om å koble sammen intelligens og teknologi på en 
              sømløs måte. Inspirert av norrøn mytologi, der ravnen Muninn symboliserer hukommelse og 
              kunnskap, utvikler vi systemer som overvåker, analyserer og handler basert på avanserte 
              algoritmer og dataanalyse.
            </p>

            <div className="bg-card p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Samarbeid og Lokasjon</h3>
              <p>
                Vi har et tett samarbeid med Jotun-Utvikling AS, og sammen utforsker vi nye 
                teknologiske muligheter for å møte morgendagens utfordringer. Vårt felles kontor 
                i Jernbanevegen 6, 2900 Fagernes fungerer som et dynamisk utviklingsmiljø der 
                innovasjon og kreativitet står i sentrum.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}