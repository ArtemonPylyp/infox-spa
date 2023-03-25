import styles from "../FeatureItem/FeatureItem.module.scss";

export type FeatureItemProps = {
  Img: any;
  title: string;
  description: string;
};

export const FeatureItem: React.FC<FeatureItemProps> = ({
  Img,
  title,
  description,
}) => (
  <div className={styles.itemBox}>
    <div>
      <Img className={styles.img} />
    </div>
    <div className={styles.textBox}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.description}>{description}</div>
    </div>
  </div>
);
