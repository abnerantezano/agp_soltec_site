const textosTraducidos = {
  inicio: {
    es: "Inicio",
    en: "Home",
  },
  inicioMovil: {
    es: "Inicio",
    en: "Home",
  },
  nosotros: {
    es: "Nosotros",
    en: "About us",
  },
  nosotrosMovil: {
    es: "Nosotros",
    en: "About us",
  },
  servicios: {
    es: "Servicios",
    en: "Services",
  },
  serviciosMovil: {
    es: "Servicios",
    en: "Services",
  },
  contacto: {
    es: "Contacto",
    en: "Contact",
  },
  contactoMovil: {
    es: "Contacto",
    en: "Contact",
  },
  cambiarI: {
    es: "Traducir a inglés",
    en: "Translate to spanish",
  },
  cambiarIMovil: {
    es: "Traducir a inglés",
    en: "Translate to spanish",
  },
  tituloPresentacion: {
    es: "Soluciones TI & Geoespaciales",
    en: "IT & Geospatial Solutions",
  },
  botonPresentacion: {
    es: "Explora nuestros servicios",
    en: "Explore our services",
  },
  tituloNosotros: {
    es: "Acerca de nosotros",
    en: "About us",
  },
  descripcionNosotros: {
    es: "Somos una empresa con sólida experiencia en minería y energía, en constante actualización para adaptarnos a las nuevas tecnologías, ofreciendo soluciones efectivas y de calidad a nuestros clientes.",
    en: "We are a company with solid experience in mining and energy, constantly updating to adapt to new technologies, offering effective and quality solutions to our clients.",
  },
  tituloNosotrosTI: {
    es: "Soluciones de TI",
    en: "IT Solutions",
  },
  descripcionNosotrosTI: {
    es: "Dominamos tecnologías de información aplicadas a soluciones de software y hardware. Brindamos servicios especializados que permiten a nuestros clientes alcanzar el éxito en cada proyecto.",
    en: "We master information technologies applied to software and hardware solutions. We provide specialized services that enable our clients to achieve success in every project.",
  },
  tituloNosotroGeo: {
    es: "Soluciones geoespaciales",
    en: "Geospatial Solutions",
  },
  descripcionNostrosGeo: {
    es: "Usamos herramientas GIS, CAD y bases de datos para ayudar a nuestros clientes a visualizar, analizar y tomar decisiones informadas, minimizando riesgos y maximizando el éxito de sus proyectos.",
    en: "We use GIS, CAD tools, and databases to help our clients visualize, analyze, and make informed decisions, minimizing risks and maximizing the success of their projects.",
  },
  tituloServicios: {
    es: "Nuestros servicios",
    en: "Our services",
  },
  tituloServicioBD: {
    es: "Base de datos",
    en: "Database",
  },
  modeladoBD: {
    es: "Modelado y gestión de bases de datos",
    en: "Database modeling and management",
  },
  etlBD: {
    es: "Uso de herramientas ETL",
    en: "Use of ETL tools",
  },
  dymBD: {
    es: "Diagnóstico y mantenimiento",
    en: "Diagnosis and maintenance",
  },
  csBD: {
    es: "Creación de scripts",
    en: "Script creation",
  },
  tituloEMP: {
    es: "Elaboración de mapas y planos",
    en: "Maps and Plans Creation",
  },
  gisCadEMP: {
    es: "Generación con software GIS y CAD",
    en: "Generation with GIS and CAD software",
  },
  dmypEMP: {
    es: "Digitalización de mapas y planos",
    en: "Digitalization of maps and plans",
  },
  tituloST: {
    es: "Soporte técnico",
    en: "Technical support",
  },
  hysST: {
    es: "Hardware y software",
    en: "Hardware and software",
  },
  dyrST: {
    es: "Diagnóstico y reparación",
    en: "Diagnosis and repair",
  },
  aiST: {
    es: "Asesoría informática",
    en: "IT consulting",
  },
  mdST: {
    es: "Marketing digital",
    en: "Digital marketing",
  },
  tituloDA: {
    es: "Desarrollo de aplicaciones",
    en: "Application development",
  },
  amDA: {
    es: "Aplicaciones a medida",
    en: "Custom applications",
  },
  apDA: {
    es: "Automatización de procesos",
    en: "Process automation",
  },
  euDA: {
    es: "Experiencia del usuario",
    en: "User experience",
  },
  tituloContacto: {
    es: "Contáctenos",
    en: "Contact us",
  },
  decripcionContacto: {
    es: "Puedes comunicarte con nosotros a través de los siguientes medios:",
    en: "You can contact us through the following means:",
  },
};

let idiomaActual = "es";

const cambiarIdioma = () => {
  idiomaActual = idiomaActual === "es" ? "en" : "es";

  for (const [id, textos] of Object.entries(textosTraducidos)) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.textContent = textos[idiomaActual];
    }
  }
};
