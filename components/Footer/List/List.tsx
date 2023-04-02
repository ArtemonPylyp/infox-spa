import styles from "./List.module.scss";

export type ListProps = {
  title: string;
  items: string[];
};

export const List: React.FC<ListProps> = ({ title, items }) => (
  <div className={styles.List}>
    <div className={styles.List__Title}>{title}</div>

    <ul className={styles.List__Items}>
      {items.map((value, index) => (
        <li key={index} className={styles.List__Item}>
          {value}
        </li>
      ))}
    </ul>
  </div>
);
