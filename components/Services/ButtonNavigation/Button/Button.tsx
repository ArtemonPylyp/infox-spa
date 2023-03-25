import { useState } from "react";
import styles from "../Button/Button.module.scss";
import clsx from "clsx";
interface Button {
  title: string;
  onClick: () => void;
  defaultActive?: boolean;
  id: string;
}
export const Button: React.FC<Button> = ({ title, onClick }) => {
  return (
    <button
      defaultChecked
      onClick={() => {
        onClick();
        document.addEventListener("click", (event: any) => {
          if (event.target!.matches("button")) {
            event.target!.focus();
          }
        });
      }}
      className={clsx(styles.button)}

      // defaultActive ? styles.default :
    >
      {title}
    </button>
  );
};
