/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mathew-pi.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [
    "/v1",
    "/v1/*",
    "/icon",
    "/apple-icon",
    "/manifest.webmanifest",
    "/opengraph-image",
    "/portfolio/*/opengraph-image*",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/v1", "/v1/"],
      },
    ],
  },
  transform: async (config, path) => {
    const priority =
      path === "/"
        ? 1.0
        : path === "/portfolio" || path === "/about" || path === "/contact"
          ? 0.9
          : 0.8;
    const changefreq = path === "/" ? "weekly" : "monthly";
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
