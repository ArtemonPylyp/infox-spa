/**
 * @type {import('next').NextConfig}
 */

const { i18n } = require("./next-i18next.config");

const path = require("path");
const nextConfig = {
  // exportPathMap: async function () {
  //   return {
  //     "/": { page: "/" },
  //     "/uk": { page: "/uk" },
  //   };
  // },
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  reactStrictMode: true,
  i18n,
  concurrentFeatures: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
