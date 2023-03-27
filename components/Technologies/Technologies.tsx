import styles from "../Technologies/Technologies.module.scss";
import Image from "next/image";
import { IconsGrid } from "./IconsGrid/IconsGrid";
import Dots from "/images/hero/Dots.svg";
import animation from "/images/technologies/animation.png";
import { useTranslation } from "react-i18next";
import { Sections } from "@/i18n";
import { Animation } from "./Animation/Animation";
export const Technologies: React.FC = () => {
  const { t } = useTranslation(Sections.Technologies);
  return (
    <section id="about" className={styles.technologies}>
      <div className={styles.fistBlock}>
        <h2 className={styles.title}>{t("title")}</h2>
        <IconsGrid />
      </div>
      <div className={styles.secondBlock}>
        <Animation />
      </div>
    </section>
  );
};
