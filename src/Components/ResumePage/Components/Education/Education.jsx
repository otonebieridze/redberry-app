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
      "institute",
      "degree",
      "due_date",
      "description",
    ]]
  );

  useEffect(() => {
    setErrorInputs(JSON.parse(localStorage.getItem("errorInputsEducation")) || errorInputs)
  }, [])

  const handleInputChange = (e, inputName, index) => {
    if (inputName === "institute") {
      let newEducationsArr = formData.educations;
      newEducationsArr[index].institute = e.target.value;
      setFormData({...formData, educations: newEducationsArr})
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, educations: newEducationsArr })
      );
      if (e.target.value.length >= 2) {
        let newErrorInputs = errorInputs
        newErrorInputs[index] = errorInputs[index]?.filter(item => item !== "institute")
        setErrorInputs(newErrorInputs)

        let newErrorsArray = errorsArray
        newErrorsArray[index] = errorsArray[index]?.filter(item => item !== "institute")
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
        newErrorInputs[index]?.push("institute")
        setErrorInputs(newErrorInputs)

        let newErrorsArray = errorsArray
        newErrorsArray[index]?.push("institute")
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
    } else if (inputName === "description") {
      let newEducationsArr = formData.educations;
      newEducationsArr[index].description = e.target.value;
      setFormData({...formData, educations: newEducationsArr})
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, educations: newEducationsArr })
      );
      if (e.target.value.length !== 0) {
        let newErrorInputs = errorInputs
        newErrorInputs[index] = errorInputs[index]?.filter(item => item !== "description")
        setErrorInputs(newErrorInputs)

        let newErrorsArray = errorsArray
        newErrorsArray[index] = errorsArray[index]?.filter(item => item !== "description")
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
        newErrorInputs[index]?.push("description")
        setErrorInputs(newErrorInputs)

        let newErrorsArray = errorsArray
        newErrorsArray[index]?.push("description")
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
    } else if (inputName === "degree") {
      let newEducationsArr = formData.educations;
      newEducationsArr[index].degree = e.target.value;
      setFormData({...formData, educations: newEducationsArr})
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, educations: newEducationsArr })
      );
      
      let newErrorInputs = errorInputs
      newErrorInputs[index] = errorInputs[index]?.filter(item => item !== "degree")
      setErrorInputs(newErrorInputs)

      let newErrorsArray = errorsArray
      newErrorsArray[index] = errorsArray[index]?.filter(item => item !== "degree")
      setErrorsArray(newErrorsArray)

      localStorage.setItem(
        "errorInputsEducation",
        JSON.stringify(newErrorInputs)
      );
      localStorage.setItem(
        "errorsArrayEducation",
        JSON.stringify(newErrorsArray)
      );
    } else if (inputName === "due_date") {
      let newEducationsArr = formData.educations;
      newEducationsArr[index].due_date = e.target.value;
      setFormData({...formData, educations: newEducationsArr})
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, educations: newEducationsArr })
      );
      if (e.target.value.length === 10) {
        let newErrorInputs = errorInputs
        newErrorInputs[index] = errorInputs[index]?.filter(item => item !== "due_date")
        setErrorInputs(newErrorInputs)

        let newErrorsArray = errorsArray
        newErrorsArray[index] = errorsArray[index]?.filter(item => item !== "due_date")
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
        newErrorInputs[index]?.push("due_date")
        setErrorInputs(newErrorInputs)

        let newErrorsArray = errorsArray
        newErrorsArray[index]?.push("due_date")
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


  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    formData.educations.map((obj, index) => {
      if (obj.institute.length < 2) {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("institute")
        setErrorInputs(addedErrorInputs);
        localStorage.setItem("errorInputsEducation", JSON.stringify(errorInputs));
      }
      setSubmitClickFlag(!submitClickFlag)
    })
    formData.educations.map((obj, index) => {
      if (obj.description === "") {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("description")
        setErrorInputs(addedErrorInputs);
        localStorage.setItem("errorInputsEducation", JSON.stringify(errorInputs));
      }
      setSubmitClickFlag(!submitClickFlag)
    })
    formData.educations.map((obj, index) => {
      if (obj.degree === "") {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("degree")
        setErrorInputs(addedErrorInputs);
        localStorage.setItem("errorInputsEducation", JSON.stringify(errorInputs));
      }
      setSubmitClickFlag(!submitClickFlag)
    })
    formData.educations.map((obj, index) => {
      if (obj.due_date.length !== 10) {
        const addedErrorInputs = errorInputs
        addedErrorInputs[index].push("due_date")
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
        institute: "",
        degree: "",
        due_date: "",
        description: "",
      })
      setFormData({...formData, educations: newEducations})
      localStorage.setItem("formData", JSON.stringify(formData))
      setErrorInputs(prev => [...prev, []])
      localStorage.setItem("errorInputsEducation", JSON.stringify([...errorInputs, []]))
      setErrorsArray(prev => [...prev, [
        "institute",
        "degree",
        "due_date",
        "description",
      ]])
      localStorage.setItem("errorsArrayEducation", JSON.stringify([...errorsArray, [
        "institute",
        "degree",
        "due_date",
        "description",
      ]]))
    } else {
      formData.educations.map((obj, index) => {
        if (obj.institute.length < 2) {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("institute")
          setErrorInputs(addedErrorInputs);
          localStorage.setItem("errorInputsEducation", JSON.stringify(errorInputs));
        }
        setSubmitClickFlag(!submitClickFlag)
      })
      formData.educations.map((obj, index) => {
        if (obj.description === "") {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("description")
          setErrorInputs(addedErrorInputs);
          localStorage.setItem("errorInputsEducation", JSON.stringify(errorInputs));
        }
        setSubmitClickFlag(!submitClickFlag)
      })
      formData.educations.map((obj, index) => {
        if (obj.degree === "") {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("degree")
          setErrorInputs(addedErrorInputs);
          localStorage.setItem("errorInputsEducation", JSON.stringify(errorInputs));
        }
        setSubmitClickFlag(!submitClickFlag)
      })
      formData.educations.map((obj, index) => {
        if (obj.due_date.length !== 10) {
          const addedErrorInputs = errorInputs
          addedErrorInputs[index].push("due_date")
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
                    errorInputs[index].includes("institute")
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
                      errorInputs[index].includes("institute")
                        ? `${styles["college-input"]} ${styles["error-input"]}`
                        : styles["college-input"]
                    }
                    style={
                      !errorInputs[index].includes("institute") && formData.educations[index].institute !== ""
                        ? { border: "1px solid #98E37E" }
                        : {}
                    }
                    type="text"
                    value={educationArray?.institute}
                    onChange={(e) => handleInputChange(e, "institute", index)}
                  />
                  {!errorInputs[index].includes("institute") && formData.educations[index]?.institute !== "" && (
                    <img
                      className={styles["correct-vector"]}
                      src={CorrectVector}
                      alt="correct-vector"
                    />
                  )}
                  {errorInputs[index].includes("institute") && (
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
                    errorInputs[index].includes("degree")
                      ? `${styles["grade-p"]} ${styles["error-text"]}`
                      : styles["grade-p"]
                  }
                >
                  ხარისხი
                </p>
                <div className={styles["input-div"]}>
                  <select
                    value={educationArray?.degree || "აირჩიეთ ხარისხი"}
                    className={
                      errorInputs[index].includes("degree")
                        ? `${styles["grade-input"]} ${styles["error-input"]}`
                        : styles["grade-input"]
                    }
                    style={
                      !errorInputs[index].includes("degree") && formData.educations[index]?.degree !== ""
                        ? { border: "1px solid #98E37E" }
                        : {}
                    }
                    onChange={(e) => handleInputChange(e, "degree", index)}
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
                  {!errorInputs[index].includes("degree") && formData.educations[index]?.degree !== "" && (
                    <img
                      className={styles["correct-vector"]}
                      style={{ right: "0px" }}
                      src={CorrectVector}
                      alt="correct-vector"
                    />
                  )}
                  {errorInputs[index].includes("degree") && (
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
                      formData.educations[index]?.due_date !== ""
                        ? { border: "1px solid #98E37E" }
                        : {}
                    }
                    type="date"
                    value={educationArray?.due_date}
                    onChange={(e) => handleInputChange(e, "due_date", index)}
                  />
                  {!errorInputs[index].includes("due_date") &&
                    formData.educations[index].due_date !== "" && (
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
                    placeholder="განათლების აღწერა"
                    className={
                      errorInputs[index].includes("description")
                        ? `${styles["description-textarea"]} ${styles["error-input"]}`
                        : styles["description-textarea"]
                    }
                    style={
                      !errorInputs[index].includes("description") &&
                      formData.educations[index]?.description !== ""
                        ? { border: "1px solid #98E37E" }
                        : {}
                    }
                    value={educationArray?.description}
                    onChange={(e) => handleInputChange(e, "description", index)}
                  ></textarea>
                  {!errorInputs[index].includes("description") &&
                    formData.educations[index]?.description !== "" && (
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
