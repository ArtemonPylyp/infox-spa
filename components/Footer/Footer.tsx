import styles from "./Footer.module.scss";
import Logo from "/images/footer/logo2.svg";

import { Contacts } from "./Contacts/Contacts";
import { List } from "./List/List";
import { Socials } from "./Socials/Socials";
import { Privacy } from "./Privacy/Privacy";
import { useTranslation } from "react-i18next";
import { Sections } from "@/i18n";

export const Footer: React.FC = () => {
  const { t } = useTranslation(Sections.Footer);

  const data = {
    products: {
      title: t("products.title"),
      items: [
        t("products.apps"),
        t("products.websites"),
        t("products.platforms"),
      ],
    },
    resources: {
      title: t("resources.title"),
      items: [
        t("resources.blog"),
        t("resources.prices"),
        t("resources.contactUs"),
      ],
    },
  };
  return (
    <footer id="contacts" className={styles.Footer}>
      <div className={styles.Footer__LogoBlock}>
        <Logo className={styles.Footer__Logo} alt="logo" />

        {/* <Divider /> */}
      </div>

      <div className={styles.Footer__MainSection}>
        <Contacts />

        <div className={styles.Footer__NavSection}>
          <List title={data.products.title} items={data.products.items} />

          <List title={data.resources.title} items={data.resources.items} />
        </div>

        <Socials />
      </div>

      <Privacy />
    </footer>
  );
};
