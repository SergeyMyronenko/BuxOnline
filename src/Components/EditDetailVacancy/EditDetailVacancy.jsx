import "./EditDetailVacancy.scss";
import time from "../../assets/user-time.svg";
import laptop from "../../assets/laptop-person.svg";
import business from "../../assets/business-outline.svg";

const EditDetailVacancy = ({ role }) => {
  return (
    <div>
      <div className="edit-wrapper">
        <h2 className="edit-title">Деталі вакансії</h2>
        <h3 className="edit-title-block">Роль</h3>
        <h4 className="edit-title-inside">Роль яку ви б хотіли найняти</h4>
        <form className="edit-inputs">
          <input className="edit-input-text" type="text" />
          {role === "moderator" && (
            <textarea
              className="edit-textarea"
              placeholder="Коментар модератора"
            ></textarea>
          )}
        </form>

        <h4 className="edit-title-inside">Роки досвіду</h4>
        <form className="edit-inputs">
          <input className="edit-input-text" type="text" />
          {role === "moderator" && (
            <textarea
              className="edit-textarea"
              placeholder="Коментар модератора"
            ></textarea>
          )}
        </form>

        <h3 className="edit-title-block">Навички</h3>
        <form className="edit-inputs">
          <input className="edit-input-text" type="text" />
          {role === "moderator" && (
            <textarea
              className="edit-textarea"
              placeholder="Коментар модератора"
            ></textarea>
          )}
        </form>
        <h3 className="edit-title-block">Діапазон заробітної плати</h3>
        <form className="edit-inputs">
          <div className="edit-salary">
            <label className="edit-label" htmlFor="from">
              Від
              <input className="edit-salary-input" id="from" type="text" />
            </label>

            <label className="edit-label" htmlFor="to">
              До
              <input className="edit-salary-input" id="to" type="text" />
            </label>
          </div>
          {role === "moderator" && (
            <textarea
              className="edit-textarea"
              placeholder="Коментар модератора"
            ></textarea>
          )}
        </form>

        <h3 className="edit-title-block">Місцеположення</h3>
        <form className="edit-inputs">
          <input className="edit-input-text" type="text" />
          {role === "moderator" && (
            <textarea
              className="edit-textarea"
              placeholder="Коментар модератора"
            ></textarea>
          )}
        </form>

        <h3 className="edit-title-block">Мови</h3>
        <form className="edit-inputs">
          <div className="edit-salary">
            <label className="edit-label" htmlFor="language">
              Мова
              <input className="edit-salary-input" id="language" type="text" />
            </label>

            <label className="edit-label" htmlFor="level">
              Рівень знання
              <input className="edit-salary-input" id="level" type="text" />
            </label>
          </div>
          {role === "moderator" && (
            <textarea
              className="edit-textarea"
              placeholder="Коментар модератора"
            ></textarea>
          )}
        </form>

        <h3 className="edit-title-block">Переваги роботи</h3>
        <div className="checkbox-block">
          <form className="edit-checkbox">
            <img className="edit-inputs-image" src={time} alt="icon-checkbox" />
            <label className="edit-label" htmlFor="">
              Вид зайнятості
              <label>
                <input type="checkbox" />
                Part-time
              </label>
              <label>
                <input type="checkbox" />
                Full-time
              </label>
              <label>
                <input type="checkbox" />
                Контракт
              </label>
            </label>
          </form>
          <form className="edit-checkbox">
            <img
              className="edit-inputs-image"
              src={laptop}
              alt="icon-checkbox"
            />
            <label className="edit-label" htmlFor="">
              Робоче середовище
              <label>
                <input type="checkbox" />
                Дистанційно
              </label>
              <label>
                <input type="checkbox" />В офісі
              </label>
              <label>
                <input type="checkbox" />
                Гібридно
              </label>
            </label>
          </form>
          <form className="edit-checkbox">
            <img
              className="edit-inputs-image"
              src={business}
              alt="icon-checkbox"
            />
            <label className="edit-label" htmlFor="">
              Тип бізнесу
              <label>
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Sturtup
              </label>
              <label>
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Product
              </label>
              <label>
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Outsource
              </label>
              <label>
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Outstaff
              </label>
            </label>
          </form>
        </div>
        <textarea
          className="edit-textarea"
          placeholder="Коментар модератора"
        ></textarea>

        <h2 className="edit-title">Опис роботи</h2>
        <form className="edit-inputs">
          <textarea
            className="edit-textarea-text-top"
            placeholder="Опис роботи"
          ></textarea>
          {role === "moderator" && (
            <textarea
              className="edit-textarea-text"
              placeholder="Коментар модератора"
            ></textarea>
          )}
        </form>
      </div>
      {role === "moderator" ? (
        <div className="card-details-button">
          <button className="button coment-button" type="submit">
            Внести коментарі
          </button>
          <button className="button reject-button" type="submit">
            Відхилити вакансію
          </button>
        </div>
      ) : (
        <button>Далі</button>
      )}
    </div>
  );
};

export default EditDetailVacancy;
