import { TextObject } from "@/src/texts";
import styles from "../BoxItems/BoxItems.module.scss";
import { BoxItem } from "./BoxItem/BoxItem";

interface BoxItems {
  imagesArray: any[];
  text: any;
  alt: string;
}
export const BoxItems: React.FC<BoxItems> = ({ imagesArray, text, alt }) => {
  return (
    <div className={styles.boxItems}>
      <BoxItem
        className={styles.first}
        Icon={imagesArray[0]}
        text={text.one}
        alt={alt}
      />
      <BoxItem
        className={styles.second}
        Icon={imagesArray[1]}
        text={text.two}
        alt="recognition"
      />
      <BoxItem
        className={styles.third}
        Icon={imagesArray[2]}
        text={text.three}
        alt="socials"
      />
    </div>
  );
};
