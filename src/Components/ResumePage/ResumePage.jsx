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
    about_me: JSON.parse(localStorage.getItem("formData"))?.about_me || "",
    email: JSON.parse(localStorage.getItem("formData"))?.email || "",
    phone_number:
      JSON.parse(localStorage.getItem("formData"))?.phone_number || "",
    image: JSON.parse(localStorage.getItem("formData"))?.image || "",
    experiences: [
      {
        position:
          JSON.parse(localStorage.getItem("formData"))?.experiences[0]
            .position || "",
        employer:
          JSON.parse(localStorage.getItem("formData"))?.experiences[0]
            .employer || "",
        start_date:
          JSON.parse(localStorage.getItem("formData"))?.experiences[0]
            .start_date || "",
        due_date:
          JSON.parse(localStorage.getItem("formData"))?.experiences[0]
            .due_date || "",
        description:
          JSON.parse(localStorage.getItem("formData"))?.experiences[0]
            .description || "",
      },
    ],
    educations: [
      {
        institute:
          JSON.parse(localStorage.getItem("formData"))?.educations[0]
            .institute || "",
        degree:
          JSON.parse(localStorage.getItem("formData"))?.educations[0].degree ||
          "",
        due_date:
          JSON.parse(localStorage.getItem("formData"))?.educations[0]
            .due_date || "",
        description:
          JSON.parse(localStorage.getItem("formData"))?.educations[0]
            .description || "",
      },
    ],
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
