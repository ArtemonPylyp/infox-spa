/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const newLocal = "./public/locales";
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "uk"],
    localePath: path.resolve(newLocal),
  },
};
