import styles from "./Item.module.scss";

export type Data = {
  Img: any;
  title: string;
  description: string;
};

export interface ItemProps {
  data: Data;
}

export const Item: React.FC<ItemProps> = ({ data }) => (
  <div className={styles.Item}>
    <data.Img width={20} height={20} alt="" />

    <div className={styles.Item__Description}>
      <span className={styles.Item__Span}>{data.title}</span>

      {data.description}
    </div>
  </div>
);
