import { useEffect, useState } from "react";
import Accordion from "../Accordion/Accordion";
import MainContent from "../MainContent/MainContent";
import "./MyOffice.scss";
import clsx from "clsx";
import titleImage from "../../assets/vacancyTitleImg.png";
import InputCheckbox from "../Input/InputCheckbox/InputCheckbox";

const jobs = [
  {
    id: 1,
    skills: [
      {
        id: 1,
        name: "Html",
      },
      {
        id: 2,
        name: "Css",
      },
      {
        id: 3,
        name: "PHP",
      },
      {
        id: 4,
        name: "jQuery",
      },
      {
        id: 5,
        name: "Symfony",
      },
    ],
    category: 5,
    subcategory: 5,
    education_levels: [
      {
        id: 1,
        city: "киев",
        specialty: "123",
        start_date: "2024-09-09",
        end_date: "2025-08-16",
        education_level: "highschool",
      },
    ],
    languages: [
      {
        id: 1,
        name: "ячс",
        level: "beginner",
      },
    ],
    status: "approved",
    moderation_comment: "zxcxzcsdsdsd",
    view_count: 5,
    title: "",
    name_company: null,
    description: "1232123123",
    required_experience: 3,
    city: "Киев",
    salary_min: "25000",
    salary_max: "30000",
    work_type: "fulltime",
    work_format: "online",
    type: "pending",
    country: "Portugal",
    position: "Senior Software Engineer",
    employer: 1,
  },
  {
    id: 2,
    skills: [
      {
        id: 1,
        name: "ячс",
      },
    ],
    category: 2,
    subcategory: 6,
    education_levels: [
      {
        id: 1,
        city: "киев",
        specialty: "123",
        start_date: "2024-09-09",
        end_date: "2025-08-16",
        education_level: "highschool",
      },
    ],
    languages: [
      {
        id: 2,
        name: "ячс",
        level: "beginner",
      },
    ],
    status: "approved",
    moderation_comment: "zxcxzcsdsdsd",
    view_count: 5,
    title: "zxcsd",
    name_company: null,
    description: "1232123123",
    required_experience: 3,
    city: "Киев",
    salary_min: "123.00",
    salary_max: "321.00",
    work_type: "fulltime",
    work_format: "online",
    type: "pending",
    country: null,
    position: null,
    employer: 1,
  },
  {
    id: 3,
    skills: [
      {
        id: 1,
        name: "ячс",
      },
    ],
    category: 4,
    subcategory: 6,
    education_levels: [
      {
        id: 1,
        city: "киев",
        specialty: "123",
        start_date: "2024-09-09",
        end_date: "2025-08-16",
        education_level: "highschool",
      },
    ],
    languages: [
      {
        id: 3,
        name: "ячс",
        level: "beginner",
      },
    ],
    status: "approved",
    moderation_comment: "zxcxzcsdsdsd",
    view_count: 5,
    title: "zxcsd",
    name_company: null,
    description: "1232123123",
    required_experience: 3,
    city: "Киев",
    salary_min: "123.00",
    salary_max: "321.00",
    work_type: "fulltime",
    work_format: "online",
    type: "pending",
    country: null,
    position: null,
    employer: 1,
  },
  {
    id: 4,
    skills: [
      {
        id: 1,
        name: "ячс",
      },
    ],
    category: 5,
    subcategory: 3,
    education_levels: [
      {
        id: 1,
        city: "киев",
        specialty: "123",
        start_date: "2024-09-09",
        end_date: "2025-08-16",
        education_level: "highschool",
      },
    ],
    languages: [
      {
        id: 1,
        name: "ячс",
        level: "beginner",
      },
    ],
    status: "approved",
    moderation_comment: "zxcxzcsdsdsd",
    view_count: 5,
    title: "zxcsd",
    name_company: null,
    description: "1232123123",
    required_experience: 3,
    city: "Киев",
    salary_min: "123.00",
    salary_max: "321.00",
    work_type: "fulltime",
    work_format: "online",
    type: "pending",
    country: null,
    position: null,
    employer: 1,
  },
  {
    id: 5,
    skills: [
      {
        id: 1,
        name: "Html",
      },
      {
        id: 2,
        name: "Css",
      },
      {
        id: 3,
        name: "PHP",
      },
      {
        id: 4,
        name: "jQuery",
      },
      {
        id: 5,
        name: "Symfony",
      },
    ],
    category: 6,
    subcategory: 4,
    education_levels: [
      {
        id: 1,
        city: "киев",
        specialty: "123",
        start_date: "2024-09-09",
        end_date: "2025-08-16",
        education_level: "highschool",
      },
    ],
    languages: [
      {
        id: 1,
        name: "ячс",
        level: "beginner",
      },
    ],
    status: "approved",
    moderation_comment: "zxcxzcsdsdsd",
    view_count: 5,
    title: "",
    name_company: null,
    description: "1232123123",
    required_experience: 3,
    city: "Киев",
    salary_min: "25000",
    salary_max: "30000",
    work_type: "fulltime",
    work_format: "online",
    type: "pending",
    country: "Portugal",
    position: "Senior Software Engineer",
    employer: 1,
  },
  {
    id: 6,
    skills: [
      {
        id: 1,
        name: "ячс",
      },
    ],
    category: 2,
    subcategory: 4,
    education_levels: [
      {
        id: 1,
        city: "киев",
        specialty: "123",
        start_date: "2024-09-09",
        end_date: "2025-08-16",
        education_level: "highschool",
      },
    ],
    languages: [
      {
        id: 2,
        name: "ячс",
        level: "beginner",
      },
    ],
    status: "approved",
    moderation_comment: "zxcxzcsdsdsd",
    view_count: 5,
    title: "zxcsd",
    name_company: null,
    description: "1232123123",
    required_experience: 3,
    city: "Киев",
    salary_min: "123.00",
    salary_max: "321.00",
    work_type: "fulltime",
    work_format: "online",
    type: "pending",
    country: null,
    position: null,
    employer: 1,
  },
  {
    id: 7,
    skills: [
      {
        id: 1,
        name: "ячс",
      },
    ],
    category: null,
    subcategory: 5,
    education_levels: [
      {
        id: 1,
        city: "киев",
        specialty: "123",
        start_date: "2024-09-09",
        end_date: "2025-08-16",
        education_level: "highschool",
      },
    ],
    languages: [
      {
        id: 3,
        name: "ячс",
        level: "beginner",
      },
    ],
    status: "approved",
    moderation_comment: "zxcxzcsdsdsd",
    view_count: 5,
    title: "zxcsd",
    name_company: null,
    description: "1232123123",
    required_experience: 3,
    city: "Киев",
    salary_min: "123.00",
    salary_max: "321.00",
    work_type: "fulltime",
    work_format: "online",
    type: "pending",
    country: null,
    position: null,
    employer: 1,
  },
  {
    id: 8,
    skills: [
      {
        id: 1,
        name: "ячс",
      },
    ],
    category: null,
    subcategory: 6,
    education_levels: [
      {
        id: 1,
        city: "киев",
        specialty: "123",
        start_date: "2024-09-09",
        end_date: "2025-08-16",
        education_level: "highschool",
      },
    ],
    languages: [
      {
        id: 1,
        name: "ячс",
        level: "beginner",
      },
    ],
    status: "approved",
    moderation_comment: "zxcxzcsdsdsd",
    view_count: 5,
    title: "zxcsd",
    name_company: null,
    description: "1232123123",
    required_experience: 3,
    city: "Киев",
    salary_min: "123.00",
    salary_max: "321.00",
    work_type: "fulltime",
    work_format: "online",
    type: "pending",
    country: null,
    position: null,
    employer: 1,
  },
  {
    id: 9,
    skills: [
      {
        id: 1,
        name: "ячс",
      },
    ],
    category: null,
    subcategory: 7,
    education_levels: [
      {
        id: 1,
        city: "киев",
        specialty: "123",
        start_date: "2024-09-09",
        end_date: "2025-08-16",
        education_level: "highschool",
      },
    ],
    languages: [
      {
        id: 1,
        name: "ячс",
        level: "beginner",
      },
    ],
    status: "approved",
    moderation_comment: "zxcxzcsdsdsd",
    view_count: 5,
    title: "zxcsd",
    name_company: null,
    description: "1232123123",
    required_experience: 3,
    city: "Киев",
    salary_min: "123.00",
    salary_max: "321.00",
    work_type: "fulltime",
    work_format: "online",
    type: "pending",
    country: null,
    position: null,
    employer: 1,
  },
];

const MyOffice = () => {
  const [cards, setCards] = useState(jobs);
  const [isActive, setIsActive] = useState("vacancy");
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [datePeriod, setDatePeriod] = useState({ from: "", to: "" });
  const [isChecked, setIsChecked] = useState(false);
  const [vacancies, setVacancies] = useState(0);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const URL = "https://glowing-boa-definite.ngrok-free.app";
  const myHeaders = new Headers();
  myHeaders.append("ngrok-skip-browser-warning", "69420");
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCheckCategory = (categoryName) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryName)
        ? prevSelected.filter((name) => name !== categoryName)
        : [...prevSelected, categoryName]
    );
  };

  const handleCheckCompanies = (companyName) => {
    setCompanies((prevSelected) =>
      prevSelected.includes(companyName)
        ? prevSelected.filter((name) => name !== companyName)
        : [...prevSelected, companyName]
    );
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
    // getCards();
    getJobsCategories();
  }, [selectedCategories, companies, cards]);

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
            resetFilters();
          }}
        >
          <Accordion accordionTitle="Категорія">
            <ul>
              {categories.map((category) => {
                return (
                  <li key={category.id}>
                    <InputCheckbox
                      label={category.name}
                      onChange={() => {
                        handleCheckCategory(category.name);
                      }}
                    ></InputCheckbox>
                  </li>
                );
              })}
            </ul>
          </Accordion>
          <Accordion accordionTitle="Компанії">
            <InputCheckbox
              label="SoftServe"
              onChange={() => {
                handleCheckCompanies("softserve");
              }}
            ></InputCheckbox>
            <InputCheckbox
              label="Nakivo"
              onChange={() => {
                handleCheckCompanies("nakivo");
              }}
            ></InputCheckbox>
            <InputCheckbox
              label="MCPK"
              onChange={() => {
                handleCheckCompanies("mcpk");
              }}
            ></InputCheckbox>
            <InputCheckbox
              label="GlobalLogic"
              onChange={() => {
                handleCheckCompanies("globallogic");
              }}
            ></InputCheckbox>
            <InputCheckbox
              label="Luxoft"
              onChange={() => {
                handleCheckCompanies("luxoft");
              }}
            ></InputCheckbox>
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
          <button className="filter-button" type="submit">
            Застосувати фільтр
          </button>
        </form>
        <MainContent filter={filteredJobs} cards={cards} />
      </div>
    </div>
  );
};

export default MyOffice;
