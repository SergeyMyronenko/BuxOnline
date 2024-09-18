import React from 'react';
import vacancyTitleImg from "../../assets/vacancyTitleImg.png";
import vacancyBackgroungImg from "../../assets/vacancyBackgroundImg.png";

import './Index.scss';

function Index () {
    return (
      <main>
        <div class="main-block">
          <div class="main-block-left">
            <div class="main-block-left-1">
              <h1 class="main-block-left-header">
                Сайт для пошуку роботи віддалено з дому
              </h1>
              <p class="main-block-left-text">
                Дистанційна робота з комфортом вашого дому! Наш сайт допоможе
                знайти ідеальну вакансію для роботи з дому, незалежно від вашого
                місця розташування. Уникайте поїздок до офісу, проводьте більше
                часу з родиною та насолоджуйтесь свободою віддаленої роботи.
                Приєднуйтесь до нас і відкрийте нові можливості для своєї
                кар'єри!
              </p>
              <a class="main-send-resume" href="#">
                Відправити резюме
              </a>
            </div>
            <div class="main-block-left-2">
              <div class="main-block-left-2-frame-text">
                <img class="frame" src={vacancyTitleImg} alt="frame" />
                <h5 class="main-block-left-2-header">Що ми пропонуємо</h5>
              </div>
              <p class="main-block-left-2-text">
                Якщо ви шукаєте роботу і у вас хороша англійська, то ми
                пропонуємо вам роботу за кордоном. У США, країнах Європи, Азії –
                на ваш смак
              </p>

              <h3 class="main-block-left-2-topic">5 years</h3>
              <h6 class="main-block-left-2-topic-text">Бажаний досвід</h6>
              <p class="main-block-left-2-text">
                Найкращі шанси мають фахівці з досвідом комерційної роботи від
                5-ти років. Але якщо у вас менше років досвіду – ніщо вас не
                обмежує, тільки не чекайте, що ми швидко зможемо підібрати вам
                роботу.
              </p>
            </div>
          </div>
          <div class="main-block-right">
            <div class="main-block-right-1">
              <img
                class="main-img-hover"
                src={vacancyBackgroungImg}
                alt="main-img-hover"
              />
            </div>
            <div class="main-block-right-2">
              <h3 class="main-block-right-2-topic">B1</h3>
              <h6 class="main-block-right-2-topic-text">
                English - Intermediate
              </h6>
              <p class="main-block-right-2-text">
                У вас має бути англійська не нижче B1 - для того, щоб ви не
                тільки читали і писали, але й розуміли, що вам каже закордонний
                роботодавець на зустрічах і самі могли відповісти.
              </p>
            </div>
          </div>
        </div>
        <div class="main-send-resume-block">
          <a class="main-send-resume" href="#">
            Відправити резюме
          </a>
        </div>

        <div class="main-block-left-3-frame-text">
          <img class="frame" src={vacancyTitleImg} alt="frame" />
          <h5 class="main-block-left-2-header">Відгуки</h5>
        </div>

        <div class="main-block-left-4">
          <div class="main-block-left-4-start">
            <img src="./images/img.rev.w-100.r-8.png" alt="photo-1" />
            <h5 class="photo-1-name">Ростислав Прозоровський</h5>
            <h6 class="photo-1-position">Старший PHP розробник</h6>
            <p class="photo-1-desc">
              У новій компанії я отримав посаду Senior PHP Developer. Я добре
              ціную процес пошуку та відбору вакансій через Buxonline. Це була
              перша вакансія, запропонована розвідником, і я пішов на неї. Я
              вважаю, що Марина добре розуміє потреби і вміє підбирати вакансії,
              які відповідають навичкам і очікуванням фахівців. Якість під
            </p>
          </div>
          <div class="main-block-left-4-center">
            <img src="./images/img.w-100.r-16.png" alt="photo-1" />
            <h5 class="photo-1-name">Вікторія Збера</h5>
            <h6 class="photo-1-position">Менеджер з персоналу</h6>
            <p class="photo-1-desc">
              Мене звуть Вікторія, рада приєднатися до вас. Я отримала
              запрошення та перше завдання від Владислава. Перше завдання
              написати про себе, тому в декількох словах опишу себе і свій
              досвід. Мені давно подобалося працювати з людьми, починала кар'єру
              рекрутером у Польщі. Зараз я займаюся додатковою легалізацією пра
            </p>
          </div>
          <div class="main-block-left-4-end">
            <div class="main-block-left-4-end-block">
              <div class="photo-other">
                <img
                  class="photo-other-1"
                  src="./images/img.avatar.r-32.oh.shadow-xs.png"
                  alt="photo-other-1"
                />
                <img
                  class="photo-other-2"
                  src="./images/img.avatar.r-32.oh.shadow-xs (2).png"
                  alt="photo-other-2"
                />
                <img
                  class="photo-other-3"
                  src="./images/img.avatar.r-32.oh.shadow-xs (3).png"
                  alt="photo-other-3"
                />
                <img
                  class="photo-other-others"
                  src="./images/div.avatar.r-32.bg-blue.c-white.png"
                  alt="photo-others"
                />
              </div>
              <p class="main-block-left-4-end-text">
                У нас вже працевлаштовано майже 260 осіб
              </p>
              <a class="main-send-resume" href="#">
                Відправити резюме
              </a>
            </div>
          </div>
          {/* <img class="frame" src="./images/Frame.png" alt="frame"/> */}
          {/* <h5 class="main-block-left-2-header">Відгуки</h5>  */}
        </div>
      </main>
    );
};

export default Index;