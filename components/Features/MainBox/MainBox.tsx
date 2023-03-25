import { FeatureItem } from "../FeatureItem/FeatureItem";
import styles from "../MainBox/MainBox.module.scss";
import Template from "/images/features/Items/templateCircle.svg";
import Integration from "/images/features/Items/seo.svg";
import { useContext } from "react";
import { Context } from "@/src/Context";
import { useTranslation } from "react-i18next";
import { Sections } from "@/i18n";
export const MainBox: React.FC = () => {
  const close = useContext(Context);
  const { t } = useTranslation(Sections.Features);

  return (
    <div className={styles.mainBox}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>{t("title")}</h2>
        <div className={styles.description}>
          {t("description")}
          <br />
          <span className={styles.span}>{t("span")}</span>
        </div>
      </div>
      <div className={styles.itemsBlock}>
        <div className={styles.itemBox}>
          <FeatureItem
            title={t("firstBox.firstItem.title")}
            description={t("firstBox.firstItem.description")}
            Img={Template}
          />
          <FeatureItem
            title={t("firstBox.secondItem.title")}
            description={t("firstBox.secondItem.description")}
            Img={Integration}
          />
        </div>
        <div onClick={close} className={styles.buttonBlock}>
          <button className={styles.button}>{t("button")}</button>
        </div>
      </div>
    </div>
  );
};
