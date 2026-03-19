import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Navigation, Footer } from './HomePage';

export default function PrivacyPage() {
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
              data-testid="button-back-privacy"
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
                Política de privacidad
              </h1>
              <p className="text-muted-foreground text-lg">
                Información sobre cómo se tratan los datos asociados al uso de este visor de mapas
                del Yaque del Sur.
              </p>
            </div>

            <div className="bg-card rounded-[2rem] border-none shadow-lg">
              <div className="space-y-6 p-8 md:p-12">
                <section className="space-y-3">
                  <h2 className="font-heading text-foreground text-2xl font-bold">
                    1. Finalidad del sitio
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Este sitio tiene por finalidad poner a disposición de las instituciones y del
                    público mapas temáticos e información hidrogeológica sobre la cuenca del Yaque
                    del Sur. No se persiguen fines comerciales ni publicitarios.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-heading text-foreground text-2xl font-bold">
                    2. Datos recopilados
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    El visor puede recopilar información técnica básica asociada a la navegación
                    (por ejemplo, dirección IP, tipo de navegador, idioma, fecha y hora de acceso)
                    con fines de seguridad y de análisis de uso agregados. No se recogen de forma
                    intencionada datos personales sensibles a través de este sitio.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-heading text-foreground text-2xl font-bold">
                    3. Uso y conservación de los datos
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    La información técnica recopilada se utiliza exclusivamente para garantizar el
                    correcto funcionamiento del sitio, mejorar su rendimiento y elaborar
                    estadísticas de uso agregadas. Los datos se conservan durante el tiempo
                    estrictamente necesario para estos fines y no se utilizan para elaborar
                    perfiles individuales.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-heading text-foreground text-2xl font-bold">
                    4. Compartición de la información
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Los datos de uso pueden ser tratados por los equipos técnicos responsables del
                    mantenimiento del sitio y, en su caso, por prestadores de servicios que actúan
                    en nombre de las instituciones responsables del proyecto. No se venden ni ceden
                    datos personales a terceros con fines comerciales.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-heading text-foreground text-2xl font-bold">
                    5. Enlaces a sitios externos
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    El visor contiene enlaces a otros sitios institucionales (por ejemplo, IGN,
                    BRGM, AFD o ministerios dominicanos). Cada uno de estos sitios dispone de sus
                    propias políticas de privacidad y condiciones de uso, que se recomienda
                    consultar al abandonar este sitio.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-heading text-foreground text-2xl font-bold">
                    6. Contacto
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Para cualquier solicitud relativa a la política de privacidad de este sitio o al
                    tratamiento de datos asociados, puedes contactar con las instituciones
                    responsables del proyecto a través de los canales oficiales indicados en la
                    sección de contacto.
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

