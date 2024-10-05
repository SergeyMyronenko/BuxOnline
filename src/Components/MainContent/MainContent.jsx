import { useState } from "react";
import Card from "../Card/Card";
import "./MainContent.scss";
import Filter from "../Filter/Filter";
import { useParams } from "react-router";

const MainContent = ({ filter, cards }) => {
  const [isVisibleCategory, setIsVisibleCategory] = useState(true);
  const [isVisibleCompany, setIsVisibleCompany] = useState(true);
  const [isVisibleDate, setIsVisibleDate] = useState(true);

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

  return (
    <div className="content-wrapper">
      <Filter onClose={CloseButton} isVisible={visibleButton} filter={filter} />
      <ul className="job-card-list">
        {cards.length > 0 ? (
          cards.map((card, i) => (
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
        {cards.length > 8 && (
          <button className="load-btn" type="submit">
            Завантажити ще
          </button>
        )}
      </div>
    </div>
  );
};

export default MainContent;
