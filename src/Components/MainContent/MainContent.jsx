import { useState } from "react";
import Card from "../Card/Card";
import "./MainContent.scss";
import Filter from "../Filter/Filter";
import { useParams } from "react-router";

const MainContent = ({ filter, cards, reset, selectedItems }) => {
  const [isVisibleCategory, setIsVisibleCategory] = useState(true);
  const [isVisibleCompany, setIsVisibleCompany] = useState(true);
  const [isVisibleDate, setIsVisibleDate] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  const user = useParams();

  const handleCloseCategory = () => {
    setIsVisibleCategory(false);
  };
  const handleCloseCompany = () => {
    setIsVisibleCompany(false);
  };
  const handleCloseDate = () => {
    setIsVisibleDate(false);
  };

  const CloseButton = [
    handleCloseCategory,
    handleCloseCompany,
    handleCloseDate,
  ];

  const visibleButton = [isVisibleCategory, isVisibleCompany, isVisibleDate];

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const iStart = 0;
  const iEnd = currentPage * perPage;

  const itemsOnPage = (filter.length > 0 ? filter : cards).slice(iStart, iEnd);

  return (
    <div className="content-wrapper">
      <Filter
        onClose={CloseButton}
        isVisible={visibleButton}
        filter={filter}
        cards={cards}
        reset={reset}
        selectedItems={selectedItems}
      />
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
      <div style={{ height: "104px" }}>
        {filter.length ||
          (cards.length > 8 && (
            <button className="load-btn" type="submit" onClick={loadMore}>
              Завантажити ще
            </button>
          ))}
      </div>
    </div>
  );
};

export default MainContent;
