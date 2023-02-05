import { useState } from "react";
import styles from "./ResumePage.module.css";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Resume from "./Components/Resume/Resume";

export default function ResumePage({ setCurrentPage }) {
  const [currentResumeStage, setCurrentResumeStage] = useState(1);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [aboutYou, setAboutYou] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  return (
    <div className={styles.container}>
      {currentResumeStage === 1 ? (
        <PersonalInfo
          name={name}
          setName={setName}
          surname={surname}
          setSurname={setSurname}
          aboutYou={aboutYou}
          setAboutYou={setAboutYou}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          setImageSrc={setImageSrc}
          setCurrentPage={setCurrentPage}
          setCurrentResumeStage={setCurrentResumeStage}
        />
      ) : null}

      {currentResumeStage === 2 ? (
        <Experience
          setCurrentPage={setCurrentPage}
          setCurrentResumeStage={setCurrentResumeStage}
        />
      ) : null}

      {currentResumeStage === 3 ? (
        <Education
          setCurrentPage={setCurrentPage}
          setCurrentResumeStage={setCurrentResumeStage}
        />
      ) : null}

      <Resume
        name={name}
        surname={surname}
        aboutYou={aboutYou}
        email={email}
        phone={phone}
        imageSrc={imageSrc}
      />
    </div>
  );
}
