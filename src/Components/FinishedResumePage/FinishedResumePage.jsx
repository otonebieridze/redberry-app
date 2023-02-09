import { useState } from "react";
import styles from "./FinishedResumePage.module.css";
import Vector from "../../assets/images/Vector.png";
import Logo12 from "../../assets/images/LOGO-12.png";
import PhoneIcon from "../../assets/images/phone-icon.png";
import EmailIcon from "../../assets/images/email-icon.png";
import CloseVector from "../../assets/images/Close-Vector.png";

export default function FinishedResumePage({ setCurrentPage }) {
  const [messageIsVisible, setMessageIsVisible] = useState(true);

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
        <p className={styles["resume-name-surname"]}>
          {JSON.parse(localStorage.getItem("formData"))?.name}{" "}
          {JSON.parse(localStorage.getItem("formData"))?.surname}
        </p>

        <p
          style={{
            display:
              JSON.parse(localStorage.getItem("formData"))?.email === ""
                ? "none"
                : "inherit",
          }}
        >
          <img
            className={styles["email-icon"]}
            src={EmailIcon}
            alt="email-icon"
          />
          <span className={styles["resume-email"]}>
            {JSON.parse(localStorage.getItem("formData"))?.email}
          </span>
        </p>
        <p
          style={{
            display:
              JSON.parse(localStorage.getItem("formData"))?.phone === ""
                ? "none"
                : "inherit",
          }}
        >
          <img
            className={styles["phone-icon"]}
            src={PhoneIcon}
            alt="email-icon"
          />
          <span className={styles["resume-phone"]}>
            {JSON.parse(localStorage.getItem("formData"))?.phone}
          </span>
        </p>

        <p className={styles["resume-about-you-title"]}>{`${
          JSON.parse(localStorage.getItem("formData"))?.aboutYou === ""
            ? ""
            : "ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ"
        }`}</p>
        <p className={styles["resume-about-you-text"]}>
          {JSON.parse(localStorage.getItem("formData"))?.aboutYou}
        </p>

        {JSON.parse(localStorage.getItem("formData"))?.imageSrc ===
        "" ? null : (
          <img
            className={styles["client-image"]}
            src={JSON.parse(localStorage.getItem("formData"))?.imageSrc}
            alt="image"
          />
        )}

        {JSON.parse(localStorage.getItem("formData"))?.position !== "" ||
        JSON.parse(localStorage.getItem("formData"))?.employer !== "" ||
        JSON.parse(localStorage.getItem("formData"))?.positionDescription !==
          "" ||
        JSON.parse(localStorage.getItem("formData"))?.positionStartDate !==
          "" ||
        JSON.parse(localStorage.getItem("formData"))?.positionEndDate !== "" ? (
          <div className={styles["line-1"]} />
        ) : null}

        <p className={styles["resume-experience-title"]}>{`${
          JSON.parse(localStorage.getItem("formData"))?.position !== "" ||
          JSON.parse(localStorage.getItem("formData"))?.employer !== "" ||
          JSON.parse(localStorage.getItem("formData"))?.positionDescription !==
            "" ||
          JSON.parse(localStorage.getItem("formData"))?.positionStartDate !==
            "" ||
          JSON.parse(localStorage.getItem("formData"))?.positionEndDate !== ""
            ? "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"
            : ""
        }`}</p>
        <p className={styles["position-employer-p"]}>
          {`${JSON.parse(localStorage.getItem("formData"))?.position} ${
            JSON.parse(localStorage.getItem("formData"))?.employer
          }`}
        </p>
        <p className={styles["position-date"]}>
          {JSON.parse(localStorage.getItem("formData"))?.positionStartDate}{" "}
          {JSON.parse(localStorage.getItem("formData"))?.positionEndDate}
        </p>
        <p className={styles["position-description-text"]}>
          {JSON.parse(localStorage.getItem("formData"))?.positionDescription}
        </p>

        {JSON.parse(localStorage.getItem("formData"))?.college !== "" ||
        JSON.parse(localStorage.getItem("formData"))?.grade !== "" ||
        JSON.parse(localStorage.getItem("formData"))?.collegeEndDate !== "" ||
        JSON.parse(localStorage.getItem("formData"))?.educationDescription !==
          "" ? (
          <div className={styles["line-2"]} />
        ) : null}

        {JSON.parse(localStorage.getItem("formData"))?.college !== "" ||
        JSON.parse(localStorage.getItem("formData"))?.grade !== "" ||
        JSON.parse(localStorage.getItem("formData"))?.collegeEndDate !== "" ||
        JSON.parse(localStorage.getItem("formData"))?.educationDescription !==
          "" ? (
          <p className={styles["resume-education-title"]}>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</p>
        ) : null}

        <p className={styles["college-grade-p"]}>
          {JSON.parse(localStorage.getItem("formData"))?.college}{" "}
          {JSON.parse(localStorage.getItem("formData"))?.grade}
        </p>
        <p className={styles["college-end-date"]}>
          {JSON.parse(localStorage.getItem("formData"))?.collegeEndDate}
        </p>
        <p className={styles["education-description-text"]}>
          {JSON.parse(localStorage.getItem("formData"))?.educationDescription}
        </p>

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
