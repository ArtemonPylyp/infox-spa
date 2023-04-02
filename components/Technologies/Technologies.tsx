import styles from "../Technologies/Technologies.module.scss";

import { IconsGrid } from "./IconsGrid/IconsGrid";

import { useTranslation } from "next-i18next";

import { Anim } from "./Animation/Anim";

export const Technologies: React.FC = () => {
  const { t } = useTranslation("technologies");
  return (
    <section id="about" className={styles.technologies}>
      <div className={styles.fistBlock}>
        <h2 className={styles.title}>{t("title")}</h2>
        <IconsGrid />
      </div>
      <div className={styles.secondBlock}>
        {/* <Animation /> */}
        <Anim />
      </div>
    </section>
  );
};
