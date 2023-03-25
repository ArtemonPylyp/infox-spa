import Image from "next/image";
import styles from "../IconsGrid/Item.module.scss";
import { useState } from "react";
export interface Item {
  Picture: any;
  title: string;
  description: string;
}
export const Item: React.FC<Item> = ({ Picture, title, description }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.mainBlock}>
      <Picture
        className={styles.image}
        alt={title}
        onMouseEnter={() => {
          setVisible(true);
        }}
        onMouseLeave={() => {
          setVisible(false);
        }}
      />

      {visible && (
        <div className={styles.description}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{description}</p>
        </div>
      )}
    </div>
  );
};
