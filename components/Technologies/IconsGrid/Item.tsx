import styles from "../IconsGrid/Item.module.scss";
import { useEffect, useState } from "react";
import CloseIcon from "/images/hero/MenuClose.svg";

export interface Item {
  Picture: any;
  title: string;
  description: string;
}

export const Item: React.FC<Item> = ({ Picture, title, description }) => {
  const [close, setClose] = useState(false);

  return (
    <div className={styles.mainBlock}>
      <Picture
        className={styles.image}
        alt={title}
        onClick={() => {
          setClose((prev) => !prev);
        }}
      />

      {close && (
        <div className={styles.description}>
          <CloseIcon
            onClick={() => setClose(false)}
            className={styles.closeIcon}
          />
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{description}</p>
        </div>
      )}
    </div>
  );
};
