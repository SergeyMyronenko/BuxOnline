import React, { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router";
import "./Card.scss";
import editIcon from "../../assets/edit.svg";
import { RiMapPinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

/**
 * Card Component
 *
 * This component represents a job card with details such as job title, salary, location, experience, and skills.
 *
 * @component
 * @example
 * return (
 *   <Card />
 * )
 *
 * @returns {JSX.Element} A job card component.
 *
 * @description
 * The Card component includes:
 * - A logo section with an SVG.
 * - A title section displaying the job position and salary.
 * - A description section with the location, experience required, and a list of skills.
 * - Buttons for viewing more details and applying for the job.
 */
// eslint-disable-next-line react/prop-types

const URL = "https://relaxing-ultimate-chigger.ngrok-free.app";
const myHeaders = new Headers();
myHeaders.append("ngrok-skip-browser-warning", "69420");
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const Card = ({ cardInfo, btnDetail, btnApply, type, width, user, skills }) => {
  const [position, setPosition] = useState("");
  const [skillName, setSkillName] = useState(cardInfo.skills);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDetailsClick = () => {
    navigate(`/BuxOnline/moderator/cabinet/${user.id}/resumes/${cardInfo.id}`);
  };

  const handleApproveVacancy = async (id) => {
    const updateOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify({ status: "pending" }),
      redirect: "follow",
    };

    try {
      const res = await fetch(`${URL}/jobs/jobs/${id}/`, updateOptions);
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Not found: ${errorText}`);
      }
      const data = res.json();
      console.log("Status changed");
    } catch (error) {}
  };

  const getPosition = async (id) => {
    try {
      const res = await fetch(
        `${URL}/jobs/job-sub-categories/?id=${id}`,
        requestOptions
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Not found: ${errorText}`);
      }

      const data = await res.json();
      data.forEach((element) => {
        setPosition(element.name);
      });

      const names = skills
        .filter((skill) => cardInfo.skills.includes(skill.id))
        .map((item) => item.name);

      setSkillName(names);
    } catch (error) {
      console.error("Помилка при завантаженні даних:", error);
    }
  };

  const handleOpenEdit = () => {
    navigate(`/BuxOnline/moderator/cabinet/${cardInfo.id}/edit`);
  };

  useEffect(() => {
    getPosition(cardInfo.subcategory);
  }, [cardInfo]);

  return (
    <div style={{ width }} className="card">
      <div className="card-title-wrapper">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="99"
            height="16"
            viewBox="0 0 99 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.8473 9.3586C3.45341 8.84165 2.24962 8.39524 2.24962 7.36502C2.24962 6.1753 3.39023 5.75047 4.45823 5.75047C6.30493 5.75047 7.28592 6.72015 7.29589 6.72963L7.39011 6.82544L8.21647 5.50779L8.16603 5.45357C8.11837 5.40303 6.97333 4.21225 4.50479 4.21225C2.53893 4.21225 0.423432 5.19878 0.423432 7.36555C0.423432 9.41388 2.371 10.1467 4.08801 10.7931C5.48411 11.3185 6.68901 11.7723 6.68901 12.793C6.68901 13.939 5.56891 14.4518 4.45823 14.4518C2.35881 14.4518 1.07909 13.1568 1.06634 13.1436L0.981542 13.0567L0 14.2923L0.0554231 14.3528C0.07205 14.3691 0.445047 14.7703 1.17497 15.1746C1.84448 15.5467 2.95405 15.9905 4.43495 15.9905C6.79986 15.9905 8.51631 14.6455 8.51631 12.793C8.51631 10.7189 6.56652 9.99558 4.8473 9.3586ZM21.0829 10.0466C21.0829 12.5172 19.1376 14.4518 16.6546 14.4518C14.1728 14.4518 12.2274 12.5172 12.2274 10.0472C12.2274 7.64929 14.1728 5.77258 16.6552 5.77258C19.1381 5.77258 21.0835 7.64929 21.0835 10.0472L21.0829 10.0466ZM16.6546 4.21278C13.1486 4.21278 10.4012 6.77542 10.4012 10.0477C10.4012 13.38 13.1486 15.9911 16.6552 15.9911C20.1624 15.9911 22.9097 13.38 22.9097 10.0477C22.9097 6.77542 20.1624 4.21278 16.6552 4.21278H16.6546ZM30.6456 0.0450603C30.4028 0.012552 30.1576 -0.00240639 29.9124 0.000314021C28.6731 0.000314021 25.7906 0.409348 25.7906 4.20225V4.63024H24.2071V6.07896H25.7906V15.7352H27.5685V6.07896H30.5475V4.62971H27.5685V4.20173C27.5685 3.20625 27.895 1.53537 30.0737 1.53537C30.3818 1.53537 30.6063 1.57749 30.6085 1.57749L30.7321 1.60118V0.0592738L30.6456 0.0450603ZM39.04 14.3644L38.9114 14.3907C38.7404 14.4212 38.5666 14.4355 38.3927 14.4334C37.4383 14.4334 35.8371 14.0596 35.8371 11.5575V6.11002H38.805V4.63339H35.8366V1.38692H34.0464V4.63287H32.4685V6.1095H34.0226V11.7133C34.0226 15.443 36.6718 16 38.2513 16C38.6798 16 38.9419 15.9558 38.9524 15.9537L39.04 15.9389V14.3644ZM42.6575 12.3824C42.6575 12.3824 43.9571 13.6179 45.8831 13.6179C46.7194 13.6179 47.4377 13.2652 47.4377 12.6035C47.4377 10.9268 41.6826 11.1474 41.6826 7.53032C41.6826 5.43514 43.6556 4.2212 46.2079 4.2212C48.877 4.2212 50.1762 5.50042 50.1762 5.50042L49.086 7.57454C49.086 7.57454 47.9953 6.60381 46.1851 6.60381C45.4192 6.60381 44.6765 6.9123 44.6765 7.61823C44.6765 9.20646 50.4322 9.008 50.4322 12.6246C50.4322 14.4997 48.7147 15.9989 45.9069 15.9989C42.959 15.9989 41.3107 14.3449 41.3107 14.3449L42.6575 12.3824ZM60.6495 8.72162C60.6029 7.1992 59.6047 6.38271 58.3051 6.38271C56.7976 6.38271 55.7523 7.26553 55.4735 8.72162H60.6495ZM58.3749 4.2212C61.7867 4.2212 63.6201 6.58117 63.6201 9.55917C63.6201 9.88976 63.5509 10.6405 63.5509 10.6405H55.3815C55.5666 12.604 57.1689 13.6179 58.9319 13.6179C60.8351 13.6179 62.3432 12.3824 62.3432 12.3824L63.481 14.3902C63.481 14.3902 61.6704 15.9995 58.723 15.9995C54.8007 15.9995 52.3637 13.3094 52.3637 10.1109C52.3637 6.64803 54.8478 4.2212 58.3749 4.2212ZM66.5864 4.48652H69.4185V6.42746C69.4185 6.84597 69.3719 7.22131 69.3719 7.22131H69.4179C69.9522 5.6115 71.3677 4.33175 73.1778 4.33175C73.4566 4.33175 73.7116 4.37597 73.7116 4.37597V7.1334C73.7116 7.1334 73.4101 7.08918 73.0155 7.08918C71.7618 7.08918 70.3463 7.77248 69.7898 9.44915C69.6042 10.0003 69.5349 10.6178 69.5349 11.2795V15.7352H66.5864V4.48652ZM74.9952 4.48652H78.1049L80.5652 11.4559C80.798 12.1181 80.9604 12.8657 80.982 12.8657H81.0296C81.0523 12.8657 81.2147 12.1181 81.447 11.4559L83.9077 4.486H87.017L82.7699 15.7352H79.2888L74.9952 4.48652ZM96.0288 8.72162C95.9828 7.1992 94.9846 6.38271 93.6849 6.38271C92.1763 6.38271 91.1316 7.26553 90.8534 8.72162H96.0288ZM93.7548 4.2212C97.1666 4.2212 99 6.58117 99 9.55917C99 9.88976 98.9302 10.6405 98.9302 10.6405H90.7608C90.9465 12.604 92.5477 13.6179 94.3118 13.6179C96.2144 13.6179 97.7231 12.3824 97.7231 12.3824L98.8609 14.3902C98.8609 14.3902 97.0502 15.9995 94.1028 15.9995C90.1811 15.9995 87.7436 13.3094 87.7436 10.1109C87.7436 6.64803 90.2271 4.2212 93.7548 4.2212Z"
              fill="#282828"
            />
          </svg>
          {type === "seeker-vacancies" && (
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5007 5.7607C12.5143 3.08695 9.17019 2.71237 6.45898 3.95107C3.59923 5.26212 1.61523 8.30012 1.61523 11.8031C1.61523 15.2454 3.04898 17.8727 4.93094 19.991C6.43703 21.687 8.28023 23.1065 9.90903 24.3594C10.2793 24.6436 10.6349 24.92 10.9759 25.1887C11.6386 25.7105 12.349 26.2659 13.0684 26.687C13.7879 27.1081 14.6094 27.4491 15.5007 27.4491C16.3919 27.4491 17.2134 27.1068 17.9329 26.687C18.6536 26.2659 19.3627 25.7105 20.0254 25.1887C20.3664 24.92 20.722 24.6436 21.0923 24.3594C22.7198 23.1065 24.5643 21.6857 26.0704 19.991C27.9523 17.8727 29.3861 15.2454 29.3861 11.8031C29.3861 8.30012 27.4034 5.26212 24.5423 3.95366C21.8311 2.71366 18.487 3.08824 15.5007 5.7607Z" fill="#2E85EC"/>
            </svg>
          )}
        </div>
        {/* <h3 className="company">{cardInfo.title}</h3> */}
        <div className="card-title">
          <h3 className="card-position">{cardInfo.position}</h3>
          <h3 className="card-salary">{`₴${cardInfo.salary_min}-${cardInfo.salary_max}`}</h3>
        </div>
      </div>
      <div className="card-description">
        <div className="card-description-main-requirements">
          <div className="location">
            <RiMapPinLine />
            <span className="country">{cardInfo.country}</span>
          </div>
          <div className="experience">{cardInfo.required_experience} years</div>
        </div>
        <ul className="card-description-skills">
          {skillName &&
            skillName.map((skill, i) => {
              return (
                <li key={i}>
                  <p className="skill">{skill.name}</p>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="card-buttons-wrapper">
        {type === "moderator" && (
          <button
            className="button details-button"
            onClick={handleDetailsClick}
          >
            {btnDetail}
          </button>
        )}
        {type === "moderator" && (
          <button
            className="button apply-button"
            onClick={() => handleApproveVacancy(cardInfo.id)}
          >
            {btnApply}
          </button>
        )}
        {type === "seeker" && (
          <div className="seeker-buttons-wrapper">
            <div>
              {btnDetail}
            </div>
            <button
              className="button seeker-button"
              onClick={() => handleApproveVacancy(cardInfo.id)}
            >
              {btnApply}
            </button>
          </div>
        )}
        {type === "seeker-vacancies" && (
          <button
            className="button seeker-vacancies"
            onClick={() => handleApproveVacancy(cardInfo.id)}
          >
            {btnApply}
          </button>
        )}
        {(type !== "seeker" && type !== "seeker-vacancies") && (
          <Link
            to={`/BuxOnline/moderator/cabinet/${id}/edit/${cardInfo.id}`}
            className="editIcon"
          >
            <img src={editIcon} alt="icon for edit vacancy" />
          </Link>
        )}
        
      </div>
    </div>
  );
};

export default Card;
