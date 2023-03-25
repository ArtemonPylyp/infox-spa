import clsx, { ClassValue } from "clsx";
import React, { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import styles from "./LanguageSwitcher.module.scss";
import { useTranslation } from "next-i18next";
import { Sections } from "@/i18n";
import Link from "next/link";
export type LanguageSwitcherProps = {
  className?: ClassValue | ClassValue[];
};
export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className,
}) => {
  const { i18n } = useTranslation(Sections.Langs);
  const router = useRouter();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    router.push(router.pathname, undefined, { locale: lang });
  };

  return (
    <div className={clsx(styles.LanguageSwitcher, className)}>
      <button
        onClick={() => {
          changeLanguage("en");
        }}
        className={clsx(
          styles.LanguageSwitcher__ENG,
          i18n.language === "en" && styles["LanguageSwitcher__Focus"]
        )}
      >
        ENG
      </button>
      <button
        onClick={() => {
          changeLanguage("uk");
        }}
        className={clsx(
          styles.LanguageSwitcher__UKR,
          i18n.language === "uk" && styles["LanguageSwitcher__Focus"]
        )}
      >
        UKR
      </button>
    </div>
  );
};
