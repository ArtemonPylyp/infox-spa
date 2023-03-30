import { ClassValue } from "clsx";
import clsx from "clsx";

import styles from "../BoxItem/BoxItem.module.scss";
interface BoxItem {
  Icon: any;
  text: string;
  alt: string;
  className: ClassValue | ClassValue[];
}
export const BoxItem: React.FC<BoxItem> = ({ Icon, text, alt, className }) => {
  return (
    <div className={clsx(styles.boxItem, className)}>
      <span className={styles.Span}></span>
      <span className={styles.Span2}></span>
      <span className={styles.Span3}></span>
      <span className={styles.Span4}></span>
      <div className={styles.inBox}>
        <Icon width={40} height={40} alt={alt} />
        {text}
      </div>
    </div>
  );
};
