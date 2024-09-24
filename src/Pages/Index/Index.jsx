import React from "react";
import vacancyTitleImg from "../../assets/vacancyTitleImg.png";
import vacancyBackgroungImg from "../../assets/vacancyBackgroundImg.png";
import indexBigPhoto1 from "../../assets/indexBigPhoto-1.png";
import indexBigPhoto2 from "../../assets/indexBigPhoto-2.png";
import indexLittlePhoto1 from "../../assets/indexLittlePhoto-1.png";
import indexLittlePhoto2 from "../../assets/indexLittlePhoto-2.png";
import indexLittlePhoto3 from "../../assets/indexLittlePhoto-3.png";
import indexLittlePhotos from "../../assets/indexLittlePhotos.png";

import Header from "../../Components/Header/Header"
import Nav from "../../Components/Nav/Nav";
import Header from "../../Components/Header/Header";


import './Index.scss';

function Index () {
    return (
      <>
      <Header/>
      <Nav/>
      <main>
        <div className="main-block">
          <div className="main-block-left">
            <div className="main-block-left-1">
              <h1 className="main-block-left-header">
                Сайт для пошуку роботи віддалено з дому
              </h1>
              <p className="main-block-left-text">
                Дистанційна робота з комфортом вашого дому! Наш сайт допоможе
                знайти ідеальну вакансію для роботи з дому, незалежно від вашого
                місця розташування. Уникайте поїздок до офісу, проводьте більше
                часу з родиною та насолоджуйтесь свободою віддаленої роботи.
                Приєднуйтесь до нас і відкрийте нові можливості для своєї
                кар'єри!
              </p>
              <a className="main-send-resume" href="#">
                Відправити резюме
              </a>
            </div>
            <div className="main-block-left-2">
              <div className="main-block-left-2-frame-text">
                <img className="frame" src={vacancyTitleImg} alt="frame" />
                <h5 className="main-block-left-2-header">Що ми пропонуємо</h5>
              </div>
              <p className="main-block-left-2-text">
                Якщо ви шукаєте роботу і у вас хороша англійська, то ми
                пропонуємо вам роботу за кордоном. У США, країнах Європи, Азії –
                на ваш смак
              </p>

              <h3 className="main-block-left-2-topic">5 years</h3>
              <h6 className="main-block-left-2-topic-text">Бажаний досвід</h6>
              <p className="main-block-left-2-text">
                Найкращі шанси мають фахівці з досвідом комерційної роботи від
                5-ти років. Але якщо у вас менше років досвіду – ніщо вас не
                обмежує, тільки не чекайте, що ми швидко зможемо підібрати вам
                роботу.
              </p>
            </div>
          </div>
          <div className="main-block-right">
            <div className="main-block-right-1">
              <img
                className="main-img-hover"
                src={vacancyBackgroungImg}
                alt="main-img-hover"
              />
            </div>
            <div className="main-block-right-2">
              <h3 className="main-block-right-2-topic">B1</h3>
              <h6 className="main-block-right-2-topic-text">
                English - Intermediate
              </h6>
              <p className="main-block-right-2-text">
                У вас має бути англійська не нижче B1 - для того, щоб ви не
                тільки читали і писали, але й розуміли, що вам каже закордонний
                роботодавець на зустрічах і самі могли відповісти.
              </p>
            </div>
          </div>
        </div>
        <div className="main-send-resume-block">
          <a className="main-send-resume" href="#">
            Відправити резюме
          </a>
        </div>

        <div className="main-block-left-3-frame-text">
          <img className="frame" src={vacancyTitleImg} alt="frame" />
          <h5 className="main-block-left-2-header">Відгуки</h5>
        </div>

        <div className="main-block-left-4">
          <div className="main-block-left-4-start">
            <img src={indexBigPhoto1} alt="photo-1" />
            <h5 className="photo-1-name">Ростислав Прозоровський</h5>
            <h6 className="photo-1-position">Старший PHP розробник</h6>
            <p className="photo-1-desc">
              У новій компанії я отримав посаду Senior PHP Developer. Я добре
              ціную процес пошуку та відбору вакансій через Buxonline. Це була
              перша вакансія, запропонована розвідником, і я пішов на неї. Я
              вважаю, що Марина добре розуміє потреби і вміє підбирати вакансії,
              які відповідають навичкам і очікуванням фахівців. Якість під
            </p>
          </div>
          <div className="main-block-left-4-center">
            <img src={indexBigPhoto2} alt="photo-1" />
            <h5 className="photo-1-name">Вікторія Збера</h5>
            <h6 className="photo-1-position">Менеджер з персоналу</h6>
            <p className="photo-1-desc">
              Мене звуть Вікторія, рада приєднатися до вас. Я отримала
              запрошення та перше завдання від Владислава. Перше завдання
              написати про себе, тому в декількох словах опишу себе і свій
              досвід. Мені давно подобалося працювати з людьми, починала кар'єру
              рекрутером у Польщі. Зараз я займаюся додатковою легалізацією пра
            </p>
          </div>
          <div className="main-block-left-4-end">
            <div className="main-block-left-4-end-block">
              <div className="photo-other">
                <img
                  className="photo-other-1"
                  src={indexLittlePhoto1}
                  alt="photo-other-1"
                />
                <img
                  className="photo-other-2"
                  src={indexLittlePhoto2}
                  alt="photo-other-2"
                />
                <img
                  className="photo-other-3"
                  src={indexLittlePhoto3}
                  alt="photo-other-3"
                />
                <img
                  className="photo-other-others"
                  src={indexLittlePhotos}
                  alt="photo-others"
                />
              </div>
              <p className="main-block-left-4-end-text">
                У нас вже працевлаштовано майже 260 осіб
              </p>
              <a className="main-send-resume" href="#">
                Відправити резюме
              </a>
            </div>
          </div>
                 </div>
      </main>
      </>
    );
};

export default Index;