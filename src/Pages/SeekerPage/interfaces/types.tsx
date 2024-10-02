export interface IVacancy {
  position: string;
  salary_min: number;
  salary_max: number;
  country: string;
  required_experience: number;
  skills: { name: string }[];
}
