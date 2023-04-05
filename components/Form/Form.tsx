import clsx, { ClassValue } from "clsx";
import CloseIcon from "/images/hero/MenuClose.svg";
import React, { useState } from "react";
import styles from "./Form.module.scss";
import { useTranslation } from "next-i18next";

export type FormProps = {
  className?: ClassValue | ClassValue[];
  onClose: () => void;
};

export const Form: React.FC<FormProps> = ({ className, onClose }) => {
  const { t } = useTranslation("form");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const data = {
      name,
      email,
      phone,
      company,
    };

    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    });

    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="popUpForm"
      className={clsx(styles.Form, className)}
      method="POST"
      action=""
    >
      <span className={styles.Form__LeftTop}></span>
      <span className={styles.Form__LeftBottom}></span>
      <span className={styles.Form__RightTop}></span>
      <span className={styles.Form__RightBottom}></span>

      <CloseIcon onClick={onClose} className={styles.Form__CloseIcon} />

      <div className={styles.Form__Title}>{t("title")}</div>

      <div className={styles.Form__InputBox}>
        <input
          id="firstName"
          required
          name="firstName"
          className={styles.Form__Input}
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="name"
        />

        <label
          htmlFor="firstName"
          className={clsx(styles.Form__Label, className)}
        >
          {t("name")}
        </label>
      </div>

      <div className={styles.Form__InputBox}>
        <input
          name="email"
          className={styles.Form__InputEmail}
          type="text"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
        />

        <label htmlFor="email" className={styles.Form__Label}>
          Email
        </label>
      </div>

      <div className={styles.Form__InputBox}>
        <input
          name="phone"
          className={styles.Form__Input}
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="phone"
        />

        <label htmlFor="phone" className={styles.Form__Label}>
          {t("phone")}
        </label>
      </div>

      <div className={styles.Form__InputBox}>
        <input
          name="company"
          className={styles.Form__Input}
          type="text"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          placeholder="company"
        />

        <label htmlFor="company" className={styles.Form__Label}>
          {t("company")}
        </label>
      </div>

      <button className={styles.Form__Button} type="submit">
        {t("submit")}
      </button>
    </form>
  );
};
