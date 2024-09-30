import React from 'react';
import './ConfirmCreatedVacancy.scss';
import { Link } from 'react-router-dom';
import Header from '../../../Components/Header/Header';;
import Nav from '../../../Components/Nav/Nav';
import JobDescriptionCard from '../../../Components/JobDescriptionCard/JobDescriptionCard';
import SolidButton from '../../../Components/Buttons/SolidButton/SolidButton';

import { HiOutlineLocationMarker } from "react-icons/hi";
import { LiaUserClockSolid } from "react-icons/lia";
import { FaHouseLaptop } from "react-icons/fa6";
import { FaHandshakeAngle } from "react-icons/fa6";
import { IoLanguageOutline } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";



interface VacancyProps {
    title: string;
    description: string;
    skills: (number | string)[];
    required_experience: number;
    city: string;
    salary_min: number;
    salary_max: number;
    category: number;
    subcategory: number;
    education_levels: number[];
    languages: number[];
    work_type: ('full-time' | 'part-time' | 'contract')[];
    work_format: ('offline' | 'online' | 'hybrid')[];
    status?: 'pending' | 'approved' | 'rejected';
}

const testVacancy: VacancyProps = {
    title: 'Back End Engineer',
    description: 'Ми шукаємо досвідченого бекенд-інженера, який добре орієнтується в таких мовах програмування, як Python, Java або Node.js. Цей кандидат повинен швидко навчатися та вміти вирішувати складні завдання. Він повинен бути в курсі останніх технологічних трендів. Для нас важливо, щоб цей кандидат був командним гравцем і вмів ефективно спілкуватися з колегами. Ми цінуємо командну роботу і прагнемо створити динамічне та продуктивне робоче середовище.',
    skills: ['Python', 'Java', 'Node.js'],
    required_experience: 3,
    city: 'Київ',
    salary_min: 50000,
    salary_max: 70000,
    category: 1,
    subcategory: 2,
    education_levels: [1, 2],
    languages: [1, 2],
    work_type: ['part-time', 'full-time'],
    work_format: ['online', 'hybrid'],
    status: 'pending'
};
/**
 * ConfirmCreatedVacancy component displays the confirmation details of a created vacancy.
 * 
 * @component
 * @param {VacancyProps} vacancy - The vacancy details to be confirmed.
 * 
 * @example
 * <ConfirmCreatedVacancy vacancy={testVacancy} />
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * @remarks
 * This component includes:
 * - A header and navigation bar.
 * - A wrapper displaying the vacancy title, city, and various job details.
 * - A job description section with a list of required skills.
 * - A link to proceed to the next step.
 * 
 * @requires
 * - `Header` component
 * - `Nav` component
 * - `JobDescriptionCard` component
 * - `SolidButton` component
 * - `HiOutlineLocationMarker` icon
 * - `LiaUserClockSolid` icon
 * - `FaHouseLaptop` icon
 * - `FaHandshakeAngle` icon
 * - `IoLanguageOutline` icon
 * - `GiWallet` icon
 */
const ConfirmCreatedVacancy: React.FC<VacancyProps> = (vacancy = testVacancy) => {
    return (
        <>
            <Header />
            <Nav />
            <div className='confirm-wrapper'>
                <div className="inner-confirm-wrapper">
                    <h2 className='title'>{testVacancy.title}</h2>
                    <h4 className='city'>
                        <HiOutlineLocationMarker />
                        {testVacancy.city}
                    </h4>
                    <div className="job-bullet-points">
                        <JobDescriptionCard title='Вид зайнятості' description={testVacancy.work_type} icon={<LiaUserClockSolid />}></JobDescriptionCard>
                        <JobDescriptionCard title='Робоче середовище' description={testVacancy.work_format} icon={<FaHouseLaptop />}></JobDescriptionCard>
                        <JobDescriptionCard title='Тип бізнесу' description={testVacancy.work_type} icon={<FaHandshakeAngle />}></JobDescriptionCard>
                        <JobDescriptionCard title='Mови' description={testVacancy.work_type} icon={<IoLanguageOutline />}></JobDescriptionCard>
                        <JobDescriptionCard title='Діапазон заробітної плати' description={[`$${testVacancy.salary_min}-`, `$${testVacancy.salary_max}`]} icon={<GiWallet />}></JobDescriptionCard>

                    </div>
                    <div className="job-description">
                        <h3>Опис роботи</h3>
                        <span>
                            <p className='job-description-paragraph'>{testVacancy.description}</p>
                            <div className="skills-box">
                                <h4>Skills</h4>
                                <ul className='all-skills'>
                                    {testVacancy.skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </span>
                    </div>
                    <Link to='finished'>
                        <SolidButton>Далі</SolidButton>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ConfirmCreatedVacancy;