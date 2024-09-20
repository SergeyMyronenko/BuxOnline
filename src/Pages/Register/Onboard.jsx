import React from 'react';
import './Register.scss';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';
import SolidButton from '../../Components/Buttons/SolidButton/SolidButton';
import cardImg1 from '../../assets/onboardCard1.png';
import cardImg2 from '../../assets/onboardCard2.png';   
import cardImg3 from '../../assets/onboardCard3.png';
const Onboard = () => {
    return (
        <>
        <Header></Header>
        <Nav></Nav>
        <div className='onboard-wrapper'>
            <div className="onboard-box">
                <h1>Онбордінг</h1>
                <div className="cards-wrapper">
                    <div className="card">
                        <img src={cardImg1} alt="" />
                        <h3>Cтворити вакансію</h3>
                        <p>Cтворення оголошення про роботу з ключовими деталями</p>
                    </div>
                    <div className="card">
                    <img src={cardImg2} alt="" />
                    <h3>Знайти найкращі збіги</h3>
                    <p>Наш штучний інтелект підбирає найкращих кандидатів на кожну вакансію</p>
                    </div>
                    <div className="card">
                    <img src={cardImg3} alt="" />
                    <h3>Зв’язок</h3>
                    <p>Зв’яжіться з кандидатами напряму через сайт</p>
                    </div>
                </div>
                <SolidButton> Розпочати</SolidButton>
            </div>
        </div>
        </>
    );
};

export default Onboard;