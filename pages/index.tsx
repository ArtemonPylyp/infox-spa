import React, { Suspense } from "react";
import { Background } from "@/components/Background/Background";
import { Services } from "@/components/Services/Services";
import { Hero } from "@/components/Hero/Hero";
import { Technologies } from "@/components/Technologies/Technologies";
import Navigation from "@/layouts/Navigation";
import Head from "next/head";
import { Features } from "@/components/Features/Features";
import { Decision } from "@/components/Decision/Decision";
import { Reviews } from "@/components/Reviews/Reviews";
import { Prices } from "@/components/Prices/Prices";
import { Footer } from "@/components/Footer/Footer";
import { useState } from "react";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Form } from "@/components/Form/Form";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import { Context } from "@/src/Context";

import "../i18n";
import { Sections } from "../i18n";

// export const getStaticProps: GetStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale as string)),
//   },
//   revalidate: 10,
// });

// const getPathSlugs = () => {
//   // We fetched locales from our API once at build time
//   return ["de", "en", "uk", "ru"].map((locale) => ({
//     params: {
//       locale,
//     },
//   }));
// };

export async function getStaticProps({ params }: any) {
  return {
    props: {
      ...params,
    },
  };
}

export default function Main() {
  const [open, setOpen] = useState(false);
  const setClose = () => setOpen((prev) => !prev);
  const { t } = useTranslation(Sections.Langs);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Head>
        <link rel="alternative" hrefLang="en" href="http://localhost:3000/" />
        <link rel="alternative" hrefLang="uk" href="http://localhost:3000/uk" />
        <meta name="keywords" content={t("keys")!} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/apple-touch-icon.png"
        />
      </Head>
      <Background>
        <Context.Provider value={setClose}>
          <Navigation>
            <Hero />
            <Technologies />
            <Services />
            <Features />
            <Decision />
            <Prices />

            <Reviews />
            <Footer />
            {open && <Form onClose={setClose} />}
          </Navigation>
        </Context.Provider>
      </Background>
    </Suspense>
  );
}
