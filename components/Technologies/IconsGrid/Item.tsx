import styles from "../IconsGrid/Item.module.scss";
import { useState } from "react";
import CloseIcon from "/images/hero/MenuClose.svg";
export interface Item {
  Picture: any;
  title: string;
  description: string;
  onClose?: () => void;
}
export const Item: React.FC<Item> = ({ Picture, title, description }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.mainBlock}>
      <Picture
        className={styles.image}
        alt={title}
        onClick={() => {
          setVisible(true);
        }}
      />

      {visible && (
        <div className={styles.description}>
          <CloseIcon
            onClick={() => {
              setVisible(false);
            }}
            className={styles.closeIcon}
          />
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{description}</p>
        </div>
      )}
    </div>
  );
};
