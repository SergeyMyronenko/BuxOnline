import React from 'react';

import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';

import InputSelect from '../../Components/Input/InputSelect/InputSelect';
import MultipleSelect from '../../Components/MultipleSelect/MultipleSelect';

import './CreateVacancy.scss';
const allItems = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB',
    'GraphQL', 'Apollo', 'Redux', 'HTML', 'CSS', 'Sass', 'Webpack',
    'Babel', 'Jest', 'Cypress', 'Docker', 'Kubernetes', 'AWS', 'Azure',
    'GCP', 'Python', 'Django', 'Flask', 'Java', 'Spring', 'Hibernate',
    'MySQL', 'PostgreSQL', 'SQLite', 'Git', 'GitHub', 'GitLab', 'CI/CD',
    'Agile', 'Scrum', 'JIRA', 'Trello', 'VSCode', 'IntelliJ', 'Eclipse'
];

const CreateVacancy = () => {
    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <div className='create-vacancy-wrapper'>
                <div className="create-vacancy-box">
                    <form action="">
                        <h2>Деталі вакансії</h2>
                        <h2>Роль</h2>
                        <InputSelect label="Роль, яку ви б хотіли найняти" options={["Back End Developer", "Front End Developer", "Fullstack Developer"]}></InputSelect>
                        <h2>Років досвіду</h2>
                        <div className="select-experience">
                           {[...Array(11).keys()].map(year => (
                               <div className="radio-wrapper" key={year}>
                                   <input type="radio" name="experience" id={`experience-${year}`} />
                                   <label htmlFor={`experience-${year}`}>{year === 10 ? '10+' : year}</label>

                               </div>
                           ))}
                        </div>
                        <h2>Навички</h2>
                        <MultipleSelect skills={allItems}></MultipleSelect>
                    </form>
                </div>
            </div>

        </>
    );
};

export default CreateVacancy;