import "./EditDetailVacancy.scss";
import time from "../../assets/user-time.svg";
import approve from "../../assets/approve.svg";
import laptop from "../../assets/laptop-person.svg";
import business from "../../assets/business-outline.svg";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import clsx from "clsx";

const EditDetailVacancy = ({ role }) => {
  const [selectedLang, setSelectedLang] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [isOpenLang, setIsOpenLang] = useState(false);
  const [isOpenLevel, setIsOpenLevel] = useState(false);
  const [selectedTypeWork, setSelectedTypeWork] = useState([]);
  const [selectedWorkSpace, setSelectedWorkSpace] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState([]);

  const handleChangeLang = (e) => {
    setSelectedLang(e.target.value);
  };

  const handleChangeLevel = (e) => {
    setSelectedLevel(e.target.value);
  };

  const handleTypeWorkChange = (work) => {
    if (selectedTypeWork.includes(work)) {
      setSelectedTypeWork(selectedTypeWork.filter((item) => item !== work));
    } else {
      setSelectedTypeWork([...selectedTypeWork, work]);
    }
  };

  const handleWorkSpaceChage = (work) => {
    if (selectedWorkSpace.includes(work)) {
      setSelectedWorkSpace(selectedWorkSpace.filter((item) => item !== work));
    } else {
      setSelectedWorkSpace([...selectedWorkSpace, work]);
    }
  };

  const handleBusinessChange = (type) => {
    if (selectedBusiness.includes(type)) {
      setSelectedBusiness(selectedBusiness.filter((item) => item !== type));
    } else {
      setSelectedBusiness([...selectedBusiness, type]);
    }
  };

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
          <div className="radio-box">
            <label className="radio-box-label">
              <input
                className="radio-input"
                type="radio"
                name="rating"
                id="radio0-1"
              />
              <span className="radio-box-span">0-1</span>
            </label>
            <label className="radio-box-label">
              <input
                className="radio-input"
                type="radio"
                name="rating"
                id="radio1"
              />
              <span className="radio-box-span">1</span>
            </label>
            <label className="radio-box-label">
              <input
                className="radio-input"
                type="radio"
                name="rating"
                id="radio2"
              />
              <span className="radio-box-span">2</span>
            </label>
            <label className="radio-box-label">
              <input
                className="radio-input"
                type="radio"
                name="rating"
                id="radio3"
              />
              <span className="radio-box-span">3</span>
            </label>
            <label className="radio-box-label">
              <input
                className="radio-input"
                type="radio"
                name="rating"
                id="radio4"
              />
              <span className="radio-box-span">4</span>
            </label>
            <label className="radio-box-label">
              <input
                className="radio-input"
                type="radio"
                name="rating"
                id="radio5"
              />
              <span className="radio-box-span">5</span>
            </label>
            <label className="radio-box-label">
              <input
                className="radio-input"
                type="radio"
                name="rating"
                id="radio6"
              />
              <span className="radio-box-span">6</span>
            </label>
            <label className="radio-box-label">
              <input
                className="radio-input"
                type="radio"
                name="rating"
                id="radio7"
              />
              <span className="radio-box-span">7</span>
            </label>
            <label className="radio-box-label">
              <input
                className="radio-input"
                type="radio"
                name="rating"
                id="radio8"
              />
              <span className="radio-box-span">8</span>
            </label>
            <label className="radio-box-label">
              <input
                className="radio-input"
                type="radio"
                name="rating"
                id="radio9"
              />
              <span className="radio-box-span">9</span>
            </label>
            <label className="radio-box-label">
              <input
                className="radio-input"
                type="radio"
                name="rating"
                id="radio10+"
              />
              <span className="radio-box-span">10+</span>
            </label>
          </div>

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
              <h4 className="edit-title-inside">Від</h4>
              <input className="edit-salary-input" id="from" type="text" />
            </label>

            <label className="edit-label" htmlFor="to">
              <h4 className="edit-title-inside">До</h4>
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
              <h4 className="edit-title-inside">Мови</h4>
              <div className="select-wrapper">
                <select
                  className="custom-select"
                  id="language"
                  name="lang"
                  value={selectedLang}
                  onChange={handleChangeLang}
                  onClick={() => {
                    setIsOpenLang(!isOpenLang);
                  }}
                  onBlur={() => {
                    setIsOpenLang(false);
                  }}
                >
                  <option value="english">Англійська</option>
                  <option value="ukrainian">Українська</option>
                </select>
                <span
                  className={clsx(
                    "edit-label-icon",
                    isOpenLang ? "open-icon" : "edit-label-icon"
                  )}
                >
                  <FaAngleDown></FaAngleDown>
                </span>
              </div>
            </label>

            <label className="edit-label" htmlFor="level">
              <h4 className="edit-title-inside">Рівень знання</h4>
              <div className="select-wrapper">
                <select
                  className="custom-select"
                  id="level"
                  name="level"
                  value={selectedLevel}
                  onChange={handleChangeLevel}
                  onClick={() => {
                    setIsOpenLevel(!isOpenLevel);
                  }}
                  onBlur={() => {
                    setIsOpenLevel(false);
                  }}
                >
                  <option value="low">Початковий</option>
                  <option value="medium">Середній</option>
                  <option value="hight">Високий</option>
                </select>
                <span
                  className={clsx(
                    "edit-label-icon",
                    isOpenLevel ? "open-icon" : "edit-label-icon"
                  )}
                >
                  <FaAngleDown></FaAngleDown>
                </span>
              </div>
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
            <div className="edit-label">
              <h4 className="edit-title-inside">Вид зайнятості</h4>

              <label className="edit-label-custom">
                <input
                  className="disable-input"
                  type="checkbox"
                  checked={selectedTypeWork === "Part-time"}
                  onChange={() => handleTypeWorkChange("Part-time")}
                />
                <span
                  className={clsx(
                    "custom-checkbox",
                    selectedTypeWork.includes("Part-time") &&
                      "selected-checkbox"
                  )}
                >
                  {selectedTypeWork.includes("Part-time") && (
                    <img src={approve} alt="icon-approve" />
                  )}
                </span>
                Part-time
              </label>
              <label className="edit-label-custom">
                <input
                  className="disable-input"
                  type="checkbox"
                  checked={selectedTypeWork === "Full-time"}
                  onChange={() => handleTypeWorkChange("Full-time")}
                />
                <span
                  className={clsx(
                    "custom-checkbox",
                    selectedTypeWork.includes("Full-time") &&
                      "selected-checkbox"
                  )}
                >
                  {selectedTypeWork.includes("Full-time") && (
                    <img src={approve} alt="icon-approve" />
                  )}
                </span>
                Full-time
              </label>
              <label className="edit-label-custom">
                <input
                  className="disable-input"
                  type="checkbox"
                  checked={selectedTypeWork === "Контракт"}
                  onChange={() => handleTypeWorkChange("Контракт")}
                />
                <span
                  className={clsx(
                    "custom-checkbox",
                    selectedTypeWork.includes("Контракт") && "selected-checkbox"
                  )}
                >
                  {selectedTypeWork.includes("Контракт") && (
                    <img src={approve} alt="icon-approve" />
                  )}
                </span>
                Контракт
              </label>
            </div>
          </form>
          <form className="edit-checkbox">
            <img
              className="edit-inputs-image"
              src={laptop}
              alt="icon-checkbox"
            />
            <div className="edit-label">
              <h4 className="edit-title-inside">Робоче середовище</h4>
              <label className="edit-label-custom">
                <input
                  className="disable-input"
                  type="checkbox"
                  checked={selectedWorkSpace === "Дистанційно"}
                  onChange={() => handleWorkSpaceChage("Дистанційно")}
                />
                <span
                  className={clsx(
                    "custom-checkbox",
                    selectedWorkSpace.includes("Дистанційно") &&
                      "selected-checkbox"
                  )}
                >
                  {selectedWorkSpace.includes("Дистанційно") && (
                    <img src={approve} alt="icon-approve" />
                  )}
                </span>
                Дистанційно
              </label>
              <label className="edit-label-custom">
                <input
                  className="disable-input"
                  type="checkbox"
                  checked={selectedWorkSpace === "В офісі"}
                  onChange={() => handleWorkSpaceChage("В офісі")}
                />
                <span
                  className={clsx(
                    "custom-checkbox",
                    selectedWorkSpace.includes("В офісі") && "selected-checkbox"
                  )}
                >
                  {selectedWorkSpace.includes("В офісі") && (
                    <img src={approve} alt="icon-approve" />
                  )}
                </span>
                В офісі
              </label>
              <label className="edit-label-custom">
                <input
                  className="disable-input"
                  type="checkbox"
                  checked={selectedWorkSpace === "Гібридно"}
                  onChange={() => handleWorkSpaceChage("Гібридно")}
                />
                <span
                  className={clsx(
                    "custom-checkbox",
                    selectedWorkSpace.includes("Гібридно") &&
                      "selected-checkbox"
                  )}
                >
                  {selectedWorkSpace.includes("Гібридно") && (
                    <img src={approve} alt="icon-approve" />
                  )}
                </span>
                Гібридно
              </label>
            </div>
          </form>
          <form className="edit-checkbox">
            <img
              className="edit-inputs-image"
              src={business}
              alt="icon-checkbox"
            />
            <div className="edit-label">
              <h4 className="edit-title-inside">Тип бізнесу</h4>
              <label className="edit-label-custom">
                <input
                  className="disable-input"
                  type="checkbox"
                  checked={selectedBusiness === "Startup"}
                  onChange={() => {
                    handleBusinessChange("Startup");
                  }}
                />
                <span
                  className={clsx(
                    "custom-checkbox",
                    selectedBusiness.includes("Startup") && "selected-checkbox"
                  )}
                >
                  {selectedBusiness.includes("Startup") && (
                    <img src={approve} alt="icon-approve" />
                  )}
                </span>
                Startup
              </label>
              <label className="edit-label-custom">
                <input
                  className="disable-input"
                  type="checkbox"
                  checked={selectedBusiness === "Product"}
                  onChange={() => {
                    handleBusinessChange("Product");
                  }}
                />
                <span
                  className={clsx(
                    "custom-checkbox",
                    selectedBusiness.includes("Product") && "selected-checkbox"
                  )}
                >
                  {selectedBusiness.includes("Product") && (
                    <img src={approve} alt="icon-approve" />
                  )}
                </span>
                Product
              </label>
              <label className="edit-label-custom">
                <input
                  className="disable-input"
                  type="checkbox"
                  checked={selectedBusiness === "Outsource"}
                  onChange={() => {
                    handleBusinessChange("Outsource");
                  }}
                />
                <span
                  className={clsx(
                    "custom-checkbox",
                    selectedBusiness.includes("Outsource") &&
                      "selected-checkbox"
                  )}
                >
                  {selectedBusiness.includes("Outsource") && (
                    <img src={approve} alt="icon-approve" />
                  )}
                </span>
                Outsource
              </label>
              <label className="edit-label-custom">
                <input
                  className="disable-input"
                  type="checkbox"
                  checked={selectedBusiness === "Outstaff"}
                  onChange={() => {
                    handleBusinessChange("Outstaff");
                  }}
                />
                <span
                  className={clsx(
                    "custom-checkbox",
                    selectedBusiness.includes("Outstaff") && "selected-checkbox"
                  )}
                >
                  {selectedBusiness.includes("Outstaff") && (
                    <img src={approve} alt="icon-approve" />
                  )}
                </span>
                Outstaff
              </label>
            </div>
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
