import styles from "./Education.module.css";
import Vector from "../../../../assets/images/Vector.png";

export default function Education({ setCurrentPage, setCurrentResumeStage }) {
  const handleBackBtnClick = (e) => {
    e.preventDefault()
    setCurrentResumeStage(2)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("completed!")
  };

  return (
    <div className={styles["education-page"]}>
      <img
        className={styles.vector}
        src={Vector}
        alt="vector"
        onClick={() => setCurrentPage(1)}
      />

      <header className={styles["education-page-header"]}>
        <p className={styles["education-page-title"]}>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</p>
        <p className={styles["education-page-text"]}>3/3</p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className={styles["college-div"]}>
          <p className={styles["college-p"]}>სასწავლებელი</p>
          <input
            placeholder="სასწავლებელი"
            className={styles["college-input"]}
            type="text"
          />
          <p className={styles["college-validation-text"]}>
            მინიმუმ 2 სიმბოლო
          </p>
        </div>

        <div className={styles["grade-div"]}>
          <p className={styles["grade-p"]}>ხარისხი</p>
          <select className={styles["grade-input"]}>
            <option>აირჩიეთ ხარისხი</option>
          </select>
        </div>

        <div className={styles["end-date-div"]}>
          <p className={styles["end-date-p"]}>დამთავრების რიცხვი</p>
          <input className={styles["end-date-input"]} type="date" />
        </div>

        <div className={styles["description-div"]}>
          <p className={styles["description-p"]}>აღწერა</p>
          <textarea
            placeholder="განათლების აღწერა"
            className={styles["description-textarea"]}
          ></textarea>
        </div>

        <div className={styles.line}></div>

        <button
          className={styles["add-education-btn"]}
          onClick={(e) => e.preventDefault()}
        >
          სხვა სასწავლებლის დამატება
        </button>

        <button className={styles["back-btn"]} onClick={handleBackBtnClick}>ᲣᲙᲐᲜ</button>
        <button className={styles["complete-btn"]} type="submit">ᲓᲐᲡᲠᲣᲚᲔᲑᲐ</button>
      </form>
    </div>
  )
}
