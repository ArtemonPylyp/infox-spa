import { useContext, useMemo, useState } from "react";
import styles from "../Item/Item.module.scss";
import { Pointer } from "../Pointer/Pointer";

import { Divider } from "@/components/Footer/Divider/Divider";
import { ClassValue } from "clsx";
import { Context } from "@/src/Context";
import { useTranslation } from "react-i18next";
import { Sections } from "@/i18n";

export type ItemProps = {
  title: string;
  primary?: boolean;
  items: string[];
  description: string;
  price: string;
};

export const Item: React.FC<ItemProps> = ({
  primary = false,
  title,
  items,
  description,
  price,
}) => {
  const [state, setState] = useState(primary);
  const close = useContext(Context);
  const { t } = useTranslation(Sections.Prices);

  return (
    <>
      {state ? (
        <div className={styles.Item_p}>
          <div className={styles.TextBlock}>
            <div className={styles.Price}>
              <p className={styles.PriceValue_p}>{price}</p>
              <span className={styles.PriceSpan_p}>{t("perDesign")}</span>
            </div>
            <div className={styles.PriceTitle}>
              <p className={styles.Title_p}>{title}</p>
              <p className={styles.Description_p}>{description}</p>
            </div>
            <Divider />
          </div>
          <div className={styles.ItemsList}>
            {items.map((value, index) => (
              <Pointer primary key={index} title={value} />
            ))}
          </div>
          <div onClick={close} className={styles.ButtonBlock_p}>
            <button className={styles.Button_p}>{t("button")}</button>
          </div>
        </div>
      ) : (
        <div className={styles.Item}>
          <div className={styles.TextBlock}>
            <div className={styles.Price}>
              <p className={styles.PriceValue}>{price}</p>
              <span className={styles.PriceSpan}>{t("perDesign")}</span>
            </div>
            <div className={styles.PriceTitle}>
              <p className={styles.Title}>{title} </p>
              <p className={styles.Description}>{description}</p>
            </div>
            <Divider />
          </div>
          <div className={styles.ItemsList}>
            {items.map((value, index) => (
              <Pointer key={index} title={value} />
            ))}
          </div>
          <div onClick={close} className={styles.ButtonBlock}>
            <button className={styles.Button}>{t("button")}</button>
          </div>
        </div>
      )}
    </>
  );
};
