import React from 'react';
import './Vacancy.scss';
//імпорт ассетів
import vacancyBackgroungImg from '../../assets/vacancyBackgroundImg.png';
import vacancyTitleImg from '../../assets/vacancyTitleImg.png';

//імпорт компонентів
import Accordion from '../../Components/Accordion/Accordion';

function Vacancy() {
    return (
        <div>
            <div className="vacancy-wrapper">
                <div className="vacancy-sidebar-wrapper">
                    <div className="vacancy-sidebar">
                        <div className="vacancy-title">
                            <img src={vacancyTitleImg} alt="" />
                            <h2>Вакансії</h2>
                        </div>
                        <div className="vacancy-options">
                            <Accordion accordionTitle="Software development">
                                <p>Software Engineer</p>
                                <p>Full Stack Developer</p>
                                <p>Back End Developer</p>
                                <p>Front End Developer</p>
                            </Accordion>
                            <h3>IT Infrastructure</h3>
                            <h3>IT Management & Strategy</h3>
                            <h3>Cybersecurity</h3>
                            <h3>Product & UX Design</h3>
                            <h3>Marketing & Content</h3>
                            <h3>Data Analysis & Business</h3>
                        </div>
                    </div>
                </div>
                <div className="vacancy-browse">
                    <img src={vacancyBackgroungImg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Vacancy;