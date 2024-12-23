export const SITE = {
  title: "Xbyte",
  tagline: "Innovative Tech for Everyday Life",
  description:
    "Xbyte is a cutting-edge technology company specializing in the design and manufacturing of premium computing products. From monitors to accessories, we deliver quality, performance, and design tailored to your needs. Experience technology made by us, for you ",
  url: "https://xbytelatam.com",
  author: "Xbyte Team",
};
export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};
export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Premium Tech Solutions`,
  description:
    "Discover Xbyte's innovative computing products, including monitors, accessories, and more. Crafted with precision and designed with your needs in mind, Xbyte combines technology and elegance to enhance your experience.",
};
