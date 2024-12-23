// Array de links para el navbar

const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Partners", url: "/Partners" },
  { name: "Contact", url: "/Contact" },
];

// Array de links para el footer

const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Products", url: "/products" },
      { name: "Faq", url: "/faq" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "about" },
      { name: "Blog", url: "/blog" },
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
