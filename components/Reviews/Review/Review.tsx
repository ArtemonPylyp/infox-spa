import styles from "./Review.module.scss";
import Image, { StaticImageData } from "next/image";
import coma from "/images/reviews/coma.png";
import clsx, { ClassValue } from "clsx";

export type ReviewProps = {
  img: StaticImageData[];
  description: string[];
  className?: ClassValue | ClassValue[];
};

export const Review: React.FC<ReviewProps> = ({
  img,
  description,
  className,
}) => {
  return (
    <div className={clsx(styles.Review, className)}>
      <Image src={img[0]} alt="company" />
      <Image className={styles.Review__Image} src={coma} alt="coma" />
      <div className={styles.Review__Content}>
        <div className={styles.Review__Description}>{description[0]}</div>
        <div className={styles.Review__Person}>
          <Image src={img[1]} alt="person" />
          <div className={styles.Review__PersonContent}>
            <div className={styles.Review__Title}>{description[1]}</div>
            <div className={styles.Review__SubTitle}>{description[2]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
