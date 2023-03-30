import type { AppProps } from "next/app";
import "../styles/global/reset.scss";
import "../styles/global/global.scss";

import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";
import { appWithTranslation } from "next-i18next";
function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation("langs");
  return (
    <>
      <NextSeo
        title={t("title")!}
        description={t("description")!}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://www.url.ie/",
          siteName: "InFox",
        }}
        twitter={{
          handle: "@InFox",
          site: "@InFox",
          cardType: "summary_large_image",
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
export default appWithTranslation(App);
