import styles from "../Pointer/Pointer.module.scss";
import Point from "/images/decision/decision.svg";

import { useState } from "react";
export type PointerProps = {
  title: string;
  primary?: boolean;
};

export const Pointer: React.FC<PointerProps> = ({ title, primary = false }) => {
  const [state, setState] = useState(primary);
  return (
    <div className={styles.pointer}>
      <Point className={styles.icon} alt="pointer" />
      {state ? (
        <div className={styles.title}>{title}</div>
      ) : (
        <div className={styles.title_p}>{title}</div>
      )}
    </div>
  );
};
