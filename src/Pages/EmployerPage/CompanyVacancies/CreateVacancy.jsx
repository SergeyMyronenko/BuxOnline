import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../Components/Header/Header';
import Nav from '../../../Components/Nav/Nav';

import SolidButton from '../../../Components/Buttons/SolidButton/SolidButton';
import InputSelect from '../../../Components/Input/InputSelect/InputSelect';
import MultipleSelect from '../../../Components/MultipleSelect/MultipleSelect';
import InputField from '../../../Components/Input/InputField/InputField';
import InputCheckbox from '../../../Components/Input/InputCheckbox/InputCheckbox';
import InputArea from '../../../Components/Input/InputArea/InputArea';

import { AiOutlineDelete } from "react-icons/ai";
import { FaHouseLaptop } from "react-icons/fa6";
import { FaHandshakeAngle } from "react-icons/fa6";
import { LiaUserClockSolid } from "react-icons/lia";

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
 * @todo: useContext hook for managing rich text editor state
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
                                <LiaUserClockSolid />
                                    <h4>Вид зайнятості</h4>
                                    <InputCheckbox label='Part-time' width='20px' height='20px'></InputCheckbox>
                                    <InputCheckbox label='Full-time' width='20px' height='20px'></InputCheckbox>
                                    <InputCheckbox label='Контракт' width='20px' height='20px'></InputCheckbox>

                                </div>
                                <div>
                                <FaHouseLaptop/>

                                    <h4>Робоче середовище</h4>
                                    <InputCheckbox label='Дистанційно' width='20px' height='20px'></InputCheckbox>
                                    <InputCheckbox label='В офісі' width='20px' height='20px'></InputCheckbox>
                                    <InputCheckbox label='Гібридно' width='20px' height='20px'></InputCheckbox>

                                </div>
                                <div>
                                <FaHandshakeAngle/>
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
                        <Link to='/BuxOnline/company/jobs/create/1'>
                            <SolidButton type='submit'>Далі</SolidButton>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateVacancy;