import styles from "./PersonalInfo.module.css";
import Vector from "../../../../assets/images/Vector.png";

export default function PersonalInfo({
  name,
  setName,
  surname,
  setSurname,
  aboutYou,
  setAboutYou,
  email,
  setEmail,
  phone,
  setPhone,
  setImageSrc,
  setCurrentPage,
  setCurrentResumeStage,
}) {
  const handleImageChange = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImageSrc(reader.result);
    };
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentResumeStage(2)
  };

  return (
    <div className={styles["personal-info"]}>
      <img className={styles.vector} src={Vector} alt="vector" onClick={() => setCurrentPage(1)} />

      <header className={styles["personal-info-header"]}>
        <p className={styles["personal-info-title"]}>ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</p>
        <p className={styles["personal-info-text"]}>1/3</p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className={styles["name-div"]}>
          <p className={styles["name-title"]}>სახელი</p>
          <input
            placeholder="ანზორ"
            className={styles["name-input"]}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className={styles["name-validation-text"]}>
            მინიმუმ 2 ასო, ქართული ასოები
          </p>
        </div>
        <div className={styles["surname-div"]}>
          <p className={styles["surname-title"]}>გვარი</p>
          <input
            placeholder="მუმლაძე"
            className={styles["surname-input"]}
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <p className={styles["surname-validation-text"]}>
            მინიმუმ 2 ასო, ქართული ასოები
          </p>
        </div>

        <p className={styles["add-photo-p"]}>პირადი ფოტოს ატვირთვა</p>
        <input
          onChange={(e) => handleImageChange(e)}
          className={styles["add-photo-input"]}
          type="file"
          id="file"
          accept="image/*"
        />
        <label className={styles["add-photo-input-label"]} htmlFor="file">
          ატვირთვა
        </label>

        <div className={styles["about-you-div"]}>
          <p className={styles["about-you-p"]}>ჩემ შესახებ (არასავალდებულო)</p>
          <textarea
            placeholder="ზოგადი ინფო შენ შესახებ"
            className={styles["about-you-textarea"]}
            value={aboutYou}
            onChange={(e) => setAboutYou(e.target.value)}
          ></textarea>
        </div>

        <div className={styles["email-div"]}>
          <p className={styles["email-p"]}>ელ.ფოსტა</p>
          <input
            placeholder="anzorr666@redberry.ge"
            className={styles["email-input"]}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className={styles["email-validation-text"]}>
            უნდა მთავრდებოდეს @redberry.ge-ით
          </p>
        </div>

        <div className={styles["phone-div"]}>
          <p className={styles["phone-p"]}>მობილურის ნომერი</p>
          <input
            placeholder="+995 551 12 34 56"
            className={styles["phone-input"]}
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
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
