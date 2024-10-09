import { useEffect, useState } from "react";
import Accordion from "../Accordion/Accordion";
import MainContent from "../MainContent/MainContent";
import "./MyOffice.scss";
import clsx from "clsx";
import titleImage from "../../assets/vacancyTitleImg.png";
import InputCheckbox from "../Input/InputCheckbox/InputCheckbox";
import InputRadioBtn from "../Input/InputRadioBtn/InputRadioBtn";
import { useAuth } from "../../Hooks/useAuth";
import CompanyList from "../../../company.json";

const MyOffice = () => {
  const [cards, setCards] = useState([]);
  const [isActive, setIsActive] = useState("vacancy");
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [companies, setCompanies] = useState(CompanyList);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [datePeriod, setDatePeriod] = useState({ from: "", to: "" });
  const [isChecked, setIsChecked] = useState(false);
  const [vacancies, setVacancies] = useState(0);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState(null);

  const selectedItems = [selectedCategories, selectedCompanies];

  const URL = "https://glowing-boa-definite.ngrok-free.app";
  const myHeaders = new Headers();
  myHeaders.append("ngrok-skip-browser-warning", "69420");
  myHeaders.append("Content-Type", "application/json");
  const { token } = useAuth();
  myHeaders.append("Authorization", `JWT ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleRadioChange = (label) => {
    console.log("Вибрано:", label);

    if (selectedRadio !== label) {
      setSelectedRadio(label);
    }

    setIsChecked(label === "Вказаний період");
    setSelectedRadio(null);
    setIsChecked(false);
  };

  const handleCheckCategory = (categoryName) => {
    setSelectedCategories((prevSelected) => {
      const updatedCategories = prevSelected.includes(categoryName)
        ? prevSelected.filter((name) => name !== categoryName)
        : [...prevSelected, categoryName];

      return updatedCategories;
    });
  };

  const handleCheckCompanies = (companyName) => {
    setSelectedCompanies((prevSelected) => {
      const updateCompanies = prevSelected.includes(companyName)
        ? prevSelected.filter((name) => name !== companyName)
        : [...prevSelected, companyName];

      return updateCompanies;
    });
  };

  const handleChackDate = (selectedDate) => {
    setDatePeriod();
  };

  const filterVacancies = () => {
    let filteredCards = [...cards];

    // Filter by categories
    if (selectedCategories.length > 0) {
      filteredCards = filteredCards.filter((job) =>
        selectedCategories.includes(job.category)
      );
    }

    // Filter by companies
    if (companies.length > 0) {
      filteredCards = filteredCards.filter((job) =>
        companies.includes(job.name_company?.toLowerCase())
      );
    }

    setFilteredJobs(filteredCards);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setCompanies([]);
    setDatePeriod({ from: "", to: "" });
    setIsChecked(false);
  };

  const getCards = async () => {
    try {
      const res = await fetch(`${URL}/jobs/jobs`, requestOptions);

      if (!res.ok) {
        throw new Error(`Not found: ${res.text()}`);
      }

      const data = await res.json();

      setCards(data);
    } catch (error) {
      console.error("Помилка при завантаженні даних:", error);
      setCards([]);
    }
  };

  const getCompanies = async () => {
    const res = await fetch(`${URL}/auth/users`, requestOptions);

    if (!res.ok) {
      throw new Error(`Not found: ${res.text()}`);
    }
    const data = await res.json();
    setCompanies(data);
  };

  const getJobsCategories = async () => {
    const BASE_URL = "https://glowing-boa-definite.ngrok-free.app";

    const myHeaders = new Headers();
    myHeaders.append("ngrok-skip-browser-warning", "69420");
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const res = await fetch(
        `${BASE_URL}/jobs/job-categories`,
        requestOptions
      );

      if (!res.ok) {
        throw new Error(`Not found: ${await res.text()}`);
      }

      const data = await res.json();
      setCategories(data);

      const resJobs = await fetch(`${BASE_URL}/jobs/jobs`, requestOptions);

      if (!resJobs.ok) {
        throw new Error(`Not found: ${await res.text()}`);
      }

      const jobs = await resJobs.json();
      setVacancies(jobs.length);
      // setFilteredJobs(jobs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCards();
    getJobsCategories();
    // getCompanies();
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
          Вакансії ({vacancies})
        </p>
        {/* <p
          className={clsx("head-vacancy-title", {
            active: isActive === "announcements",
          })}
          onClick={() => {
            setIsActive("announcements");
          }}
        >
          Оголошення (10)
        </p> */}
      </div>
      <div className="main-box">
        <form
          className="sidebar"
          onSubmit={(e) => {
            e.preventDefault();
            filterVacancies();
          }}
        >
          <Accordion accordionTitle="Категорія">
            <ul>
              {categories.map((category) => {
                return (
                  <li key={category.id}>
                    <InputCheckbox
                      label={category.name}
                      onClick={() => {
                        handleCheckCategory(category.name);
                      }}
                    ></InputCheckbox>
                  </li>
                );
              })}
            </ul>
          </Accordion>
          <Accordion accordionTitle="Компанії">
            {companies.map((company, i) => {
              if (!company.company_name) {
                return;
              }

              return (
                <li key={i}>
                  <InputCheckbox
                    label={company.company_name}
                    onClick={() => {
                      handleCheckCompanies(company.company_name);
                      console.log(company.company_name);
                    }}
                  ></InputCheckbox>
                </li>
              );
            })}
          </Accordion>
          <Accordion accordionTitle="За датою">
            <InputRadioBtn
              label="Сьогодні"
              isSelected={selectedRadio === "Сьогодні"}
              onChange={() => handleRadioChange("Сьогодні")}
            ></InputRadioBtn>
            <InputRadioBtn
              label="Вчора"
              isSelected={selectedRadio === "Вчора"}
              onChange={() => handleRadioChange("Вчора")}
            ></InputRadioBtn>
            <InputRadioBtn
              label="Останні 7 днів"
              isSelected={selectedRadio === "Останні 7 днів"}
              onChange={() => handleRadioChange("Останні 7 днів")}
            ></InputRadioBtn>
            <InputRadioBtn
              label="Останні 30 днів"
              isSelected={selectedRadio === "Останні 30 днів"}
              onChange={() => handleRadioChange("Останні 30 днів")}
            ></InputRadioBtn>
            <div>
              <InputRadioBtn
                label="Вказаний період"
                isSelected={selectedRadio === "Вказаний період"}
                onChange={() => {
                  handleRadioChange("Вказаний період");
                }}
              ></InputRadioBtn>

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
          <button className="filter-button" type="submit">
            Застосувати фільтр
          </button>
        </form>
        <MainContent
          filter={filteredJobs}
          cards={cards}
          reset={resetFilters}
          selectedItems={selectedItems}
        />
      </div>
    </div>
  );
};

export default MyOffice;
