import React, { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

import "../Nav/Nav.scss";
import { Link } from "react-router-dom";
import HollowButton from "../Buttons/HollowButton/HollowButton";
import { useAuth } from "../../Hooks/useAuth";
import Cookies from "js-cookie";
//флаг України у svg
const UA_FLAG = (
  <svg
    width="18"
    height="13.5"
    viewBox="0 0 18 13.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0.75H18V14.25H0V0.75Z"
      fill="#FFE247"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0.75H18V7.5H0V0.75Z"
      fill="#2E85EC"
    />
  </svg>
);
//флаг Великобританії у svg
const UK_FLAG = (
  <svg
    width="18"
    height="13.5"
    viewBox="0 0 18 13.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="18" height="13.5" fill="#012169" />
    <path d="M0 0L18 13.5M18 0L0 13.5" stroke="white" strokeWidth="2" />
    <path d="M0 0L18 13.5M18 0L0 13.5" stroke="#C8102E" strokeWidth="1" />
    <rect x="7.5" width="3" height="13.5" fill="white" />
    <rect y="6" width="18" height="3" fill="white" />
    <rect x="8.25" width="1.5" height="13.5" fill="#C8102E" />
    <rect y="6.75" width="18" height="1.5" fill="#C8102E" />
  </svg>
);

/**
 * Nav component renders the navigation bar for the application.
 *
 * @component
 * @example
 * return (
 *   <Nav />
 * )
 *
 * @returns {JSX.Element} The rendered navigation bar component.
 *
 * @description
 * The Nav component includes:
 * - A logo section with an SVG icon and a link to the homepage.
 * - Navigation links to different sections of the application.
 * - A language selection dropdown that allows users to switch between languages.
 *
 * @function
 * @name Nav
 *
 * @property {string} language - The current language selected.
 * @property {function} setLanguage - Function to update the selected language.
 * @property {string} flag - The current flag icon representing the selected language.
 * @property {function} setFlag - Function to update the flag icon.
 * @property {boolean} isLanguageDropdownOpen - State to manage the visibility of the language dropdown.
 * @property {function} setIsLanguageDropdownOpen - Function to toggle the language dropdown visibility.
 * @property {function} changeLanguage - Function to handle the language change event.
 */
export default function Nav() {
  const [language, setLanguage] = useState("UK");
  const [flag, setFlag] = useState(UA_FLAG);
  const { token } = useAuth();

  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const changeLanguage = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };
  // useEffect(() => {setToken(Cookies.get('jwt'))}, [token])

  return (
    <nav>
      <div className="nav-block-left">
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0.874512C6.4747 0.874512 0.37439 6.97482 0.37439 14.5001C0.37439 22.0255 6.4747 28.1257 14 28.1257C21.5253 28.1257 27.6256 22.0255 27.6256 14.5001C27.6256 6.97482 21.5253 0.874512 14 0.874512ZM15.1766 21.8876V23.8067H13.3409V21.9092C10.3288 21.4967 9.0097 19.0217 9.0097 19.0217L10.8847 17.4532C10.8847 17.4532 12.0819 19.5373 14.2475 19.5373C15.4438 19.5373 16.3513 18.897 16.3513 17.803C16.3513 15.2455 9.46063 15.5557 9.46063 10.8111C9.46063 8.74857 11.0919 7.26264 13.34 6.91107V4.99389H15.1756V6.91107C16.7431 7.11732 18.5994 7.94232 18.5994 9.717V11.0782H16.1656V10.4182C16.1656 9.73764 15.2984 9.28389 14.3281 9.28389C13.0906 9.28389 12.1841 9.90264 12.1841 10.7689C12.1841 13.3882 19.0747 12.7489 19.0747 17.7205C19.0747 19.7642 17.5484 21.5361 15.1766 21.8876Z"
            fill="#2E85EC"
          />
        </svg>
        <Link to="/BuxOnline/">
          {" "}
          <h2 className="name-logo">Buxonline</h2>
        </Link>
      </div>

      <div className="nav-block-right">
        <Link to="/BuxOnline/vacancies">
          <h5>ВАКАНСІЇ</h5>
        </Link>
        <h5>ДЛЯ БІЗНЕСУ</h5>

        <Link to="/BuxOnline/login">
          <HollowButton width={157} fontSize={16} borderRadius={12}>
            Вхід/реєстрація
          </HollowButton>
        </Link>
        <button className="button-language-change" onClick={changeLanguage}>
          {flag}
          <h5>{language}</h5>
          <TiArrowSortedDown />
          <div
            className={`language-change-dropdown ${
              isLanguageDropdownOpen ? "active" : ""
            }`}
          >
            <div
              className="dropdown-option"
              onClick={() => {
                setLanguage("UA");
                setFlag(UA_FLAG);
              }}
            >
              {UA_FLAG}
              <h5>UA</h5>
            </div>
            <div
              className="dropdown-option"
              onClick={() => {
                setLanguage("UK");
                setFlag(UK_FLAG);
              }}
            >
              {UK_FLAG}
              <h5>UK</h5>
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
}
