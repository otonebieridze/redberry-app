import styles from "./Resume.module.css";

import Logo12 from "../../../../assets/images/LOGO-12.png";
import PhoneIcon from "../../../../assets/images/phone-icon.png";
import EmailIcon from "../../../../assets/images/email-icon.png";

export default function Resume({
  name,
  surname,
  aboutYou,
  email,
  phone,
  imageSrc,
  position,
  employer,
  positionStartDate,
  positionEndDate,
  positionDescription,
  college,
  grade,
  collegeEndDate,
  educationDescription,

  currentResumeStage,
}) {
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

      {position !== "" ||
      employer !== "" ||
      positionDescription !== "" ||
      positionStartDate !== "" ||
      positionEndDate !== "" ? (
        <div className={styles["line-1"]} />
      ) : null}

      <p className={styles["resume-experience-title"]}>{`${
        position !== "" ||
        employer !== "" ||
        positionDescription !== "" ||
        positionStartDate !== "" ||
        positionEndDate !== ""
          ? "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"
          : ""
      }`}</p>
      <p className={styles["position-employer-p"]}>
        {`${position} ${employer}`}
      </p>
      <p className={styles["position-date"]}>
        {positionStartDate} {positionEndDate}
      </p>
      <p className={styles["position-description-text"]}>
        {positionDescription}
      </p>

      {college !== "" ||
      grade !== "" ||
      collegeEndDate !== "" ||
      educationDescription !== "" ? (
        <div className={styles["line-2"]} />
      ) : null}

      {college !== "" ||
      grade !== "" ||
      collegeEndDate !== "" ||
      educationDescription !== "" ? (
        <p className={styles["resume-education-title"]}>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</p>
      ) : null}

      <p className={styles["college-grade-p"]}>
        {college} {grade}
      </p>
      <p className={styles["college-end-date"]}>{collegeEndDate}</p>
      <p className={styles["education-description-text"]}>
        {educationDescription}
      </p>

      <img className={styles["logo12"]} src={Logo12} alt="logo12" />
    </div>
  );
}
