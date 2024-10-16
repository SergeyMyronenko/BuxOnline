import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import vacancyTitleImg from "../../assets/vacancyTitleImg.png";
import vacancyBackgroungImg from "../../assets/vacancyBackgroundImg.png";
import indexBigPhoto1 from "../../assets/indexBigPhoto-1.png";
import indexBigPhoto2 from "../../assets/indexBigPhoto-2.png";
import indexLittlePhoto1 from "../../assets/indexLittlePhoto-1.png";
import indexLittlePhoto2 from "../../assets/indexLittlePhoto-2.png";
import indexLittlePhoto3 from "../../assets/indexLittlePhoto-3.png";
import indexLittlePhotos from "../../assets/indexLittlePhotos.png";
import indexMagnifyingGlass from "../../assets/indexMagnifyingGlass.png";
import indexChatImg from "../../assets/indexChatImg.png";
import indexCheckImg from "../../assets/indexCheckImg.png";
import indexCommunityImg from "../../assets/indexCommunityImg.png";
import indexSlideImg from "../../assets/indexSlideImg.png";
import indexCashImg from "../../assets/indexCashImg.png";
import indexSendResume from "../../assets/indexSendResume.png";
import advantages1 from "../../assets/indexAdvantages1.svg";
import advantages2 from "../../assets/indexAdvantages2.svg";
import advantages3 from "../../assets/indexAdvantages3.svg";
import chatBotPointer from "../../assets/indexChatPointer.svg";
import chatBotCurve from "../../assets/indexChatBotCurve.svg";

import SolidButton from "../../Components/Buttons/SolidButton/SolidButton"; //+
import HollowButtonProps from "../../Components/Buttons/HollowButton/HollowButton"; //+

import Nav from "../../Components/Nav/Nav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import "./Index.scss";

/**
 * Index page is the main page from which our application starts.
 *
 * This component includes of component Header, component Nav , various internal sections and component Footer.
 *
 * Internal sections :
 * general-info-section - general information about the content, structure of the application;
 * suggestion-advice-section - a section of tips and suggestions to improve the search for vacancies or employees;
 * reviews-section - honest reviews of satisfied users in successfully finding a job through this application;
 * scheme-section - a scheme that is guaranteed to help find a job;
 * advantages-section - section structure of benefits of remote work;
 * chat-bot-section - means of communication; vacancy-section - a brief description of current vacancies;
 * send-resume-section - means of communication for help.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * return (
 *   <Index />
 * )
 */

function Index() {
  function truncateText(text, limit) {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  }

  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      const vacanciesFromApi = [
        {
          id: 1,
          title: "Data Scientist",
          description:
            "Data Scientist (віддалений) - гнучкість та дружнє робоче середовище",
          content:
            "Ми раді оголосити про нову захоплюючу можливість для талановитого та високомотивованого Data Scientist приєднатися до на...",
        },
        {
          id: 2,
          title: "Developer",
          description:
            "JS Developer (віддалений) - гнучкість та дружнє робоче середовище",
          content:
            "Ми раді оголосити про нову захоплюючу можливість для талановитого та високомотивованого Data Scientist приєднатися до на...",
        },
        {
          id: 3,
          title: "Data Analyst",
          description:
            "Data Analyst (віддалений) - гнучкість та дружнє робоче середовище",
          content:
            "Ми раді оголосити про нову захоплюючу можливість для талановитого та високомотивованого Data Scientist приєднатися до на...",
        },
        {
          id: 4,
          title: "Software Engineer",
          description:
            "Software Engineer (віддалений) - гнучкість та дружнє робоче середовище",
          content:
            "Ми раді оголосити про нову захоплюючу можливість для талановитого та високомотивованого Data Scientist приєднатися до на...",
        },
        {
          id: 5,
          title: "Machine Learning Engineer",
          description:
            "Machine Learning Engineer (віддалений) - гнучкість та дружнє робоче середовище",
          content:
            "Ми раді оголосити про нову захоплюючу можливість для талановитого та високомотивованого Data Scientist приєднатися до на...",
        },
      ];

      setTimeout(() => {
        setVacancies(vacanciesFromApi);
      }, 1000);
    };

    fetchVacancies();
  }, []);

  async function getData() {
    const url = "https://relaxing-ultimate-chigger.ngrok-free.app";
    try {
      const response = await fetch(`${url}/jobs/jobs`);
      console.log(response);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  getData();
  return (
    <>
      <main>
        <section className="general-info-section">
          <div className="general-info">
            <h1 className="general-header">
              Сайт для пошуку роботи віддалено з дому
            </h1>
            <p className="info-text">
              Дистанційна робота з комфортом вашого дому! Наш сайт допоможе
              знайти ідеальну вакансію для роботи з дому, незалежно від вашого
              місця розташування. Уникайте поїздок до офісу, проводьте більше
              часу з родиною та насолоджуйтесь свободою віддаленої роботи.
              Приєднуйтесь до нас і відкрийте нові можливості для своєї кар'єри!
            </p>
            <SolidButton width={265}>Відправити резюме</SolidButton>
          </div>

          <div className="general-info-img">
            {" "}
            <img
              className="info-img"
              src={vacancyBackgroungImg}
              alt="info-img"
            />
          </div>
        </section>

        <section className="header-arrow-section">
          <img className="frame" src={vacancyTitleImg} alt="frame" />
          <h5 className="header-arrow">Що ми пропонуємо</h5>
        </section>

        <section className="suggestion-advice-section">
          <p className="text">
            Якщо ви шукаєте роботу і у вас хороша англійська, то ми пропонуємо
            вам роботу за кордоном. У США, країнах Європи, Азії – на ваш смак
          </p>
          <div className="t-bl-r-l-flex">
            <div className="topic-section-left">
              <h3 className="topic-left">5 years</h3>
              <h6 className="topic-text-left">Бажаний досвід</h6>
              <p className="text-left">
                Найкращі шанси мають фахівці з досвідом комерційної роботи від
                5-ти років. Але якщо у вас менше років досвіду – ніщо вас не
                обмежує, тільки не чекайте, що ми швидко зможемо підібрати вам
                роботу.
              </p>
            </div>

            <div className="topic-section-right">
              <h3 className="topic-right">B1</h3>
              <h6 className="topic-text-right">English - Intermediate</h6>
              <p className="text-right">
                У вас має бути англійська не нижче B1 - для того, щоб ви не
                тільки читали і писали, але й розуміли, що вам каже закордонний
                роботодавець на зустрічах і самі могли відповісти.
              </p>
            </div>
          </div>
        </section>

        <section className="button-section">
          <SolidButton width={265}>Відправити резюме</SolidButton>
        </section>

        <section className="header-arrow-section">
          <img className="frame" src={vacancyTitleImg} alt="frame" />
          <h5 className="header-arrow">Відгуки</h5>
        </section>

        <section className="reviews-section">
          <div className="r-bl-wr">
            <img src={indexBigPhoto1} alt="photo-1" />
            <h5 className="photo-name">Ростислав Прозоровський</h5>
            <h6 className="photo-position">Старший PHP розробник</h6>
            <p className="photo-desc">
              У новій компанії я отримав посаду Senior PHP Developer. Я добре
              ціную процес пошуку та відбору вакансій через Buxonline. Це була
              перша вакансія, запропонована розвідником, і я пішов на неї. Я
              вважаю, що Марина добре розуміє потреби і вміє підбирати вакансії,
              які відповідають навичкам і очікуванням фахівців. Якість під
            </p>
          </div>
          <div className="r-bl-wr">
            <img src={indexBigPhoto2} alt="photo-2" />
            <h5 className="photo-name">Вікторія Збера</h5>
            <h6 className="photo-position">Менеджер з персоналу</h6>
            <p className="photo-desc">
              Мене звуть Вікторія, рада приєднатися до вас. Я отримала
              запрошення та перше завдання від Владислава. Перше завдання
              написати про себе, тому в декількох словах опишу себе і свій
              досвід. Мені давно подобалося працювати з людьми, починала кар'єру
              рекрутером у Польщі. Зараз я займаюся додатковою легалізацією пра
            </p>
          </div>
          <div className="r-bl-wr">
            <div className="r-bl-photos-text">
              <div className="photos-others">
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
                  className="photo-other-number"
                  src={indexLittlePhotos}
                  alt="photo-others"
                />
              </div>
              <p className="r-bl-text">
                У нас вже працевлаштовано майже 260 осіб
              </p>
              <SolidButton width={164}>Відправити резюме</SolidButton>
            </div>
          </div>
        </section>

        <section className="header-arrow-section">
          <img className="frame" src={vacancyTitleImg} alt="frame" />
          <h5 className="header-arrow">Як ми працюємо</h5>
        </section>

        <section className="scheme-section">
          <div className="scheme-1">
            <div className="wr-sch-1">
              <div className="wr-sch-1-title">
                <h3>Обробка резюме</h3>
                <p className="posting-time">2 дні</p>{" "}
              </div>

              <p>
                Ми перевіряємо ваше резюме. Знаходимо вам відповідну компанію.
                Тому це може зайняти якийсь час.
              </p>
            </div>
            <img
              src={indexMagnifyingGlass}
              alt="indexMagnifyingGlass"
              className="indexMagnifyingGlass"
              width="261px"
              height="201px"
            />
          </div>

          <div className="scheme-2">
            <div className="wr-sch-2">
              <div className="wr-sch-2-title">
                <h3>Тюнінг</h3>
                <p className="posting-time">3 дні</p>{" "}
              </div>
              <p>
                Після спілкування ми надішлемо вам анкету, де ви відмітите ті
                речі, які вам однозначно не підходить. Наприклад робота у
                дейтингу. А також відзначите те, що вас найбільше приваблює:
                ненормований робочий день інше...
              </p>
            </div>
            <img
              src={indexChatImg}
              alt="indexChatImg"
              className="indexChatImg"
              width="271px"
              height="199px"
            />
          </div>
          <div className="scheme-3">
            <div className="wr-sch-3">
              <div className="wr-sch-3-title">
                <h3>Пошук відповідної компанії</h3>
                <p className="posting-time">60 днів</p>{" "}
              </div>
              <p>
                Пошук відповідної компанії Враховуючи всі ваші побажання та ваші
                можливості – процес пошуку відповідної вакансії може зайняти
                досить великий проміжок часу. Але ви точно задоволені
                результатом!
              </p>
            </div>
            <img
              src={indexCheckImg}
              alt="indexCheckImg"
              className="indexCheckImg"
              width="235px"
              height="161px"
            />
          </div>
          <div className="scheme-4">
            <div className="wr-sch-4">
              <div className="wr-sch-4-title">
                <h3>Перше інтерв’ю</h3>
                <p className="posting-time">3 дні</p>{" "}
              </div>
              <p>
                Якщо ваше резюме нам підійде, то ми призначимо вам перше
                інтер’ю, де ми поспілкуємось і дізнаємося одне одного краще.
              </p>
            </div>
            <img
              src={indexCommunityImg}
              alt="indexCommunityImg"
              className="indexCommunityImg"
            />
          </div>

          <div className="scheme-5">
            <div className="wr-sch-5">
              <div className="wr-sch-5-title">
                <h3>Спілкування із замовником</h3>
                <p className="posting-time">2 години</p>{" "}
              </div>
              <p>
                Педставник Компанії з вами поспілкуватися через зум для того,
                щоб домовитися.
              </p>
            </div>
            <img
              src={indexSlideImg}
              alt="indexSlideImg"
              className="indexSlideImg"
            />
          </div>

          <div className="scheme-6">
            <div className="wr-sch-6">
              <div className="wr-sch-6-title">
                <h3>Оффер</h3>
                <p className="posting-time">1 день</p>{" "}
              </div>
              <p>
                Ми надсилаємо оффер, який ви підписуєте, щоб працевлаштуватися.
              </p>
            </div>
          </div>

          <div className="scheme-7">
            <div className="wr-sch-7">
              <div className="wr-sch-7-title">
                {" "}
                <h3>Юридичне оформлення</h3>
                <p className="posting-time">5 днів</p>{" "}
              </div>

              <p>
                Ми надсилаємо вам договір. У ньому наведено умови
                працевлаштування. Ознайомтеся, запитайте та підпишіть договір
                для початку роботи віддалено.
              </p>
            </div>
          </div>

          <div className="scheme-8">
            <div className="wr-sch-8">
              <div className="wr-sch-8-title">
                <h3>Перша зарплата</h3>
                <p className="posting-time">30 днів</p>{" "}
              </div>

              <p>
                Через місяць ви отримуєте свій перший Busonline шляхом
                зарахування першої зарплати на ваш рахунок.
              </p>
            </div>
            <img
              src={indexCashImg}
              alt="indexCashImg"
              className="indexCashImg"
            />
          </div>
        </section>

        <section className="button-section">
          <SolidButton width={265}>Відправити резюме</SolidButton>
        </section>

        <section className="header-arrow-section">
          <img className="frame" src={vacancyTitleImg} alt="frame" />
          <h5 className="header-arrow">Переваги</h5>
        </section>

        <section className="advantages-section">
          <img src={advantages1} alt="advantages1" className="advantages1" />

          <div className="a-1">
            <span>1</span>
            <p>Працюйте віддалено у будь-якій точці світу</p>
          </div>
          <img src={advantages2} alt="advantages2" className="advantages2" />

          <div className="a-2">
            <span>2</span>
            <p>Допомога та консультації з юридичних питань</p>
          </div>
          <img src={advantages3} alt="advantages3" className="advantages3" />
          <div className="a-3">
            {" "}
            <span>3</span>
            <p>Працюйте у зручний для вас час</p>
          </div>
          <div className="a-4">
            <span>4</span>
            <p>Ми знайдемо ідеальну роботу, що відповідає вашим навичкам</p>
          </div>
          <div className="a-5">
            <span>5</span>
            <p>Задоволених співробітників уже понад 250 осіб!</p>
          </div>
        </section>

        <section className="chat-bot-section">
          <div className="ch-b-bl-1">
            <h2>Є питання?</h2>
            <p>Зайдіть у наш чат-бот і поставте йому запитання</p>
            <h2>Увага!</h2>
            <p>Чат-боту ставте питання англійською мовою.</p>
          </div>
          <div className="ch-b-bl-2">
            <img
              src={chatBotPointer}
              alt="chatBotPointer"
              className="chatBotPointer"
            />
            <div className="button-bot">
              <HollowButtonProps width={277} fontSize={28}>
                <a href="#" className="link-bot">
                  t.me/buxonline
                </a>
              </HollowButtonProps>{" "}
            </div>
            <img
              src={chatBotCurve}
              alt="chatBotCurve"
              className="chatBotCurve"
            />
          </div>
        </section>

        <section className="header-arrow-section">
          <img className="frame" src={vacancyTitleImg} alt="frame" />
          <h5 className="header-arrow">Гарячі ваканції</h5>
        </section>

        <section className="vacancy-section">
          <div className="vacancy-wrapper">
            {vacancies.length > 0 && (
              <>
                {/* Duplicate the vacancies for seamless effect */}
                {[...vacancies, ...vacancies].map((vacancy) => (
                  <div className="v-bl-slide" key={vacancy.id}>
                    <div className="v-bl">
                      <h3>{truncateText(vacancy.title, 17)}</h3>
                      <h2>{truncateText(vacancy.description, 17)}</h2>
                      <p>{truncateText(vacancy.content, 85)}</p>
                    </div>
                    <div className="v-bl-button">
                      <Link to="/BuxOnline/vacancy/description">
                        <SolidButton>Детальніше</SolidButton>
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>

        <section className="header-arrow-section">
          <img className="frame" src={vacancyTitleImg} alt="frame" />
          <h5 className="header-arrow">Відправити резюме</h5>
        </section>

        <section className="send-resume-section">
          <div className="s-r-bl">
            <p>
              Приєднуйтесь до нас сьогодні та відкрийте двері до нових
              можливостей дистанційної кар'єри!
            </p>
            <SolidButton width={265}>Відправити резюме</SolidButton>
          </div>

          <img
            src={indexSendResume}
            alt={indexSendResume}
            className="indexSendResume"
          />
        </section>
      </main>
    </>
  );
}

export default Index;
