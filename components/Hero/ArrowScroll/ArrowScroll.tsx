import styles from "./ArrowScroll.module.scss";
import Arrow from "/images/hero/Arrow.svg";
export const ArrowScroll: React.FC = () => (
  <div className={styles.ArrowBlock}>
    <Arrow className={styles.ArrowBlock__Arrow} />
  </div>
);
