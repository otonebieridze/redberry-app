import styles from "./Experience.module.css";
import Vector from "../../../../assets/images/Vector.png";

export default function Experience({ setCurrentPage, setCurrentResumeStage }) {
  const handleBackBtnClick = (e) => {
    e.preventDefault()
    setCurrentResumeStage(1)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentResumeStage(3)
  };

  return (
    <div className={styles["experience-page"]}>
      <img
        className={styles.vector}
        src={Vector}
        alt="vector"
        onClick={() => setCurrentPage(1)}
      />

      <header className={styles["experience-page-header"]}>
        <p className={styles["experience-page-title"]}>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</p>
        <p className={styles["experience-page-text"]}>2/3</p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className={styles["position-div"]}>
          <p className={styles["position-p"]}>თანამდებობა</p>
          <input
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
            className={styles["position-input"]}
            type="text"
          />
          <p className={styles["position-validation-text"]}>
            მინიმუმ 2 სიმბოლო
          </p>
        </div>

        <div className={styles["employer-div"]}>
          <p className={styles["employer-p"]}>დამსაქმებელი</p>
          <input
            placeholder="დამსაქმებელი"
            className={styles["employer-input"]}
            type="text"
          />
          <p className={styles["employer-validation-text"]}>
            მინიმუმ 2 სიმბოლო
          </p>
        </div>

        <div className={styles["start-date-div"]}>
          <p className={styles["start-date-p"]}>დაწყების რიცხვი</p>
          <input className={styles["start-date-input"]} type="date" />
        </div>

        <div className={styles["end-date-div"]}>
          <p className={styles["end-date-p"]}>დამთავრების რიცხვი</p>
          <input className={styles["end-date-input"]} type="date" />
        </div>

        <div className={styles["description-div"]}>
          <p className={styles["description-p"]}>აღწერა</p>
          <textarea
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            className={styles["description-textarea"]}
          ></textarea>
        </div>

        <div className={styles.line}></div>

        <button
          className={styles["add-experience-btn"]}
          onClick={(e) => e.preventDefault()}
        >
          მეტი გამოცდილების დამატება
        </button>

        <button className={styles["back-btn"]} onClick={handleBackBtnClick}>ᲣᲙᲐᲜ</button>
        <button className={styles["next-btn"]} type="submit">ᲨᲔᲛᲓᲔᲒᲘ</button>
      </form>
    </div>
  );
}
