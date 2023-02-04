import styles from "./Resume.module.css";

import Logo12 from "../../../../assets/images/LOGO-12.png";
import PhoneIcon from "../../../../assets/images/phone-icon.png";
import EmailIcon from "../../../../assets/images/email-icon.png";

export default function Resume({name, surname, aboutYou, email, phone, imageSrc}) {
  return (
    <div className={styles["resume"]}>
      <p className={styles["resume-name-surname"]}>
        {name} {surname}
      </p>

      <p style={{ display: email === "" ? "none" : "inherit" }}>
        <img
          className={styles["email-icon"]}
          src={EmailIcon}
          alt="email-icon"
        />
        <span className={styles["resume-email"]}>{email}</span>
      </p>
      <p style={{ display: phone === "" ? "none" : "inherit" }}>
        <img
          className={styles["phone-icon"]}
          src={PhoneIcon}
          alt="email-icon"
        />
        <span className={styles["resume-phone"]}>{phone}</span>
      </p>

      <p className={styles["resume-about-you-title"]}>{`${
        aboutYou === "" ? "" : "ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ"
      }`}</p>
      <p className={styles["resume-about-you-text"]}>{aboutYou}</p>

      {imageSrc === "" ? null : (
        <img className={styles["client-image"]} src={imageSrc} alt="image" />
      )}

      <img className={styles["logo12"]} src={Logo12} alt="logo12" />
    </div>
  )
}
