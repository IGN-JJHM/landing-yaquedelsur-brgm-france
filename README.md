# Visor de mapas del Yaque del Sur

Landing y visor informativo para el proyecto de **mapas temáticos e hidrogeología de la cuenca del Yaque del Sur** (República Dominicana), desarrollado en colaboración entre el **IGN‑JJHM**, el **BRGM** y otras instituciones dominicanas.

---

## ✨ Qué incluye este proyecto

- **Landing principal** con descripción del proyecto, contexto y enlaces al visor de mapas interactivos.
- **Sección de mapas temáticos** alineada con el informe _«Metodología de elaboración de los mapas temáticos del Yaque del Sur»_ (calidad natural, presiones por nitratos y pesticidas, potencial hidrogeológico, recarga 2055).
- **Sección de descargas** con acceso a mapas en PDF, datos geográficos y documentación técnica.
- **FAQ y Política de privacidad** adaptadas al uso del visor y a la gestión de datos técnicos.
<!-- Formulario de contacto eliminado: ya no se utiliza Formspree -->

---

## 🚀 Stack técnico

- **Framework:** [Astro 5](https://astro.build/)
- **UI:** React (integrado vía `@astrojs/react`)
- **Estilos:** Tailwind CSS (v4)
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React

---

## 🛠️ Cómo ejecutar el proyecto

### 1. Instalar dependencias

```bash
pnpm install
# o
npm install
```

### 2. Entorno de desarrollo

```bash
npm run dev
```

Por defecto el sitio estará disponible en `http://localhost:5000`.

### 3. Compilar para producción

```bash
npm run build
```

Los archivos generados quedarán en la carpeta `dist/`.

### 4. Desplegar en Hostinger

1. Ejecutar `npm run build` (o `pnpm build`)
2. Subir **todo el contenido** de la carpeta `dist/` al directorio público de tu hosting (p. ej. `public_html`) mediante FTP o el File Manager de cPanel
3. El archivo `.htaccess` se incluye automáticamente y aplica headers de seguridad y compresión GZIP

## 📁 Estructura del proyecto

```text
/src
├── components/   # Componentes React (HomePage, ContactPage, FaqPage, PrivacyPage)
├── contexts/     # Contexto de i18n (traducciones)
├── i18n/         # Textos en es/fr/en
├── layouts/      # Layout global (SEO, estilos, esquema JSON-LD)
└── pages/        # Rutas Astro (`/`, `/contact`, `/faq`, `/privacy`)
/public
├── images/       # Recursos estáticos (logos, mapas, portada)
├── docs/         # Documentos (informe PDF)
└── .htaccess     # Headers de seguridad (Hostinger)
```

---

## 🌍 Contenido y licencia

- El contenido textual está inspirado en el informe técnico **BRGM/RC‑75188‑FR** sobre la metodología de elaboración de los mapas temáticos del Yaque del Sur.
- El código se distribuye bajo licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

