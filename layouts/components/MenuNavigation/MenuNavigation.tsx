import styles from "./MenuNavigation.module.scss";

import { Socials } from "@/components/Footer/Socials/Socials";
import CloseIcon from "/images/hero/MenuClose.svg";
import { useContext } from "react";
import clsx, { ClassValue } from "clsx";
import { Context } from "@/src/Context";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

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
  const { locale, push } = useRouter();

  const handleClick = (l: string) => () => {
    push("/", undefined, { locale: l });
  };

  const { t } = useTranslation("navigation");

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
            onClick={handleClick("en")}
            className={clsx(
              styles.Menu__LanguageSwitcher__ENG,
              locale === "en" && styles["Menu__LanguageSwitcher__Focus"]
            )}
          >
            ENG
          </button>
          <button
            onClick={handleClick("uk")}
            className={clsx(
              styles.Menu__LanguageSwitcher__UKR,
              locale === "uk" && styles["Menu__LanguageSwitcher__Focus"]
            )}
          >
            UKR
          </button>
        </div>
      </nav>
    </aside>
  );
};
