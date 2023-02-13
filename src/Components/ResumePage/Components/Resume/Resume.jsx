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

  experiences,
  educations,
}) {
  return (
    <div className={styles["resume"]}>
      <div className={styles["resume-personal-info"]}>
        <p className={styles["resume-name-surname"]}>
          {name} {surname}
        </p>
        <p
          className={styles["email-p"]}
          style={{ display: email === "" ? "none" : "inherit" }}
        >
          <img
            className={styles["email-icon"]}
            src={EmailIcon}
            alt="email-icon"
          />
          <span className={styles["resume-email"]}>{email}</span>
        </p>
        <p
          className={styles["phone-p"]}
          style={{ display: phone === "" ? "none" : "inherit" }}
        >
          <img
            className={styles["phone-icon"]}
            src={PhoneIcon}
            alt="email-icon"
          />
          <span className={styles["resume-phone"]}>{phone}</span>
        </p>
        <p
          className={styles["resume-about-you-title"]}
          style={{ visibility: aboutYou === "" ? "hidden" : "visible" }}
        >
          ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ
        </p>
        <p className={styles["resume-about-you-text"]}>{aboutYou}</p>
        {imageSrc === "" ? null : (
          <img className={styles["client-image"]} src={imageSrc} alt="image" />
        )}
        {experiences[0].position !== "" ||
        experiences[0].employer !== "" ||
        experiences[0].positionDescription !== "" ||
        experiences[0].positionStartDate !== "" ||
        experiences[0].positionEndDate !== "" ? (
          <div className={styles["line-1"]} />
        ) : null}
      </div>

      {experiences.map((arr, index) => {
        return (
          <div key={index} className={styles["resume-experience"]}>
            <p className={styles["resume-experience-title"]}>{`${
              arr.position !== "" ||
              arr.employer !== "" ||
              arr.positionDescription !== "" ||
              arr.positionStartDate !== "" ||
              arr.positionEndDate !== ""
                ? "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"
                : ""
            }`}</p>
            <p className={styles["position-employer-p"]}>
              {`${arr.position} ${arr.employer}`}
            </p>
            <p className={styles["position-date"]}>
              {arr.positionStartDate} {arr.positionEndDate}
            </p>
            <p className={styles["position-description-text"]}>
              {arr.positionDescription}
            </p>

            {(educations[0].college !== "" && educations[0].college !== undefined ||
            educations[0].grade !== "" && educations[0].college !== undefined ||
            educations[0].collegeEndDate !== "" && educations[0].college !== undefined ||
            educations[0].educationDescription !== "" && educations[0].college !== undefined) || (
              index + 1 < experiences.length
            ) ? (
              <div className={styles["line-2"]} />
            ) : null}
          </div>
        )
      })}

      {educations.map((arr, index) => {
        return (
          <div key={index} className={styles["resume-educations"]}>
            {arr.college !== "" ||
            arr.grade !== "" ||
            arr.collegeEndDate !== "" ||
            arr.educationDescription !== "" ? (
              <p className={styles["resume-education-title"]}>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</p>
            ) : null}
            <p className={styles["college-grade-p"]}>
              {arr.college} {arr.grade}
            </p>
            <p className={styles["college-end-date"]}>
              {arr.collegeEndDate}
            </p>
            <p className={styles["education-description-text"]}>
              {arr.educationDescription}
            </p>

            {index + 1 < educations.length ? (
              <div className={styles["line-2"]} />
            ) : null}
          </div>
        )
      })}

      <img className={styles["logo12"]} src={Logo12} alt="logo12" />
    </div>
  );
}
