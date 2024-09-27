import React from "react";
import SolidButton from "../../Components/Buttons/SolidButton/SolidButton";
import HollowButton from "../../Components/Buttons/HollowButton/HollowButton";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import "./SeekerResumePage.scss";

interface IResume {
  name: string;
  dateOfPosting: string;
  numberOfViews: number;
}

const seekersResumeList: IResume[] = [
  {
    name: "Офіс-менеджер",
    dateOfPosting: "28 серпня 2024",
    numberOfViews: 38,
  },
  {
    name: "Менеджер з логістики",
    dateOfPosting: "20 червня 2024",
    numberOfViews: 105,
  },
];

const SeekerResumePage = () => {
  return (
    <div className="resume-page-wrapper">
      <Header />
      <Nav />
      <div className="resume-wrapper">
        <div className="resume-title">
          <h2>Мої резюме</h2>
          <SolidButton>Створити</SolidButton>
        </div>
        <div className="resume-list">
          {seekersResumeList.map((resume) => {
            return <Resume key={resume.name} resume={resume} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Resume = ({ resume }: { resume: IResume }) => {
  return (
    <div className="resume-item">
      <div className="name-and-date">
        <h4>{resume.name}</h4>
        <p>Дата розміщення: {resume.dateOfPosting}</p>
      </div>
      <div className="number-of-views">
        <span>{resume.numberOfViews}</span>
        <p>переглядів</p>
      </div>
      <div className="resume-actions">
        <HollowButton borderRadius={"12px"} width={"110px"}>
          Видалити
        </HollowButton>
        <SolidButton width={"125px"}>Редагувати</SolidButton>
      </div>
    </div>
  );
};

export default SeekerResumePage;