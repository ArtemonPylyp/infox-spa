import { useContext } from "react";
import styles from "../Decision/Decision.module.scss";

import { Offers } from "./Offers/Offers";
import { Context } from "../../src/Context";
import { useTranslation } from "next-i18next";

export const Decision: React.FC = () => {
  const close = useContext(Context);
  const { t } = useTranslation("decision");
  return (
    <section className={styles.decision}>
      <div className={styles.inDecision}>
        <h3 className={styles.title}>{t("title")}</h3>
        <div onClick={close} className={styles.buttonBlock}>
          <button className={styles.button}>{t("button")}</button>
        </div>
        <div className={styles.offers}>
          <Offers description={t("first")} />
          <Offers description={t("second")} />
          <Offers description={t("third")} />
        </div>
      </div>
    </section>
  );
};
