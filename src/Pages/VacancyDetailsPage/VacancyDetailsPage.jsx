import { useState } from "react";
import VacancyDetails from "../../Components/VacancyDetails/VacancyDetails";

const URL = "https://38cd-2003-dd-b736-6cef-d1cb-78bc-a67-4a9c.ngrok-free.app";
const myHeaders = new Headers();
myHeaders.append("ngrok-skip-browser-warning", "69420");
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const VacancyDetailsPage = () => {
  const [pendingVacancies, setPendingVacancies] = useState([]);

  const handleApprove = async () => {
    try {
      const res = await fetch(`${URL}/jobs/jobs`, requestOptions);
      if (!res.ok) {
        throw new Error(`Not found: ${res.text()}`);
      }

      const data = await res.json();
      setPendingVacancies(data);
    } catch (error) {
      console.error("Помилка при завантаженні даних:", error);
    }
  };

  const handleReject = () => {};

  const handlers = [handleApprove, handleReject];

  return (
    <div>
      <VacancyDetails
        btnApply="Схвалити вакансію"
        btnReject="Відхилити вакансію"
        onClick={handlers}
      />
    </div>
  );
};

export default VacancyDetailsPage;
