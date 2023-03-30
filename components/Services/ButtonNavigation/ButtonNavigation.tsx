import styles from "../ButtonNavigation/ButtonNavigation.module.scss";

interface ButtonNavigation {
  children: React.ReactNode;
}
export const ButtonNavigation: React.FC<ButtonNavigation> = ({ children }) => {
  return <div className={styles.buttonsNav}>{children}</div>;
};
