import Image from "next/image";
import people from "images/technologies/animation.png";

import styles from "../PictureBox/PictureBox.module.scss";
export const PictureBox: React.FC = () => {
  return (
    <div className={styles.pictureBox}>
      <Image className={styles.image} src={people} alt="people" />
    </div>
  );
};
