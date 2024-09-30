import { useEffect, useState } from "react";
import Accordion from "../Accordion/Accordion";
import MainContent from "../MainContent/MainContent";
import "./MyOffice.scss";
import clsx from "clsx";
import titleImage from "../../assets/vacancyTitleImg.png";
import InputCheckbox from "../Input/InputCheckbox/InputCheckbox";

const categoriesList = [
  {
    id: 5,
    name: "Software Development",
  },
  {
    id: 6,
    name: "IT Infrastructure",
  },
  {
    id: 7,
    name: "IT Management & Strategy",
  },
  {
    id: 8,
    name: "Cybersecurity",
  },
  {
    id: 9,
    name: "Product & UX Design",
  },
  {
    id: 10,
    name: "Marketing & Content",
  },
  {
    id: 11,
    name: "Data Analysis & Business",
  },
];

const MyOffice = () => {
  const [isActive, setIsActive] = useState("vacancy");
  const [categories, setCategories] = useState(categoriesList);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const getJobsCategories = async () => {
    const BASE_URL = "https://glowing-boa-definite.ngrok-free.app";

    try {
      const res = await fetch(`${BASE_URL}/jobs/job-categories`);

      const data = await res.json();
      console.log(data);
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getJobsCategories();
  }, []);

  return (
    <div className="container">
      <div className="my-office-box">
        <img className="my-office-icon" src={titleImage} alt="icon-title" />
        <h2 className="my-office-title">Мій кабінет</h2>
      </div>
      <div className="head-vacancy">
        <p
          className={clsx("head-vacancy-title", {
            active: isActive === "vacancy",
          })}
          onClick={() => {
            setIsActive("vacancy");
          }}
        >
          Вакансії (10)
        </p>
        <p
          className={clsx("head-vacancy-title", {
            active: isActive === "announcements",
          })}
          onClick={() => {
            setIsActive("announcements");
          }}
        >
          Оголошення (10)
        </p>
      </div>
      <div className="main-box">
        <form className="sidebar">
          <Accordion accordionTitle="Категорія">
            <ul>
              {categories.map((category) => {
                return (
                  <li key={category.id}>
                    <InputCheckbox label={category.name}></InputCheckbox>
                  </li>
                );
              })}
            </ul>
          </Accordion>
          <Accordion accordionTitle="Компанії">
            <InputCheckbox label="SoftServe"></InputCheckbox>
            <InputCheckbox label="Nakivo"></InputCheckbox>
            <InputCheckbox label="MCPK"></InputCheckbox>
            <InputCheckbox label="GlobalLogic"></InputCheckbox>
            <InputCheckbox label="Luxoft"></InputCheckbox>
          </Accordion>
          <Accordion accordionTitle="За датою">
            <InputCheckbox label="Сьогодні"></InputCheckbox>
            <InputCheckbox label="Вчора"></InputCheckbox>
            <InputCheckbox label="Останні 7 днів"></InputCheckbox>
            <InputCheckbox label="Останні 30 днів"></InputCheckbox>
            <div>
              <InputCheckbox
                label="Вказаний період"
                onChange={handleCheckboxChange}
              ></InputCheckbox>

              {isChecked && (
                <div className="input-box">
                  <label className="form-date">
                    З*:
                    <input
                      className="date-input"
                      type="date"
                      placeholder="дд/мм/рррр"
                    />
                  </label>
                  <label className="form-date">
                    По*:
                    <input
                      className="date-input"
                      type="date"
                      placeholder="дд/мм/рррр"
                    />
                  </label>
                </div>
              )}
            </div>
          </Accordion>
        </form>
        <MainContent />
      </div>
    </div>
  );
};

export default MyOffice;
