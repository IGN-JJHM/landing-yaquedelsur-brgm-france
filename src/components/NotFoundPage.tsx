import { Navigation, Footer } from './HomePage';

export default function NotFoundPage() {
  return (
    <div className="bg-background selection:bg-primary/20 selection:text-primary-foreground min-h-[70vh]">
      <Navigation />
      <div className="from-primary/5 via-background to-secondary/5 bg-gradient-to-br p-6">
        <div className="mx-auto max-w-3xl py-10">
          <div className="text-center space-y-6">
            <h1 className="font-heading text-foreground text-4xl font-bold md:text-5xl">404</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              La página solicitada no está disponible.
            </p>
            <div className="pt-2">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Volver al inicio
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

