import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./MainContent.scss";
import Filter from "../Filter/Filter";
import { useParams } from "react-router";

const MainContent = ({
  filter,
  cards,
  reset,
  selectedItems,
  onClose,
  isVisible,
  isLoading,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [skills, setSkills] = useState([]);
  console.log(skills);

  const URL =
    "https://6243-2003-dd-b736-6c81-d1cb-78bc-a67-4a9c.ngrok-free.app";
  const myHeaders = new Headers();
  myHeaders.append("ngrok-skip-browser-warning", "69420");
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const perPage = 8;

  const user = useParams();
  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const iStart = 0;
  const iEnd = currentPage * perPage;
  const items = filter.length > 0 ? filter : cards;
  const selectedIdSkills = items.skills;
  console.log(items);

  console.log(selectedIdSkills);

  const itemsOnPage = items.slice(iStart, iEnd);
  const totalPages = Math.ceil(items.length / perPage);

  const getSkills = async () => {
    try {
      const res = await fetch(`${URL}/jobs/skills`, requestOptions);

      if (!res.ok) {
        throw new Error(`Not found: ${await res.text()}`);
      }

      const data = await res.json();
      setSkills(data);
    } catch (error) {
      console.error("Помилка при завантаженні даних:", error);
    }
  };

  const selectedSkills = skills.filter((item) => items.includes(item.id));

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div className="content-wrapper">
      <Filter
        onClose={onClose}
        isVisible={isVisible}
        filter={filter}
        cards={cards}
        reset={reset}
        selectedItems={selectedItems}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="job-card-list">
          {itemsOnPage.length > 0 ? (
            itemsOnPage.map((card, i) => (
              <li key={i}>
                <Card
                  user={user}
                  cardInfo={card}
                  btnDetail="Детальніше"
                  btnApply="Схвалити"
                  type="moderator"
                />
              </li>
            ))
          ) : (
            <p>Вакансії не знайдено</p>
          )}
        </ul>
      )}

      <div style={{ height: "104px" }}>
        {items.length > perPage && currentPage < totalPages && (
          <button className="load-btn" type="submit" onClick={loadMore}>
            Завантажити ще
          </button>
        )}
      </div>
    </div>
  );
};

export default MainContent;
