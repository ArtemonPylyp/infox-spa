import React, { useState } from "react";
import styles from "../ButtonNavigation/ButtonNavigation.module.scss";
import { Button } from "./Button/Button";
interface ButtonNavigation {
  children: React.ReactNode;
}
export const ButtonNavigation: React.FC<ButtonNavigation> = ({ children }) => {
  return <div className={styles.buttonsNav}>{children}</div>;
};
