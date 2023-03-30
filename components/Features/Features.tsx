import styles from "../Features/Features.module.scss";
import { FeatureItem } from "./FeatureItem/FeatureItem";
import { MainBox } from "./MainBox/MainBox";
import { PictureBox } from "./PictureBox/PictureBox";
import Template from "/images/features/Items/templateCircle.svg";
import Agreement from "/images/features/Items/agreement.svg";
import Seo from "/images/features/Items/seo.svg";
import Support from "/images/features/Items/support.svg";
import { useTranslation } from "next-i18next";

import { useMemo } from "react";

export const Features: React.FC = () => {
  const { t } = useTranslation("features");

  const data = useMemo(
    () => [
      {
        img: Template,
        title: t("secondBox.firstItem.title"),
        description: t("secondBox.firstItem.description"),
      },
      {
        img: Agreement,
        title: t("secondBox.secondItem.title"),
        description: t("secondBox.secondItem.description"),
      },
      {
        img: Seo,
        title: t("secondBox.thirdItem.title"),
        description: t("secondBox.thirdItem.description"),
      },
      {
        img: Support,
        title: t("secondBox.fourItem.title"),
        description: t("secondBox.fourItem.description"),
      },
    ],
    [t]
  );

  return (
    <section className={styles.features}>
      <div className={styles.firstPart}>
        <PictureBox />
        <MainBox />
      </div>
      <div className={styles.SecondPart}>
        {data.map((value, index) => (
          <FeatureItem
            key={index}
            Img={value.img}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </section>
  );
};
