import styles from "./Socials.module.scss";

import Instagram from "/images/footer/instagram.svg";
import Facebook from "/images/footer/Facebook.svg";
import Twiter from "/images/footer/twiter.svg";
import Telegram from "/images/footer/telegram.svg";

import { useTranslation } from "react-i18next";
import { Sections } from "@/i18n";

const SocialsArray: any[] = [Instagram, Facebook, Telegram, Twiter];

export const Socials: React.FC = () => {
  const { t } = useTranslation(Sections.Footer);
  return (
    <div className={styles.Socials}>
      <div className={styles.Socials__Title}>{t("description")}</div>

      <div className={styles.Socials__List}>
        {SocialsArray.map((Icon, index) => (
          <div className={styles.Socials__BlockIcon}>
            <Icon className={styles.Socials__Icon} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};
