import { useEffect, useState } from "react";
import VacancyDetails from "../../Components/VacancyDetails/VacancyDetails";
import { useParams } from "react-router";

const URL = "https://relaxing-ultimate-chigger.ngrok-free.app";
const myHeaders = new Headers();
myHeaders.append("ngrok-skip-browser-warning", "69420");
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const VacancyDetailsPage = () => {
  const [vacancy, setVacancy] = useState({});
  console.log(vacancy);

  const { vacancyId } = useParams();

  const selectedVacancy = async () => {
    try {
      const res = await fetch(`${URL}/jobs/jobs/${vacancyId}`, requestOptions);

      if (!res.ok) {
        throw new Error(`Not found: ${res.text()}`);
      }

      const data = await res.json();

      setVacancy(data);
    } catch (error) {
      console.error("Помилка при завантаженні даних:", error);
    }
  };

  const handleApprove = async () => {
    try {
      const res = await fetch(
        `${URL}/jobs/jobs/${id.vacancyId}`,
        requestOptions
      );
      if (!res.ok) {
        throw new Error(`Not found: ${res.text()}`);
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Помилка при завантаженні даних:", error);
    }
  };

  const handleReject = () => {};

  const handlers = [handleApprove, handleReject];

  useEffect(() => {
    if (vacancyId) {
      selectedVacancy();
    }
  }, [vacancyId]);

  return (
    <div>
      <VacancyDetails
        btnApply="Схвалити вакансію"
        btnReject="Відхилити вакансію"
        onClick={handlers}
        vacancy={vacancy}
      />
    </div>
  );
};

export default VacancyDetailsPage;
