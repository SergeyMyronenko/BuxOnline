import React, { useState } from "react";
import "./SeekerOffersPage.scss";
import WavyLine from "../../../Components/Icons/WavyLine";
import { reviewsList, invitationList } from "../../SeekerPage/fakeData";
import Card from "../../../Components/Card/Card";
import EmptyList from "../../../Components/EmptyList/EmptyList";

const SeekerOffersPage = () => {
  const [view, setView] = useState<"review" | "invitation">("review");

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
              onClick={() => setView("review")}
            />
            <ViewTab
              name={"Запрошення"}
              amount={invitationList.length}
              isActive={view == "invitation"}
              onClick={() => setView("invitation")}
            />
          </div>
        </div>

        <div className="reviews-list">
          {view === "review" &&
            (reviewsList.length === 0 ? (
              <EmptyList text="відгуків" />
            ) : (
              reviewsList?.map((resume, i) => (
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
              invitationList?.map((invitation, i) => (
                <Card
                  key={i}
                  type="seeker"
                  cardInfo={invitation}
                  btnDetail={"Надіслано 23 червня 2024 15:16"}
                  btnApply={"Переглянуто 5 днів тому"}
                  width={"100%"}
                />
              ))
            ))}
        </div>
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
