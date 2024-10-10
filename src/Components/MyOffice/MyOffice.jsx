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
import { format, subDays } from "date-fns";

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
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(selectedDate);

  const selectedItems = [selectedCategories, selectedCompanies, selectedDate];

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
    if (selectedDate === label) {
      setSelectedDate(null);
      setDatePeriod({ from: "", to: "" });
      setIsChecked(false);
    } else {
      setSelectedDate(label);
    }
    const today = new Date();

    switch (label) {
      case "Сьогодні":
        setDatePeriod({
          from: format(today, "yyyy-MM-dd"),
          to: format(today, "yyyy-MM-dd"),
        });
        break;
      case "Вчора":
        setDatePeriod({
          from: format(subDays(today, 1), "yyyy-MM-dd"),
          to: format(today, "yyyy-MM-dd"),
        });
        break;
      case "Останні 7 днів":
        setDatePeriod({
          from: format(subDays(today, 7), "yyyy-MM-dd"),
          to: format(today, "yyyy-MM-dd"),
        });
        break;
      case "Останні 30 днів":
        setDatePeriod({
          from: format(subDays(today, 30), "yyyy-MM-dd"),
          to: format(today, "yyyy-MM-dd"),
        });
        break;
      case "Вказаний період":
        setIsChecked(true);
        break;
      default:
        setDatePeriod({ from: "", to: "" });
        break;
    }
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

  const handleCheckDate = (e) => {
    const { name, value } = e.target;
    setDatePeriod((prevPeriod) => ({
      ...prevPeriod,
      [name]: value,
    }));
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
    setSelectedCompanies([]);
    setSelectedDate(null);
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
                    }}
                  ></InputCheckbox>
                </li>
              );
            })}
          </Accordion>
          <Accordion accordionTitle="За датою">
            <InputRadioBtn
              label="Сьогодні"
              isSelected={selectedDate === "Сьогодні"}
              onClick={() => handleRadioChange("Сьогодні")}
            ></InputRadioBtn>
            <InputRadioBtn
              label="Вчора"
              isSelected={selectedDate === "Вчора"}
              onClick={() => handleRadioChange("Вчора")}
            ></InputRadioBtn>
            <InputRadioBtn
              label="Останні 7 днів"
              isSelected={selectedDate === "Останні 7 днів"}
              onChange={() => handleRadioChange("Останні 7 днів")}
            ></InputRadioBtn>
            <InputRadioBtn
              label="Останні 30 днів"
              isSelected={selectedDate === "Останні 30 днів"}
              onChange={() => handleRadioChange("Останні 30 днів")}
            ></InputRadioBtn>
            <div>
              <InputRadioBtn
                label="Вказаний період"
                isSelected={selectedDate === "Вказаний період"}
                onChange={() => {
                  handleRadioChange("Вказаний період");
                  handleCheckboxChange();
                }}
              ></InputRadioBtn>

              {isChecked && (
                <div className="input-box">
                  <label className="form-date">
                    З*:
                    <input
                      className="date-input"
                      type="date"
                      name="from"
                      value={datePeriod.from}
                      onChange={handleCheckDate}
                    />
                  </label>
                  <label className="form-date">
                    По*:
                    <input
                      className="date-input"
                      type="date"
                      name="to"
                      value={datePeriod.to}
                      onChange={handleCheckDate}
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
