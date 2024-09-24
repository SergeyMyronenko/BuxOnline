import React from 'react';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';
import './CompanyVacancies.scss';
import SolidButton from '../../Components/Buttons/SolidButton/SolidButton';
import { Link } from 'react-router-dom';
import { TbEdit } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
const dataPlaceholder = [{
    id: 1,
    name: "Back End Engineer",
    candidates: 0,
    submited: 0
}]
/**
 * Component to display a list of vacancies or a message if no vacancies are available.
 *
 * @param {Object[]} data - Array of vacancy objects.
 * @param {string} data[].id - Unique identifier for the vacancy.
 * @param {string} data[].name - Name of the vacancy.
 * @param {number} data[].candidates - Number of candidates for the vacancy.
 * @param {number} data[].submited - Number of submissions for the vacancy.
 * @returns {JSX.Element} A list of vacancies or a message indicating no vacancies.
 */
function DisplayVacancies(data) {
    if (data) {
        return (<ul className='vacancy-list'>
            {data.map((vacancy) => (

                <div key={vacancy.id} className="vacancy-item">
                    <div className="left">
                        <h3>
                            <li>
                                {vacancy.name}
                            </li>
                        </h3>
                        <span>
                            <p> {vacancy.candidates} Кандидатів</p>
                            <p> {vacancy.submited} Відгуків</p>
                        </span>
                    </div>
                    <div className="right">
                        <button><TbEdit /></button>
                        <button><AiOutlineDelete /></button>
                    </div>
                </div>

            ))}
        </ul>)
    }
    else {
        return (
            <div className='no-vacancy'>
                <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="65" cy="65" r="65" fill="#9E9E9E" />
                    <path d="M65.0007 32.7502C60.7655 32.7502 56.5719 33.5843 52.6591 35.205C48.7464 36.8258 45.1911 39.2013 42.1965 42.196C39.2018 45.1907 36.8263 48.7459 35.2055 52.6586C33.5848 56.5714 32.7507 60.765 32.7507 65.0002C32.7507 69.2353 33.5848 73.429 35.2055 77.3417C36.8263 81.2545 39.2018 84.8097 42.1965 87.8044C45.1911 90.799 48.7464 93.1746 52.6591 94.7953C56.5719 96.416 60.7655 97.2502 65.0007 97.2502C73.5539 97.2502 81.7568 93.8524 87.8048 87.8044C93.8529 81.7563 97.2507 73.5534 97.2507 65.0002C97.2507 56.4469 93.8529 48.244 87.8048 42.196C81.7568 36.1479 73.5539 32.7502 65.0007 32.7502ZM25.584 65.0002C25.584 43.2314 43.2319 25.5835 65.0007 25.5835C86.7694 25.5835 104.417 43.2314 104.417 65.0002C104.417 86.7689 86.7694 104.417 65.0007 104.417C43.2319 104.417 25.584 86.7689 25.584 65.0002ZM58.6689 57.3533L46.2562 64.52L42.6729 58.3137L55.0856 51.147L58.6689 57.3533ZM74.9229 51.147L87.3356 58.3137L83.7522 64.52L71.3396 57.3533L74.9229 51.147ZM49.4812 77.5382C51.0545 74.8148 53.3169 72.5534 56.0412 70.9815C58.7654 69.4096 61.8554 68.5826 65.0007 68.5835C68.1456 68.5836 71.2351 69.4115 73.9587 70.984C76.6823 72.5565 78.944 74.8182 80.5165 77.5418L82.3117 80.6414L76.109 84.2283L74.3173 81.1287C73.3737 79.4929 72.0157 78.1344 70.3802 77.1902C68.7446 76.246 66.8892 75.7493 65.0007 75.7502C63.1125 75.749 61.2573 76.2451 59.6217 77.1887C57.9862 78.1322 56.6281 79.4899 55.684 81.1252L53.8923 84.2283L47.6896 80.6414L49.4812 77.5382Z" fill="white" />
                </svg>
                <h1>У вас ще немає вакансій</h1>
                <Link to='/BuxOnline/company/jobs/choose' >
                    <SolidButton width='235px' height='40px' borderRadius='20px'>Створити вакансію</SolidButton>
                </Link>
            </div>
        )
    }
}
const CompanyVacancies = () => {
    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <div className="vacancies-wrapper">
                <div className='inner-wrapper'>
                    <span>
                        <span>
                            <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M25.5518 43.5026L37.965 25.5359L16.6803 23.6515L19.8692 30.7872C16.8089 30.4764 13.9588 29.4921 11.6981 28.0233C8.76451 26.1171 6.96241 23.5047 6.70179 20.5899C6.71304 17.3186 7.40806 14.64 8.52729 12.4743C11.3232 14.1802 14.5193 15.4731 17.6414 16.2561C21.7655 17.2905 26.0653 17.51 29.2729 16.3239C30.9129 15.7176 32.3881 14.6951 33.304 13.1027C34.2279 11.4963 34.4342 9.56833 34.0085 7.45363L33.9899 7.3613L33.9624 7.27145C33.0194 4.18393 30.3132 2.25814 27.295 1.34259C24.2419 0.416443 20.56 0.405186 17.0187 1.38177C13.6101 2.32177 10.2386 4.20346 7.64604 7.19443C5.09911 5.01522 3.71139 2.61677 3.71139 0.251953L0.0078125 0.288726C0.0078125 4.32052 2.3914 7.73128 5.47989 10.3066C3.91981 13.1441 2.99807 16.6071 2.99807 20.707V20.7849L3.00429 20.8623C3.36008 25.2985 6.05926 28.8734 9.69346 31.2348C13.0159 33.3936 17.2382 34.6316 21.6118 34.6864L25.5518 43.5026ZM10.7049 9.3644C12.7006 7.2065 15.2693 5.78548 17.9486 5.04658C20.8974 4.23341 23.8786 4.27528 26.2123 4.9832C28.5347 5.68768 29.93 6.94078 30.4 8.35273C30.6596 9.7277 30.4549 10.6132 30.1181 11.1987C29.7655 11.8119 29.1161 12.3591 28.046 12.7548C25.8335 13.5729 22.3711 13.5258 18.5545 12.5686C15.8324 11.8859 13.0862 10.7784 10.7049 9.3644Z" fill="#3F7EE8" />
                            </svg>
                            <h1>Мій кабінет</h1>
                        </span>
                    </span>
                    <div className="all-vacancies">
                        {DisplayVacancies(dataPlaceholder)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompanyVacancies;