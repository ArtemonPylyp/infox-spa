import React from "react";
import styles from "../ServiceBox/ServiceBox.module.scss";

import { BoxItems } from "../BoxItems/BoxItems";
import Sales from "images/services/sales.svg";
import Recognition from "images/services/recognition.svg";
import Socials from "images/services/socials.svg";
import { SubTitle } from "../SubTitle/SubTitle";
import { Description } from "../Description/Description";

import { textArray } from "@/src/texts";
type FeatureBox = {
  subTitle: string;
  description: string;
  stateIn: number | string;
};
export const ServiceBox: React.FC<FeatureBox> = ({
  subTitle,
  description,
  stateIn,
}) => {
  const text = textArray();
  return (
    <div className={styles.Block}>
      <SubTitle>{subTitle}</SubTitle>
      <Description>{description}</Description>
      {stateIn === 1 ? (
        <BoxItems
          text={text.firstPage}
          alt=""
          imagesArray={[Sales, Recognition, Socials]}
        />
      ) : stateIn === 2 ? (
        <BoxItems
          text={text.secondPage}
          alt=""
          imagesArray={[Sales, Recognition, Socials]}
        />
      ) : stateIn === 3 ? (
        <BoxItems
          text={text.thirdPage}
          alt=""
          imagesArray={[Sales, Recognition, Socials]}
        />
      ) : (
        <BoxItems
          text={text.fourthPage}
          alt=""
          imagesArray={[Sales, Recognition, Socials]}
        />
      )}
    </div>
  );
};
