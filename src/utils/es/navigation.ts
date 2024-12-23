// Array de links para el navbar
const navBarLinks = [
  { name: "Inicio", url: "/es" },
  { name: "Productos", url: "/es/productos" },
  { name: "Distribuidores", url: "/es/distribuidores" }, // Corregido
  { name: "Contáctanos", url: "/es/contactanos" }, // Corregido
];

// Array de links para el footer
const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Productos y servicios", url: "/es/productos" },
      { name: "Preguntas frecuentes", url: "/es/faq" }, // Corregido 'fasq' a 'faq'
    ],
  },
  {
    section: "Compañia",
    links: [
      { name: "Nosotros", url: "/es/nosotros" },
      { name: "Blog", url: "/es/blog" },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61569164354559",
  tiktok: "https://www.tiktok.com/@xbyte.oficial?_t=ZM-8sIEeYhih1B&_r=1",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
