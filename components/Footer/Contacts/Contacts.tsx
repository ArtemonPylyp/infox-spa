import styles from "./Contacts.module.scss";
import Email from "/images/footer/message.svg";
import Phone from "/images/footer/mobile.svg";
import Location from "/images/footer/location.svg";
import { Item } from "./Item/Item";
import { Data } from "./Item/Item";
import { useTranslation } from "next-i18next";

export const Contacts = () => {
  const { t } = useTranslation("footer");

  const itemsArray: Data[] = [
    {
      Img: Email,
      title: t("reachUs.support"),
      description: "infoxukraine@gmail.com",
    },
    {
      Img: Phone,
      title: t("reachUs.general"),
      description: "+(380) 67 612 16 62 ",
    },
    {
      Img: Location,
      title: t("reachUs.ukraineOffice"),
      description: t("address"),
    },
  ];
  return (
    <div className={styles.Contacts}>
      <div className={styles.Contacts__Title}>{t("reachUs.title")}</div>

      <div className={styles.Contacts__Items}>
        {itemsArray.map((value, index) => (
          <Item data={value} key={index} />
        ))}
      </div>
    </div>
  );
};
