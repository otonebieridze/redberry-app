import { useState } from "react";
import styles from "./ResumePage.module.css";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import Resume from "./Components/Resume/Resume";

export default function ResumePage({  setCurrentPage }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [aboutYou, setAboutYou] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [errorInputs, setErrorInputs] = useState([]);

  return (
    <div className={styles.container}>
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
      />

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
