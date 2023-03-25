import React from "react";
import styles from "../SubTitle/SubTitle.module.scss";
type SubTitle = {
  children: React.ReactNode;
};
export const SubTitle: React.FC<SubTitle> = ({ children }) => {
  return <div className={styles.SubTitle}>{children}</div>;
};
