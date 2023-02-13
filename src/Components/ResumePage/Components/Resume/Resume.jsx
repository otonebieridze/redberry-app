import styles from "./Resume.module.css";

import Logo12 from "../../../../assets/images/LOGO-12.png";
import PhoneIcon from "../../../../assets/images/phone-icon.png";
import EmailIcon from "../../../../assets/images/email-icon.png";

export default function Resume({
  name,
  surname,
  about_me,
  email,
  phone_number,
  image,

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
          style={{ display: phone_number === "" ? "none" : "inherit" }}
        >
          <img
            className={styles["phone-icon"]}
            src={PhoneIcon}
            alt="email-icon"
          />
          <span className={styles["resume-phone"]}>{phone_number}</span>
        </p>
        <p
          className={styles["resume-about-you-title"]}
          style={{ visibility: about_me === "" ? "hidden" : "visible" }}
        >
          ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ
        </p>
        <p className={styles["resume-about-you-text"]}>{about_me}</p>
        {image === "" ? null : (
          <img className={styles["client-image"]} src={image} alt="image" />
        )}
        {experiences[0].position !== "" ||
        experiences[0].employer !== "" ||
        experiences[0].description !== "" ||
        experiences[0].start_date !== "" ||
        experiences[0].due_date !== "" ? (
          <div className={styles["line-1"]} />
        ) : null}
      </div>

      {experiences.map((arr, index) => {
        return (
          <div key={index} className={styles["resume-experience"]}>
            <p className={styles["resume-experience-title"]}>{`${
              arr.position !== "" ||
              arr.employer !== "" ||
              arr.description !== "" ||
              arr.start_date !== "" ||
              arr.due_date !== ""
                ? "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"
                : ""
            }`}</p>
            <p className={styles["position-employer-p"]}>
              {`${arr.position} ${arr.employer}`}
            </p>
            <p className={styles["position-date"]}>
              {arr.start_date} {arr.due_date}
            </p>
            <p className={styles["position-description-text"]}>
              {arr.description}
            </p>

            {(educations[0].institute !== "" && educations[0].institute !== undefined ||
            educations[0].degree !== "" && educations[0].degree !== undefined ||
            educations[0].due_date !== "" && educations[0].due_date !== undefined ||
            educations[0].description !== "" && educations[0].description !== undefined) || (
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
            {arr.institute !== "" ||
            arr.degree !== "" ||
            arr.due_date !== "" ||
            arr.description !== "" ? (
              <p className={styles["resume-education-title"]}>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</p>
            ) : null}
            <p className={styles["college-grade-p"]}>
              {arr.institute} {arr.degree}
            </p>
            <p className={styles["college-end-date"]}>
              {arr.due_date}
            </p>
            <p className={styles["education-description-text"]}>
              {arr.description}
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
