import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Navigation, Footer } from './HomePage';

const faqs = [
  {
    question: '¿Qué es el proyecto sobre el Yaque del Sur?',
    answer:
      'Es un estudio hidrogeológico y cartográfico que busca mejorar la gestión de las aguas subterráneas en la cuenca del Yaque del Sur en un contexto de cambio climático, mediante la elaboración de mapas temáticos y una base de datos asociada.',
  },
  {
    question: '¿Qué tipo de mapas puedo consultar en el visor?',
    answer:
      'El visor permite consultar mapas de calidad natural del agua subterránea (sulfatos y fluoruro), presión por nitratos y pesticidas de origen agrícola, potencial hidrogeológico de los acuíferos y recarga potencial al horizonte 2055.',
  },
  {
    question: '¿De dónde proceden los datos utilizados?',
    answer:
      'Los datos proceden de instituciones dominicanas como MIMARENA, INDRHI, INAPA, IGN y SGN, complementados con nuevas campañas de medición realizadas entre 2023 y 2025 en la cuenca del Yaque del Sur.',
  },
  {
    question: '¿Puedo descargar los mapas y la documentación?',
    answer:
      'Sí. En la sección de descargas encontrarás mapas temáticos en PDF, conjuntos de datos geográficos y documentación técnica, incluido el informe de metodología de elaboración de los mapas temáticos.',
  },
  {
    question: '¿Quién coordina y financia el proyecto?',
    answer:
      'El proyecto es coordinado por el BRGM en colaboración con el IGN-JJHM y las instituciones dominicanas del sector agua, y cuenta con el apoyo de la Agence Française de Développement (AFD) y del Ministerio de la Presidencia (MINPRE).',
  },
];

export default function FaqPage() {
  return (
    <div className="bg-background selection:bg-primary/20 selection:text-primary-foreground min-h-screen">
      <Navigation />
      <div className="from-primary/5 via-background to-secondary/5 bg-gradient-to-br p-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <button
              type="button"
              data-testid="button-back-faq"
              className="hover:bg-secondary/20 mb-4 rounded-full p-2 transition-colors"
              onClick={() => window.history.back()}
              aria-label="Volver a la página anterior"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div className="space-y-4 text-center">
              <h1 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
                Preguntas frecuentes
              </h1>
              <p className="text-muted-foreground text-lg">
                Respuestas rápidas sobre el visor y el proyecto de mapas temáticos del Yaque del
                Sur.
              </p>
            </div>

            <div className="bg-card rounded-[2rem] border-none shadow-lg">
              <div className="divide-border/40 space-y-4 p-6 md:p-8">
                {faqs.map((item, idx) => (
                  <div key={idx} className="border-border/40 border-b pb-4 last:border-b-0 last:pb-0">
                    <h2 className="font-heading text-foreground text-lg font-semibold">
                      {item.question}
                    </h2>
                    <p className="text-muted-foreground mt-2 text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

