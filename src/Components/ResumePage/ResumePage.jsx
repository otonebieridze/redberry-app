import { useState } from "react";
import styles from "./ResumePage.module.css";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Resume from "./Components/Resume/Resume";

export default function ResumePage({ setCurrentPage }) {
  const [currentResumeStage, setCurrentResumeStage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    aboutYou: "",
    email: "",
    phone: "",
    imageSrc: "",
    position: "",
    employer: "",
    positionStartDate: "",
    positionEndDate: "",
    positionDescription: "",

    college: "",
    grade: "",
    collegeEndDate: "",
    educationDescription: "",
  })

  return (
    <div className={styles.container}>
      {currentResumeStage === 1 ? (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          setCurrentPage={setCurrentPage}
          setCurrentResumeStage={setCurrentResumeStage}
        />
      ) : null}

      {currentResumeStage === 2 ? (
        <Experience
          formData={formData}
          setFormData={setFormData}
          setCurrentPage={setCurrentPage}
          setCurrentResumeStage={setCurrentResumeStage}
        />
      ) : null}

      {currentResumeStage === 3 ? (
        <Education
          formData={formData}
          setFormData={setFormData}
          setCurrentPage={setCurrentPage}
          setCurrentResumeStage={setCurrentResumeStage}
        />
      ) : null}

      <Resume {...formData} currentResumeStage={currentResumeStage} />
    </div>
  );
}
