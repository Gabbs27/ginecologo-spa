# Consultorio Médico — Template para ginecólogos y médicos

Landing page profesional para consultorios médicos, construida con [Astro](https://astro.build) y React. Pensada como **template**: todo el contenido se personaliza editando **un solo archivo**, sin tocar componentes.

Demo: https://gabbs27.github.io/ginecologo-spa

## ✨ Características

- **HTML estático pre-renderizado** — SEO real para búsquedas locales ("ginecólogo en…"), casi cero JavaScript en producción
- **Datos estructurados schema.org (`Physician`)** + Open Graph + sitemap + canonical, generados desde la configuración
- **Botón flotante de WhatsApp** para agendar citas, con mensaje predefinido
- **Formulario de contacto** listo para [Formspree](https://formspree.io) (con honeypot antispam, estados de envío y aviso de privacidad); en modo demo lo indica en lugar de tragarse los mensajes
- **Accesible**: labels en formularios, skip-link, contrastes AA, navegación por teclado, `prefers-reduced-motion` respetado
- **Diseño editorial cálido**: tipografías Fraunces + Karla auto-hospedadas (sin requests a Google), animaciones de entrada sutiles
- Responsive completo, móvil primero

## 🚀 Empezar

```bash
npm install
npm run dev      # desarrollo en http://localhost:4321
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
npm run deploy   # publicar en GitHub Pages
```

## 🩺 Personalizar para un consultorio

**Todo el contenido vive en [`src/config/site.js`](src/config/site.js).** Los valores marcados `[DEMO]` son datos de ejemplo — reemplázalos antes de publicar:

1. **Identidad** — nombre del doctor/a, especialidad, biografía y credenciales.
2. **Foto** — coloca la foto profesional en `public/` (p. ej. `public/doctor.jpg`) y escribe `photo: "doctor.jpg"`. Sin foto se muestra un marco decorativo con monograma (configurable en `monogram`).
3. **Portada y títulos** — el titular del hero (`hero.title` / `hero.emphasis` / `hero.lede`), los datos destacados (`hero.stats`) y los títulos de sección (`sections`) también se editan en el config.
4. **Contacto** — teléfono, **WhatsApp en formato internacional sin `+`** (ej. `18091234567`), email y dirección.
5. **Formulario** — crea una cuenta gratuita en [formspree.io](https://formspree.io), copia el endpoint (`https://formspree.io/f/XXXXXXXX`) en `formEndpoint` y el formulario queda funcionando.
6. **Horarios, servicios y redes sociales** — edita las listas; las redes vacías (`""`) no se muestran. Mantén el campo `schema` de cada horario en sintonía (es el formato que leen los buscadores).
7. **SEO** — título, descripción (≤160 caracteres) y `medicalSpecialty` ([valores válidos](https://schema.org/MedicalSpecialty)). Para la vista previa al compartir (WhatsApp/redes), coloca una imagen de 1200×630 px en `public/og.png`.

### Cambiar los colores

La paleta vive en [`src/styles/global.css`](src/styles/global.css) como variables CSS (`--paper`, `--ink`, `--rose`…). Cambia esas variables y todo el sitio se actualiza.

## 📦 Despliegue

### GitHub Pages (configurado)

`npm run deploy` construye y publica `dist/` en la rama `gh-pages`. Si cambias de repositorio, actualiza `site` y `base` en [`astro.config.mjs`](astro.config.mjs).

### Dominio propio (recomendado para un consultorio real)

Un dominio propio (`drnombre.com`) da mucha más credibilidad y mejor SEO que `usuario.github.io`. Con dominio propio: configura el dominio en GitHub Pages, cambia `site` en `astro.config.mjs`, elimina la línea `base` y actualiza la URL del `Sitemap:` en `public/robots.txt`.

> Nota: mientras el sitio viva bajo `usuario.github.io/repo`, el `robots.txt` no tiene efecto (los buscadores solo leen el de la raíz del dominio). Envía el sitemap manualmente por [Google Search Console](https://search.google.com/search-console); con dominio propio el `robots.txt` sí funciona.

## 🗂 Estructura

```
src/
├── config/site.js        ← ⚙️ TODO el contenido se edita aquí
├── styles/global.css     ← Sistema de diseño (colores, tipografía, motion)
├── layouts/Layout.astro  ← <head>: SEO, Open Graph, JSON-LD schema.org
├── pages/index.astro     ← Composición de la página
└── components/
    ├── Header.astro        Hero.astro        About.astro
    ├── Services.astro      Contact.astro     Footer.astro
    ├── WhatsAppButton.astro
    ├── ContactForm.jsx   ← Isla de React (única parte interactiva)
    └── Icon.astro        ← Iconos SVG de línea
```

## 📝 Historia

La v1 de este proyecto era un SPA de Create React App. La v2 migró a Astro porque CRA fue descontinuado oficialmente y porque un sitio médico necesita HTML estático para SEO local: el contenido ahora es visible para buscadores y vistas previas de WhatsApp sin ejecutar JavaScript.
