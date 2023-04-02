import styles from "../IconsGrid/IconsGrid.module.scss";

import { Item } from "./Item";
import { TextFunction } from "@/src/texts";

export const IconsGrid: React.FC = () => {
  const dataTech = TextFunction();

  return (
    <div className={styles.images}>
      {dataTech.map((value, index) => (
        <Item
          Picture={value.img}
          title={value.title}
          description={value.description}
          key={index}
        />
      ))}
    </div>
  );
};
