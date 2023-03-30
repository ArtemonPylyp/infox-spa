import styles from "../Offers/Offers.module.scss";

import Decision from "/images/decision/decision.svg";

type Offers = {
  description: string;
};

export const Offers: React.FC<Offers> = ({ ...props }) => {
  return (
    <div className={styles.offers}>
      <Decision className={styles.icons} alt="decision" />

      <div className={styles.description}>{props.description}</div>
    </div>
  );
};
