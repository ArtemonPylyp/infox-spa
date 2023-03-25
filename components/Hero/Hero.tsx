//import MainCat from "/images/hero/logo.svg";
import Cat from "images/hero/cat.svg";
import MainCat from "/images/hero/logo4.svg";
import styles from "../Hero/Hero.module.scss";

import Arrow from "/images/hero/Arrow.svg";
import { Particles } from "../Particle/Particles";
import { ArrowScroll } from "./ArrowScroll/ArrowScroll";
import { useContext, useState } from "react";
import { Form } from "../Form/Form";
import { Context } from "../../src/Context";
import { useTranslation } from "react-i18next";
import { Sections } from "@/i18n";

export const Hero: React.FC = () => {
  const { t } = useTranslation(Sections.Home);
  const close = useContext(Context);
  return (
    <main id="home" className={styles.main}>
      <Particles id="particles" />

      <div className={styles.textBlock}>
        <h1 className={styles.title}>MAXIMIZE YOUR IT INVESTMENT</h1>

        <p className={styles.description}>{t("main.description")}</p>

        <div className={styles.form}>
          <div className={styles.buttonBlock}>
            <a href="#about" className={styles.buttonForm}>
              {t("buttons.formButton")}
            </a>

            <a href="#about">
              <ArrowScroll />
            </a>

            <a href="#price" className={styles.buttonPrices}>
              {t("buttons.priceButton")}
              <Arrow className={styles.arrow} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
