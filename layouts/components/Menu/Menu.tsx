import React, { useState } from "react";

import styles from "./Menu.module.scss";
import clsx, { ClassValue } from "clsx";
import { MenuNavigation } from "../MenuNavigation/MenuNavigation";

export type MenuProps = {
  className?: ClassValue | ClassValue[];
  onClick?: () => void;
};
export const Menu: React.FC<MenuProps> = ({ className, onClick }) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  return (
    <div>
      <button
        id="menu-button"
        aria-label="Menu"
        onClick={() => setOpen((prev) => !prev)}
        className={clsx(styles.Menu__Icon, className)}
      >
        <span className={styles.Menu__Lines}></span>
        <span className={styles.Menu__Lines}></span>
      </button>
      <MenuNavigation visible={open} onClose={onClose} />
    </div>
  );
};
