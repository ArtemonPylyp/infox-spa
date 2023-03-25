import React from "react";

import styles from "../Background/Background.module.scss";

interface Background {
  children: React.ReactNode;
}

export const Background: React.FC<Background> = ({ children }) => {
  return (
    <>
      <div className={styles.firstCircle}></div>
      <div className={styles.transparentCircle}></div>
      <div className={styles.middleCircle}></div>

      {children}
    </>
  );
};
