import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./MainContent.scss";
import Filter from "../Filter/Filter";

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
    category: null,
    subcategory: null,
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
    category: null,
    subcategory: null,
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
    category: null,
    subcategory: null,
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
    category: null,
    subcategory: null,
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
    category: null,
    subcategory: null,
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
    category: null,
    subcategory: null,
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
    subcategory: null,
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
    subcategory: null,
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

const MainContent = () => {
  const [cards, setCards] = useState(jobs);

  const URL = "https://glowing-boa-definite.ngrok-free.app";

  const getCards = async () => {
    try {
      const response = await fetch(`${URL}/jobs/jobs`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error("Помилка при завантаженні даних:", error);
      setCards([]);
    }
  };

  // useEffect(() => {
  //   getCards();
  // }, []);

  return (
    <div className="content-wrapper">
      <Filter />

      <ul className="job-card-list">
        {cards.map((card) => {
          return (
            <li key={card.id}>
              <Card
                cardInfo={card}
                btnDetail="Детальніше"
                btnApply="Схвалити"
                type="moderator"
              />
            </li>
          );
        })}
      </ul>
      <button className="load-btn" type="submit">
        Завантажити ще
      </button>
    </div>
  );
};

export default MainContent;
