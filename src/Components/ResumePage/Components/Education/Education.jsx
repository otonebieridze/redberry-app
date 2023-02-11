import styles from "./Education.module.css";
import Vector from "../../../../assets/images/Vector.png";
import ErrorVector from "../../../../assets/images/Error-Vector.png";
import CorrectVector from "../../../../assets/images/Correct-Vector.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Education({
  formData,
  setFormData,
  setCurrentPage,
  setCurrentResumeStage,
}) {
  const [optionsData, setOptionsData] = useState([])
  useEffect(() => {
    axios.get("https://resume.redberryinternship.ge/api/degrees").then(res => {
      setOptionsData(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const [errorInputs, setErrorInputs] = useState(
    JSON.parse(localStorage.getItem("errorInputsEducation")) || []
  );
  const [errorsArray, setErrorsArray] = useState(
    JSON.parse(localStorage.getItem("errorsArrayEducation")) || [
      "college",
      "grade",
      "collegeEndDate",
      "educationDescription",
    ]
  );
  const [isChanged, setIsChanged] = useState(
    JSON.parse(localStorage.getItem("isChangedEducation")) || false
  );

  const handleInputChange = (e, inputName) => {
    if (inputName === "college") {
      setFormData({ ...formData, college: e.target.value });
      if (e.target.value.length >= 2) {
        setErrorInputs((prev) => prev.filter((item) => item !== "college"));
        setErrorsArray((prev) => prev.filter((item) => item !== "college"));
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, college: e.target.value })
        );
        localStorage.setItem(
          "errorInputsEducation",
          JSON.stringify(errorInputs.filter((item) => item !== "college"))
        );
        localStorage.setItem(
          "errorsArrayEducation",
          JSON.stringify(errorsArray.filter((item) => item !== "college"))
        );
      } else {
        setErrorInputs((prev) => [...prev, "college"]);
        setErrorsArray((prev) => [...prev, "college"]);
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, college: e.target.value })
        );
        localStorage.setItem(
          "errorInputsEducation",
          JSON.stringify([...errorInputs, "college"])
        );
        localStorage.setItem(
          "errorsArrayEducation",
          JSON.stringify([...errorsArray, "college"])
        );
      }
    } else if (inputName === "educationDescription") {
      setFormData({ ...formData, educationDescription: e.target.value });
      if (e.target.value.length !== 0) {
        setErrorInputs((prev) =>
          prev.filter((item) => item !== "educationDescription")
        );
        setErrorsArray((prev) =>
          prev.filter((item) => item !== "educationDescription")
        );
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, educationDescription: e.target.value })
        );
        localStorage.setItem(
          "errorInputsEducation",
          JSON.stringify(
            errorInputs.filter((item) => item !== "educationDescription")
          )
        );
        localStorage.setItem(
          "errorsArrayEducation",
          JSON.stringify(
            errorsArray.filter((item) => item !== "educationDescription")
          )
        );
      } else {
        setErrorInputs((prev) => [...prev, "educationDescription"]);
        setErrorsArray((prev) => [...prev, "educationDescription"]);
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, educationDescription: e.target.value })
        );
        localStorage.setItem(
          "errorInputsEducation",
          JSON.stringify([...errorInputs, "educationDescription"])
        );
        localStorage.setItem(
          "errorsArrayEducation",
          JSON.stringify([...errorsArray, "educationDescription"])
        );
      }
    } else if (inputName === "grade") {
      setFormData({ ...formData, grade: e.target.value });
      setErrorInputs((prev) => prev.filter((item) => item !== "grade"));
      setErrorsArray((prev) => prev.filter((item) => item !== "grade"));
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, grade: e.target.value })
      );
      localStorage.setItem(
        "errorInputsEducation",
        JSON.stringify(errorInputs.filter((item) => item !== "grade"))
      );
      localStorage.setItem(
        "errorsArrayEducation",
        JSON.stringify(errorsArray.filter((item) => item !== "grade"))
      );
    } else if (inputName === "collegeEndDate") {
      setFormData({ ...formData, collegeEndDate: e.target.value });
      if (e.target.value.length === 10) {
        setErrorInputs((prev) =>
          prev.filter((item) => item !== "collegeEndDate")
        );
        setErrorsArray((prev) =>
          prev.filter((item) => item !== "collegeEndDate")
        );
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, collegeEndDate: e.target.value })
        );
        localStorage.setItem(
          "errorInputsEducation",
          JSON.stringify(
            errorInputs.filter((item) => item !== "collegeEndDate")
          )
        );
        localStorage.setItem(
          "errorsArrayEducation",
          JSON.stringify(
            errorsArray.filter((item) => item !== "collegeEndDate")
          )
        );
      } else {
        setErrorInputs((prev) => [...prev, "collegeEndDate"]);
        setErrorsArray((prev) => [...prev, "collegeEndDate"]);
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, collegeEndDate: e.target.value })
        );
        localStorage.setItem(
          "errorInputsEducation",
          JSON.stringify([...errorInputs, "collegeEndDate"])
        );
        localStorage.setItem(
          "errorsArrayEducation",
          JSON.stringify([...errorsArray, "collegeEndDate"])
        );
      }
    }
    setIsChanged(true);
    localStorage.setItem("isChangedEducation", true);
  };

  const handleBackBtnClick = (e) => {
    e.preventDefault();
    setCurrentResumeStage(2);
    localStorage.setItem("currentResumeStage", 2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.college.length < 2) {
      setErrorInputs((prev) => [...prev, "college"]);
    }
    if (formData.educationDescription === "") {
      setErrorInputs((prev) => [...prev, "educationDescription"]);
    }
    if (formData.grade === "") {
      setErrorInputs((prev) => [...prev, "grade"]);
    }
    if (formData.collegeEndDate.length !== 10) {
      setErrorInputs((prev) => [...prev, "collegeEndDate"]);
    }

    if (errorInputs.length === 0 && errorsArray.length === 0 && isChanged) {
      setCurrentPage(3)
      localStorage.setItem("currentPage", 3)
    }
  };

  return (
    <div className={styles["education-page"]}>
      <img
        className={styles.vector}
        src={Vector}
        alt="vector"
        onClick={() => {
          setCurrentPage(1);
          localStorage.clear();
        }}
      />

      <header className={styles["education-page-header"]}>
        <p className={styles["education-page-title"]}>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</p>
        <p className={styles["education-page-text"]}>3/3</p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className={styles["college-div"]}>
          <p
            className={
              errorInputs.includes("college")
                ? `${styles["college-p"]} ${styles["error-text"]}`
                : styles["college-p"]
            }
          >
            სასწავლებელი
          </p>
          <div className={styles["input-div-2"]}>
            <input
              placeholder="სასწავლებელი"
              className={
                errorInputs.includes("college")
                  ? `${styles["college-input"]} ${styles["error-input"]}`
                  : styles["college-input"]
              }
              style={
                !errorInputs.includes("college") && formData.college !== ""
                  ? { border: "1px solid #98E37E" }
                  : {}
              }
              type="text"
              value={formData.college}
              onChange={(e) => handleInputChange(e, "college")}
            />
            {!errorInputs.includes("college") && formData.college !== "" && (
              <img
                className={styles["correct-vector"]}
                src={CorrectVector}
                alt="correct-vector"
              />
            )}
            {errorInputs.includes("college") && (
              <img
                className={styles["error-vector"]}
                src={ErrorVector}
                alt="error-vector"
              />
            )}
          </div>
          <p className={styles["college-validation-text"]}>მინიმუმ 2 სიმბოლო</p>
        </div>

        <div className={styles["grade-div"]}>
          <p
            className={
              errorInputs.includes("grade")
                ? `${styles["grade-p"]} ${styles["error-text"]}`
                : styles["grade-p"]
            }
          >
            ხარისხი
          </p>
          <div className={styles["input-div"]}>
            <select
              value={formData.grade || "აირჩიეთ ხარისხი"}
              className={
                errorInputs.includes("grade")
                  ? `${styles["grade-input"]} ${styles["error-input"]}`
                  : styles["grade-input"]
              }
              style={
                !errorInputs.includes("grade") && formData.grade !== ""
                  ? { border: "1px solid #98E37E" }
                  : {}
              }
              onChange={(e) => handleInputChange(e, "grade")}
            >
              <option disabled hidden>
                აირჩიეთ ხარისხი
              </option>
              {optionsData.map((option) => {
                return (
                  <option className={styles["grade-input-option"]} key={option.id}>{option.title}</option>
                )
              })}
            </select>
            {!errorInputs.includes("grade") && formData.grade !== "" && (
              <img
                className={styles["correct-vector"]}
                style={{ right: "0px" }}
                src={CorrectVector}
                alt="correct-vector"
              />
            )}
            {errorInputs.includes("grade") && (
              <img
                className={styles["error-vector"]}
                src={ErrorVector}
                alt="error-vector"
              />
            )}
          </div>
        </div>

        <div className={styles["end-date-div"]}>
          <p
            className={
              errorInputs.includes("collegeEndDate")
                ? `${styles["end-date-p"]} ${styles["error-text"]}`
                : styles["end-date-p"]
            }
          >
            დამთავრების რიცხვი
          </p>
          <div className={styles["input-div"]}>
            <input
              className={
                errorInputs.includes("collegeEndDate")
                  ? `${styles["end-date-input"]} ${styles["error-input"]}`
                  : styles["end-date-input"]
              }
              style={
                !errorInputs.includes("collegeEndDate") &&
                formData.collegeEndDate !== ""
                  ? { border: "1px solid #98E37E" }
                  : {}
              }
              type="date"
              value={formData.collegeEndDate}
              onChange={(e) => handleInputChange(e, "collegeEndDate")}
            />
            {!errorInputs.includes("collegeEndDate") &&
              formData.collegeEndDate !== "" && (
                <img
                  className={styles["correct-vector"]}
                  style={{ right: "0px" }}
                  src={CorrectVector}
                  alt="correct-vector"
                />
              )}
            {errorInputs.includes("collegeEndDate") && (
              <img
                className={styles["error-vector"]}
                src={ErrorVector}
                alt="error-vector"
              />
            )}
          </div>
        </div>

        <div className={styles["description-div"]}>
          <p
            className={
              errorInputs.includes("educationDescription")
                ? `${styles["description-p"]} ${styles["error-text"]}`
                : styles["description-p"]
            }
          >
            აღწერა
          </p>
          <div className={styles["input-div-2"]}>
            <textarea
              placeholder="განათლების აღწერა"
              className={
                errorInputs.includes("educationDescription")
                  ? `${styles["description-textarea"]} ${styles["error-input"]}`
                  : styles["description-textarea"]
              }
              style={
                !errorInputs.includes("educationDescription") &&
                formData.educationDescription !== ""
                  ? { border: "1px solid #98E37E" }
                  : {}
              }
              value={formData.educationDescription}
              onChange={(e) => handleInputChange(e, "educationDescription")}
            ></textarea>
            {!errorInputs.includes("educationDescription") &&
              formData.educationDescription !== "" && (
                <img
                  className={styles["correct-vector"]}
                  src={CorrectVector}
                  alt="correct-vector"
                />
              )}
            {errorInputs.includes("educationDescription") && (
              <img
                className={styles["error-vector"]}
                src={ErrorVector}
                alt="error-vector"
              />
            )}
          </div>
        </div>

        <div className={styles.line}></div>

        <button
          className={styles["add-education-btn"]}
          onClick={(e) => e.preventDefault()}
        >
          სხვა სასწავლებლის დამატება
        </button>

        <button className={styles["back-btn"]} onClick={handleBackBtnClick}>
          ᲣᲙᲐᲜ
        </button>
        <button className={styles["complete-btn"]} type="submit">
          ᲓᲐᲡᲠᲣᲚᲔᲑᲐ
        </button>
      </form>
    </div>
  );
}
