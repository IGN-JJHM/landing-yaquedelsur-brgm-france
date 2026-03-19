# Informe de seguridad – landing-france

## Resumen

Análisis de seguridad realizado. El proyecto es un sitio público estático sin autenticación. Se han implementado correcciones prioritarias y se documentan recomendaciones pendientes.

---

## Correcciones implementadas

- **`.gitignore`**: Creado con `.env`, `node_modules/`, `dist/` para evitar subir secretos o artefactos.
- **`allowedHosts`**: Restringido en producción para mitigar Host Header Injection.
- **Headers de seguridad**: `public/.htaccess` (Apache/Hostinger) – se copia a la raíz en el build. Incluye X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, compresión GZIP y cache para assets.

---

## Recomendaciones pendientes

### 1. Dependencias

Se ejecutó `pnpm update` y actualmente no hay vulnerabilidades conocidas (`pnpm audit` limpio).

Ejecutar periódicamente:

```bash
pnpm audit
pnpm update
```

### 2. Script externo (official-header)

El script de `cdn.jsdelivr.net` no tiene SRI. Para mayor seguridad:

1. Descargar el script y servirlo localmente desde `/scripts/`, o
2. Calcular el hash y añadir `integrity="sha384-..."` al tag `<script>`.

### 3. Content-Security-Policy (CSP)

Para una CSP más estricta, configurarla en el servidor o plataforma de hosting. Ejemplo base:

```
Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'
```

Ajustar según las necesidades del sitio.

### 4. Formulario de contacto (Formspree)

- Activar honeypot o reCAPTCHA en el dashboard de Formspree.
- Validar longitud y formato de email en el cliente.
- Limitar longitud del mensaje (p. ej. 5000 caracteres).

### 5. Política de privacidad y GDPR

- Incluir explícitamente el uso de Formspree y transferencia de datos.
- Añadir banner de cookies si se usan cookies no esenciales.
- Documentar base legal, derechos del usuario y plazos de conservación.

### 6. Despliegue en Hostinger

1. Ejecutar `pnpm build` (o `npm run build`)
2. Subir el contenido de la carpeta `dist/` al directorio público (p. ej. `public_html`) vía FTP o File Manager de cPanel
3. El archivo `.htaccess` se incluye en el build y aplica los headers de seguridad en Apache

### 7. allowedHosts

`allowedHosts` solo afecta al servidor de desarrollo (`astro dev`). En Hostinger el sitio se sirve como archivos estáticos, no aplica.

---

## Estado actual por categoría

| Categoría              | Estado                          |
|------------------------|---------------------------------|
| Variables de entorno   | Correcto (PUBLIC_ para Formspree) |
| XSS                    | Bajo riesgo (sin user input)    |
| Enlaces externos       | Correcto (noopener noreferrer)  |
| Formularios            | Formspree con validación básica |
| Headers de seguridad   | Configurados en .htaccess (Hostinger/Apache) |

---

## Reportar vulnerabilidades

Si detectas una vulnerabilidad de seguridad, contacta al equipo del proyecto de forma privada antes de hacerla pública.
