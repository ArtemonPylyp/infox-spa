import styles from "./MenuNavigation.module.scss";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { Socials } from "@/components/Footer/Socials/Socials";
import CloseIcon from "/images/hero/MenuClose.svg";
import {
  useContext,
  useEffect,
  useReducer,
  useState,
  useTransition,
} from "react";
import clsx, { ClassValue } from "clsx";
import { Context } from "@/src/Context";
import { Sections } from "@/i18n";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
export type MenuNavigationProps = {
  visible: boolean;
  onClose?: () => void;
  className?: ClassValue | ClassValue[];
};

export const MenuNavigation: React.FC<MenuNavigationProps> = ({
  visible = false,
  onClose,
  className,
}) => {
  const { i18n } = useTranslation(Sections.Langs);
  const { t } = useTranslation(Sections.Navigation);

  const router = useRouter();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    router.push(router.pathname, undefined, { locale: lang });
  };
  if (!visible) return null;

  const close = useContext(Context);
  return (
    <aside className={clsx(styles.Menu, className)}>
      <CloseIcon onClick={onClose} className={styles.Menu__CloseIcon} />

      <nav className={styles.Menu__Navigation}>
        <ul className={styles.Menu__Ul}>
          <a href="#home" className={styles.Menu__Item}>
            {t("home.title")}
          </a>

          <a href="#about" className={styles.Menu__Item}>
            {t("about.title")}
          </a>

          <a href="#services" className={styles.Menu__Item}>
            {t("services.title")}
          </a>

          <a href="#contacts" className={styles.Menu__Item}>
            {t("contacts.title")}
          </a>
        </ul>
        <div className={styles.Menu__ButtonGroup}>
          <div onClick={close} className={styles.Menu__ButtonBlock}>
            <button className={styles.Menu__Button}>{t("button.click")}</button>
          </div>

          <Socials />
        </div>
        <div className={styles.Menu__LanguageSwitcher}>
          <button
            onClick={() => {
              changeLanguage("en");
            }}
            className={clsx(
              styles.Menu__LanguageSwitcher__ENG,
              i18n.language === "en" && styles["Menu__LanguageSwitcher__Focus"]
            )}
          >
            ENG
          </button>
          <button
            onClick={() => {
              changeLanguage("uk");
            }}
            className={clsx(
              styles.Menu__LanguageSwitcher__UKR,
              i18n.language === "uk" && styles["Menu__LanguageSwitcher__Focus"]
            )}
          >
            UKR
          </button>
        </div>
      </nav>
    </aside>
  );
};
