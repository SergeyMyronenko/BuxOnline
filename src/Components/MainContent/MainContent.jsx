import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./MainContent.scss";
import Filter from "../Filter/Filter";
import { useParams } from "react-router";
import Pagination from "../Pagination/Pagination";

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
  const [skillsId, setSkillsId] = useState([]);

  const URL = "https://relaxing-ultimate-chigger.ngrok-free.app";
  const myHeaders = new Headers();
  myHeaders.append("ngrok-skip-browser-warning", "69420");
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const perPage = 8;
  const paginate = (number) => {
    setCurrentPage(number);
  };

  const user = useParams();
  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const iStart = 0;
  const iEnd = currentPage * perPage;
  const items = filter.length > 0 ? filter : cards;

  const itemsOnPage = items.slice(iStart, iEnd);
  const totalPages = Math.ceil(items.length / perPage);

  const getSkills = async () => {
    try {
      const res = await fetch(`${URL}/jobs/skills`, requestOptions);

      const data = await res.json();
      setSkillsId(data);
    } catch (error) {
      console.error("Помилка при завантаженні даних:", error);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div className="content-wrapper">
      <div>
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
              itemsOnPage
                .filter((card) => card.status === "pending")
                .map((card, i) => (
                  <li key={i}>
                    <Card
                      user={user}
                      cardInfo={card}
                      btnDetail="Детальніше"
                      btnApply="Схвалити"
                      type="moderator"
                      skills={skillsId}
                    />
                  </li>
                ))
            ) : (
              <p className="not-found-vacancy">Вакансій не знайдено</p>
            )}
          </ul>
        )}

        {/* <div style={{ height: "104px" }}>
        {items.length > perPage && currentPage < totalPages && (
          <button className="load-btn" type="submit" onClick={loadMore}>
            Завантажити ще
          </button>
        )}
      </div> */}
      </div>
      {items.length > 0 && (
        <Pagination
          vacancyPerPage={perPage}
          totalVacancy={50}
          paginateNum={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default MainContent;
