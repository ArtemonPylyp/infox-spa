import clsx, { ClassValue } from "clsx";

import { useRouter } from "next/router";
import styles from "./LanguageSwitcher.module.scss";

export type LanguageSwitcherProps = {
  className?: ClassValue | ClassValue[];
};
export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className,
}) => {
  const { locale, push } = useRouter();

  const handleClick = (l: string) => () => {
    push("/", undefined, { locale: l });
  };

  return (
    <div className={clsx(styles.LanguageSwitcher, className)}>
      <button
        onClick={handleClick("en")}
        className={clsx(
          styles.LanguageSwitcher__ENG,
          locale === "en" && styles["LanguageSwitcher__Focus"]
        )}
      >
        ENG
      </button>
      <button
        onClick={handleClick("uk")}
        className={clsx(
          styles.LanguageSwitcher__UKR,
          locale === "uk" && styles["LanguageSwitcher__Focus"]
        )}
      >
        UKR
      </button>
    </div>
  );
};
