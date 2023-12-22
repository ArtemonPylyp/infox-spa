
import styles from "./Success.module.scss";
import SuccessIcon from '../../images/forms/success.svg'
import { useTranslation } from "next-i18next";

interface SuccessProps {
  show: boolean;
}

export const Success: React.FC<SuccessProps> = ({show}) => {
      const { t } = useTranslation("form");
 

    return (
        <>
            {show &&
                
        <div className={styles.Success}>
             <span className={styles.Success__LeftTop}></span>
      <span className={styles.Success__LeftBottom}></span>
      <span className={styles.Success__RightTop}></span>
            <span className={styles.Success__RightBottom}></span>
            
            <div className={styles.Success__Block}>
                <SuccessIcon />
                
                <div className={ styles.Success__Title}>{t("success")}</div>
            </div>
            
       </div> 
            }
        </>
    )
}
 
