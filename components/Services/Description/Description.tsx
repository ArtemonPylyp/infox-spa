import React from "react";
import styles from "../Description/Description.module.scss";
type Description = {
  children: React.ReactNode;
};
export const Description: React.FC<Description> = ({ children }) => {
  return <div className={styles.Description}>{children}</div>;
};
