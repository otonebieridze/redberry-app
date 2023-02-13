import styles from "./PersonalInfo.module.css";
import Vector from "../../../../assets/images/Vector.png";
import ErrorVector from "../../../../assets/images/Error-Vector.png";
import CorrectVector from "../../../../assets/images/Correct-Vector.png";
import { useState } from "react";
import InputMask from "react-input-mask";

export default function PersonalInfo({
  formData,
  setFormData,
  setCurrentPage,
  setCurrentResumeStage,
}) {
  const [errorInputs, setErrorInputs] = useState(
    JSON.parse(localStorage.getItem("errorInputsPersonalInfo")) || []
  );
  const [errorsArray, setErrorsArray] = useState(
    JSON.parse(localStorage.getItem("errorsArrayPersonalInfo")) || [
      "name",
      "surname",
      "email",
      "phone_number",
      "image",
    ]
  );
  const [isChanged, setIsChanged] = useState(
    JSON.parse(localStorage.getItem("isChangedPersonalInfo")) || false
  );

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const dataUrl = reader.result;
      setFormData({ ...formData, image: dataUrl });
      setErrorInputs((prev) => prev.filter((item) => item !== "image"));
      setErrorsArray((prev) => prev.filter((item) => item !== "image"));

      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, image: dataUrl })
      );
      localStorage.setItem(
        "errorInputsPersonalInfo",
        JSON.stringify(errorInputs.filter((item) => item !== "image"))
      );
      localStorage.setItem(
        "errorsArrayPersonalInfo",
        JSON.stringify(errorsArray.filter((item) => item !== "image"))
      );
    };

    setIsChanged(true);
    localStorage.setItem("isChangedPersonalInfo", true);
  };

  const handleInputChange = (e, inputName) => {
    if (inputName === "name") {
      setFormData({ ...formData, name: e.target.value });
      if (e.target.value.match("^[ა-ჰ]{2,}$") !== null) {
        setErrorInputs((prev) => prev.filter((item) => item !== "name"));
        setErrorsArray((prev) => prev.filter((item) => item !== "name"));
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, name: e.target.value })
        );
        localStorage.setItem(
          "errorInputsPersonalInfo",
          JSON.stringify(errorInputs.filter((item) => item !== "name"))
        );
        localStorage.setItem(
          "errorsArrayPersonalInfo",
          JSON.stringify(errorsArray.filter((item) => item !== "name"))
        );
      } else {
        setErrorInputs((prev) => [...prev, "name"]);
        setErrorsArray((prev) => [...prev, "name"]);
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, name: e.target.value })
        );
        localStorage.setItem(
          "errorInputsPersonalInfo",
          JSON.stringify([...errorInputs, "name"])
        );
        localStorage.setItem(
          "errorsArrayPersonalInfo",
          JSON.stringify([...errorsArray, "name"])
        );
      }
    } else if (inputName === "surname") {
      setFormData({ ...formData, surname: e.target.value });
      if (e.target.value.match("^[ა-ჰ]{2,}$") !== null) {
        setErrorInputs((prev) => prev.filter((item) => item !== "surname"));
        setErrorsArray((prev) => prev.filter((item) => item !== "surname"));
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, surname: e.target.value })
        );
        localStorage.setItem(
          "errorInputsPersonalInfo",
          JSON.stringify(errorInputs.filter((item) => item !== "surname"))
        );
        localStorage.setItem(
          "errorsArrayPersonalInfo",
          JSON.stringify(errorsArray.filter((item) => item !== "surname"))
        );
      } else {
        setErrorInputs((prev) => [...prev, "surname"]);
        setErrorsArray((prev) => [...prev, "surname"]);
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, surname: e.target.value })
        );
        localStorage.setItem(
          "errorInputsPersonalInfo",
          JSON.stringify([...errorInputs, "surname"])
        );
        localStorage.setItem(
          "errorsArrayPersonalInfo",
          JSON.stringify([...errorsArray, "surname"])
        );
      }
    } else if (inputName === "email") {
      setFormData({ ...formData, email: e.target.value });
      if (e.target.value.match(".*.@redberry.ge$") !== null) {
        setErrorInputs((prev) => prev.filter((item) => item !== "email"));
        setErrorsArray((prev) => prev.filter((item) => item !== "email"));
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, email: e.target.value })
        );
        localStorage.setItem(
          "errorInputsPersonalInfo",
          JSON.stringify(errorInputs.filter((item) => item !== "email"))
        );
        localStorage.setItem(
          "errorsArrayPersonalInfo",
          JSON.stringify(errorsArray.filter((item) => item !== "email"))
        );
      } else {
        setErrorInputs((prev) => [...prev, "email"]);
        setErrorsArray((prev) => [...prev, "email"]);
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, email: e.target.value })
        );
        localStorage.setItem(
          "errorInputsPersonalInfo",
          JSON.stringify([...errorInputs, "email"])
        );
        localStorage.setItem(
          "errorsArrayPersonalInfo",
          JSON.stringify([...errorsArray, "email"])
        );
      }
    } else if (inputName === "phone_number") {
      setFormData({ ...formData, phone_number: e.target.value });
      const pattern = /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/;
      if (pattern.test(e.target.value)) {
        setErrorInputs((prev) => prev.filter((item) => item !== "phone_number"));
        setErrorsArray((prev) => prev.filter((item) => item !== "phone_number"));
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, phone_number: e.target.value })
        );
        localStorage.setItem(
          "errorInputsPersonalInfo",
          JSON.stringify(errorInputs.filter((item) => item !== "phone_number"))
        );
        localStorage.setItem(
          "errorsArrayPersonalInfo",
          JSON.stringify(errorsArray.filter((item) => item !== "phone_number"))
        );
      } else {
        setErrorInputs((prev) => [...prev, "phone_number"]);
        setErrorsArray((prev) => [...prev, "phone_number"]);
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, phone_number: e.target.value })
        );
        localStorage.setItem(
          "errorInputsPersonalInfo",
          JSON.stringify([...errorInputs, "phone_number"])
        );
        localStorage.setItem(
          "errorsArrayPersonalInfo",
          JSON.stringify([...errorsArray, "phone_number"])
        );
      }
    }
    setIsChanged(true);
    localStorage.setItem("isChangedPersonalInfo", true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.match("^[ა-ჰ]{2,}$") === null) {
      setErrorInputs((prev) => [...prev, "name"]);
    }
    if (formData.surname.match("^[ა-ჰ]{2,}$") === null) {
      setErrorInputs((prev) => [...prev, "surname"]);
    }
    if (formData.email.match(".*.@redberry.ge$") === null) {
      setErrorInputs((prev) => [...prev, "email"]);
    }
    const pattern = /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/;
    if (!pattern.test(formData.phone_number)) {
      setErrorInputs((prev) => [...prev, "phone_number"]);
    }
    if (formData.image === "") {
      setErrorInputs((prev) => [...prev, "image"]);
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, image: e.target.value })
      );
      localStorage.setItem(
        "errorInputsPersonalInfo",
        JSON.stringify([...errorInputs, "image"])
      );
    }

    if (errorInputs.length === 0 && errorsArray.length === 0 && isChanged) {
      setCurrentResumeStage(2);
      localStorage.setItem("currentResumeStage", 2);
    }
  };

  return (
    <div className={styles["personal-info"]}>
      <img
        className={styles.vector}
        src={Vector}
        alt="vector"
        onClick={() => {
          setCurrentPage(1);
          localStorage.clear();
        }}
      />

      <header className={styles["personal-info-header"]}>
        <p className={styles["personal-info-title"]}>ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</p>
        <p className={styles["personal-info-text"]}>1/3</p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className={styles["name-surname-container"]}>
          <div className={styles["name-div"]}>
            <p
              className={
                errorInputs.includes("name")
                  ? `${styles["name-title"]} ${styles["error-text"]}`
                  : styles["name-title"]
              }
            >
              სახელი
            </p>
            <div className={styles["input-div"]}>
              <input
                placeholder="ანზორ"
                className={
                  errorInputs.includes("name")
                    ? `${styles["name-input"]} ${styles["error-input"]}`
                    : styles["name-input"]
                }
                style={
                  !errorInputs.includes("name") && formData.name !== ""
                    ? { border: "1px solid #98E37E" }
                    : {}
                }
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange(e, "name")}
              />
              {!errorInputs.includes("name") && formData.name !== "" && (
                <img
                  className={styles["correct-vector"]}
                  src={CorrectVector}
                  alt="correct-vector"
                />
              )}
              {errorInputs.includes("name") && (
                <img
                  className={styles["error-vector"]}
                  src={ErrorVector}
                  alt="error-vector"
                />
              )}
            </div>
            <p className={styles["name-validation-text"]}>
              მინიმუმ 2 ასო, ქართული ასოები
            </p>
          </div>
          <div className={styles["surname-div"]}>
            <p
              className={
                errorInputs.includes("surname")
                  ? `${styles["surname-title"]} ${styles["error-text"]}`
                  : styles["surname-title"]
              }
            >
              გვარი
            </p>
            <div className={styles["input-div"]}>
              <input
                placeholder="მუმლაძე"
                className={
                  errorInputs.includes("surname")
                    ? `${styles["surname-input"]} ${styles["error-input"]}`
                    : styles["surname-input"]
                }
                style={
                  !errorInputs.includes("surname") && formData.surname !== ""
                    ? { border: "1px solid #98E37E" }
                    : {}
                }
                type="text"
                value={formData.surname}
                onChange={(e) => handleInputChange(e, "surname")}
              />
              {!errorInputs.includes("surname") && formData.surname !== "" && (
                <img
                  className={styles["correct-vector"]}
                  src={CorrectVector}
                  alt="correct-vector"
                />
              )}
              {errorInputs.includes("surname") && (
                <img
                  className={styles["error-vector"]}
                  src={ErrorVector}
                  alt="error-vector"
                />
              )}
            </div>
            <p className={styles["surname-validation-text"]}>
              მინიმუმ 2 ასო, ქართული ასოები
            </p>
          </div>
        </div>

        <div className={styles["personal-image-div"]}>
          <div className={styles["personal-image-child-div"]}>
            <div className={styles["input-div"]} style={{ width: "355px" }}>
              <p className={styles["add-photo-p"]}>პირადი ფოტოს ატვირთვა</p>
              <input
                onChange={(e) => handleImageChange(e)}
                className={styles["add-photo-input"]}
                style={
                  !errorInputs.includes("image") && formData.image !== ""
                    ? { border: "1px solid #98E37E" }
                    : {}
                }
                type="file"
                id="file"
                accept="image/*"
              />
              <label className={styles["add-photo-input-label"]} htmlFor="file">
                ატვირთვა
              </label>
            </div>
            {!errorInputs.includes("image") && formData.image !== "" && (
              <img
                className={styles["correct-vector"]}
                style={{ right: "25px" }}
                src={CorrectVector}
                alt="correct-vector"
              />
            )}
            {errorInputs.includes("image") && (
              <img
                className={styles["error-vector"]}
                src={ErrorVector}
                alt="error-vector"
              />
            )}
          </div>
        </div>

        <div className={styles["about-you-div"]}>
          <p className={styles["about-you-p"]}>ჩემ შესახებ (არასავალდებულო)</p>
          <textarea
            placeholder="ზოგადი ინფო შენ შესახებ"
            className={styles["about-you-textarea"]}
            value={formData.about_me}
            onChange={(e) => {
              setFormData({ ...formData, about_me: e.target.value });
              localStorage.setItem(
                "formData",
                JSON.stringify({ ...formData, about_me: e.target.value })
              );
            }}
          ></textarea>
        </div>

        <div className={styles["email-div"]}>
          <p
            className={
              errorInputs.includes("email")
                ? `${styles["email-p"]} ${styles["error-text"]}`
                : styles["email-p"]
            }
          >
            ელ.ფოსტა
          </p>
          <div className={styles["input-div-2"]}>
            <input
              placeholder="anzorr666@redberry.ge"
              className={
                errorInputs.includes("email")
                  ? `${styles["email-input"]} ${styles["error-input"]}`
                  : styles["email-input"]
              }
              style={
                !errorInputs.includes("email") && formData.email !== ""
                  ? { border: "1px solid #98E37E" }
                  : {}
              }
              type="text"
              value={formData.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
            {!errorInputs.includes("email") && formData.email !== "" && (
              <img
                className={styles["correct-vector"]}
                src={CorrectVector}
                alt="correct-vector"
              />
            )}
            {errorInputs.includes("email") && (
              <img
                className={styles["error-vector"]}
                src={ErrorVector}
                alt="error-vector"
              />
            )}
          </div>
          <p className={styles["email-validation-text"]}>
            უნდა მთავრდებოდეს @redberry.ge-ით
          </p>
        </div>

        <div className={styles["phone-div"]}>
          <p
            className={
              errorInputs.includes("phone_number")
                ? `${styles["phone-p"]} ${styles["error-text"]}`
                : styles["phone-p"]
            }
          >
            მობილურის ნომერი
          </p>
          <div className={styles["input-div-2"]}>
            <InputMask
              placeholder="+995 551 12 34 56"
              mask="+999 999 99 99 99"
              maskChar={null}
              className={
                errorInputs.includes("phone_number")
                  ? `${styles["phone-input"]} ${styles["error-input"]}`
                  : styles["phone-input"]
              }
              style={
                !errorInputs.includes("phone_number") && formData.phone_number !== ""
                  ? { border: "1px solid #98E37E" }
                  : {}
              }
              type="text"
              value={formData.phone_number}
              onChange={(e) => handleInputChange(e, "phone_number")}
            />
            {!errorInputs.includes("phone_number") && formData.phone_number !== "" && (
              <img
                className={styles["correct-vector"]}
                src={CorrectVector}
                alt="correct-vector"
              />
            )}
            {errorInputs.includes("phone_number") && (
              <img
                className={styles["error-vector"]}
                src={ErrorVector}
                alt="error-vector"
              />
            )}
          </div>
          <p className={styles["phone-validation-text"]}>
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </p>
        </div>

        <button className={styles["next-btn"]} type="submit">
          <p className={styles["next-btn-p"]}>ᲨᲔᲛᲓᲔᲒᲘ</p>
        </button>
      </form>
    </div>
  );
}
