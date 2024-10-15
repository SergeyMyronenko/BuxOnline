import { HiOutlineLocationMarker } from "react-icons/hi";
import JobDescriptionCard from "../JobDescriptionCard/JobDescriptionCard";
import { LiaUserClockSolid } from "react-icons/lia";
import { FaHandshakeAngle, FaHouseLaptop } from "react-icons/fa6";
import { IoLanguageOutline } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import "./VacancyDetails.scss";

const testVacancy = {
  title: "Back End Engineer",
  description:
    "Ми шукаємо досвідченого бекенд-інженера, який добре орієнтується в таких мовах програмування, як Python, Java або Node.js. Цей кандидат повинен швидко навчатися та вміти вирішувати складні завдання. Він повинен бути в курсі останніх технологічних трендів. Для нас важливо, щоб цей кандидат був командним гравцем і вмів ефективно спілкуватися з колегами. Ми цінуємо командну роботу і прагнемо створити динамічне та продуктивне робоче середовище.",
  skills: ["Python", "Java", "Node.js"],
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

const VacancyDetails = ({ btnApply, btnReject, onClick }) => {
  const [handleApprove, handleReject] = onClick;
  return (
    <>
      <div className="confirm-wrapper">
        <div className="inner-confirm-wrapper">
          <h2 className="title">{testVacancy.title}</h2>
          <h4 className="city">
            <HiOutlineLocationMarker />
            {testVacancy.city}
          </h4>
          <div className="job-bullet-points">
            <JobDescriptionCard
              title="Вид зайнятості"
              description={testVacancy.work_type}
              icon={<LiaUserClockSolid />}
            ></JobDescriptionCard>
            <JobDescriptionCard
              title="Робоче середовище"
              description={testVacancy.work_format}
              icon={<FaHouseLaptop />}
            ></JobDescriptionCard>
            <JobDescriptionCard
              title="Тип бізнесу"
              description={testVacancy.business_type}
              icon={<FaHandshakeAngle />}
            ></JobDescriptionCard>
            <JobDescriptionCard
              title="Mови"
              description={testVacancy.languages}
              icon={<IoLanguageOutline />}
            ></JobDescriptionCard>
            <JobDescriptionCard
              title="Діапазон заробітної плати"
              description={[
                `$${testVacancy.salary_min}-`,
                `$${testVacancy.salary_max}`,
              ]}
              icon={<GiWallet />}
            ></JobDescriptionCard>
          </div>
          <div className="job-description">
            <h3>Опис роботи</h3>
            <span>
              <p className="job-description-paragraph">
                {testVacancy.description}
              </p>
              <div className="skills-box">
                <h4>Skills</h4>
                <ul className="all-skills">
                  {testVacancy.skills.map((skill, index) => (
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
        </div>
      </div>
    </>
  );
};

export default VacancyDetails;
