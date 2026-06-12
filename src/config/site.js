/**
 * ⚙️ CONFIGURACIÓN DEL SITIO — edita ESTE archivo para personalizar el template.
 *
 * Todo el contenido visible (nombre, datos de contacto, servicios, horarios,
 * redes sociales, textos SEO) vive aquí. Los componentes solo lo leen.
 *
 * Los valores marcados con [DEMO] son datos de ejemplo con formato válido:
 * reemplázalos por los reales antes de publicar el sitio de un consultorio.
 */

export const site = {
  // ── Identidad ────────────────────────────────────────────────────────────
  doctor: {
    name: "Dr. Pablo Francisco Abreu Cornelio",
    shortName: "Dr. Abreu Cornelio",
    specialty: "Ginecología y Obstetricia",
    // Foto profesional del doctor. Coloca el archivo en /public (p. ej.
    // /public/doctor.jpg) y escribe aquí "doctor.jpg". Vacío = se muestra
    // un marco decorativo con el monograma.
    photo: "",
    // Texto alternativo de la foto. Vacío = se genera "Retrato del {nombre}".
    photoAlt: "",
    // Iniciales del marco decorativo cuando no hay foto. Vacío = se calculan
    // con las dos primeras palabras del nombre (sin el "Dr./Dra.").
    monogram: "PA",
    intro:
      "Con más de 15 años de experiencia en el cuidado de la salud femenina, " +
      "me dedico a proporcionar atención médica integral y personalizada, " +
      "en un ambiente de confianza y respeto.",
    credentials: [
      "Especialista en Ginecología y Obstetricia — Universidad Nacional [DEMO]",
      "Miembro de la Sociedad Dominicana de Ginecología y Obstetricia [DEMO]",
      "Certificado en Colposcopía y Laparoscopía",
    ],
  },

  // ── Portada (hero) ───────────────────────────────────────────────────────
  hero: {
    // Título principal: `emphasis` se muestra en cursiva color rosa al final.
    title: "Cuidado integral de la",
    emphasis: "salud femenina",
    lede:
      "Atención personalizada y profesional en un ambiente de confianza, " +
      "en cada etapa de tu vida.",
    // Datos destacados bajo los botones (máximo 3 se ven bien).
    stats: [
      { label: "Experiencia", value: "15+ años" },
      { label: "Atención", value: "Personalizada" },
      { label: "Citas", value: "WhatsApp directo" },
    ],
  },

  // ── Títulos de sección ───────────────────────────────────────────────────
  sections: {
    about: "Sobre mí",
    services: "Servicios",
    servicesTitle: "Atención especializada y cercana",
    contact: "Contacto",
    contactTitle: "Agenda tu consulta",
  },

  // ── Contacto ─────────────────────────────────────────────────────────────
  contact: {
    // Teléfono visible y enlazable (formato libre para mostrar).
    phoneDisplay: "(809) 555-0123", // [DEMO]
    // Solo dígitos con código de país, para los enlaces tel: y WhatsApp.
    phoneE164: "18095550123", // [DEMO]
    // Número de WhatsApp en formato internacional SIN "+" (requisito de wa.me).
    whatsapp: "18095550123", // [DEMO]
    whatsappMessage: "Hola, me gustaría agendar una cita.",
    email: "consulta@ejemplo.com", // [DEMO]
    address: "Av. Principal 123, Santo Domingo", // [DEMO]
    // Enlace de Google Maps al consultorio (opcional, "" = no se muestra).
    mapsUrl: "",
    // Endpoint del formulario de contacto (p. ej. https://formspree.io/f/XXXXXXXX).
    // Crea una cuenta gratuita en formspree.io, copia tu endpoint aquí y el
    // formulario queda funcionando. Vacío = el formulario se muestra en modo
    // demostración y avisa que no está conectado.
    formEndpoint: "",
  },

  // ── Horario de atención ──────────────────────────────────────────────────
  // `schema` es el mismo horario en el formato que entienden los buscadores
  // (códigos de día Mo/Tu/We/Th/Fr/Sa/Su y horas de 24h). Mantenlos en sintonía.
  hours: [
    { days: "Lunes a Viernes", hours: "9:00 – 18:00", schema: "Mo-Fr 09:00-18:00" },
    { days: "Sábados", hours: "9:00 – 13:00", schema: "Sa 09:00-13:00" },
  ],

  // ── Servicios ────────────────────────────────────────────────────────────
  // icon: uno de "consult" | "prenatal" | "scope" | "planning" (ver Icon.astro)
  services: [
    {
      id: "consulta-ginecologica",
      icon: "consult",
      title: "Consulta Ginecológica",
      description:
        "Atención integral y seguimiento personalizado de la salud femenina en todas las etapas de la vida.",
    },
    {
      id: "control-prenatal",
      icon: "prenatal",
      title: "Control Prenatal",
      description:
        "Acompañamiento y seguimiento completo durante todo el embarazo, para ti y tu bebé.",
    },
    {
      id: "colposcopia",
      icon: "scope",
      title: "Colposcopía",
      description:
        "Exámenes preventivos y diagnóstico temprano con equipos especializados.",
    },
    {
      id: "planificacion-familiar",
      icon: "planning",
      title: "Planificación Familiar",
      description:
        "Asesoramiento profesional y confidencial en métodos anticonceptivos.",
    },
  ],

  // ── Redes sociales ───────────────────────────────────────────────────────
  // Deja en "" las que el consultorio no tenga: no se mostrarán.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  // ── SEO ──────────────────────────────────────────────────────────────────
  seo: {
    title: "Dr. Pablo Francisco Abreu Cornelio — Ginecología y Obstetricia",
    // Idealmente 160 caracteres o menos: Google trunca las más largas.
    description:
      "Consultorio del Dr. Pablo Francisco Abreu Cornelio: ginecología y " +
      "obstetricia, control prenatal, colposcopía y planificación familiar.",
    // Especialidad para los datos estructurados de Google, en inglés.
    // Valores válidos: https://schema.org/MedicalSpecialty
    // (ej. "Gynecologic", "Pediatric", "Cardiovascular", "Dermatology", "PrimaryCare")
    medicalSpecialty: "Gynecologic",
    // Imagen para vistas previas al compartir (WhatsApp, redes). 1200×630 px,
    // colócala en /public y escribe aquí su nombre. Vacío = sin og:image.
    ogImage: "og.png",
    locale: "es_DO",
  },
};

/** Enlace de WhatsApp listo para usar. */
export const whatsappLink = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(site.contact.whatsappMessage)}`;
