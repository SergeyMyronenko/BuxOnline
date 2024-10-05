import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbEdit } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import { FaHouseLaptop, FaHandshakeAngle } from "react-icons/fa6";
import { LiaUserClockSolid } from "react-icons/lia";

import SolidButton from '../../../Components/Buttons/SolidButton/SolidButton';
import InputField from '../../../Components/Input/InputField/InputField';
import InputSelect from '../../../Components/Input/InputSelect/InputSelect';
import InputCheckbox from '../../../Components/Input/InputCheckbox/InputCheckbox';
import InputArea from '../../../Components/Input/InputArea/InputArea';
import MultipleSelect from '../../../Components/MultipleSelect/MultipleSelect';

import './CompanyVacancies.scss';
import useFormState from '../../../Hooks/useFormState';
import { useAuth } from '../../../Hooks/useAuth';



const Multiform = () => {

    const { token, url } = useAuth();
    const CompanyVacancies = () => {
        const dataPlaceholder = [{
            id: 1,
            name: "Back End Engineer",
            candidates: 0,
            submited: 0
        }];
        return (
            <div className='vacancies-inner-wrapper'>
                <span className='title-wrapper'>
                    <span>
                        <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.5518 43.5026L37.965 25.5359L16.6803 23.6515L19.8692 30.7872C16.8089 30.4764 13.9588 29.4921 11.6981 28.0233C8.76451 26.1171 6.96241 23.5047 6.70179 20.5899C6.71304 17.3186 7.40806 14.64 8.52729 12.4743C11.3232 14.1802 14.5193 15.4731 17.6414 16.2561C21.7655 17.2905 26.0653 17.51 29.2729 16.3239C30.9129 15.7176 32.3881 14.6951 33.304 13.1027C34.2279 11.4963 34.4342 9.56833 34.0085 7.45363L33.9899 7.3613L33.9624 7.27145C33.0194 4.18393 30.3132 2.25814 27.295 1.34259C24.2419 0.416443 20.56 0.405186 17.0187 1.38177C13.6101 2.32177 10.2386 4.20346 7.64604 7.19443C5.09911 5.01522 3.71139 2.61677 3.71139 0.251953L0.0078125 0.288726C0.0078125 4.32052 2.3914 7.73128 5.47989 10.3066C3.91981 13.1441 2.99807 16.6071 2.99807 20.707V20.7849L3.00429 20.8623C3.36008 25.2985 6.05926 28.8734 9.69346 31.2348C13.0159 33.3936 17.2382 34.6316 21.6118 34.6864L25.5518 43.5026ZM10.7049 9.3644C12.7006 7.2065 15.2693 5.78548 17.9486 5.04658C20.8974 4.23341 23.8786 4.27528 26.2123 4.9832C28.5347 5.68768 29.93 6.94078 30.4 8.35273C30.6596 9.7277 30.4549 10.6132 30.1181 11.1987C29.7655 11.8119 29.1161 12.3591 28.046 12.7548C25.8335 13.5729 22.3711 13.5258 18.5545 12.5686C15.8324 11.8859 13.0862 10.7784 10.7049 9.3644Z" fill="#3F7EE8" />
                        </svg>
                        <h1>Вакансії компанії</h1>
                    </span>
                    <SolidButton width='250px' onClick={() => nextStep()}>Створити вакансію</SolidButton>

                </span>
                <div className="all-vacancies">
                    {
                        dataPlaceholder ? (
                            <ul className='vacancy-list'>
                                {dataPlaceholder.map((vacancy) => (
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
                            </ul>
                        ) : (
                            <div className='no-vacancy'>
                                <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="65" cy="65" r="65" fill="#9E9E9E" />
                                    <path d="M65.0007 32.7502C60.7655 32.7502 56.5719 33.5843 52.6591 35.205C48.7464 36.8258 45.1911 39.2013 42.1965 42.196C39.2018 45.1907 36.8263 48.7459 35.2055 52.6586C33.5848 56.5714 32.7507 60.765 32.7507 65.0002C32.7507 69.2353 33.5848 73.429 35.2055 77.3417C36.8263 81.2545 39.2018 84.8097 42.1965 87.8044C45.1911 90.799 48.7464 93.1746 52.6591 94.7953C56.5719 96.416 60.7655 97.2502 65.0007 97.2502C73.5539 97.2502 81.7568 93.8524 87.8048 87.8044C93.8529 81.7563 97.2507 73.5534 97.2507 65.0002C97.2507 56.4469 93.8529 48.244 87.8048 42.196C81.7568 36.1479 73.5539 32.7502 65.0007 32.7502ZM25.584 65.0002C25.584 43.2314 43.2319 25.5835 65.0007 25.5835C86.7694 25.5835 104.417 43.2314 104.417 65.0002C104.417 86.7689 86.7694 104.417 65.0007 104.417C43.2319 104.417 25.584 86.7689 25.584 65.0002ZM58.6689 57.3533L46.2562 64.52L42.6729 58.3137L55.0856 51.147L58.6689 57.3533ZM74.9229 51.147L87.3356 58.3137L83.7522 64.52L71.3396 57.3533L74.9229 51.147ZM49.4812 77.5382C51.0545 74.8148 53.3169 72.5534 56.0412 70.9815C58.7654 69.4096 61.8554 68.5826 65.0007 68.5835C68.1456 68.5836 71.2351 69.4115 73.9587 70.984C76.6823 72.5565 78.944 74.8182 80.5165 77.5418L82.3117 80.6414L76.109 84.2283L74.3173 81.1287C73.3737 79.4929 72.0157 78.1344 70.3802 77.1902C68.7446 76.246 66.8892 75.7493 65.0007 75.7502C63.1125 75.749 61.2573 76.2451 59.6217 77.1887C57.9862 78.1322 56.6281 79.4899 55.684 81.1252L53.8923 84.2283L47.6896 80.6414L49.4812 77.5382Z" fill="white" />
                                </svg>
                                <h1>У вас ще немає вакансій</h1>
                                <Link to='/BuxOnline/company/jobs/choose'>
                                    <SolidButton width='235px' height='40px' borderRadius='20px'>Створити вакансію</SolidButton>
                                </Link>
                            </div>
                        )
                    }
                </div>


            </div>
        )
    };

    const ChooseMethodToCreate = () => {
        const [fileName, setFileName] = useState('');

        const handleFileChange = (event) => {
            const file = event.target.files[0];
            if (file) {
                setFileName(file.name);
            } else {
                setFileName('');
            }


        };
        return (
            <>
                <div className="choose-inner-wrapper">
                    <h1>Створення вакансії</h1>
                    <h3>Будь ласка, виберість спосіб створення вакансії</h3>
                    <div className="choose-vacancy-methods">
                        <div className="choose-card">
                            <div className="title">
                                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="60" cy="60" r="60" fill="#3F7EE8" />
                                    <g clipPath="url(#clip0_8_4259)">
                                        <path d="M35.8496 44.9624V51.1499H50.6419C51.1878 51.1498 51.7114 50.9332 52.098 50.5477L57.6832 44.9624L52.098 39.3772C51.7114 38.9916 51.1878 38.775 50.6419 38.7749H42.0371C40.3961 38.7749 38.8223 39.4268 37.6619 40.5872C36.5015 41.7476 35.8496 43.3214 35.8496 44.9624ZM31.7246 44.9624C31.7246 42.2274 32.8111 39.6043 34.7451 37.6704C36.679 35.7364 39.3021 34.6499 42.0371 34.6499H50.6419C52.2823 34.6513 53.8551 35.3042 55.0144 36.4649L61.4535 42.8999H79.1621C81.8972 42.8999 84.5202 43.9864 86.4541 45.9204C88.3881 47.8543 89.4746 50.4774 89.4746 53.2124V64.915C88.1697 64.2958 86.7792 63.8758 85.3496 63.6693V53.2124C85.3496 51.5714 84.6977 49.9976 83.5373 48.8372C82.377 47.6768 80.8031 47.0249 79.1621 47.0249H61.4535L55.0185 53.4599C54.4435 54.0356 53.7606 54.4923 53.0089 54.8037C52.2572 55.1152 51.4514 55.2753 50.6377 55.2749H35.8496V73.8374C35.8496 75.4784 36.5015 77.0522 37.6619 78.2126C38.8223 79.373 40.3961 80.0249 42.0371 80.0249H52.494C52.7044 81.481 53.1292 82.8712 53.7397 84.1499H42.0371C39.3021 84.1499 36.679 83.0634 34.7451 81.1294C32.8111 79.1955 31.7246 76.5724 31.7246 73.8374V44.9624ZM66.7871 67.6499C64.0521 67.6499 61.429 68.7364 59.4951 70.6704C57.5611 72.6043 56.4746 75.2274 56.4746 77.9624C56.4746 80.6974 57.5611 83.3205 59.4951 85.2544C61.429 87.1884 64.0521 88.2749 66.7871 88.2749H68.8496C69.3966 88.2749 69.9212 88.0576 70.308 87.6708C70.6948 87.284 70.9121 86.7594 70.9121 86.2124C70.9121 85.6654 70.6948 85.1408 70.308 84.754C69.9212 84.3672 69.3966 84.1499 68.8496 84.1499H66.7871C65.1461 84.1499 63.5723 83.498 62.4119 82.3376C61.2515 81.1772 60.5996 79.6034 60.5996 77.9624C60.5996 76.3214 61.2515 74.7476 62.4119 73.5872C63.5723 72.4268 65.1461 71.7749 66.7871 71.7749H68.8496C69.3966 71.7749 69.9212 71.5576 70.308 71.1708C70.6948 70.784 70.9121 70.2594 70.9121 69.7124C70.9121 69.1654 70.6948 68.6408 70.308 68.254C69.9212 67.8672 69.3966 67.6499 68.8496 67.6499H66.7871ZM81.2246 67.6499C80.6776 67.6499 80.153 67.8672 79.7662 68.254C79.3794 68.6408 79.1621 69.1654 79.1621 69.7124C79.1621 70.2594 79.3794 70.784 79.7662 71.1708C80.153 71.5576 80.6776 71.7749 81.2246 71.7749H83.2871C84.9281 71.7749 86.502 72.4268 87.6623 73.5872C88.8227 74.7476 89.4746 76.3214 89.4746 77.9624C89.4746 79.6034 88.8227 81.1772 87.6623 82.3376C86.502 83.498 84.9281 84.1499 83.2871 84.1499H81.2246C80.6776 84.1499 80.153 84.3672 79.7662 84.754C79.3794 85.1408 79.1621 85.6654 79.1621 86.2124C79.1621 86.7594 79.3794 87.284 79.7662 87.6708C80.153 88.0576 80.6776 88.2749 81.2246 88.2749H83.2871C86.0222 88.2749 88.6452 87.1884 90.5791 85.2544C92.5131 83.3205 93.5996 80.6974 93.5996 77.9624C93.5996 75.2274 92.5131 72.6043 90.5791 70.6704C88.6452 68.7364 86.0222 67.6499 83.2871 67.6499H81.2246ZM64.7246 77.9624C64.7246 77.4154 64.9419 76.8908 65.3287 76.504C65.7155 76.1172 66.2401 75.8999 66.7871 75.8999H83.2871C83.8341 75.8999 84.3587 76.1172 84.7455 76.504C85.1323 76.8908 85.3496 77.4154 85.3496 77.9624C85.3496 78.5094 85.1323 79.034 84.7455 79.4208C84.3587 79.8076 83.8341 80.0249 83.2871 80.0249H66.7871C66.2401 80.0249 65.7155 79.8076 65.3287 79.4208C64.9419 79.034 64.7246 78.5094 64.7246 77.9624Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_8_4259">
                                            <rect width="66" height="66" fill="white" transform="translate(27.5996 26.3999)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h3>Завантаження посилання</h3>
                                <p>Завантажити за посиланням. Вставте посилання для автоматичного отримання деталей</p>
                            </div>
                            <form action="">
                                <InputField type="url" label="Посилання" placeholder="Вставте посилання сюди" id='url'></InputField>
                                <SolidButton type="submit" width='100%' height='39px' borderRadius='20px'> Завантажити </SolidButton>
                            </form>
                        </div>
                        <div className="choose-card">
                            <div className="title">
                                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="60" cy="60" r="60" fill="#3F7EE8" />
                                    <path d="M82.2904 44.3663L71.9779 34.0538C71.6881 33.7637 71.2949 33.6005 70.8848 33.6001H50.2598C49.3025 33.6001 48.3844 33.9804 47.7076 34.6573C47.0307 35.3341 46.6504 36.2522 46.6504 37.2095V41.8501H42.0098C41.0525 41.8501 40.1344 42.2304 39.4576 42.9073C38.7807 43.5841 38.4004 44.5022 38.4004 45.4595V82.5845C38.4004 83.5417 38.7807 84.4598 39.4576 85.1367C40.1344 85.8136 41.0525 86.1938 42.0098 86.1938H70.8848C71.842 86.1938 72.7601 85.8136 73.437 85.1367C74.1139 84.4598 74.4941 83.5417 74.4941 82.5845V77.9438H79.1348C80.092 77.9438 81.0101 77.5636 81.687 76.8867C82.3639 76.2098 82.7441 75.2917 82.7441 74.3345V45.4595C82.7438 45.0494 82.5806 44.6562 82.2904 44.3663ZM71.4004 82.5845C71.4004 82.7212 71.3461 82.8524 71.2494 82.9491C71.1527 83.0458 71.0215 83.1001 70.8848 83.1001H42.0098C41.873 83.1001 41.7419 83.0458 41.6452 82.9491C41.5485 82.8524 41.4941 82.7212 41.4941 82.5845V45.4595C41.4941 45.3227 41.5485 45.1916 41.6452 45.0949C41.7419 44.9982 41.873 44.9438 42.0098 44.9438H61.9928L71.4004 54.3514V82.5845ZM79.6504 74.3345C79.6504 74.4712 79.5961 74.6024 79.4994 74.6991C79.4027 74.7958 79.2715 74.8501 79.1348 74.8501H74.4941V53.7095C74.4938 53.2994 74.3306 52.9062 74.0404 52.6163L63.7279 42.3038C63.4381 42.0137 63.0449 41.8505 62.6348 41.8501H49.7441V37.2095C49.7441 37.0727 49.7985 36.9416 49.8952 36.8449C49.9919 36.7482 50.123 36.6938 50.2598 36.6938H70.2428L79.6504 46.1014V74.3345ZM64.1816 66.0845C64.1816 66.4947 64.0187 66.8882 63.7286 67.1783C63.4385 67.4684 63.045 67.6313 62.6348 67.6313H50.2598C49.8495 67.6313 49.4561 67.4684 49.166 67.1783C48.8759 66.8882 48.7129 66.4947 48.7129 66.0845C48.7129 65.6742 48.8759 65.2808 49.166 64.9907C49.4561 64.7006 49.8495 64.5376 50.2598 64.5376H62.6348C63.045 64.5376 63.4385 64.7006 63.7286 64.9907C64.0187 65.2808 64.1816 65.6742 64.1816 66.0845ZM64.1816 74.3345C64.1816 74.7447 64.0187 75.1382 63.7286 75.4283C63.4385 75.7184 63.045 75.8813 62.6348 75.8813H50.2598C49.8495 75.8813 49.4561 75.7184 49.166 75.4283C48.8759 75.1382 48.7129 74.7447 48.7129 74.3345C48.7129 73.9242 48.8759 73.5308 49.166 73.2407C49.4561 72.9506 49.8495 72.7876 50.2598 72.7876H62.6348C63.045 72.7876 63.4385 72.9506 63.7286 73.2407C64.0187 73.5308 64.1816 73.9242 64.1816 74.3345Z" fill="white" />
                                </svg>
                                <h3>З шаблонів</h3>
                                <p>Вибрати з ряду готових шаблонів</p>

                            </div>
                            <form action="">
                                <InputSelect label="Шаблони" options={[{ name: "Шаблон 1", value: 1 }, { name: "Шаблон 2", value: 2 }, { name: "Шаблон 3", value: 3 }]} id='template'></InputSelect>
                                <SolidButton type="submit" width='100%' borderRadius='20px'> Завантажити </SolidButton>

                            </form>
                        </div>
                        <div className="choose-card">
                            <div className="title">
                                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="60" cy="60" r="60" fill="#3F7EE8" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M60.5996 33.1001C57.4167 33.0994 54.3014 34.0194 51.6295 35.7492C48.9576 37.4789 46.843 39.9445 45.5406 42.8488C45.3553 43.2652 45.1656 43.6796 44.9714 44.0918L44.9164 44.0946C44.7404 44.1001 44.5011 44.1001 44.0996 44.1001C41.1822 44.1001 38.3843 45.259 36.3214 47.3219C34.2585 49.3848 33.0996 52.1827 33.0996 55.1001C33.0996 58.0175 34.2585 60.8154 36.3214 62.8783C38.3843 64.9412 41.1822 66.1001 44.0996 66.1001H44.5726L50.0726 60.6001H44.0996C42.6409 60.6001 41.242 60.0206 40.2105 58.9892C39.1791 57.9577 38.5996 56.5588 38.5996 55.1001C38.5996 53.6414 39.1791 52.2425 40.2105 51.211C41.242 50.1796 42.6409 49.6001 44.0996 49.6001H44.2756C44.8476 49.6001 45.5131 49.6028 46.0631 49.4901C46.7478 49.373 47.4022 49.1206 47.9881 48.7476C48.6509 48.3186 49.1074 47.7851 49.4539 47.2983C49.6662 46.9848 49.8511 46.6536 50.0066 46.3083C50.1533 46.0022 50.3329 45.6098 50.5456 45.1313L50.5566 45.1038C51.424 43.1655 52.8338 41.5196 54.6158 40.3648C56.3979 39.2099 58.4761 38.5954 60.5996 38.5954C62.7232 38.5954 64.8013 39.2099 66.5834 40.3648C68.3654 41.5196 69.7752 43.1655 70.6426 45.1038L70.6564 45.1313C70.8672 45.608 71.0459 46.0003 71.1926 46.3083C71.3191 46.5751 71.5061 46.9628 71.7454 47.2983C72.0919 47.7823 72.5456 48.3186 73.2111 48.7503C73.8766 49.1793 74.5504 49.3746 75.1361 49.4928C75.6861 49.6028 76.3516 49.6028 76.9236 49.6028L77.0996 49.6001C78.5583 49.6001 79.9572 50.1796 80.9887 51.211C82.0201 52.2425 82.5996 53.6414 82.5996 55.1001C82.5996 56.5588 82.0201 57.9577 80.9887 58.9892C79.9572 60.0206 78.5583 60.6001 77.0996 60.6001H71.1266L76.6266 66.1001H77.0996C80.017 66.1001 82.8149 64.9412 84.8778 62.8783C86.9407 60.8154 88.0996 58.0175 88.0996 55.1001C88.0996 52.1827 86.9407 49.3848 84.8778 47.3219C82.8149 45.259 80.017 44.1001 77.0996 44.1001C76.6981 44.1001 76.4589 44.1001 76.2829 44.0946H76.2279L76.1591 43.9488C75.9889 43.5837 75.8221 43.217 75.6586 42.8488C74.3563 39.9445 72.2416 37.4789 69.5697 35.7492C66.8978 34.0194 63.7826 33.0994 60.5996 33.1001Z" fill="white" />
                                    <path d="M60.6005 60.5999L58.6562 58.6557L60.6005 56.7114L62.5447 58.6557L60.6005 60.5999ZM63.3505 85.3499C63.3505 86.0793 63.0608 86.7787 62.545 87.2945C62.0293 87.8102 61.3298 88.0999 60.6005 88.0999C59.8712 88.0999 59.1717 87.8102 58.656 87.2945C58.1402 86.7787 57.8505 86.0793 57.8505 85.3499H63.3505ZM47.6562 69.6557L58.6562 58.6557L62.5447 62.5442L51.5447 73.5442L47.6562 69.6557ZM62.5447 58.6557L73.5448 69.6557L69.6562 73.5442L58.6562 62.5442L62.5447 58.6557ZM63.3505 60.5999V85.3499H57.8505V60.5999H63.3505Z" fill="white" />
                                </svg>
                                <h3>Завантажити файл</h3>
                                <p>Виберіть свій файл<br />
                                    Прикріпити до <span>1 файлу</span>, не більше <span>10 МБ</span>, формат<span> PDF</span>
                                </p>

                            </div>
                            <form action="" className='file-form'>
                                <div>
                                    <label htmlFor="file" className='file-label'>Вибрати файл</label>
                                    <input type="file" id="file" onChange={handleFileChange} required />
                                </div>
                                {/* a check for uploaded files is required here*/}
                                <input type="text" value={fileName} readOnly disabled />

                                <SolidButton type="submit" width='100%' height='39px' borderRadius='20px'> Завантажити </SolidButton>

                            </form>
                        </div>
                        <div className="choose-card">
                            <div className="title">
                                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="60" cy="60" r="60" fill="#3F7EE8" />
                                    <path d="M86.203 45.3156L74.6839 33.794C74.3009 33.4108 73.8461 33.1069 73.3456 32.8995C72.845 32.6922 72.3086 32.5854 71.7668 32.5854C71.225 32.5854 70.6885 32.6922 70.188 32.8995C69.6875 33.1069 69.2327 33.4108 68.8496 33.794L37.0588 65.5874C36.6741 65.9691 36.3691 66.4234 36.1615 66.924C35.9539 67.4245 35.8479 67.9614 35.8496 68.5033V80.0249C35.8496 81.1189 36.2842 82.1681 37.0578 82.9417C37.8314 83.7153 38.8806 84.1499 39.9746 84.1499H51.4963C52.0382 84.1516 52.575 84.0456 53.0756 83.8381C53.5762 83.6305 54.0305 83.3255 54.4121 82.9408L86.203 51.1499C86.5861 50.7668 86.8901 50.3121 87.0974 49.8115C87.3048 49.311 87.4115 48.7745 87.4115 48.2328C87.4115 47.691 87.3048 47.1545 87.0974 46.654C86.8901 46.1534 86.5861 45.6987 86.203 45.3156ZM40.828 67.6499L62.6621 45.8158L66.965 50.1187L45.1309 71.9502L40.828 67.6499ZM39.9746 72.6283L47.3713 80.0249H39.9746V72.6283ZM52.3496 79.1715L48.0467 74.8687L69.8809 53.0345L74.1838 57.3374L52.3496 79.1715ZM77.0996 54.4215L65.578 42.8999L71.7655 36.7124L83.2871 48.2315L77.0996 54.4215Z" fill="white" />
                                </svg>
                                <h3>Введення вручну</h3>
                                <p>Введіть дані вашої вакансії вручну</p>


                            </div>
                            {/* the styles for these card are applied to the form element, so it is here to use them*/}
                            <form action="">
                                <SolidButton width='100%' height='39px' borderRadius='20px' onClick={() => nextStep()}>Далі</SolidButton>
                            </form>

                        </div>
                    </div>
                </div>

            </>
        );
    };

    const CreateVacancy = () => {
        const [languages, setLanguages] = useState([{ id: 0, name: '', level: '' }]);
        const [skills, setSkills] = useState([{ id: 0, name: '' }]);
        const [subcategories, setSubcategories] = useState([{ id: 0,category:{id:0,name:''}, name: '' }]);
        const [vacancyData, handleVacancyDataChange] = useFormState({
            moderation_comment: '',
            title: '',
            // name_company: '',
            description: '<p>Опишіть роботу</p>',
            skills: [],
            required_experience: '',
            city: '',
            salary_min: '',
            salary_max: '',
            category: {},
            subcategory: subcategories[0].id, // Add a default integer value
            education_levels: [],
            languages: [languages[0].id], // Add a default integer value
            // work_type: 'fulltime',
            // work_format: 'online',
            // company_type: 'Product',
            work_type: [],
            work_format: [],
            company_type: [],
            country: 'Ukraine',
            status: 'pending',
            employer: 1,
            // position: 'testing'

        })

        useEffect(() => {
            const requestOptions: RequestInit = {
                method: "GET",
                redirect: "follow"
            };
            //   fetch languages
            fetch(`${url}/jobs/languages/`, requestOptions)
                .then((response) => response.json())
                .then((result) => { setLanguages(result);handleLanguageChange(1, result[0].id); })
                .catch((error) => console.error(error));
            // fetch skills
            fetch(`${url}/jobs/skills/`, requestOptions)
                .then((response) => response.json())
                .then((result) => { setSkills(result); })
                .catch((error) => console.error(error));
            // fetch subcategories
            fetch(`${url}/jobs/job-sub-categories/`, requestOptions)
                .then((response) => response.json())
                .then((result) => { setSubcategories(result);handleVacancyDataChange({target:{value:result[0].id,id:"subcategory"}});})
                .catch((error) => console.error(error));
        }, [])

        
        const AreaInputChange = (event) => {
            handleVacancyDataChange({ target: { value: event, id: 'description' } })
        }
        const SkillsChange = (event) => {
            handleVacancyDataChange({ target: { value: event, id: 'skills' } })
        }

        const [languageSelectors, setLanguageSelectors] = useState([{ id: 1 }]);

        const addLanguageSelector = () => {
            const newId = languageSelectors.length + 1;
            const newLanguageSelectors = [...languageSelectors, { id: newId }];
            setLanguageSelectors(newLanguageSelectors);
            handleVacancyDataChange({
                target: {
                    name: 'languages',
                    value: [...vacancyData.languages, languages[0].id] // Add a default integer value
                }
            });
        };

        const clearLanguageSelector = (id) => {
            const newLanguageSelectors = languageSelectors.filter(selector => selector.id !== id);
            setLanguageSelectors(newLanguageSelectors);
            handleVacancyDataChange({
                target: {
                    name: 'languages',
                    value: vacancyData.languages.filter((_, index) => index !== id - 1)
                }
            });
        };
        const handleLanguageChange = (id, value) => {
            const newLanguages = vacancyData.languages.map((language, index) =>
                index === id - 1 ? parseInt(value) : language
            );
            handleVacancyDataChange({
                target: {
                    name: 'languages',
                    value: newLanguages
                }
            });
        };
        
        const handleCheckBoxChange = (event) => {
            const { name, value, checked } = event.target;
            handleVacancyDataChange({
                target: {
                    name,
                    value: checked ? [...vacancyData[name], value] : vacancyData[name].filter((item) => item !== value),
                },
            });
        };

        const createVacancy = (event: React.FormEvent) => {
            event.preventDefault();

            console.log("Form sent")

            const myHeaders = new Headers();
            myHeaders.append("Authorization", `JWT ${token}`);
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "moderation_comment": "",
                "title": vacancyData.title,
                "name_company": "esadas",
                "description": vacancyData.description,
                "required_experience": vacancyData.required_experience,
                "city": vacancyData.city,
                "salary_min": vacancyData.salary_min,
                "salary_max": vacancyData.salary_max,
                "languages": vacancyData.languages,
                "subcategory": vacancyData.subcategory,
                "category": subcategories.find((subcategory) => subcategory.id === vacancyData.subcategory)!.category.id,
                // "work_type": vacancyData.work_type,
                // "work_format": vacancyData.work_format,
                // "type": vacancyData.company_type,
                "work_type": "fulltime",
                "work_format": "online",
                "type": "Product",
                "country": "ukr",
                "position": "adsa",
                "employer": 1
            });

            const requestOptions: RequestInit = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch(`${url}/jobs/jobs/`, requestOptions)
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.error(error));
        }

        return (
            <>

                <div className="create-inner-wrapper">
                    <form action="" onSubmit={createVacancy}>
                        <h2>Деталі вакансії</h2>
                        <div className="field-wrapper">
                            <InputField type='text' placeholder='Назва вакансії' label='Назва' id='title' onChange={handleVacancyDataChange}></InputField>
                        </div>
                        <div className='field-wrapper'>
                            <h2>Роль</h2>
                            <InputSelect label="Роль, яку ви б хотіли найняти" id='subcategory' onChange={handleVacancyDataChange} options={subcategories.map((subcategory) => ({ name: subcategory.name, value: subcategory.id }))}></InputSelect>
                        </div>
                        <div className='field-wrapper'>
                            <h2>Років досвіду</h2>
                            <div className="select-experience">
                                {[...Array(11).keys()].map(year => (
                                    <div className="radio-wrapper" key={year}>
                                        <input
                                            type="radio"
                                            name="required_experience"
                                            id={`experience-${year}`}
                                            value={year === 10 ? 10 : year}
                                            onChange={handleVacancyDataChange}
                                            required
                                        />
                                        <label htmlFor={`experience-${year}`}>{year === 10 ? '10+' : year}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='field-wrapper'>
                            <h2>Навички</h2>
                            <MultipleSelect skills={skills} id='skills' onChange={SkillsChange}></MultipleSelect>
                        </div>
                        <div className='field-wrapper'>
                            <h2>Діапазон заробітної плати($)</h2>
                            <div className='salary'>
                                <InputField type='number' placeholder='Початкова сума' label='Від' id='salary_min' onChange={handleVacancyDataChange}></InputField>
                                <InputField type='number' placeholder='Кінцева сума' label='До' id='salary_max' onChange={handleVacancyDataChange}></InputField>
                            </div>

                        </div>
                        <div className="field-wrapper">
                            <h2>Місцезнаходження</h2>
                            <InputField type='text' placeholder='Введіть місцезнаходження' label='Місто' id='city' onChange={handleVacancyDataChange}></InputField>
                        </div>

                        <div className="field-wrapper">
                            <h2>Мови</h2>
                            <div className='languages'>
                                {languageSelectors.map((selector) => (
                                    <div key={selector.id}>
                                        <InputSelect
                                            label='Мови'
                                            options={languages.map((language) => ({ name: language.name + ' - ' + language.level, value: language.id }))}
                                            id={`language-${selector.id}`}
                                            onChange={(e) => handleLanguageChange(selector.id, e.target.value)} // Pass the integer value
                                        />

                                        <div key={selector.id} className="clear-language">
                                            <button type='button' onClick={() => clearLanguageSelector(selector.id)}>
                                                <AiOutlineDelete />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <SolidButton onClick={addLanguageSelector} borderRadius='20px' width='300px'>+ Додати мову</SolidButton>
                            </div>

                        </div>
                        <div className="field-wrapper">
                            <h2>Переваги роботи</h2>
                            <div className="advantages">
                                <div>
                                    <LiaUserClockSolid />
                                    <h4>Вид зайнятості</h4>
                                    <InputCheckbox label='Part-time' width='20px' height='20px' name='work_type' value='parttime' onChange={handleCheckBoxChange}></InputCheckbox>
                                    <InputCheckbox label='Full-time' width='20px' height='20px' name='work_type' value='fulltime' onChange={handleCheckBoxChange}></InputCheckbox>
                                    <InputCheckbox label='Контракт' width='20px' height='20px' name='work_type' value='contract' onChange={handleCheckBoxChange}></InputCheckbox>

                                </div>
                                <div>
                                    <FaHouseLaptop />

                                    <h4>Робоче середовище</h4>
                                    <InputCheckbox label='Дистанційно' width='20px' height='20px' name='work_format' value='offline' onChange={handleCheckBoxChange}></InputCheckbox>
                                    <InputCheckbox label='В офісі' width='20px' height='20px' name='work_format' value='online' onChange={handleCheckBoxChange}></InputCheckbox>
                                    <InputCheckbox label='Гібридно' width='20px' height='20px' name='work_format' value='hybrid' onChange={handleCheckBoxChange}></InputCheckbox>

                                </div>
                                <div>
                                    <FaHandshakeAngle />
                                    <h4>Тип бізнесу</h4>
                                    <InputCheckbox label='Startup' width='20px' height='20px' name='company_type' value='Startup ' onChange={handleCheckBoxChange}></InputCheckbox>
                                    <InputCheckbox label='Product' width='20px' height='20px' name='company_type' value='Product  ' onChange={handleCheckBoxChange}></InputCheckbox>
                                    <InputCheckbox label='Outsource' width='20px' height='20px' name='company_type' value='Outstaff  ' onChange={handleCheckBoxChange}></InputCheckbox>
                                    <InputCheckbox label='Outstaff' width='20px' height='20px' name='company_type' value='Outsource ' onChange={handleCheckBoxChange}></InputCheckbox>
                                </div>
                            </div>
                        </div>
                        <div className="field-wrapper">
                            <h2>Опис роботи</h2>
                            <InputArea initialValue={vacancyData.description} setValue={AreaInputChange} ></InputArea>

                        </div>

                        <SolidButton type='submit' >Далі</SolidButton>



                    </form>
                </div>

            </>
        );
    };

    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    return (

        <div className="vacancies-wrapper">
            {step === 1 && (<CompanyVacancies />)}
            {step === 2 && (<ChooseMethodToCreate />)}
            {step === 3 && (<CreateVacancy />)}
        </div >
    );
};


export default Multiform;