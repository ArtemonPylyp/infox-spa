import React, { useContext } from "react";

import Logo from "/images/footer/logo2.svg";
import { LanguageSwitcher } from "./components/LanguageSwitcher/LanguageSwitcher";
import { Menu } from "./components/Menu/Menu";
import styles from "../layouts/Navigation.module.scss";

import { Context } from "@/src/Context";
import { useTranslation } from "next-i18next";

import { CompanyName } from "./components/CompanyName/CompanyName";

interface Navigation {
  children: React.ReactNode;
}

export default function Navigation({ children }: Navigation) {
  const { t } = useTranslation("navigation");

  const close = useContext(Context);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <div className={styles.company}>
            <Logo className={styles.logo} />
            <CompanyName />
          </div>
          <ul className={styles.ul}>
            <a href="#home">
              <li className={styles.item}>{t("home.title")}</li>
            </a>

            <a href="#about">
              <li className={styles.item}>{t("about.title")}</li>
            </a>

            <a href="#services">
              <li className={styles.item}>{t("services.title")}</li>
            </a>

            <a href="#contacts">
              <li className={styles.item}>{t("contacts.title")}</li>
            </a>
          </ul>
          <div className={styles.buttonGroup}>
            <div onClick={close} className={styles.buttonBlock}>
              <button className={styles.NavigationButton}>
                {t("button.title")}
              </button>
            </div>

            <Menu className={styles.menu} />

            <LanguageSwitcher />
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}
