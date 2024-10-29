import { IVacancy } from "./interfaces/types";

const reviewsList: IVacancy[] = [
  {
    position: "Frontend Developer",
    salary_min: 40000,
    salary_max: 70000,
    country: "Ukraine",
    required_experience: 3,
    skills: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "HTML/CSS" },
      { name: "TypeScript" },
    ],
  },
  {
    position: "Backend Developer",
    salary_min: 50000,
    salary_max: 80000,
    country: "Poland",
    required_experience: 4,
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "SQL" },
    ],
  },
  {
    position: "DevOps Engineer",
    salary_min: 60000,
    salary_max: 90000,
    country: "Germany",
    required_experience: 5,
    skills: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "CI/CD" },
    ],
  },
];

const invitationList: IVacancy[] = [
  {
    position: "UI/UX Designer",
    salary_min: 30000,
    salary_max: 50000,
    country: "United States",
    required_experience: 2,
    skills: [
      { name: "Figma" },
      { name: "Sketch" },
      { name: "Adobe XD" },
      { name: "User Research" },
    ],
  },
  {
    position: "Full Stack Developer",
    salary_min: 55000,
    salary_max: 85000,
    country: "Canada",
    required_experience: 4,
    skills: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
    ],
  },
];

export { reviewsList, invitationList };
