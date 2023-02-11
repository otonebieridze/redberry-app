import styles from "./Experience.module.css";
import Vector from "../../../../assets/images/Vector.png";
import ErrorVector from "../../../../assets/images/Error-Vector.png";
import CorrectVector from "../../../../assets/images/Correct-Vector.png";
import { useEffect, useState } from "react";

export default function Experience({
  formData,
  setFormData,
  setCurrentPage,
  setCurrentResumeStage,
}) {
  useEffect(() => {
    setFormData(JSON.parse(localStorage.getItem("formData")) || formData)
  }, [])
  

  const [errorInputs, setErrorInputs] = useState(
    JSON.parse(localStorage.getItem("errorInputsExperience")) || [[]]
  );
  const [errorsArray, setErrorsArray] = useState(
    JSON.parse(localStorage.getItem("errorsArrayExperience")) || [[
      "position",
      "employer",
      "positionStartDate",
      "positionEndDate",
      "positionDescription",
    ]]
  );
  const [mainForms, setMainForms] = useState(JSON.parse(localStorage.getItem("mainForms")) || ["form"])
  const handleInputChange = (e, inputName, index) => {
    if (inputName === "position") {
      const newExperienceArray = formData.experiences;
      newExperienceArray[index].position = e.target.value;
      setFormData({ ...formData, experiences: newExperienceArray });
      if (e.target.value.length >= 2) {
        const newErrorInputs = errorInputs
        newErrorInputs[index] = errorInputs[index].filter((item) => item !== "position")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index] = errorsArray[index].filter((item) => item !== "position")
        setErrorsArray(newErrorsArray);

        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, experiences: newExperienceArray })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify(errorInputs)
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify(errorsArray)
        );
      } else {
        const newErrorInputs = errorInputs
        newErrorInputs[index].push("position")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index].push("position")
        setErrorsArray(newErrorsArray);

        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, experiences: newExperienceArray })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify(errorInputs)
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify(errorsArray)
        );
      }
    } else if (inputName === "employer") {
      const newExperienceArray = formData.experiences;
      newExperienceArray[index].employer = e.target.value;
      setFormData({ ...formData, experiences: newExperienceArray });
      if (e.target.value.length >= 2) {
        const newErrorInputs = errorInputs
        newErrorInputs[index] = errorInputs[index].filter((item) => item !== "employer")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index] = errorsArray[index].filter((item) => item !== "employer")
        setErrorsArray(newErrorsArray);

        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, experiences: newExperienceArray })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify(errorInputs)
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify(errorsArray)
        );
      } else {
        const newErrorInputs = errorInputs
        newErrorInputs[index].push("employer")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index].push("employer")
        setErrorsArray(newErrorsArray);

        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, experiences: newExperienceArray })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify(errorInputs)
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify(errorsArray)
        );
      }
    } else if (inputName === "positionStartDate") {
      const newExperienceArray = formData.experiences;
      newExperienceArray[index].positionStartDate = e.target.value;
      setFormData({ ...formData, experiences: newExperienceArray });
      if (e.target.value.length === 10) {
        const newErrorInputs = errorInputs
        newErrorInputs[index] = errorInputs[index].filter((item) => item !== "positionStartDate")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index] = errorsArray[index].filter((item) => item !== "positionStartDate")
        setErrorsArray(newErrorsArray);

        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, experiences: newExperienceArray })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify(errorInputs)
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify(errorsArray)
        );
      } else {
        const newErrorInputs = errorInputs
        newErrorInputs[index].push("positionStartDate")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index].push("positionStartDate")
        setErrorsArray(newErrorsArray);

        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, experiences: newExperienceArray })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify(errorInputs)
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify(errorsArray)
        );
      }
    } else if (inputName === "positionEndDate") {
      const newExperienceArray = formData.experiences;
      newExperienceArray[index].positionEndDate = e.target.value;
      setFormData({ ...formData, experiences: newExperienceArray });
      if (e.target.value.length === 10) {
        const newErrorInputs = errorInputs
        newErrorInputs[index] = errorInputs[index].filter((item) => item !== "positionEndDate")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index] = errorsArray[index].filter((item) => item !== "positionEndDate")
        setErrorsArray(newErrorsArray);

        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, experiences: newExperienceArray })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify(errorInputs)
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify(errorsArray)
        );
      } else {
        const newErrorInputs = errorInputs
        newErrorInputs[index].push("positionEndDate")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index].push("positionEndDate")
        setErrorsArray(newErrorsArray);

        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, experiences: newExperienceArray })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify(errorInputs)
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify(errorsArray)
        );
      }
    } else if (inputName === "positionDescription") {
      const newExperienceArray = formData.experiences;
      newExperienceArray[index].positionDescription = e.target.value;
      setFormData({ ...formData, experiences: newExperienceArray });
      if (e.target.value.length !== 0) {
        const newErrorInputs = errorInputs
        newErrorInputs[index] = errorInputs[index].filter((item) => item !== "positionDescription")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index] = errorsArray[index].filter((item) => item !== "positionDescription")
        setErrorsArray(newErrorsArray);

        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, experiences: newExperienceArray })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify(errorInputs)
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify(errorsArray)
        );
      } else {
        const newErrorInputs = errorInputs
        newErrorInputs[index].push("positionDescription")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index].push("positionDescription")
        setErrorsArray(newErrorsArray);

        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, experiences: newExperienceArray })
        );
        localStorage.setItem(
          "errorInputsExperience",
          JSON.stringify(errorInputs)
        );
        localStorage.setItem(
          "errorsArrayExperience",
          JSON.stringify(errorsArray)
        );
      }
    }
  };

  function isErrorsArrayEmpty() {
    for (var i = 0; i < errorsArray.length; i++) {
      if (errorsArray[i].length > 0) {
        return false
      }
    }
    return true
  }

  const [submitClickFlag, setSubmitClickFlag] = useState(false);
  useEffect(() => {
    setErrorInputs(JSON.parse(localStorage.getItem("errorInputsExperience")) || [[]])
  }, [submitClickFlag])

  const handleAddExperienceClick = (e) => {
    e.preventDefault();
    if (isErrorsArrayEmpty()) {
      const newExperiencesArr = formData.experiences;
      newExperiencesArr.push(
        {
          position: JSON.parse(localStorage.getItem("formData"))?.position || "",
          employer: JSON.parse(localStorage.getItem("formData"))?.employer || "",
          positionStartDate:
            JSON.parse(localStorage.getItem("formData"))?.positionStartDate || "",
          positionEndDate:
            JSON.parse(localStorage.getItem("formData"))?.positionEndDate || "",
          positionDescription:
            JSON.parse(localStorage.getItem("formData"))?.positionDescription || "",
        }
      )
      const newErrorInps = errorInputs
      newErrorInps.push([])
      setErrorInputs(newErrorInps)
      localStorage.setItem("errorInputsExperience", JSON.stringify(errorInputs))

      const newErrorsArr = errorsArray
      newErrorsArr.push([
        "position",
        "employer",
        "positionStartDate",
        "positionEndDate",
        "positionDescription",
      ])
      setErrorsArray(newErrorsArr)
      localStorage.setItem("errorsArrayExperience", JSON.stringify(errorsArray))

      setFormData({...formData, experiences: newExperiencesArr})
      setMainForms(prev => [...prev, "form"])
      localStorage.setItem("formData", JSON.stringify(formData))
      localStorage.setItem("mainForms", JSON.stringify([...mainForms, "form"]))
    } else {
      formData.experiences.map((obj, index) => {
        if (obj.position.length < 2) {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("position")
          setErrorInputs(addedErrorInputs);
          localStorage.setItem("errorInputsExperience", JSON.stringify(errorInputs));
        }
  
        setSubmitClickFlag(!submitClickFlag)
      })
      formData.experiences.map((obj, index) => {
        if (obj.employer.length < 2) {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("employer")
          setErrorInputs(addedErrorInputs);
          localStorage.setItem("errorInputsExperience", JSON.stringify(errorInputs));
        }
  
        setSubmitClickFlag(!submitClickFlag)
      })
      formData.experiences.map((obj, index) => {
        if (obj.positionStartDate.length !== 10) {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("positionStartDate")
          setErrorInputs(addedErrorInputs);
          localStorage.setItem("errorInputsExperience", JSON.stringify(errorInputs));
        }
  
        setSubmitClickFlag(!submitClickFlag)
      })
      formData.experiences.map((obj, index) => {
        if (obj.positionEndDate.length !== 10) {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("positionEndDate")
          setErrorInputs(addedErrorInputs);
          localStorage.setItem("errorInputsExperience", JSON.stringify(errorInputs));
        }
  
        setSubmitClickFlag(!submitClickFlag)
      })
      formData.experiences.map((obj, index) => {
        if (obj.positionDescription.length === 0) {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("positionDescription")
          setErrorInputs(addedErrorInputs);
          localStorage.setItem("errorInputsExperience", JSON.stringify(errorInputs));
        }
  
        setSubmitClickFlag(!submitClickFlag)
      })
    }
  };

  const handleBackBtnClick = (e) => {
    e.preventDefault();
    setCurrentResumeStage(1);
    localStorage.setItem("currentResumeStage", 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.experiences.map((obj, index) => {
      if (obj.position.length < 2) {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("position")
        setErrorInputs(addedErrorInputs);
        localStorage.setItem("errorInputsExperience", JSON.stringify(errorInputs));
      }

      setSubmitClickFlag(!submitClickFlag)
    })
    formData.experiences.map((obj, index) => {
      if (obj.employer.length < 2) {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("employer")
        setErrorInputs(addedErrorInputs);
        localStorage.setItem("errorInputsExperience", JSON.stringify(errorInputs));
      }

      setSubmitClickFlag(!submitClickFlag)
    })
    formData.experiences.map((obj, index) => {
      if (obj.positionStartDate.length !== 10) {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("positionStartDate")
        setErrorInputs(addedErrorInputs);
        localStorage.setItem("errorInputsExperience", JSON.stringify(errorInputs));
      }

      setSubmitClickFlag(!submitClickFlag)
    })
    formData.experiences.map((obj, index) => {
      if (obj.positionEndDate.length !== 10) {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("positionEndDate")
        setErrorInputs(addedErrorInputs);
        localStorage.setItem("errorInputsExperience", JSON.stringify(errorInputs));
      }

      setSubmitClickFlag(!submitClickFlag)
    })
    formData.experiences.map((obj, index) => {
      if (obj.positionDescription.length === 0) {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("positionDescription")
        setErrorInputs(addedErrorInputs);
        localStorage.setItem("errorInputsExperience", JSON.stringify(errorInputs));
      }

      setSubmitClickFlag(!submitClickFlag)
    })

    if (isErrorsArrayEmpty()) {
      setCurrentResumeStage(3);
      localStorage.setItem("currentResumeStage", 3);
    }
  };

  return (
    <div className={styles["experience-page"]}>
      <header className={styles["experience-page-header"]}>
        <img
          className={styles.vector}
          src={Vector}
          alt="vector"
          onClick={() => {
            setCurrentPage(1);
            localStorage.clear();
          }}
        />
        <div className={styles["experience-page-header-main"]}>
          <p className={styles["experience-page-title"]}>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</p>
          <p className={styles["experience-page-text"]}>2/3</p>
        </div>
      </header>

      <form className={styles["experience-form"]} onSubmit={handleSubmit}>
        {mainForms.map((form, index) => {
          return (
            <div key={index} className={styles["form-main"]}>
              <div className={styles["position-div"]}>
                <p
                  className={
                    errorInputs[index].includes("position")
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
                      errorInputs[index].includes("position")
                        ? `${styles["position-input"]} ${styles["error-input"]}`
                        : styles["position-input"]
                    }
                    style={
                      !errorInputs[index].includes("position") && formData.experiences[index]?.position !== ""
                        ? { border: "1px solid #98E37E" }
                        : {}
                    }
                    type="text"
                    value={formData.experiences[index]?.position}
                    onChange={(e) => handleInputChange(e, "position", index)}
                  />
                  {!errorInputs[index].includes("position") && formData.experiences[index]?.position !== "" && (
                    <img
                      className={styles["correct-vector"]}
                      src={CorrectVector}
                      alt="correct-vector"
                    />
                  )}
                  {errorInputs[index].includes("position") && (
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
                    errorInputs[index].includes("employer")
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
                      errorInputs[index].includes("employer")
                        ? `${styles["employer-input"]} ${styles["error-input"]}`
                        : styles["employer-input"]
                    }
                    style={
                      !errorInputs[index].includes("employer") && formData.experiences[index]?.employer !== ""
                        ? { border: "1px solid #98E37E" }
                        : {}
                    }
                    type="text"
                    value={formData.experiences[index]?.employer}
                    onChange={(e) => handleInputChange(e, "employer", index)}
                  />
                  {!errorInputs[index].includes("employer") && formData.experiences[index]?.employer !== "" && (
                    <img
                      className={styles["correct-vector"]}
                      src={CorrectVector}
                      alt="correct-vector"
                    />
                  )}
                  {errorInputs[index].includes("employer") && (
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
                    errorInputs[index].includes("positionStartDate")
                      ? `${styles["start-date-p"]} ${styles["error-text"]}`
                      : styles["start-date-p"]
                  }
                >
                  დაწყების რიცხვი
                </p>
                <div className={styles["input-div"]}>
                  <input
                    className={
                      errorInputs[index].includes("positionStartDate")
                        ? `${styles["start-date-input"]} ${styles["error-input"]}`
                        : styles["start-date-input"]
                    }
                    style={
                      !errorInputs[index].includes("positionStartDate") &&
                      formData.experiences[index]?.positionStartDate !== ""
                        ? { border: "1px solid #98E37E" }
                        : {}
                    }
                    type="date"
                    value={formData.experiences[index]?.positionStartDate}
                    onChange={(e) => handleInputChange(e, "positionStartDate", index)}
                  />
                  {!errorInputs[index].includes("positionStartDate") &&
                    formData.experiences[index]?.positionStartDate !== "" && (
                      <img
                        className={styles["correct-vector"]}
                        style={{ right: "0px" }}
                        src={CorrectVector}
                        alt="correct-vector"
                      />
                    )}
                  {errorInputs[index].includes("positionStartDate") && (
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
                    errorInputs[index].includes("positionEndDate")
                      ? `${styles["end-date-p"]} ${styles["error-text"]}`
                      : styles["end-date-p"]
                  }
                >
                  დამთავრების რიცხვი
                </p>
                <div className={styles["input-div"]}>
                  <input
                    className={
                      errorInputs[index].includes("positionEndDate")
                        ? `${styles["end-date-input"]} ${styles["error-input"]}`
                        : styles["end-date-input"]
                    }
                    style={
                      !errorInputs[index].includes("positionEndDate") &&
                      formData.experiences[index]?.positionEndDate !== ""
                        ? { border: "1px solid #98E37E" }
                        : {}
                    }
                    type="date"
                    value={formData.experiences[index]?.positionEndDate}
                    onChange={(e) => handleInputChange(e, "positionEndDate", index)}
                  />
                  {!errorInputs[index].includes("positionEndDate") &&
                    formData.experiences[index]?.positionEndDate !== "" && (
                      <img
                        className={styles["correct-vector"]}
                        style={{ right: "0px" }}
                        src={CorrectVector}
                        alt="correct-vector"
                      />
                    )}
                  {errorInputs[index].includes("positionEndDate") && (
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
                    errorInputs[index].includes("positionDescription")
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
                      errorInputs[index].includes("positionDescription")
                        ? `${styles["description-textarea"]} ${styles["error-input"]}`
                        : styles["description-textarea"]
                    }
                    style={
                      !errorInputs[index].includes("positionDescription") &&
                      formData.experiences[index]?.positionDescription !== ""
                        ? { border: "1px solid #98E37E" }
                        : {}
                    }
                    value={formData.experiences[index]?.positionDescription}
                    onChange={(e) => handleInputChange(e, "positionDescription", index)}
                  ></textarea>
                  {!errorInputs[index].includes("positionDescription") &&
                    formData.experiences[index]?.positionDescription !== "" && (
                      <img
                        className={styles["correct-vector"]}
                        src={CorrectVector}
                        alt="correct-vector"
                      />
                    )}
                  {errorInputs[index].includes("positionDescription") && (
                    <img
                      className={styles["error-vector"]}
                      src={ErrorVector}
                      alt="error-vector"
                    />
                  )}
                </div>
              </div>

              <div className={styles.line}></div>
            </div>
          )
        })}

        <button
          className={styles["add-experience-btn"]}
          onClick={handleAddExperienceClick}
        >
          მეტი გამოცდილების დამატება
        </button>

        <div className={styles["form-footer-container"]}>
          <div className={styles["form-footer"]}>
            <button className={styles["back-btn"]} onClick={handleBackBtnClick}>
              ᲣᲙᲐᲜ
            </button>
            <button className={styles["next-btn"]} type="submit">
              ᲨᲔᲛᲓᲔᲒᲘ
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
