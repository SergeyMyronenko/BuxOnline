import React from "react";
import "./VacancyDescription.scss";

//import assets
import vacancyBackgroungImg from "../../assets/vacancyBackgroundImg.png";

//import components
import Nav from "../../Components/Nav/Nav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import SolidButton from "../../Components/Buttons/SolidButton/SolidButton";

/**
 *
 * This component includes a Header component, a Nav component, a dynamic inner section.
 * This section is generated from data extracted from the API, which in turn is called using buttons in the Index component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * return (
 *   <VacancyDescription />
 * )
 */

function VacancyDescription() {
  return (
    <>
      <main className="vacancy-main">
        <section className="vacancy-description-section">
          <h1>Інженер-програміст</h1>
          <p>
            Інженер-програміст (віддалений) - хмарні обчислення, архітектура
            програмного забезпечення, НЛП тощо.
            <br />
            <br />
            Ми шукаємо талановитого та захопленого інженера-програміста, який
            приєднається до нашої зростаючої команди, працюючи над низкою
            передових хмарних обчислень, архітектури програмного забезпечення,
            обробки природних мов та етичних хакерських проектів. Це посада лише
            віддаленої роботи з акцентом на гнучкість та дружнє робоче
            середовище, яке сприяє співпраці та творчості.
          </p>
        </section>

        <section className="classification-advantages-section">
          <div className="class-adv-left-sidebar">
            <h4>Кваліфікації:</h4>
            <hr className="underline-header" />
            <p>
              Ступінь бакалавра в галузі комп'ютерних наук, програмної інженерії
              або суміжної галузі.
              <br />
              <br />
              Принаймні 3 роки досвіду в розробці програмного забезпечення,
              бажано з акцентом на хмарні обчислення, архітектуру програмного
              забезпечення, обробку природної мови або етичний хакерство.
              <br />
              <br />
              Глибоке знайомство з різними мовами програмування та інструментами
              розробки. <br />
              <br />
              Відмінні навички вирішення проблем та здатність критично та творчо
              мислити.
              <br />
              <br />
              Сильні усні та письмові комунікативні навички зі здатністю
              ефективно працювати у віддаленій команді. <br />
              <br />
              Здатність процвітати у швидкоплинному, гнучкому та спільному
              середовищі.
            </p>
          </div>

          <div className="class-adv-right-sidebar">
            <h4>Переваги:</h4>
            <hr className="underline-header" />
            <p>
              Конкурентна заробітна плата. <br />
              <br />
              Комплексний пакет пільг, включаючи медичне, стоматологічне та
              зорове покриття.
              <br />
              <br /> Щедрий механізм відбору потужності, включаючи свята,
              відпустки, особисті та лікарняні дні. <br />
              <br />
              Гнучкий графік роботи, що забезпечує здоровий баланс між роботою
              та особистим життям. <br />
              <br />
              Можливості безперервного навчання та професійного розвитку. <br />
              <br />
              Можливість працювати з талановитою та різноманітною командою над
              захоплюючими проектами. <br />
              <br />
              Сприятливе та інклюзивне робоче середовище, де ви можете зростати.
            </p>
          </div>
        </section>

        <section className="responsibilities-img-section">
          <div className="respon-img-left-sidebar">
            <h4>Обов'язки:</h4>
            <hr className="underline-header" />
            <p>
              Проектування, розробка та тестування програмних рішень з
              використанням різноманітних хмарних платформ, включаючи Amazon Web
              Services, Google Cloud Platform, Microsoft Azure, IBM Cloud та
              Oracle Cloud.
              <br />
              <br />
              Застосовуйте принципи та інструменти архітектури програмного
              забезпечення, такі як мікросервіси, безсерверні, MVC, MVVM, SOLID
              та чиста архітектура. <br />
              <br />
              Використовуйте сучасні текстові редактори, такі як Sublime Text,
              Atom, Vim, Emacs, Notepad++, Brackets, TextMate та BBEdit для
              розробки та вдосконалення критичних додатків. <br />
              <br />
              Створюйте та підтримуйте модульні тести, інтеграційні тести та
              функціональні тести за допомогою таких інструментів тестування, як
              JUnit, Pytest, RSpec, Selenium, TestNG, Cucumber, Karma, Mocha,
              транспортир, Jest та Enzyme. <br />
              <br />
              Впроваджуйте методи паралельного програмування, такі як
              багатопоточність, багатопроцесорність, асинхронність / очікування,
              ф'ючерси та цикли подій для оптимізації продуктивності. <br />
              <br />
              Зрозумійте та пом'якшіть загрози безпеці за допомогою етичних
              методів злому, включаючи тестування на проникнення, соціальну
              інженерію, фішинг, SQL-ін'єкції, міжсайтові сценарії, атаки типу
              «відмова в обслуговуванні» та аналіз шкідливого програмного
              забезпечення.
              <br />
              <br />
              Розробка та підтримка інструментів та бібліотек обробки природної
              мови, таких як nltk, TensorFlow Text, Gensim, SpaCY та Stanford
              NLP.
              <br />
              <br />
              Співпрацюйте з членами команди по всій організації, щоб
              забезпечити надання високоякісних програмних рішень. <br />
              <br />
              Будьте в курсі останніх тенденцій і технологій в індустрії
              програмної інженерії і постійно прагнете до постійного
              вдосконалення.
            </p>
          </div>
          <div className="respon-img-right-sidebar">
            <img
              className="info-img"
              src={vacancyBackgroungImg}
              alt="info-img"
            />
          </div>
        </section>

        <div className="vacancy-main-button">
          <SolidButton width={265}>Відправити резюме</SolidButton>
        </div>
      </main>
    </>
  );
}

export default VacancyDescription;
