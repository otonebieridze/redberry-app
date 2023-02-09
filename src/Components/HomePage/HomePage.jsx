import styles from "./HomePage.module.css";
import logo1 from "../../assets/images/LOGO-01.png";
import logo2 from "../../assets/images/LOGO-02.png";

export default function HomePage({ setCurrentPage }) {
  const handleResumeAddClick = () => {
    setCurrentPage(2)
    localStorage.setItem("currentPage", 2)
  }

  return (
    <div className={styles.container}>
      <img className={styles["logo-1"]} src={logo1} alt="logo1" />
      <header className={styles.header}>
        <img className={styles["logo-2"]} src={logo2} alt="logo2" />
      </header>
      <button className={styles["resume-add-btn"]} onClick={handleResumeAddClick}>
        <p className={styles["resume-add-p"]}>ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</p>
      </button>
    </div>
  );
}
