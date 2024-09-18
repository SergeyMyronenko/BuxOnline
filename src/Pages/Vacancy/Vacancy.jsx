import React from 'react';
import './Vacancy.scss';
//імпорт ассетів
import vacancyBackgroungImg from '../../assets/vacancyBackgroundImg.png';
import vacancyTitleImg from '../../assets/vacancyTitleImg.png';

//імпорт компонентів
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import Accordion from '../../Components/Accordion/Accordion';
import SubCategory from '../../Components/SubCategory/SubCategory';
import SolidButton from '../../Components/Buttons/SolidButton/SolidButton';

function Vacancy() {
    return (
        <>
            <Header/>
            <Nav />
            <div className="vacancy-wrapper">
                <div className="vacancy-sidebar-wrapper">
                    <div className="vacancy-sidebar">
                        <div className="vacancy-title">
                            <img src={vacancyTitleImg} alt="" />
                            <h2>Вакансії</h2>
                        </div>
                        <div className="vacancy-options">
                            <Accordion accordionTitle="Software development">
                                <SubCategory label='Software Engineer'></SubCategory>
                                <SubCategory label='Full Stack Developer'></SubCategory>
                                <SubCategory label='Backend Developer'></SubCategory>
                                <SubCategory label='Frontend Developer'></SubCategory>
                                <SubCategory label='Web Developer'></SubCategory>
                                <SubCategory label='Mobile Developer'></SubCategory>
                                <SubCategory label='DevOps Engineer'></SubCategory>
                                <SubCategory label='Data Scientist'></SubCategory>
                                <SubCategory label='Machine Learning Engineer'></SubCategory>
                                <SubCategory label='AI Specialist'></SubCategory>
                                <SubCategory label='Blockchain Developer'></SubCategory>
                                <SubCategory label='Data Engineer'></SubCategory>
                            </Accordion>
                            <Accordion accordionTitle="IT Infrastructure">
                                <SubCategory label="System Administrator" />
                                <SubCategory label="Network Engineer" />
                                <SubCategory label="Cloud Engineer" />
                                <SubCategory label="Security Engineer" />
                                <SubCategory label="IT Technician" />
                                <SubCategory label="IT Support Specialist" />
                                <SubCategory label="IT Manager" />
                                <SubCategory label="IT Operations Manager" />
                                <SubCategory label="IT Infrastructure Manager" />

                            </Accordion>
                            <Accordion accordionTitle="IT Management & Strategy">
                                <SubCategory label="Project Manager" />
                                <SubCategory label="IT Project Manager" />
                                <SubCategory label="IT Coordinator" />
                                <SubCategory label="IT Analyst" />
                                <SubCategory label="IT Consultant" />
                                <SubCategory label="IT Architect" />
                                <SubCategory label="IT Strategist" />
                                <SubCategory label="IT Service Manager" />
                            </Accordion>
                            <Accordion accordionTitle="Cybersecurity">
                                <SubCategory label="IT Security Specialist" />
                                <SubCategory label="IT Auditor" />
                                <SubCategory label="IT Compliance Analyst" />
                                <SubCategory label="IT Risk Manager" />
                            </Accordion>
                            <Accordion accordionTitle="Product & UX Design">
                            <SubCategory label="UX Designer" />
                                <SubCategory label="UI Designer" />
                                <SubCategory label="Product Manager" />
                                <SubCategory label="Technical Writer" />
                            </Accordion>
                            <Accordion accordionTitle="Marketing & Content">
                                <SubCategory label="SEO Specialist" />
                                <SubCategory label="Digital Marketer" />
                                <SubCategory label="Social Media Manager" />
                                <SubCategory label="E-commerce Specialist" />
                                <SubCategory label="Content Strategist" />
                                <SubCategory label="Email Marketing Specialist" />
                                <SubCategory label="CRM Specialist" />
                            </Accordion>
                            <Accordion accordionTitle="Data Analysis & Business">
                                <SubCategory label="Business Analyst" />
                                <SubCategory label="Data Analyst" />
                                <SubCategory label="IT Quality Assurance Analyst" />
                                <SubCategory label="IT Trainer" />
                                <SubCategory label="Scrum Master" />
                            </Accordion>
                        <SolidButton width={265}>Застосувати</SolidButton>

                        </div>
                    </div>
                </div>
                <div className="vacancy-browse">
                    <img src={vacancyBackgroungImg} alt="" />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Vacancy;