import styles from "./Experience.module.css";
import Vector from "../../../../assets/images/Vector.png";
import ErrorVector from "../../../../assets/images/Error-Vector.png";
import CorrectVector from "../../../../assets/images/Correct-Vector.png";
import { useState } from "react";

export default function Experience({
  formData,
  setFormData,
  setCurrentPage,
  setCurrentResumeStage,
}) {
  const [errorInputs, setErrorInputs] = useState(
    JSON.parse(localStorage.getItem("errorInputsExperience")) || []
  );
  const [errorsArray, setErrorsArray] = useState(
    JSON.parse(localStorage.getItem("errorsArrayExperience")) || [
      "position",
      "employer",
      "positionStartDate",
      "positionEndDate",
      "positionDescription",
    ]
  );
  const [isChanged, setIsChanged] = useState(
    JSON.parse(localStorage.getItem("isChangedExperience")) || false
  );

  const handleInputChange = (e, inputName) => {
    if (inputName === "position") {
      setFormData({ ...formData, position: e.target.value });
      if (e.target.value.length >= 2) {
        setErrorInputs((prev) => prev.filter((item) => item !== "position"));
        setErrorsArray((prev) => prev.filter((item) => item !== "position"));
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, position: e.target.value })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify(errorInputs.filter((item) => item !== "position"))
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify(errorInputs.filter((item) => item !== "position"))
        );
      } else {
        setErrorInputs((prev) => [...prev, "position"]);
        setErrorsArray((prev) => [...prev, "position"]);
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, position: e.target.value })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify([...errorInputs, "position"])
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify([...errorInputs, "position"])
        );
      }
    } else if (inputName === "employer") {
      setFormData({ ...formData, employer: e.target.value });
      if (e.target.value.length >= 2) {
        setErrorInputs((prev) => prev.filter((item) => item !== "employer"));
        setErrorsArray((prev) => prev.filter((item) => item !== "employer"));
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, employer: e.target.value })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify(errorInputs.filter((item) => item !== "employer"))
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify(errorInputs.filter((item) => item !== "employer"))
        );
      } else {
        setErrorInputs((prev) => [...prev, "employer"]);
        setErrorsArray((prev) => [...prev, "employer"]);
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, employer: e.target.value })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify([...errorInputs, "employer"])
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify([...errorInputs, "employer"])
        );
      }
    } else if (inputName === "positionStartDate") {
      setFormData({ ...formData, positionStartDate: e.target.value });
      if (e.target.value.length === 10) {
        setErrorInputs((prev) =>
          prev.filter((item) => item !== "positionStartDate")
        );
        setErrorsArray((prev) =>
          prev.filter((item) => item !== "positionStartDate")
        );
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, positionStartDate: e.target.value })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify(
            errorInputs.filter((item) => item !== "positionStartDate")
          )
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify(
            errorInputs.filter((item) => item !== "positionStartDate")
          )
        );
      } else {
        setErrorInputs((prev) => [...prev, "positionStartDate"]);
        setErrorsArray((prev) => [...prev, "positionStartDate"]);
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, positionStartDate: e.target.value })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify([...errorInputs, "positionStartDate"])
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify([...errorInputs, "positionStartDate"])
        );
      }
    } else if (inputName === "positionEndDate") {
      setFormData({ ...formData, positionEndDate: e.target.value });
      if (e.target.value.length === 10) {
        setErrorInputs((prev) =>
          prev.filter((item) => item !== "positionEndDate")
        );
        setErrorsArray((prev) =>
          prev.filter((item) => item !== "positionEndDate")
        );
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, positionEndDate: e.target.value })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify(
            errorInputs.filter((item) => item !== "positionEndDate")
          )
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify(
            errorInputs.filter((item) => item !== "positionEndDate")
          )
        );
      } else {
        setErrorInputs((prev) => [...prev, "positionEndDate"]);
        setErrorsArray((prev) => [...prev, "positionEndDate"]);
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, positionEndDate: e.target.value })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify([...errorInputs, "positionEndDate"])
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify([...errorInputs, "positionEndDate"])
        );
      }
    } else if (inputName === "positionDescription") {
      setFormData({ ...formData, positionDescription: e.target.value });
      if (e.target.value.length !== 0) {
        setErrorInputs((prev) =>
          prev.filter((item) => item !== "positionDescription")
        );
        setErrorsArray((prev) =>
          prev.filter((item) => item !== "positionDescription")
        );
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, positionDescription: e.target.value })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify(
            errorInputs.filter((item) => item !== "positionDescription")
          )
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify(
            errorInputs.filter((item) => item !== "positionDescription")
          )
        );
      } else {
        setErrorInputs((prev) => [...prev, "positionDescription"]);
        setErrorsArray((prev) => [...prev, "positionDescription"]);
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, positionDescription: e.target.value })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify([...errorInputs, "positionDescription"])
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify([...errorInputs, "positionDescription"])
        );
      }
    }
    setIsChanged(true);
    localStorage.setItem("isChangedExperience", true);
  };

  const handleAddExperienceClick = (e) => {
    e.preventDefault();
    alert("meti");
  };

  const handleBackBtnClick = (e) => {
    e.preventDefault();
    setCurrentResumeStage(1);
    localStorage.setItem("currentResumeStage", 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.position.length < 2) {
      setErrorInputs((prev) => [...prev, "position"]);
    }
    if (formData.employer.length < 2) {
      setErrorInputs((prev) => [...prev, "employer"]);
    }

    if (formData.positionStartDate.length !== 10) {
      setErrorInputs((prev) => [...prev, "positionStartDate"]);
    }
    if (formData.positionEndDate.length !== 10) {
      setErrorInputs((prev) => [...prev, "positionEndDate"]);
    }

    if (formData.positionDescription.length === 0) {
      setErrorInputs((prev) => [...prev, "positionDescription"]);
    }

    if (errorInputs.length === 0 && errorsArray.length === 0 && isChanged) {
      setCurrentResumeStage(3);
      localStorage.setItem("currentResumeStage", 3);
    }
  };

  return (
    <div className={styles["experience-page"]}>
      <img
        className={styles.vector}
        src={Vector}
        alt="vector"
        onClick={() => {
          setCurrentPage(1);
          localStorage.clear();
        }}
      />

      <header className={styles["experience-page-header"]}>
        <p className={styles["experience-page-title"]}>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</p>
        <p className={styles["experience-page-text"]}>2/3</p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className={styles["position-div"]}>
          <p
            className={
              errorInputs.includes("position")
                ? `${styles["position-p"]} ${styles["error-text"]}`
                : styles["position-p"]
            }
          >
            თანამდებობა
          </p>
          <div className={styles["input-div-2"]}>
            <input
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              className={
                errorInputs.includes("position")
                  ? `${styles["position-input"]} ${styles["error-input"]}`
                  : styles["position-input"]
              }
              style={
                !errorInputs.includes("position") && formData.position !== ""
                  ? { border: "1px solid #98E37E" }
                  : {}
              }
              type="text"
              value={formData.position}
              onChange={(e) => handleInputChange(e, "position")}
            />
            {!errorInputs.includes("position") && formData.position !== "" && (
              <img
                className={styles["correct-vector"]}
                src={CorrectVector}
                alt="correct-vector"
              />
            )}
            {errorInputs.includes("position") && (
              <img
                className={styles["error-vector"]}
                src={ErrorVector}
                alt="error-vector"
              />
            )}
          </div>
          <p className={styles["position-validation-text"]}>
            მინიმუმ 2 სიმბოლო
          </p>
        </div>

        <div className={styles["employer-div"]}>
          <p
            className={
              errorInputs.includes("employer")
                ? `${styles["employer-p"]} ${styles["error-text"]}`
                : styles["employer-p"]
            }
          >
            დამსაქმებელი
          </p>
          <div className={styles["input-div-2"]}>
            <input
              placeholder="დამსაქმებელი"
              className={
                errorInputs.includes("employer")
                  ? `${styles["employer-input"]} ${styles["error-input"]}`
                  : styles["employer-input"]
              }
              style={
                !errorInputs.includes("employer") && formData.employer !== ""
                  ? { border: "1px solid #98E37E" }
                  : {}
              }
              type="text"
              value={formData.employer}
              onChange={(e) => handleInputChange(e, "employer")}
            />
            {!errorInputs.includes("employer") && formData.employer !== "" && (
              <img
                className={styles["correct-vector"]}
                src={CorrectVector}
                alt="correct-vector"
              />
            )}
            {errorInputs.includes("employer") && (
              <img
                className={styles["error-vector"]}
                src={ErrorVector}
                alt="error-vector"
              />
            )}
          </div>
          <p className={styles["employer-validation-text"]}>
            მინიმუმ 2 სიმბოლო
          </p>
        </div>

        <div className={styles["start-date-div"]}>
          <p
            className={
              errorInputs.includes("positionStartDate")
                ? `${styles["start-date-p"]} ${styles["error-text"]}`
                : styles["start-date-p"]
            }
          >
            დაწყების რიცხვი
          </p>
          <div className={styles["input-div"]}>
            <input
              className={
                errorInputs.includes("positionStartDate")
                  ? `${styles["start-date-input"]} ${styles["error-input"]}`
                  : styles["start-date-input"]
              }
              style={
                !errorInputs.includes("positionStartDate") &&
                formData.positionStartDate !== ""
                  ? { border: "1px solid #98E37E" }
                  : {}
              }
              type="date"
              value={formData.positionStartDate}
              onChange={(e) => handleInputChange(e, "positionStartDate")}
            />
            {!errorInputs.includes("positionStartDate") &&
              formData.positionStartDate !== "" && (
                <img
                  className={styles["correct-vector"]}
                  style={{ right: "0px" }}
                  src={CorrectVector}
                  alt="correct-vector"
                />
              )}
            {errorInputs.includes("positionStartDate") && (
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
              errorInputs.includes("positionEndDate")
                ? `${styles["end-date-p"]} ${styles["error-text"]}`
                : styles["end-date-p"]
            }
          >
            დამთავრების რიცხვი
          </p>
          <div className={styles["input-div"]}>
            <input
              className={
                errorInputs.includes("positionEndDate")
                  ? `${styles["end-date-input"]} ${styles["error-input"]}`
                  : styles["end-date-input"]
              }
              style={
                !errorInputs.includes("positionEndDate") &&
                formData.positionEndDate !== ""
                  ? { border: "1px solid #98E37E" }
                  : {}
              }
              type="date"
              value={formData.positionEndDate}
              onChange={(e) => handleInputChange(e, "positionEndDate")}
            />
            {!errorInputs.includes("positionEndDate") &&
              formData.positionEndDate !== "" && (
                <img
                  className={styles["correct-vector"]}
                  style={{ right: "0px" }}
                  src={CorrectVector}
                  alt="correct-vector"
                />
              )}
            {errorInputs.includes("positionEndDate") && (
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
              errorInputs.includes("positionDescription")
                ? `${styles["description-p"]} ${styles["error-text"]}`
                : styles["description-p"]
            }
          >
            აღწერა
          </p>
          <div className={styles["input-div-2"]}>
            <textarea
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              className={
                errorInputs.includes("positionDescription")
                  ? `${styles["description-textarea"]} ${styles["error-input"]}`
                  : styles["description-textarea"]
              }
              style={
                !errorInputs.includes("positionDescription") &&
                formData.positionDescription !== ""
                  ? { border: "1px solid #98E37E" }
                  : {}
              }
              value={formData.positionDescription}
              onChange={(e) => handleInputChange(e, "positionDescription")}
            ></textarea>
            {!errorInputs.includes("positionDescription") &&
              formData.positionDescription !== "" && (
                <img
                  className={styles["correct-vector"]}
                  src={CorrectVector}
                  alt="correct-vector"
                />
              )}
            {errorInputs.includes("positionDescription") && (
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
          className={styles["add-experience-btn"]}
          onClick={handleAddExperienceClick}
        >
          მეტი გამოცდილების დამატება
        </button>

        <button className={styles["back-btn"]} onClick={handleBackBtnClick}>
          ᲣᲙᲐᲜ
        </button>
        <button className={styles["next-btn"]} type="submit">
          ᲨᲔᲛᲓᲔᲒᲘ
        </button>
      </form>
    </div>
  );
}
