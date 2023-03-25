import styles from "./Contacts.module.scss";
import Email from "/images/footer/message.svg";
import Phone from "/images/footer/mobile.svg";
import Location from "/images/footer/location.svg";
import { Item } from "./Item/Item";
import { Data } from "./Item/Item";
import { useTranslation } from "react-i18next";
import { Sections } from "@/i18n";

export const Contacts = () => {
  const { t } = useTranslation(Sections.Footer);

  const itemsArray: Data[] = [
    {
      Img: Email,
      title: t("reachUs.support"),
      description: "hello@landify.com",
    },
    {
      Img: Phone,
      title: t("reachUs.general"),
      description: "+(380) 67 612 16 62 ",
    },
    {
      Img: Location,
      title: t("reachUs.ukraineOffice"),
      description: "hello@landify.com",
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
