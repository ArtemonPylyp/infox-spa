import { ButtonNavigation } from "./ButtonNavigation/ButtonNavigation";
import styles from "../Services/Services.module.scss";
import { ServiceBox } from "./ServiceBox/ServiceBox";
import { useState } from "react";
import { Button } from "./ButtonNavigation/Button/Button";
import { useTranslation } from "next-i18next";

export const Services: React.FC = () => {
  const { t } = useTranslation("services");
  const [state, setState] = useState(1);
  return (
    <section id="services" className={styles.features}>
      <h2 className={styles.title}>{t("title")}</h2>
      <ButtonNavigation>
        <Button
          id="1"
          onClick={() => {
            setState(1);
          }}
          title={t("buttons.website")}
          defaultActive
        />
        <Button
          id="2"
          onClick={() => {
            setState(2);
          }}
          title={t("buttons.spa")}
        />
        <Button
          id="3"
          onClick={() => {
            setState(3);
          }}
          title={t("buttons.applications")}
        />
        <Button
          id="4"
          onClick={() => {
            setState(4);
          }}
          title={t("buttons.design")}
        />
      </ButtonNavigation>
      {state === 1 ? (
        <ServiceBox
          stateIn={state}
          subTitle={t("subtitles.website")}
          description={t("descriptions.website")}
        />
      ) : state === 2 ? (
        <ServiceBox
          stateIn={state}
          subTitle={t("subtitles.spa")}
          description={t("descriptions.spa")}
        />
      ) : state === 3 ? (
        <ServiceBox
          stateIn={state}
          subTitle={t("subtitles.applications")}
          description={t("descriptions.applications")}
        />
      ) : (
        <ServiceBox
          stateIn={state}
          subTitle={t("subtitles.design")}
          description={t("descriptions.design")}
        />
      )}
    </section>
  );
};
