import styles from "../Prices/Prices.module.scss";
import { Item } from "./Item/Item";
import { useTranslation } from "next-i18next";

export type PriceProps = {
  setClosed?: () => void;
};

export const Prices: React.FC<PriceProps> = ({ setClosed }) => {
  const { t } = useTranslation("prices");
  const firstItemsArray: string[] = [
    t("fistItem.plusses.first"),
    t("fistItem.plusses.second"),
    t("fistItem.plusses.third"),
    t("fistItem.plusses.four"),
  ];
  const secondItemsArray: string[] = [
    t("secondItem.plusses.first"),
    t("secondItem.plusses.second"),
    t("secondItem.plusses.third"),
    t("secondItem.plusses.four"),
    t("secondItem.plusses.five"),
  ];
  const thirdItemsArray: string[] = [
    t("thirdItem.plusses.first"),
    t("thirdItem.plusses.second"),
    t("thirdItem.plusses.third"),
  ];
  return (
    <section id="price" className={styles.prices}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>{t("title")}</h2>
        <div className={styles.description}>{t("description")}</div>
      </div>
      <div className={styles.items}>
        <Item
          price="$299"
          description={t("fistItem.description")}
          items={firstItemsArray}
          title={t("fistItem.title")}
        />
        <Item
          price="$699"
          description={t("secondItem.description")}
          items={secondItemsArray}
          title={t("secondItem.title")}
          primary
        />
        <Item
          price="$.....?"
          description={t("thirdItem.description")}
          items={thirdItemsArray}
          title={t("thirdItem.title")}
        />
      </div>
    </section>
  );
};
