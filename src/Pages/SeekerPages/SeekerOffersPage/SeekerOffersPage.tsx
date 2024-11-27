import React, { useState } from "react";
import "./SeekerOffersPage.scss";
import WavyLine from "../../../Components/Icons/WavyLine";
import { reviewsList, invitationList } from "../../SeekerPage/fakeData";
import Card from "../../../Components/Card/Card";
import EmptyList from "../../../Components/EmptyList/EmptyList";
import Pagination from "../../../Components/Pagination/Pagination";

const SeekerOffersPage = () => {
  const [view, setView] = useState<"review" | "invitation">("review");
  const [page, setPage] = useState(1);

  const switchForward = () => {
    if (view === "review") {
      if (page < Math.ceil(reviewsList.length / 6)) {
        setPage(page + 1);
      }
    }

    if (view === "invitation") {
      if (page < Math.ceil(invitationList.length / 6)) {
        setPage(page + 1);
      }
    }
  };

  const switchBack = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const getCurrentPage = (number: number) => {
    setPage(number);
  };

  const getPartOfList = (number: number) => {
    const n = (number - 1) * 6;
    if (view === "review") {
      return reviewsList.slice(n, n + 6);
    }
    if (view === "invitation") {
      return invitationList.slice(n, n + 6);
    }
  };

  return (
    <div className="reviews-page-wrapper">
      <div className="reviews-wrapper">
        <div className="reviews-title">
          <div className="reviews-header">
            <WavyLine />
            <h2>Відгуки та запрошення</h2>
          </div>
        </div>

        <div className="views-tab-area">
          <div className="views-tabs">
            <ViewTab
              name={"Відгуки"}
              amount={reviewsList.length}
              isActive={view == "review"}
              onClick={() => {
                setView("review");
                setPage(1);
              }}
            />
            <ViewTab
              name={"Запрошення"}
              amount={invitationList.length}
              isActive={view == "invitation"}
              onClick={() => {
                setView("invitation");
                setPage(1);
              }}
            />
          </div>
        </div>

        <div className="reviews-list">
          {view === "review" &&
            (reviewsList.length === 0 ? (
              <EmptyList text="відгуків" />
            ) : (
              getPartOfList(page)?.map((resume, i) => (
                <Card
                  key={i}
                  type="seeker"
                  cardInfo={resume}
                  btnDetail={"Надіслано 23 червня 2024 15:16"}
                  btnApply={"Переглянуто 5 днів тому"}
                  width={"100%"}
                />
              ))
            ))}

          {view === "invitation" &&
            (invitationList.length === 0 ? (
              <EmptyList text="запрошень"/>
            ) : (
              getPartOfList(page)?.map((invitation, i) => (
                <Card
                  key={i}
                  type={"seeker"}
                  cardInfo={invitation}
                  btnDetail={"Надіслано 23 червня 2024 15:16"}
                  btnApply={"Переглянуто 5 днів тому"}
                  width={"100%"}
                />
              ))
            ))}
        </div>
        
        <Pagination
            vacancyPerPage={6}
            totalVacancy={view === "invitation" ? invitationList.length : 
              view === "review" ? reviewsList.length : null}
            paginateNum={5}
            currentPage={page}
            switchForward={switchForward}
            switchBack={switchBack} 
            getCurrentPage={getCurrentPage} />
      </div>
    </div>
  );
};

const ViewTab = ({ name, amount, isActive, onClick }) => {
  return (
    <p
      className={`views-tab ${isActive && "views-tab-active"}`}
      onClick={onClick}
    >
      {name} ({amount})
    </p>
  );
};

export default SeekerOffersPage;
