import type { AppProps } from "next/app";
import "../styles/global/reset.scss";
import "../styles/global/global.scss";
import { Suspense } from "react";
import { useTranslation } from "next-i18next";
import { DefaultSeo, NextSeo } from "next-seo";
import { Sections } from "@/i18n";

export default function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation(Sections.Langs);
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
        // additionalLinkTags={
        //   { rel:'icon', type:'image/png', sizes:'32x32', href:'/public/favicon-32x32.png'}

        // }
      />

      <Component {...pageProps} />
    </>
  );
}
