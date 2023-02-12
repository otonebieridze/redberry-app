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
  useEffect(() => {
    setFormData(JSON.parse(localStorage.getItem("formData")) || formData)
  }, [])

  const [optionsData, setOptionsData] = useState([])
  useEffect(() => {
    axios.get("https://resume.redberryinternship.ge/api/degrees").then(res => {
      setOptionsData(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const [errorInputs, setErrorInputs] = useState(
    JSON.parse(localStorage.getItem("errorInputsEducation")) || [[]]
  );
  const [errorsArray, setErrorsArray] = useState(
    JSON.parse(localStorage.getItem("errorsArrayEducation")) || [[
      "college",
      "grade",
      "collegeEndDate",
      "educationDescription",
    ]]
  );

  useEffect(() => {
    setErrorInputs(JSON.parse(localStorage.getItem("errorInputsEducation")) || errorInputs)
  }, [])

  const handleInputChange = (e, inputName, index) => {
    if (inputName === "college") {
      let newEducationsArr = formData.educations;
      newEducationsArr[index].college = e.target.value;
      setFormData({...formData, educations: newEducationsArr})
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, educations: newEducationsArr })
      );
      if (e.target.value.length >= 2) {
        let newErrorInputs = errorInputs
        newErrorInputs[index] = errorInputs[index]?.filter(item => item !== "college")
        setErrorInputs(newErrorInputs)

        let newErrorsArray = errorsArray
        newErrorsArray[index] = errorsArray[index]?.filter(item => item !== "college")
        setErrorsArray(newErrorsArray)

        localStorage.setItem(
          "errorInputsEducation",
          JSON.stringify(newErrorInputs)
        );
        localStorage.setItem(
          "errorsArrayEducation",
          JSON.stringify(newErrorsArray)
        );
      } else {
        let newErrorInputs = errorInputs
        newErrorInputs[index]?.push("college")
        setErrorInputs(newErrorInputs)

        let newErrorsArray = errorsArray
        newErrorsArray[index]?.push("college")
        setErrorsArray(newErrorsArray)

        localStorage.setItem(
          "errorInputsEducation",
          JSON.stringify(newErrorInputs)
        );
        localStorage.setItem(
          "errorsArrayEducation",
          JSON.stringify(newErrorsArray)
        );
      }
    } else if (inputName === "educationDescription") {
      let newEducationsArr = formData.educations;
      newEducationsArr[index].educationDescription = e.target.value;
      setFormData({...formData, educations: newEducationsArr})
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, educations: newEducationsArr })
      );
      if (e.target.value.length !== 0) {
        let newErrorInputs = errorInputs
        newErrorInputs[index] = errorInputs[index]?.filter(item => item !== "educationDescription")
        setErrorInputs(newErrorInputs)

        let newErrorsArray = errorsArray
        newErrorsArray[index] = errorsArray[index]?.filter(item => item !== "educationDescription")
        setErrorsArray(newErrorsArray)

        localStorage.setItem(
          "errorInputsEducation",
          JSON.stringify(newErrorInputs)
        );
        localStorage.setItem(
          "errorsArrayEducation",
          JSON.stringify(newErrorsArray)
        );
      } else {
        let newErrorInputs = errorInputs
        newErrorInputs[index]?.push("educationDescription")
        setErrorInputs(newErrorInputs)

        let newErrorsArray = errorsArray
        newErrorsArray[index]?.push("educationDescription")
        setErrorsArray(newErrorsArray)

        localStorage.setItem(
          "errorInputsEducation",
          JSON.stringify(newErrorInputs)
        );
        localStorage.setItem(
          "errorsArrayEducation",
          JSON.stringify(newErrorsArray)
        );
      }
    } else if (inputName === "grade") {
      let newEducationsArr = formData.educations;
      newEducationsArr[index].grade = e.target.value;
      setFormData({...formData, educations: newEducationsArr})
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, educations: newEducationsArr })
      );
      
      let newErrorInputs = errorInputs
      newErrorInputs[index] = errorInputs[index]?.filter(item => item !== "grade")
      setErrorInputs(newErrorInputs)

      let newErrorsArray = errorsArray
      newErrorsArray[index] = errorsArray[index]?.filter(item => item !== "grade")
      setErrorsArray(newErrorsArray)

      localStorage.setItem(
        "errorInputsEducation",
        JSON.stringify(newErrorInputs)
      );
      localStorage.setItem(
        "errorsArrayEducation",
        JSON.stringify(newErrorsArray)
      );
    } else if (inputName === "collegeEndDate") {
      let newEducationsArr = formData.educations;
      newEducationsArr[index].collegeEndDate = e.target.value;
      setFormData({...formData, educations: newEducationsArr})
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, educations: newEducationsArr })
      );
      if (e.target.value.length === 10) {
        let newErrorInputs = errorInputs
        newErrorInputs[index] = errorInputs[index]?.filter(item => item !== "collegeEndDate")
        setErrorInputs(newErrorInputs)

        let newErrorsArray = errorsArray
        newErrorsArray[index] = errorsArray[index]?.filter(item => item !== "collegeEndDate")
        setErrorsArray(newErrorsArray)
        
        localStorage.setItem(
          "errorInputsEducation",
          JSON.stringify(newErrorInputs)
        );
        localStorage.setItem(
          "errorsArrayEducation",
          JSON.stringify(newErrorsArray)
        );
      } else {
        let newErrorInputs = errorInputs
        newErrorInputs[index]?.push("collegeEndDate")
        setErrorInputs(newErrorInputs)

        let newErrorsArray = errorsArray
        newErrorsArray[index]?.push("collegeEndDate")
        setErrorsArray(newErrorsArray)

        localStorage.setItem(
          "errorInputsEducation",
          JSON.stringify(newErrorInputs)
        );
        localStorage.setItem(
          "errorsArrayEducation",
          JSON.stringify(newErrorsArray)
        );
      }
    }
  };
  const handleBackBtnClick = (e) => {
    e.preventDefault();
    setCurrentResumeStage(2);
    localStorage.setItem("currentResumeStage", 2);
  };


  function isErrorsArrayEmpty() {
    for (var i = 0; i < errorsArray.length; i++) {
      if (errorsArray[i].length > 0) {
        return false
      }
    }
    return true
  }

  let [submitClickFlag, setSubmitClickFlag] = useState(false)
  useEffect(() => {
    setErrorInputs(JSON.parse(localStorage.getItem("errorInputsEducation")) || [[]]);
  }, [submitClickFlag])

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.educations.map((obj, index) => {
      if (obj.college.length < 2) {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("college")
        setErrorInputs(addedErrorInputs);
        localStorage.setItem("errorInputsEducation", JSON.stringify(errorInputs));
      }
      setSubmitClickFlag(!submitClickFlag)
    })
    formData.educations.map((obj, index) => {
      if (obj.educationDescription === "") {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("educationDescription")
        setErrorInputs(addedErrorInputs);
        localStorage.setItem("errorInputsEducation", JSON.stringify(errorInputs));
      }
      setSubmitClickFlag(!submitClickFlag)
    })
    formData.educations.map((obj, index) => {
      if (obj.grade === "") {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("grade")
        setErrorInputs(addedErrorInputs);
        localStorage.setItem("errorInputsEducation", JSON.stringify(errorInputs));
      }
      setSubmitClickFlag(!submitClickFlag)
    })
    formData.educations.map((obj, index) => {
      if (obj.collegeEndDate.length !== 10) {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("collegeEndDate")
        setErrorInputs(addedErrorInputs);
        localStorage.setItem("errorInputsEducation", JSON.stringify(errorInputs));
      }
      setSubmitClickFlag(!submitClickFlag)
    })

    if (isErrorsArrayEmpty()) {
      setCurrentPage(3)
      localStorage.setItem("currentPage", 3)
    }
  };

  const handleAddEducationsClick = (e) => {
    e.preventDefault()
    if (isErrorsArrayEmpty()) {
      const newEducations = formData.educations;
      newEducations.push({
        college: "",
        grade: "",
        collegeEndDate: "",
        educationDescription: "",
      })
      setFormData({...formData, educations: newEducations})
      localStorage.setItem("formData", JSON.stringify(formData))
      setErrorInputs(prev => [...prev, []])
      localStorage.setItem("errorInputsEducation", JSON.stringify([...errorInputs, []]))
      setErrorsArray(prev => [...prev, [
        "college",
        "grade",
        "collegeEndDate",
        "educationDescription",
      ]])
      localStorage.setItem("errorsArrayEducation", JSON.stringify([...errorsArray, [
        "college",
        "grade",
        "collegeEndDate",
        "educationDescription",
      ]]))
    } else {
      formData.educations.map((obj, index) => {
        if (obj.college.length < 2) {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("college")
          setErrorInputs(addedErrorInputs);
          localStorage.setItem("errorInputsEducation", JSON.stringify(errorInputs));
        }
        setSubmitClickFlag(!submitClickFlag)
      })
      formData.educations.map((obj, index) => {
        if (obj.educationDescription === "") {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("educationDescription")
          setErrorInputs(addedErrorInputs);
          localStorage.setItem("errorInputsEducation", JSON.stringify(errorInputs));
        }
        setSubmitClickFlag(!submitClickFlag)
      })
      formData.educations.map((obj, index) => {
        if (obj.grade === "") {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("grade")
          setErrorInputs(addedErrorInputs);
          localStorage.setItem("errorInputsEducation", JSON.stringify(errorInputs));
        }
        setSubmitClickFlag(!submitClickFlag)
      })
      formData.educations.map((obj, index) => {
        if (obj.collegeEndDate.length !== 10) {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("collegeEndDate")
          setErrorInputs(addedErrorInputs);
          localStorage.setItem("errorInputsEducation", JSON.stringify(errorInputs));
        }
        setSubmitClickFlag(!submitClickFlag)
      })
    }
  }

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

      <form onSubmit={handleSubmit} className={styles["education-form"]}>
        {formData.educations.map((educationArray, index) => {
          return (
            <div key={index} className={styles["main-form"]}>
              <div className={styles["college-div"]}>
                <p
                  className={
                    errorInputs[index].includes("college")
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
                      errorInputs[index].includes("college")
                        ? `${styles["college-input"]} ${styles["error-input"]}`
                        : styles["college-input"]
                    }
                    style={
                      !errorInputs[index].includes("college") && formData.educations[index].college !== ""
                        ? { border: "1px solid #98E37E" }
                        : {}
                    }
                    type="text"
                    value={educationArray?.college}
                    onChange={(e) => handleInputChange(e, "college", index)}
                  />
                  {!errorInputs[index].includes("college") && formData.educations[index]?.college !== "" && (
                    <img
                      className={styles["correct-vector"]}
                      src={CorrectVector}
                      alt="correct-vector"
                    />
                  )}
                  {errorInputs[index].includes("college") && (
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
                    errorInputs[index].includes("grade")
                      ? `${styles["grade-p"]} ${styles["error-text"]}`
                      : styles["grade-p"]
                  }
                >
                  ხარისხი
                </p>
                <div className={styles["input-div"]}>
                  <select
                    value={educationArray?.grade || "აირჩიეთ ხარისხი"}
                    className={
                      errorInputs[index].includes("grade")
                        ? `${styles["grade-input"]} ${styles["error-input"]}`
                        : styles["grade-input"]
                    }
                    style={
                      !errorInputs[index].includes("grade") && formData.educations[index]?.grade !== ""
                        ? { border: "1px solid #98E37E" }
                        : {}
                    }
                    onChange={(e) => handleInputChange(e, "grade", index)}
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
                  {!errorInputs[index].includes("grade") && formData.educations[index]?.grade !== "" && (
                    <img
                      className={styles["correct-vector"]}
                      style={{ right: "0px" }}
                      src={CorrectVector}
                      alt="correct-vector"
                    />
                  )}
                  {errorInputs[index].includes("grade") && (
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
                    errorInputs[index].includes("collegeEndDate")
                      ? `${styles["end-date-p"]} ${styles["error-text"]}`
                      : styles["end-date-p"]
                  }
                >
                  დამთავრების რიცხვი
                </p>
                <div className={styles["input-div"]}>
                  <input
                    className={
                      errorInputs[index].includes("collegeEndDate")
                        ? `${styles["end-date-input"]} ${styles["error-input"]}`
                        : styles["end-date-input"]
                    }
                    style={
                      !errorInputs[index].includes("collegeEndDate") &&
                      formData.educations[index]?.collegeEndDate !== ""
                        ? { border: "1px solid #98E37E" }
                        : {}
                    }
                    type="date"
                    value={educationArray?.collegeEndDate}
                    onChange={(e) => handleInputChange(e, "collegeEndDate", index)}
                  />
                  {!errorInputs[index].includes("collegeEndDate") &&
                    formData.educations[index].collegeEndDate !== "" && (
                      <img
                        className={styles["correct-vector"]}
                        style={{ right: "0px" }}
                        src={CorrectVector}
                        alt="correct-vector"
                      />
                    )}
                  {errorInputs[index].includes("collegeEndDate") && (
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
                    errorInputs[index].includes("educationDescription")
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
                      errorInputs[index].includes("educationDescription")
                        ? `${styles["description-textarea"]} ${styles["error-input"]}`
                        : styles["description-textarea"]
                    }
                    style={
                      !errorInputs[index].includes("educationDescription") &&
                      formData.educations[index]?.educationDescription !== ""
                        ? { border: "1px solid #98E37E" }
                        : {}
                    }
                    value={educationArray?.educationDescription}
                    onChange={(e) => handleInputChange(e, "educationDescription", index)}
                  ></textarea>
                  {!errorInputs[index].includes("educationDescription") &&
                    formData.educations[index]?.educationDescription !== "" && (
                      <img
                        className={styles["correct-vector"]}
                        src={CorrectVector}
                        alt="correct-vector"
                      />
                    )}
                  {errorInputs[index].includes("educationDescription") && (
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
          className={styles["add-education-btn"]}
          onClick={handleAddEducationsClick}
        >
          სხვა სასწავლებლის დამატება
        </button>

        <center>
          <div className={styles["form-footer"]}>
            <div className={styles["footer-btns-box"]}>
              <button className={styles["back-btn"]} onClick={handleBackBtnClick}>
                ᲣᲙᲐᲜ
              </button>
              <button className={styles["complete-btn"]} type="submit">
                ᲓᲐᲡᲠᲣᲚᲔᲑᲐ
              </button>
            </div>
          </div>
        </center>
      </form>
    </div>
  );
}
