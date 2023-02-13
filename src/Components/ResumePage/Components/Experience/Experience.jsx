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
      "start_date",
      "due_date",
      "description",
    ]]
  );
  
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
    } else if (inputName === "start_date") {
      const newExperienceArray = formData.experiences;
      newExperienceArray[index].start_date = e.target.value;
      setFormData({ ...formData, experiences: newExperienceArray });
      if (e.target.value.length === 10) {
        const newErrorInputs = errorInputs
        newErrorInputs[index] = errorInputs[index].filter((item) => item !== "start_date")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index] = errorsArray[index].filter((item) => item !== "start_date")
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
        newErrorInputs[index].push("start_date")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index].push("start_date")
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
    } else if (inputName === "due_date") {
      const newExperienceArray = formData.experiences;
      newExperienceArray[index].due_date = e.target.value;
      setFormData({ ...formData, experiences: newExperienceArray });
      if (e.target.value.length === 10) {
        const newErrorInputs = errorInputs
        newErrorInputs[index] = errorInputs[index].filter((item) => item !== "due_date")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index] = errorsArray[index].filter((item) => item !== "due_date")
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
        newErrorInputs[index].push("due_date")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index].push("due_date")
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
    } else if (inputName === "description") {
      const newExperienceArray = formData.experiences;
      newExperienceArray[index].description = e.target.value;
      setFormData({ ...formData, experiences: newExperienceArray });
      if (e.target.value.length !== 0) {
        const newErrorInputs = errorInputs
        newErrorInputs[index] = errorInputs[index].filter((item) => item !== "description")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index] = errorsArray[index].filter((item) => item !== "description")
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
        newErrorInputs[index].push("description")
        setErrorInputs(newErrorInputs);

        const newErrorsArray = errorsArray
        newErrorsArray[index].push("description")
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
          start_date:
            JSON.parse(localStorage.getItem("formData"))?.start_date || "",
            due_date:
            JSON.parse(localStorage.getItem("formData"))?.due_date || "",
            description:
            JSON.parse(localStorage.getItem("formData"))?.description || "",
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
        "start_date",
        "due_date",
        "description",
      ])
      setErrorsArray(newErrorsArr)
      localStorage.setItem("errorsArrayExperience", JSON.stringify(errorsArray))

      setFormData({...formData, experiences: newExperiencesArr})
      localStorage.setItem("formData", JSON.stringify(formData))
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
        if (obj.start_date.length !== 10) {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("start_date")
          setErrorInputs(addedErrorInputs);
          localStorage.setItem("errorInputsExperience", JSON.stringify(errorInputs));
        }
  
        setSubmitClickFlag(!submitClickFlag)
      })
      formData.experiences.map((obj, index) => {
        if (obj.due_date.length !== 10) {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("due_date")
          setErrorInputs(addedErrorInputs);
          localStorage.setItem("errorInputsExperience", JSON.stringify(errorInputs));
        }
  
        setSubmitClickFlag(!submitClickFlag)
      })
      formData.experiences.map((obj, index) => {
        if (obj.description.length === 0) {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("description")
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
      if (obj.start_date.length !== 10) {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("start_date")
        setErrorInputs(addedErrorInputs);
        localStorage.setItem("errorInputsExperience", JSON.stringify(errorInputs));
      }

      setSubmitClickFlag(!submitClickFlag)
    })
    formData.experiences.map((obj, index) => {
      if (obj.due_date.length !== 10) {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("due_date")
        setErrorInputs(addedErrorInputs);
        localStorage.setItem("errorInputsExperience", JSON.stringify(errorInputs));
      }

      setSubmitClickFlag(!submitClickFlag)
    })
    formData.experiences.map((obj, index) => {
      if (obj.description.length === 0) {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("description")
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
        {formData.experiences.map((arr, index) => {
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
                    value={arr?.position}
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
                    value={arr.employer}
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

              <div className={styles["start-end-date-container"]}>
                <div className={styles["start-date-div"]}>
                  <p
                    className={
                      errorInputs[index].includes("start_date")
                        ? `${styles["start-date-p"]} ${styles["error-text"]}`
                        : styles["start-date-p"]
                    }
                  >
                    დაწყების რიცხვი
                  </p>
                  <div className={styles["input-div"]}>
                    <input
                      className={
                        errorInputs[index].includes("start_date")
                          ? `${styles["start-date-input"]} ${styles["error-input"]}`
                          : styles["start-date-input"]
                      }
                      style={
                        !errorInputs[index].includes("start_date") &&
                        formData.experiences[index]?.start_date !== ""
                          ? { border: "1px solid #98E37E" }
                          : {}
                      }
                      type="date"
                      value={arr?.start_date}
                      onChange={(e) => handleInputChange(e, "start_date", index)}
                    />
                    {!errorInputs[index].includes("start_date") &&
                      formData.experiences[index]?.start_date !== "" && (
                        <img
                          className={styles["correct-vector"]}
                          style={{ right: "0px" }}
                          src={CorrectVector}
                          alt="correct-vector"
                        />
                      )}
                    {errorInputs[index].includes("start_date") && (
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
                      errorInputs[index].includes("due_date")
                        ? `${styles["end-date-p"]} ${styles["error-text"]}`
                        : styles["end-date-p"]
                    }
                  >
                    დამთავრების რიცხვი
                  </p>
                  <div className={styles["input-div"]}>
                    <input
                      className={
                        errorInputs[index].includes("due_date")
                          ? `${styles["end-date-input"]} ${styles["error-input"]}`
                          : styles["end-date-input"]
                      }
                      style={
                        !errorInputs[index].includes("due_date") &&
                        formData.experiences[index]?.due_date !== ""
                          ? { border: "1px solid #98E37E" }
                          : {}
                      }
                      type="date"
                      value={arr?.due_date}
                      onChange={(e) => handleInputChange(e, "due_date", index)}
                    />
                    {!errorInputs[index].includes("due_date") &&
                      formData.experiences[index]?.due_date !== "" && (
                        <img
                          className={styles["correct-vector"]}
                          style={{ right: "0px" }}
                          src={CorrectVector}
                          alt="correct-vector"
                        />
                      )}
                    {errorInputs[index].includes("due_date") && (
                      <img
                        className={styles["error-vector"]}
                        src={ErrorVector}
                        alt="error-vector"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className={styles["description-div"]}>
                <p
                  className={
                    errorInputs[index].includes("description")
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
                      errorInputs[index].includes("description")
                        ? `${styles["description-textarea"]} ${styles["error-input"]}`
                        : styles["description-textarea"]
                    }
                    style={
                      !errorInputs[index].includes("description") &&
                      formData.experiences[index]?.description !== ""
                        ? { border: "1px solid #98E37E" }
                        : {}
                    }
                    value={arr?.description}
                    onChange={(e) => handleInputChange(e, "description", index)}
                  ></textarea>
                  {!errorInputs[index].includes("description") &&
                    formData.experiences[index]?.description !== "" && (
                      <img
                        className={styles["correct-vector"]}
                        src={CorrectVector}
                        alt="correct-vector"
                      />
                    )}
                  {errorInputs[index].includes("description") && (
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
        
        <div className={styles["add-experience-btn-container"]}>
          <button
            className={styles["add-experience-btn"]}
            onClick={handleAddExperienceClick}
          >
            მეტი გამოცდილების დამატება
          </button>
        </div>

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
