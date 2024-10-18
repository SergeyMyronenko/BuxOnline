import { HiOutlineLocationMarker } from "react-icons/hi";
import JobDescriptionCard from "../JobDescriptionCard/JobDescriptionCard";
import { LiaUserClockSolid } from "react-icons/lia";
import { FaHandshakeAngle, FaHouseLaptop } from "react-icons/fa6";
import { IoLanguageOutline } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import "./VacancyDetails.scss";
import { useEffect, useState } from "react";
import editIcon from "../../assets/edit.svg";
import { Link, useParams } from "react-router-dom";

const testVacancy = {
  title: "Back End Engineer",
  description:
    "Ми шукаємо досвідченого бекенд-інженера, який добре орієнтується в таких мовах програмування, як Python, Java або Node.js. Цей кандидат повинен швидко навчатися та вміти вирішувати складні завдання. Він повинен бути в курсі останніх технологічних трендів. Для нас важливо, щоб цей кандидат був командним гравцем і вмів ефективно спілкуватися з колегами. Ми цінуємо командну роботу і прагнемо створити динамічне та продуктивне робоче середовище.",
  skills: [9, 10, 11, 12],
  required_experience: 3,
  city: "Київ",
  salary_min: 50000,
  salary_max: 70000,
  category: 1,
  subcategory: 2,
  education_levels: [1, 2],
  languages: ["Endlish", "Spanish"],
  business_type: ["Startup", "Product"],
  work_type: ["part-time", "full-time"],
  work_format: ["online", "hybrid"],
  status: "pending",
};

const URL = "https://relaxing-ultimate-chigger.ngrok-free.app";
const myHeaders = new Headers();
myHeaders.append("ngrok-skip-browser-warning", "69420");
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const VacancyDetails = ({ btnApply, btnReject, onClick }) => {
  const [handleApprove, handleReject] = onClick;
  const [skillsId, setSkillsId] = useState([]);
  const [names, setNames] = useState([]);
  const { id, vacancyId } = useParams();
  console.log(skillsId);
  console.log(names);

  const {
    title,
    city,
    work_type,
    work_format,
    business_type,
    languages,
    salary_min,
    salary_max,
    description,
  } = testVacancy;

  const getSkills = async () => {
    try {
      const res = await fetch(`${URL}/jobs/skills`, requestOptions);

      const data = await res.json();
      setSkillsId(data);
      console.log("list", data);

      const skillName = skillsId.filter((skill) =>
        testVacancy.skills.includes(skill.id).map((item) => item.name)
      );
      console.log("nameList", skillName);

      setNames(skillName);
    } catch (error) {
      console.error("Помилка при завантаженні даних:", error);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <>
      <div className="confirm-wrapper">
        <div className="inner-confirm-wrapper">
          <h2 className="title">{title}</h2>
          <h4 className="city">
            <HiOutlineLocationMarker />
            {city}
          </h4>
          <div className="job-bullet-points">
            <JobDescriptionCard
              title="Вид зайнятості"
              description={work_type}
              icon={<LiaUserClockSolid />}
            ></JobDescriptionCard>
            <JobDescriptionCard
              title="Робоче середовище"
              description={work_format}
              icon={<FaHouseLaptop />}
            ></JobDescriptionCard>
            <JobDescriptionCard
              title="Тип бізнесу"
              description={business_type}
              icon={<FaHandshakeAngle />}
            ></JobDescriptionCard>
            <JobDescriptionCard
              title="Mови"
              description={languages}
              icon={<IoLanguageOutline />}
            ></JobDescriptionCard>
            <JobDescriptionCard
              title="Діапазон заробітної плати"
              description={[`$${salary_min}-`, `$${salary_max}`]}
              icon={<GiWallet />}
            ></JobDescriptionCard>
          </div>
          <div className="job-description">
            <h3>Опис роботи</h3>
            <span>
              <p className="job-description-paragraph">{description}</p>
              <div className="skills-box">
                <h4>Skills</h4>
                <ul className="all-skills">
                  {names.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </span>
          </div>
          <div className="job-description">
            <h3>Ідеальна особа кандидата</h3>
            <p>
              Ідеальний кандидат на посаду бекенд-інженера - це досвідчений
              спеціаліст з глибокими знаннями Python, Java або Node.js, швидким
              навчанням та вмінням вирішувати складні завдання. Він повинен бути
              в курсі новітніх технологій, комунікабельним і вміти працювати в
              команді. Також важливо мати досвід в розробці високопродуктивних
              та масштабованих додатків.
            </p>
          </div>
        </div>
        <div className="card-details-button">
          <button
            className="button details-button"
            type="submit"
            onClick={handleApprove}
          >
            {btnApply}
          </button>
          <button
            className="button apply-button"
            type="submit"
            onClick={handleReject}
          >
            {btnReject}
          </button>
          <Link to={`/BuxOnline/moderator/cabinet/${id}/edit/${vacancyId}`}>
            <img src={editIcon} alt="icon for edit vacancy" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default VacancyDetails;
