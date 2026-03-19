import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Menu,
  X,
  CheckCircle,
  FileText,
  Map,
  Database,
  ChevronDown,
  ArrowUp,
  ArrowDownRight,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { I18nProvider, useI18n } from '../contexts/I18nContext';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { raw, locale, setLocale } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'metodologia', 'recursos', 'descargas', 'community', 'wisdom', 'cta'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
      
      // Detectar si se ha hecho scroll
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: raw.nav.inicio, id: 'inicio' },
    { href: '/#metodologia', label: raw.nav.elProyecto, id: 'metodologia' },
    { href: '/#recursos', label: raw.nav.recursos, id: 'recursos' },
  ];

  return (
    <nav className={`bg-[#223793] relative sticky top-0 z-50 w-full py-4 transition-all duration-300 ${isScrolled ? 'bg-[#223793]/95 backdrop-blur-sm' : 'bg-[#223793]'}`} aria-label="Navegación principal">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-12">
        <a
          href="/"
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <img
            src="/images/logos/logo_ign_blanco.webp"
            alt="IGN-JJHM - Instituto Geográfico Nacional Joaquín Hungría Morell"
            className="h-16 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              data-testid={`link-${link.id}`}
              onClick={(e) => {
                if ((link.id === 'metodologia' || link.id === 'recursos') && window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', `/#${link.id}`);
                }
              }}
              className={`relative w-fit transition-colors ${
                activeSection === link.id
                  ? 'text-white font-bold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="bg-white absolute right-0 bottom-0 left-0 h-0.5 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.div>
            </a>
          ))}
          <div className="relative flex items-center gap-1 rounded-lg border border-white/30 bg-white/5 px-2 py-1.5">
            <Globe className="text-white h-4 w-4" aria-hidden />
            <select
              value={locale}
              onChange={(e) => {
                setLocale(e.target.value as 'es' | 'fr' | 'en');
                (e.target as HTMLSelectElement).blur();
              }}
              className="bg-transparent text-white text-sm font-medium cursor-pointer appearance-none pr-6 focus:outline-none"
              aria-label="Idioma"
            >
              <option value="es">ES</option>
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-2 h-4 w-4 text-white/80"
              aria-hidden
            />
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          type="button"
          className="text-white hover:bg-white/10 rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#223793] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-menu-toggle"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-[#223793] border-white/20 absolute top-full right-4 left-4 z-50 mt-2 flex w-[calc(100%-2rem)] flex-col gap-6 rounded-2xl border p-8 shadow-2xl md:hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  if ((link.id === 'metodologia' || link.id === 'recursos') && window.location.pathname === '/') {
                    e.preventDefault();
                    setTimeout(() => {
                      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', `/#${link.id}`);
                    }, 300);
                  }
                }}
                data-testid={`link-${link.id}-mobile`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.25,
                  ease: 'easeOut',
                }}
                whileHover={{ x: 4 }}
                className={`w-fit text-center text-lg font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? 'text-white font-bold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <Globe className="text-white h-4 w-4" />
              <select
                value={locale}
                onChange={(e) => {
                  setLocale(e.target.value as 'es' | 'fr' | 'en');
                  (e.target as HTMLSelectElement).blur();
                }}
                className="bg-white/10 border border-white/30 rounded-lg text-white text-sm font-medium px-3 py-2 focus:outline-none"
                aria-label="Idioma"
              >
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FloatingBackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('home');
      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        setIsVisible(heroRect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#4a6fd4] text-white shadow-xl shadow-primary/40 transition-colors hover:bg-[#5a7fe4] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Volver al inicio"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  const { raw } = useI18n();
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] flex-col items-center overflow-hidden bg-sky-100 px-6 py-8 md:flex-row md:px-12 lg:px-24"
    >
      {/* Decorative Blobs */}
      <div className="bg-primary/10 absolute top-[-10%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full blur-3xl" />
      <div className="bg-accent/30 absolute right-[-5%] bottom-[10%] -z-10 h-[400px] w-[400px] rounded-full blur-3xl" />

      <div className="relative z-10 w-full space-y-8 text-center md:w-1/2 md:text-left md:flex md:flex-col md:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <span className="font-hand text-primary mb-4 block text-2xl">{raw.hero.badge.trim()}</span>
          <h1 className="font-heading text-foreground mb-6 w-full text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl md:text-left">
            {raw.hero.title1.trim()}{' '}
            <span className="text-primary relative inline-block">
              {raw.hero.title2}
              <svg
                className="text-accent absolute -bottom-1 left-0 -z-10 h-3 w-full"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>{' '}
            <br />
            {raw.hero.title3}
          </h1>
          <p className="text-muted-foreground max-w-md text-lg leading-relaxed md:max-w-xl lg:max-w-2xl md:text-xl">
            {raw.hero.description}
          </p>
        </motion.div>
      </div>

      <div className="relative mt-12 w-full md:mt-0 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 h-[400px] md:h-[500px]"
        >
          {/* Efecto tipo barajas con imágenes de mapas */}
          {[
            // Fondo
            { image: '/images/cards/mapa-aptitud-recarga.webp', rotation: -8, zIndex: 1, top: '10%', left: '5%', scale: 0.8 },
            // Medio
            { image: '/images/cards/mapa-lluvia-efectiva.webp', rotation: -4, zIndex: 2, top: '5%', left: '10%', scale: 0.8 },
            // Principal al frente
            { image: '/images/cards/mapa-potencial-hidrogeologico.webp', rotation: 0, zIndex: 3, top: '0%', left: '12%', scale: 0.9 },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotate: card.rotation, scale: 0.7 }}
              animate={{ 
                opacity: 1, 
                rotate: card.rotation,
                scale: card.scale,
              }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.2,
                ease: 'easeOut' 
              }}
              whileHover={{ 
                y: -30,
                rotate: 0,
                scale: 0.9,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
              className="absolute cursor-pointer"
              style={{ 
                zIndex: card.zIndex,
                width: '80%',
                height: '80%',
                top: card.top,
                left: card.left,
              }}
            >
              <img
                src={card.image}
                alt={`Mapa temático del Yaque del Sur ${idx + 1}`}
                className="h-full w-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          ))}

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="bg-card absolute -bottom-8 -left-4 z-20 flex max-w-[200px] items-center gap-3 rounded-2xl p-4 shadow-lg md:left-10"
          >
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <Map size={20} aria-hidden />
            </div>
            <div>
              <p className="text-sm font-bold">{raw.hero.floatingCards.mapas}</p>
              <p className="text-muted-foreground text-xs">{raw.hero.floatingCards.mapasSub}</p>
            </div>
          </motion.div>

          {/* Second Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="bg-card absolute top-12 right-8 z-20 flex max-w-[200px] items-center gap-3 rounded-2xl p-4 shadow-lg md:top-16 md:right-12"
          >
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <CheckCircle size={20} aria-hidden />
            </div>
            <div>
              <p className="text-sm font-bold">{raw.hero.floatingCards.datos}</p>
              <p className="text-muted-foreground text-xs">{raw.hero.floatingCards.datosSub}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  title,
  desc,
  img,
  delay,
  testId,
}: {
  title: string;
  desc: string;
  img: string;
  delay: number;
  testId: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    data-testid={testId}
  >
    <div className="bg-card h-full overflow-hidden rounded-[2rem] border-none shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="flex h-full flex-col p-0">
        <div className="bg-secondary/30 flex h-48 items-center justify-center p-8">
          <motion.img
            src={img}
            alt={title}
            className="h-32 w-auto object-contain drop-shadow-md"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <div className="flex flex-1 flex-col items-center p-8 text-center">
          <h3 className="font-heading text-foreground mb-3 text-2xl font-bold">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const FEEDBACK_FORM_URL = 'https://forms.office.com/r/MgG34MBhfQ';

const SeccionProyecto = () => {
  const { raw } = useI18n();
  return (
    <section id="proyecto" className="relative scroll-mt-24 w-full bg-white px-6 py-8 md:px-12 md:py-10 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="font-heading text-foreground text-2xl font-bold md:text-3xl">
            {raw.proyecto.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {raw.proyecto.paragraph1Before}
            <span className="font-bold">{raw.proyecto.paragraph1Bold}</span>
            {raw.proyecto.paragraph1After}
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {raw.proyecto.paragraph2}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const SeccionMetodologia = () => {
  const { raw } = useI18n();
  const informeUrl = '/docs/Metodologia-de-elaboracion-de-los-mapas-cuenca-Yaque-del-Sur.pdf';

  return (
    <section id="metodologia" className="relative scroll-mt-24 w-full bg-gradient-to-br from-primary/15 via-primary/10 to-primary/20 px-6 py-6 md:px-12 md:py-8 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10"
        >
          {/* Portada del informe - izquierda */}
          <div className="w-60 flex-shrink-0 md:w-72 lg:w-80">
            <motion.a
              href={informeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <img
                src="/images/portada-metodologia.webp"
                alt="Informe de metodología - Mapas temáticos del Yaque del Sur"
                className="w-full h-auto"
              />
            </motion.a>
          </div>

          {/* Texto descriptivo y botón - derecha */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-heading text-foreground mb-4 text-2xl font-bold md:text-3xl">
              {raw.metodologia.title}
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              {raw.metodologia.description}
            </p>
            <motion.a
              href={informeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-semibold transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText className="h-5 w-5" />
              {raw.metodologia.buttonText}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const GEOVISOR_URLS = [
  // 0 - Calidad predictiva del agua respecto al fluoruro
  'https://mapas.ign.gob.do/?project=fluoruro',
  // 1 - Índice de la aptitud de los terrenos a recargar (IDPR)
  'https://mapas.ign.gob.do/?project=idpr',
  // 2 - Lluvia efectiva
  'https://mapas.ign.gob.do/?project=lluviaefectiva',
  // 3 - Potencial hidrogeológico
  'https://mapas.ign.gob.do/?project=pothidrogeol',
  // 4 - Presión significativa en nitrato de origen agrícola
  'https://mapas.ign.gob.do/?project=brgmnitratos',
  // 5 - Presión significativa en pesticidas de origen agrícola
  'https://mapas.ign.gob.do/?project=pesticidas',
  // 6 - Recarga potencial
  'https://mapas.ign.gob.do/?project=recargapotencial',
  // 7 - Cambios de recarga potencial anual modelo HadGEM2-ES
  'https://mapas.ign.gob.do/?project=hadgem2es',
  // 8 - Cambios de recarga potencial anual modelo MPI-ESM-LR
  'https://mapas.ign.gob.do/?project=mpiesmlr',
];
const METADATA_URLS = [
  // 0 - Calidad predictiva del agua respecto al fluoruro (Mapa_fluoruro)
  'https://metadatos.iderd.gob.do/geonetwork/srv/eng/catalog.search#/metadata/BRGM_Yaque_Fluoruro',
  // 1 - Índice de la aptitud de los terrenos a recargar (Mapa_IDPR)
  'https://metadatos.iderd.gob.do/geonetwork/srv/eng/catalog.search#/metadata/BRGM_Yaque_IDPR',
  // 2 - Lluvia efectiva (Mapa_lluvia_efectiva)
  'https://metadatos.iderd.gob.do/geonetwork/srv/eng/catalog.search#/metadata/BRGM_Yaque_Lluvia_Efectiva',
  // 3 - Potencial hidrogeológico (Mapa_Pot_hidrogeologico)
  'https://metadatos.iderd.gob.do/geonetwork/srv/eng/catalog.search#/metadata/BRGM_Yaque_Potencial_Hidrogeologico',
  // 4 - Presión significativa en nitrato de origen agrícola (Mapa_nitratos)
  'https://metadatos.iderd.gob.do/geonetwork/srv/eng/catalog.search#/metadata/BRGM_Yaque_Nitratos',
  // 5 - Presión significativa en pesticidas de origen agrícola (Mapa_pesticidas)
  'https://metadatos.iderd.gob.do/geonetwork/srv/eng/catalog.search#/metadata/BRGM_Yaque_Pesticidas',
  // 6 - Recarga potencial (Mapa_recarga_potencial)
  'https://metadatos.iderd.gob.do/geonetwork/srv/eng/catalog.search#/metadata/BRGM_Yaque_Recarga_Potencial',
  // 7 - Cambios de recarga potencial anual modelo HadGEM2-ES (Mapa_cambio_recarga_potencial_modeloHadGEM2_ES)
  'https://metadatos.iderd.gob.do/geonetwork/srv/eng/catalog.search#/metadata/BRGM_Yaque_Recarga_Horizonte2055',
  // 8 - Cambios de recarga potencial anual modelo MPI-ESM-LR (Mapa_cambio_recarga_potencial_modeloMPI_ESM_LR)
  'https://metadatos.iderd.gob.do/geonetwork/srv/eng/catalog.search#/metadata/BRGM_Yaque_Recarga_Horizonte2055',
];

const Features = () => {
  const { raw } = useI18n();
  const mapasInteractivos = raw.features.maps.map((m, i) => ({
    title: m.title,
    description: m.description,
    url: GEOVISOR_URLS[i] ?? 'https://mapas.ign.gob.do',
    metadataUrl: METADATA_URLS[i] ?? 'https://mapas.ign.gob.do/metadata',
    image: i === 0 ? '/images/cards/mapa-fluoruro.webp' : i === 1 ? '/images/cards/mapa-aptitud-recarga.webp' : i === 2 ? '/images/cards/mapa-lluvia-efectiva.webp' : i === 3 ? '/images/cards/mapa-potencial-hidrogeologico.webp' : i === 4 ? '/images/cards/mapa-nitratos.webp' : i === 5 ? '/images/cards/mapa-pesticidas.webp' : i === 6 ? '/images/cards/mapa-recarga-potencial.webp' : i === 7 ? '/images/cards/mapa-recarga-hadgem2-es.webp' : i === 8 ? '/images/cards/mapa-recarga-mpi-esm-lr.webp' : '/images/cards/mapa-fluoruro.webp',
    testId: `card-mapa-${i}`,
  }));

  return (
    <section
      id="recursos"
      className="relative scroll-mt-24 bg-white/50 px-6 py-8 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 space-y-4 text-center">
          <h2 className="font-heading text-foreground text-3xl font-bold md:text-4xl">
            {raw.features.title}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-4xl text-lg">
            {raw.features.subtitle}
          </p>
        </div>

        {/* Carrusel móvil */}
        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden">
          {mapasInteractivos.map((mapa, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              data-testid={mapa.testId}
              className="snap-center px-1"
            >
              <div className="group relative h-full min-h-[260px] w-[82vw] overflow-hidden rounded-[2rem] shadow-lg transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
                  style={{ backgroundImage: `url(${mapa.image})` }}
                />
                <div className="relative z-10 flex h-full flex-col justify-between items-center p-6">
                  <div className="flex flex-col items-center flex-1 justify-center">
                    <a
                      href={mapa.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-white text-lg font-bold text-center mb-2 underline-offset-4 hover:underline"
                      style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 16px rgba(0, 0, 0, 0.6)' }}
                    >
                      {mapa.title}
                    </a>
                    <p
                      className="text-white text-sm text-center leading-relaxed"
                      style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}
                    >
                      {mapa.description}
                    </p>
                  </div>
                  <div className="mt-4 flex w-full justify-between gap-2">
                    <a
                      href={mapa.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#283282] hover:bg-white/90 rounded-lg px-4 py-2 text-sm font-semibold transition-colors inline-block"
                    >
                      {raw.features.openViewer}
                    </a>
                    <a
                      href={
                        mapa.title.includes('Calidad natural')
                          ? 'https://metadatos.iderd.gob.do/geonetwork/srv/spa/catalog.search#/metadata/rdignPROV'
                          : mapa.metadataUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 text-white hover:bg-white/30 border border-white/50 rounded-lg px-4 py-2 text-sm font-semibold transition-colors inline-block"
                    >
                      {raw.features.verMetadatos}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid desktop */}
        <div className="hidden md:grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {mapasInteractivos.map((mapa, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              data-testid={mapa.testId}
            >
              <div className="group relative h-full min-h-[230px] overflow-hidden rounded-[2rem] shadow-lg transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 md:group-hover:scale-105"
                  style={{ backgroundImage: `url(${mapa.image})` }}
                />
                <div className="relative z-10 flex h-full flex-col justify-between items-center p-6 md:justify-end">
                  <div className="flex flex-col items-center flex-1 justify-center md:hidden">
                    <a
                      href={mapa.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-white text-lg font-bold text-center mb-2 underline-offset-4 hover:underline"
                      style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 16px rgba(0, 0, 0, 0.6)' }}
                    >
                      {mapa.title}
                    </a>
                    <p
                      className="text-white text-sm text-center leading-relaxed"
                      style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}
                    >
                      {mapa.description}
                    </p>
                  </div>
                  <a
                    href={mapa.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block font-heading text-white text-lg font-bold opacity-100 md:group-hover:opacity-0 md:group-hover:pointer-events-none transition-opacity duration-300 text-center underline-offset-4 hover:underline"
                    style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 16px rgba(0, 0, 0, 0.6)' }}
                  >
                    {mapa.title}
                  </a>
                  <div className="w-full flex justify-between gap-2 mt-4 md:hidden">
                    <a
                      href={mapa.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#283282] hover:bg-white/90 rounded-lg px-4 py-2 text-sm font-semibold transition-colors inline-block"
                    >
                      {raw.features.openViewer}
                    </a>
                    <a
                      href={
                        mapa.title.includes('Calidad natural')
                          ? 'https://metadatos.iderd.gob.do/geonetwork/srv/spa/catalog.search#/metadata/rdignPROV'
                          : mapa.metadataUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 text-white hover:bg-white/30 border border-white/50 rounded-lg px-4 py-2 text-sm font-semibold transition-colors inline-block"
                    >
                      {raw.features.verMetadatos}
                    </a>
                  </div>
                </div>
                <div className="hidden md:flex absolute inset-0 z-20 bg-[#283282]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex-col justify-between p-6">
                  <div className="flex flex-col flex-1 justify-center">
                    <p className="text-white text-sm text-center leading-relaxed mb-4">
                      {mapa.description}
                    </p>
                  </div>
                  <div className="w-full flex justify-between gap-2">
                    <a
                      href={mapa.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#283282] hover:bg-white/90 rounded-lg px-4 py-2 text-sm font-semibold transition-colors inline-block"
                    >
                      {raw.features.openViewer}
                    </a>
                    <a
                      href={
                        mapa.title.includes('Calidad natural')
                          ? 'https://metadatos.iderd.gob.do/geonetwork/srv/spa/catalog.search#/metadata/rdignPROV'
                          : mapa.metadataUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 text-white hover:bg-white/30 border border-white/50 rounded-lg px-4 py-2 text-sm font-semibold transition-colors inline-block"
                    >
                      {raw.features.verMetadatos}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RecursosDesplegables = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { raw } = useI18n();
  const iconList = [FileText, Database];
  const recursos = raw.descargas.recursos.map((r, i) => ({
    title: r.title,
    description: r.description,
    icon: iconList[i],
    items: r.items.map((item) =>
      typeof item === 'string' ? { name: item, url: '#' } : item,
    ),
    note: r.note,
    videoUrl: r.videoUrl,
    videoButton: r.videoButton,
  }));

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {recursos.map((recurso, index) => {
          const panelId = `recursos-panel-${index}`;
          return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
        >
          <button
            type="button"
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
            aria-expanded={openIndex === index}
            aria-controls={panelId}
          >
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg flex-shrink-0">
                <recurso.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-foreground text-xl font-bold mb-2">
                  {recurso.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {recurso.description}
                </p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="ml-4 flex-shrink-0"
            >
              <ChevronDown className="h-6 w-6 text-primary" aria-hidden />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={panelId}
                role="region"
                aria-label={recurso.title}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-100 px-6 pb-6 pt-4 text-center md:text-left md:max-w-3xl md:mx-auto">
                  {index === 1 &&
                  recurso.items.length === 1 &&
                  recurso.items[0]?.url?.endsWith('.zip') ? (
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                      <table className="w-full table-fixed text-sm">
                        <tbody>
                          <tr>
                            <td className="w-3/4 px-3 py-2 align-middle font-semibold text-primary">
                              {recurso.items[0].name}
                            </td>
                            <td className="w-1/4 px-3 py-2 align-middle text-right">
                              <a
                                href={recurso.items[0].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                                aria-label="Descargar conjunto de datos"
                              >
                                <span>Descargar</span>
                                <ArrowDownRight className="h-3 w-3" aria-hidden />
                              </a>
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td
                              className="px-3 py-2 text-xs text-muted-foreground"
                              colSpan={2}
                            >
                              <span className="font-semibold">Formato:</span>{' '}
                              <span>
                                {(recurso.items[0] as { format?: string }).format ?? 'GeoPackage'}
                              </span>
                              <span className="mx-2">·</span>
                              <span className="font-semibold">Tamaño del archivo:</span>{' '}
                              <span>96.5&nbsp;MB</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : index === 0 ? (
                    <div className="space-y-3">
                      {recurso.items.map((item) => (
                        <div
                          key={item.name}
                          className="overflow-x-auto rounded-lg border border-gray-200"
                        >
                          <table className="w-full table-fixed text-sm">
                            <tbody>
                              <tr>
                                <td className="w-3/4 px-3 py-2 align-middle font-semibold text-primary">
                                  {item.name}
                                </td>
                                <td className="w-1/4 px-3 py-2 align-middle text-right">
                                  <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                                    aria-label={`Descargar ${item.name}`}
                                  >
                                    <span>Descargar</span>
                                    <ArrowDownRight className="h-3 w-3" aria-hidden />
                                  </a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td
                                  className="px-3 py-2 text-xs text-muted-foreground"
                                  colSpan={2}
                                >
                                  <span className="font-semibold">Formato:</span>{' '}
                                  <span>PDF</span>
                                  {('size' in item) && (
                                    <>
                                      <span className="mx-2">·</span>
                                      <span className="font-semibold">Tamaño del archivo:</span>{' '}
                                      <span>{(item as { size?: string }).size}</span>
                                    </>
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4 md:justify-items-end">
                      {recurso.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="w-full md:w-auto">
                          <a
                            href={item.url}
                            target={item.url !== '#' ? '_blank' : undefined}
                            rel={item.url !== '#' ? 'noopener noreferrer' : undefined}
                            className="text-primary hover:text-primary/80 text-sm flex items-center gap-2 transition-colors md:justify-end md:text-right"
                          >
                            {item.url.endsWith('.pdf') ? (
                              <img
                                src="/icons/pdf-icon.png"
                                alt=""
                                className="h-7 w-7 flex-shrink-0"
                                aria-hidden
                              />
                            ) : item.url.endsWith('.zip') ? null : (
                              <FileText className="h-7 w-7 text-primary" />
                            )}
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  {recurso.note && (
                    <div className="mt-6 space-y-3">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {(() => {
                          const idx = recurso.note.indexOf(':');
                          if (idx > -1 && idx <= 12) {
                            const prefix = recurso.note.slice(0, idx + 1);
                            const rest = recurso.note.slice(idx + 1);
                            return (
                              <>
                                <span className="font-semibold text-foreground">
                                  {prefix}
                                </span>
                                {rest}
                              </>
                            );
                          }
                          return recurso.note;
                        })()}
                      </p>
                      {recurso.videoUrl && (
                        <a
                          href={recurso.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          {recurso.videoButton ?? 'Ver video'}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
          );
        })}
    </div>
  );
};

const Community = () => {
  const { raw } = useI18n();
  const institutions = [
    {
      name: 'AFD',
      fullName: 'Agence Française de Développement',
      description:
        'Institución financiera pública que apoya proyectos que mejoran las condiciones de vida, promueven el desarrollo sostenible y fortalecen la resiliencia frente al cambio climático.',
      logo: '/images/logos/logo_RVB_France_AFD.webp',
      website: 'https://www.afd.fr',
      country: 'Francia',
      logoSize: 'h-16 md:h-24',
    },
    {
      name: 'BRGM',
      fullName: 'Bureau de Recherches Géologiques et Minières',
      description:
        'Servicio geológico nacional de Francia, responsable de la investigación, gestión y difusión del conocimiento sobre los recursos del subsuelo, los riesgos naturales, el agua y el medio ambiente, apoyando las políticas públicas y el desarrollo sostenible.',
      logo: '/images/logos/logo-brgm-etat-fr-couleurs.webp',
      website: 'https://www.brgm.fr',
      country: 'Francia',
      logoSize: 'h-18 md:h-28',
    },
    {
      name: 'MINPRE',
      fullName: 'Ministerio de la Presidencia de la República Dominicana',
      description:
        'Órgano de coordinación del Poder Ejecutivo responsable de articular políticas públicas estratégicas y apoyar la implementación de proyectos prioritarios para el desarrollo nacional.',
      logo: '/images/logos/logo_minpre.webp',
      website: 'https://minpre.gob.do',
      country: 'República Dominicana',
      logoSize: 'h-16 md:h-24',
    },
    {
      name: 'Ministerio de Medio Ambiente',
      fullName: 'Ministerio de Medio Ambiente y Recursos Naturales',
      description:
        'Institución responsable de la formulación y aplicación de políticas para la gestión sostenible del medio ambiente y los recursos naturales de la República Dominicana.',
      logo: '/images/logos/logo-medio-ambiente.webp',
      website: 'https://ambiente.gob.do',
      country: 'República Dominicana',
      logoSize: 'h-16 md:h-24',
    },
  ];

  return (
    <section id="colaboradores" className="relative scroll-mt-24 px-6 py-8 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 space-y-3 text-center">
          <h2 className="font-heading text-foreground text-2xl font-bold md:text-3xl">
            {raw.community.title}
          </h2>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-center md:gap-6">
          {institutions.map((institution, idx) => (
            <div
              key={institution.name}
              className="flex items-center gap-4 md:gap-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex items-center justify-center ${institution.logoSize}`}
              >
                <a
                  href={institution.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={institution.fullName}
                  className="flex h-full w-full items-center justify-center transition-opacity hover:opacity-80"
                >
                  <img
                    src={institution.logo}
                    alt={`${institution.name} Logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </a>
              </motion.div>
              {idx < institutions.length - 1 && (
                <div
                  className="hidden h-16 w-px bg-gray-300 flex-shrink-0 md:block"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CtaFeedback = () => {
  const { raw } = useI18n();
  return (
    <section id="cta" className="relative scroll-mt-24 bg-primary px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="font-heading text-primary-foreground text-2xl font-bold md:text-3xl">
            {raw.cta.title}
          </h2>
          <p className="text-primary-foreground/90 text-lg leading-relaxed">
            {raw.cta.description}
          </p>
          <p className="text-primary-foreground/90 text-lg leading-relaxed">
            {raw.cta.closing}
          </p>
          <motion.a
            href={FEEDBACK_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 rounded-lg px-8 py-4 font-semibold transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Heart className="h-5 w-5" />
            {raw.cta.button}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const { raw } = useI18n();

  return (
    <footer className="bg-[#283282] px-6 py-4">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-left text-sm text-[#e5e7eb]"
        >
          <p>{raw.footer.copyright}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-end gap-6 text-sm font-semibold text-[#e5e7eb]"
        >
          <a href="/faq" className="hover:text-white transition-colors">
            {raw.footer.faq}
          </a>
          <a href="/privacy" className="hover:text-white transition-colors">
            {raw.footer.privacidad}
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

function HomeContent() {
  const { raw } = useI18n();
  return (
    <div className="bg-background selection:bg-primary/20 selection:text-primary-foreground min-h-screen">
      <Navigation />
      <Hero />
      <FloatingBackToTop />
      <SeccionProyecto />
      <SeccionMetodologia />
      <Features />
      <section id="descargas" className="scroll-mt-24 w-full bg-gray-100 px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 space-y-4 text-center"
          >
            <h2 className="font-heading text-foreground text-3xl font-bold md:text-4xl">
              {raw.descargas.title}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              {raw.descargas.subtitle}
            </p>
          </motion.div>

          <RecursosDesplegables />
        </div>
      </section>
      <Community />
      <CtaFeedback />
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <HomeContent />
    </I18nProvider>
  );
}
