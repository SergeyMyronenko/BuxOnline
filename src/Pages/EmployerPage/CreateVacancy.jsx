import React, { useEffect, useState } from 'react';

import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';

import SolidButton from '../../Components/Buttons/SolidButton/SolidButton';
import InputSelect from '../../Components/Input/InputSelect/InputSelect';
import MultipleSelect from '../../Components/MultipleSelect/MultipleSelect';
import InputField from '../../Components/Input/InputField/InputField';
import InputCheckbox from '../../Components/Input/InputCheckbox/InputCheckbox';
import InputArea from '../../Components/Input/InputArea/InputArea';

import { AiOutlineDelete } from "react-icons/ai";

import './CreateVacancy.scss';


const allItems = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB',
    'GraphQL', 'Apollo', 'Redux', 'HTML', 'CSS', 'Sass', 'Webpack',
    'Babel', 'Jest', 'Cypress', 'Docker', 'Kubernetes', 'AWS', 'Azure',
    'GCP', 'Python', 'Django', 'Flask', 'Java', 'Spring', 'Hibernate',
    'MySQL', 'PostgreSQL', 'SQLite', 'Git', 'GitHub', 'GitLab', 'CI/CD',
    'Agile', 'Scrum', 'JIRA', 'Trello', 'VSCode', 'IntelliJ', 'Eclipse'
];

// made with AI
/**
 * CreateVacancy component renders a form for creating a job vacancy.
 * 
 * @component
 * @example
 * return (
 *   <CreateVacancy />
 * )
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * @description
 * This component includes various input fields and selectors for specifying job details such as role, experience, skills, salary range, location, languages, job advantages, work environment, and business type. It also includes a text area for job description.
 * 
 * @function
 * @name CreateVacancy
 * 
 * @property {string} value - The value of the job description text area.
 * @property {function} setValue - Function to update the value of the job description text area.
 * @property {Array} languageSelectors - Array of objects representing language selectors.
 * @property {function} setLanguageSelectors - Function to update the array of language selectors.
 * @property {function} addLanguageSelector - Function to add a new language selector.
 * @property {function} clearLanguageSelector - Function to remove a language selector by its id.
 * 
 * @requires useState
 * @requires useEffect
 * @requires Header
 * @requires Nav
 * @requires InputSelect
 * @requires MultipleSelect
 * @requires InputField
 * @requires SolidButton
 * @requires InputCheckbox
 * @requires InputArea
 * @requires AiOutlineDelete
 */
const CreateVacancy = () => {
    const [value, setValue] = useState('Опишіть роботу');

    const [languageSelectors, setLanguageSelectors] = useState([{ id: 1 }]);

    const addLanguageSelector = () => {
        setLanguageSelectors([...languageSelectors, { id: languageSelectors.length + 1 }]);
    };

    const clearLanguageSelector = (id) => {
        setLanguageSelectors(languageSelectors.filter(selector => selector.id !== id));
    };
    useEffect(() => {console.log(value) },[value])

    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <div className='create-vacancy-wrapper'>
                <div className="create-vacancy-box">
                    <form action="">
                        <h2>Деталі вакансії</h2>
                        <div className='field-wrapper'>
                            <h2>Роль</h2>
                            <InputSelect label="Роль, яку ви б хотіли найняти" options={["Back End Developer", "Front End Developer", "Fullstack Developer"]} id='role'></InputSelect>
                        </div>
                        <div className='field-wrapper'>
                            <h2>Років досвіду</h2>
                            <div className="select-experience">
                                {[...Array(11).keys()].map(year => (
                                    <div className="radio-wrapper" key={year}>
                                        <input type="radio" name="experience" id={`experience-${year}`} />
                                        <label htmlFor={`experience-${year}`}>{year === 10 ? '10+' : year}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='field-wrapper'>
                            <h2>Навички</h2>
                            <MultipleSelect skills={allItems} id='skills'></MultipleSelect>
                        </div>

                        <div className='field-wrapper'>
                            <h2>Діапазон заробітної плати($)</h2>
                            <div className='salary'>
                                <InputField type='number' placeholder='Початкова сума' label='Від' id='min-salary'></InputField>
                                <InputField type='number' placeholder='Кінцева сума' label='До' id='max-salary'></InputField>
                            </div>

                        </div>
                        <div className="field-wrapper">
                            <h2>Місцезнаходження</h2>
                            <InputField type='text' placeholder='Введіть місцезнаходження' label='Місто' id='city'></InputField>
                        </div>

                        <div className="field-wrapper">
                            <h2>Мови</h2>
                            <div className='languages'>
                                {languageSelectors.map((selector) => (
                                    <div key={selector.id}>
                                        <InputSelect
                                            label='Мови'
                                            options={["Англійська", "Українська", "Російська", "Румунська", "Польська", "Французька", "Німецька", "Іспанська", "Італійська"]}
                                            id={`language-${selector.id}`}
                                        />
                                        <InputSelect
                                            label='Рівень'
                                            options={["A0", "A1", "A2", "B1", "B2", "C1", "C2"]}
                                            id={`language-level-${selector.id}`}
                                        />
                                        <div key={selector.id} className="clear-language" >
                                            <button type='button' onClick={() => clearLanguageSelector(selector.id)}>
                                                <AiOutlineDelete />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <SolidButton onClick={addLanguageSelector} borderRadius='20px' width='300px'>+ Додати мову </SolidButton>
                        </div>
                        <div className="field-wrapper">
                            <h2>Переваги роботи</h2>
                            <div className="advantages">
                                <div>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.25 6C15.8576 6 14.5223 6.55312 13.5377 7.53769C12.5531 8.52226 12 9.85761 12 11.25C12 12.6424 12.5531 13.9777 13.5377 14.9623C14.5223 15.9469 15.8576 16.5 17.25 16.5C18.6424 16.5 19.9777 15.9469 20.9623 14.9623C21.9469 13.9777 22.5 12.6424 22.5 11.25C22.5 9.85761 21.9469 8.52226 20.9623 7.53769C19.9777 6.55312 18.6424 6 17.25 6ZM9 11.25C9 9.06196 9.86919 6.96354 11.4164 5.41637C12.9635 3.86919 15.062 3 17.25 3C19.438 3 21.5365 3.86919 23.0836 5.41637C24.6308 6.96354 25.5 9.06196 25.5 11.25C25.5 13.438 24.6308 15.5365 23.0836 17.0836C21.5365 18.6308 19.438 19.5 17.25 19.5C15.062 19.5 12.9635 18.6308 11.4164 17.0836C9.86919 15.5365 9 13.438 9 11.25ZM27 21.75C25.6076 21.75 24.2723 22.3031 23.2877 23.2877C22.3031 24.2723 21.75 25.6076 21.75 27C21.75 28.3924 22.3031 29.7277 23.2877 30.7123C24.2723 31.6969 25.6076 32.25 27 32.25C28.3924 32.25 29.7277 31.6969 30.7123 30.7123C31.6969 29.7277 32.25 28.3924 32.25 27C32.25 25.6076 31.6969 24.2723 30.7123 23.2877C29.7277 22.3031 28.3924 21.75 27 21.75ZM18.75 27C18.75 25.9166 18.9634 24.8438 19.378 23.8429C19.7926 22.8419 20.4003 21.9325 21.1664 21.1664C21.9325 20.4003 22.8419 19.7926 23.8429 19.378C24.8438 18.9634 25.9166 18.75 27 18.75C28.0834 18.75 29.1562 18.9634 30.1571 19.378C31.1581 19.7926 32.0675 20.4003 32.8336 21.1664C33.5997 21.9325 34.2074 22.8419 34.622 23.8429C35.0366 24.8438 35.25 25.9166 35.25 27C35.25 29.188 34.3808 31.2865 32.8336 32.8336C31.2865 34.3808 29.188 35.25 27 35.25C24.812 35.25 22.7135 34.3808 21.1664 32.8336C19.6192 31.2865 18.75 29.188 18.75 27ZM12 24C10.4087 24 8.88258 24.6321 7.75736 25.7574C6.63214 26.8826 6 28.4087 6 30H16.575V33H3V30C3 27.6131 3.94821 25.3239 5.63604 23.636C7.32387 21.9482 9.61305 21 12 21H16.5V24H12ZM28.5 23.628V26.379L30.621 28.5L28.5 30.621L25.5 27.621V23.628H28.5Z" fill="#3F7EE8" />
                                    </svg>
                                    <h4>Вид зайнятості</h4>
                                    <InputCheckbox label='Part-time' width='20px' height='20px'></InputCheckbox>
                                    <InputCheckbox label='Full-time' width='20px' height='20px'></InputCheckbox>
                                    <InputCheckbox label='Контракт' width='20px' height='20px'></InputCheckbox>

                                </div>
                                <div>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.375 6C8.47989 6 7.62145 6.35558 6.98851 6.98851C6.35558 7.62145 6 8.47989 6 9.375V20.625C6 21.5201 6.35558 22.3785 6.98851 23.0115C7.62145 23.6444 8.47989 24 9.375 24H24.075C23.4391 23.3772 22.972 22.6029 22.7175 21.75H9.375C9.07663 21.75 8.79048 21.6315 8.5795 21.4205C8.36853 21.2095 8.25 20.9234 8.25 20.625V9.375C8.25 9.07663 8.36853 8.79048 8.5795 8.5795C8.79048 8.36853 9.07663 8.25 9.375 8.25H26.625C26.9234 8.25 27.2095 8.36853 27.4205 8.5795C27.6315 8.79048 27.75 9.07663 27.75 9.375V15C28.5555 15 29.3175 15.18 30 15.5055V9.375C30 8.93179 29.9127 8.49292 29.7431 8.08344C29.5735 7.67397 29.3249 7.30191 29.0115 6.98851C28.6981 6.67512 28.326 6.42652 27.9166 6.25691C27.5071 6.0873 27.0682 6 26.625 6H9.375ZM4.125 26.25H19.962C19.6573 26.8398 19.4988 27.4942 19.5 28.158V28.3125C19.5 28.3755 19.501 28.438 19.503 28.5H4.125C3.82663 28.5 3.54048 28.3815 3.3295 28.1705C3.11853 27.9595 3 27.6734 3 27.375C3 27.0766 3.11853 26.7905 3.3295 26.5795C3.54048 26.3685 3.82663 26.25 4.125 26.25ZM31.5 20.25C31.5 21.2446 31.1049 22.1984 30.4016 22.9016C29.6984 23.6049 28.7446 24 27.75 24C26.7554 24 25.8016 23.6049 25.0984 22.9016C24.3951 22.1984 24 21.2446 24 20.25C24 19.2554 24.3951 18.3016 25.0984 17.5983C25.8016 16.8951 26.7554 16.5 27.75 16.5C28.7446 16.5 29.6984 16.8951 30.4016 17.5983C31.1049 18.3016 31.5 19.2554 31.5 20.25ZM34.5 28.3125C34.5 30.6465 32.571 33 27.75 33C22.929 33 21 30.6555 21 28.3125V28.158C21 26.688 22.191 25.5 23.6595 25.5H31.8405C33.3105 25.5 34.5 26.6895 34.5 28.158V28.3125Z" fill="#3F7EE8" />
                                    </svg>

                                    <h4>Робоче середовище</h4>
                                    <InputCheckbox label='Дистанційно' width='20px' height='20px'></InputCheckbox>
                                    <InputCheckbox label='В офісі' width='20px' height='20px'></InputCheckbox>
                                    <InputCheckbox label='Гібридно' width='20px' height='20px'></InputCheckbox>

                                </div>
                                <div>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.5645 13.065C34.4395 11.19 33.5845 9.00002 32.5645 7.93502L28.0645 3.43502C26.1745 1.56002 23.9995 2.41502 22.9345 3.43502L20.3845 6.00002H16.4995C13.6495 6.00002 11.9995 7.50002 11.1595 9.22502L4.49953 15.885V21.885L3.43453 22.935C1.55953 24.825 2.41453 27 3.43453 28.065L7.93453 32.565C8.74453 33.375 9.61453 33.675 10.4395 33.675C11.5045 33.675 12.4795 33.15 13.0645 32.565L17.1145 28.5H22.4995C25.0495 28.5 26.3395 26.91 26.8045 25.35C28.4995 24.9 29.4295 23.61 29.8045 22.35C32.1295 21.75 32.9995 19.545 32.9995 18V13.5H32.1145L32.5645 13.065ZM29.9995 18C29.9995 18.675 29.7145 19.5 28.4995 19.5H26.9995V21C26.9995 21.675 26.7145 22.5 25.4995 22.5H23.9995V24C23.9995 24.675 23.7145 25.5 22.4995 25.5H15.8845L10.9645 30.42C10.4995 30.855 10.2295 30.6 10.0645 30.435L5.57953 25.965C5.14453 25.5 5.39953 25.23 5.56453 25.065L7.49953 23.115V17.115L10.4995 14.115V16.5C10.4995 18.315 11.6995 21 14.9995 21C18.2995 21 19.4995 18.315 19.4995 16.5H29.9995V18ZM30.4345 10.935L27.8845 13.5H16.4995V16.5C16.4995 17.175 16.2145 18 14.9995 18C13.7845 18 13.4995 17.175 13.4995 16.5V12C13.4995 11.31 13.7545 9.00002 16.4995 9.00002H21.6145L25.0345 5.58002C25.4995 5.14502 25.7695 5.40002 25.9345 5.56502L30.4195 10.035C30.8545 10.5 30.5995 10.77 30.4345 10.935Z" fill="#3F7EE8" />
                                    </svg>
                                    <h4>Тип бізнесу</h4>
                                    <InputCheckbox label='Startup' width='20px' height='20px'></InputCheckbox>
                                    <InputCheckbox label='Product' width='20px' height='20px'></InputCheckbox>
                                    <InputCheckbox label='Outsource' width='20px' height='20px'></InputCheckbox>
                                    <InputCheckbox label='Outstaff' width='20px' height='20px'></InputCheckbox>
                                </div>
                            </div>
                        </div>
                        <div className="field-wrapper">
                            <h2>Опис роботи</h2>
                            <InputArea value={value} setValue={setValue} ></InputArea>
                            
                        </div>
                        <SolidButton type='submit'>Далі</SolidButton>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateVacancy;