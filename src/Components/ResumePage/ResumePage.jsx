import { useState } from "react";
import styles from "./ResumePage.module.css";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Resume from "./Components/Resume/Resume";

export default function ResumePage({ setCurrentPage }) {
  const [currentResumeStage, setCurrentResumeStage] = useState(
    JSON.parse(localStorage.getItem("currentResumeStage")) || 1
  );

  const [formData, setFormData] = useState({
    name: JSON.parse(localStorage.getItem("formData"))?.name || "",
    surname: JSON.parse(localStorage.getItem("formData"))?.surname || "",
    aboutYou: JSON.parse(localStorage.getItem("formData"))?.aboutYou || "",
    email: JSON.parse(localStorage.getItem("formData"))?.email || "",
    phone: JSON.parse(localStorage.getItem("formData"))?.phone || "",
    imageSrc: JSON.parse(localStorage.getItem("formData"))?.imageSrc || "",
    position: JSON.parse(localStorage.getItem("formData"))?.position || "",
    employer: JSON.parse(localStorage.getItem("formData"))?.employer || "",
    positionStartDate:
      JSON.parse(localStorage.getItem("formData"))?.positionStartDate || "",
    positionEndDate:
      JSON.parse(localStorage.getItem("formData"))?.positionEndDate || "",
    positionDescription:
      JSON.parse(localStorage.getItem("formData"))?.positionDescription || "",
    college: JSON.parse(localStorage.getItem("formData"))?.college || "",
    grade: JSON.parse(localStorage.getItem("formData"))?.grade || "",
    collegeEndDate: JSON.parse(localStorage.getItem("formData"))?.collegeEndDate || "",
    educationDescription: JSON.parse(localStorage.getItem("formData"))?.educationDescription || "",
  });

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
