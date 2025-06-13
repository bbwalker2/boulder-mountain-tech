// next-seo.config.js

const SEO = {
  title: "Boulder Mountain Tech",
  titleTemplate: "%s | Boulder Mountain Tech",
  defaultTitle: "Boulder Mountain Tech",
  description:
    "From bold ideas to built solutions. We turn vision into velocity with strategic consulting and intelligent automation.",
  canonical: "https://www.bouldermountaintech.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.bouldermountaintech.com",
    site_name: "Boulder Mountain Tech",
    title: "Boulder Mountain Tech",
    description:
      "From bold ideas to built solutions. We turn vision into velocity with strategic consulting and intelligent automation.",
    images: [
      {
        url: "https://www.bouldermountaintech.com/assets/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Boulder Mountain Tech Open Graph Image",
        type: "image/png",
      },
    ],
  },
  twitter: {
    handle: "@BoulderMountainTech",
    site: "@BoulderMountainTech",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "business consulting, automation strategy, growth systems, Boulder Mountain Tech, AI integration, enterprise consulting, scalable systems",
    },
    {
      name: "author",
      content: "Boulder Mountain Tech",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
  ],
};

export default SEO;