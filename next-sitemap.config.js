/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: "http://localhost:3000/en",
      hreflang: "en",
    },
    {
      href: "http://localhost:3000/uk",
      hreflang: "uk",
    },
  ],
};
