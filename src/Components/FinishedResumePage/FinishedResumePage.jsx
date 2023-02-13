import { useState, useEffect } from "react";
import styles from "./FinishedResumePage.module.css";
import Vector from "../../assets/images/Vector.png";
import Logo12 from "../../assets/images/LOGO-12.png";
import PhoneIcon from "../../assets/images/phone-icon.png";
import EmailIcon from "../../assets/images/email-icon.png";
import CloseVector from "../../assets/images/Close-Vector.png";

export default function FinishedResumePage({ setCurrentPage }) {
  const [messageIsVisible, setMessageIsVisible] = useState(true);
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("formData")) || [])

  useEffect(() => {
    setFormData(JSON.parse(localStorage.getItem("formData")) || [])
  }, [])

  return (
    <div className={styles["finished-resume"]}>
      <img
        className={styles.vector}
        src={Vector}
        alt="vector"
        onClick={() => {
          setCurrentPage(1);
          localStorage.clear();
        }}
      />

      <div className={styles["resume"]}>
      <div className={styles["resume-personal-info"]}>
        <p className={styles["resume-name-surname"]}>
          {formData.name} {formData.surname}
        </p>
        <p
          className={styles["email-p"]}
          style={{ display: formData.email === "" ? "none" : "inherit" }}
        >
          <img
            className={styles["email-icon"]}
            src={EmailIcon}
            alt="email-icon"
          />
          <span className={styles["resume-email"]}>{formData.email}</span>
        </p>
        <p
          className={styles["phone-p"]}
          style={{ display: formData.phone_number === "" ? "none" : "inherit" }}
        >
          <img
            className={styles["phone-icon"]}
            src={PhoneIcon}
            alt="email-icon"
          />
          <span className={styles["resume-phone"]}>{formData.phone_number}</span>
        </p>
        <p
          className={styles["resume-about-you-title"]}
          style={{ visibility: formData.about_me === "" ? "hidden" : "visible" }}
        >
          ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ
        </p>
        <p className={styles["resume-about-you-text"]}>{formData.about_me}</p>
        {formData.image === "" ? null : (
          <img className={styles["client-image"]} src={formData.image} alt="image" />
        )}
        {formData.experiences[0].position !== "" ||
        formData.experiences[0].employer !== "" ||
        formData.experiences[0].description !== "" ||
        formData.experiences[0].start_date !== "" ||
        formData.experiences[0].due_date !== "" ? (
          <div className={styles["line-1"]} />
        ) : null}
      </div>

      {formData.experiences.map((arr, index) => {
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

            {(formData.educations[0].institute !== "" && formData.educations[0].institute !== undefined ||
            formData.educations[0].degree !== "" && formData.educations[0].degree !== undefined ||
            formData.educations[0].due_date !== "" && formData.educations[0].due_date !== undefined ||
            formData.educations[0].description !== "" && formData.educations[0].description !== undefined) || (
              index + 1 < formData.experiences.length
            ) ? (
              <div className={styles["line-2"]} />
            ) : null}
          </div>
        )
      })}

      {formData.educations.map((arr, index) => {
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

            {index + 1 < formData.educations.length ? (
              <div className={styles["line-2"]} />
            ) : null}
          </div>
        )
      })}

      <img className={styles["logo12"]} src={Logo12} alt="logo12" />
    </div>

      <div
        className={
          messageIsVisible
            ? styles["success-message-div"]
            : styles["success-message-div-hidden"]
        }
      >
        <img
          className={styles["close-vector"]}
          src={CloseVector}
          alt="close-vector"
          onClick={() => setMessageIsVisible(false)}
        />
        <p className={styles["success-message-p"]}>
          რეზიუმე წარმატებით გაიგზავნა 🎉
        </p>
      </div>
    </div>
  );
}
