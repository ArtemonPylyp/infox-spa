import styles from "./Socials.module.scss";

import Instagram from "/images/footer/instagram.svg";
import Facebook from "/images/footer/facebook.svg";
import Twitter from "/images/footer/twiter.svg";
import Telegram from "/images/footer/telegram.svg";

import { useTranslation } from "next-i18next";

const SocialsArray: any[] = [
  {
    Icon: Instagram,
    href: "https://instagram.com/infox.ukraine?igshid=YmMyMTA2M2Y=",
    name: "InstagramIcon",
  },
  {
    Icon: Facebook,
    href: "",
    name: "FacebookIcon",
  },
  {
    Icon: Twitter,
    href: "https://twitter.com/infox_ukraine/",
    name: "TwitterIcon",
  },
  {
    Icon: Telegram,
    href: "https://t.me/Artem_pods",
    name: "TelegramIcon",
  },
];

export const Socials: React.FC = () => {
  const { t } = useTranslation("footer");
  return (
    <div className={styles.Socials}>
      <div className={styles.Socials__Title}>{t("description")}</div>

      <ul className={styles.Socials__List}>
        {SocialsArray.map(({ Icon, href, name, index }) => (
          <li key={index}>
            <a
              href={href}
              target="_blank"
              aria-label={name}
              className={styles.Socials__BlockIcon}
            >
              <Icon className={styles.Socials__Icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
