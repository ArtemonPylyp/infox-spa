import styles from "../Reviews/Reviews.module.scss";
import { Review } from "./Review/Review";
import Image from "next/image";

import coma from "/images/reviews/coma.png";
import first from "/images/reviews/first.png";
import second from "/images/reviews/second.png";
import third from "/images/reviews/third.png";

import firstPerson from "/images/reviews/firstPerson.png";
import secondPerson from "/images/reviews/secondPerson.png";
import thirdPerson from "/images/reviews/thirdPerson.png";

import { useTranslation } from "next-i18next";

export const Reviews: React.FC = () => {
  const { t } = useTranslation("reviews");
  const ContentArray = {
    first: {
      img: [first, firstPerson],
      description: [t("firstBox"), "Floyd Miles", "Vice President, GoPro"],
    },
    second: {
      img: [second, secondPerson],
      description: [t("secondBox"), "Jane Cooper", "CEO, Airbnb"],
    },
    third: {
      img: [third, thirdPerson],
      description: [t("thirdBox"), "Kristin Watson", "Co-Founder, BookMyShow"],
    },
  };

  return (
    <section className={styles.Reviews}>
      <Image className={styles.Reviews__Coma} src={coma} alt="coma" />
      <div className={styles.Reviews__Text}>
        <h2 className={styles.Reviews__Title}>{t("title")}</h2>
        <div className={styles.Reviews__Description}>{t("subtitle")}</div>
      </div>
      <div className={styles.Reviews__Block}>
        <Review
          className={styles.Reviews__First}
          img={ContentArray.first.img}
          description={ContentArray.first.description}
        />
        <div className={styles.Reviews__Second}>
          <Review
            className={styles.Reviews__Bigger}
            img={ContentArray.second.img}
            description={ContentArray.second.description}
          />
          <Review
            img={ContentArray.third.img}
            description={ContentArray.third.description}
          />
        </div>
      </div>
    </section>
  );
};
