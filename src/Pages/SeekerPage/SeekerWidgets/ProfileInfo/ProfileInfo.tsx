import React from "react";
import "./ProfileInfo.scss";
import SolidButton from "../../../../Components/Buttons/SolidButton/SolidButton";
import LocationIcon from "../../../../Components/Icons/LocationIcon";
import { useNavigate } from "react-router-dom";

const ProfileInfo = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("edit");
  };
  return (
    <div className="profile-info-wrapper">
      <div className="profile-data">
        <div className="user-main-info">
          <div className="user-image">
            <img src="" alt="" />
          </div>
          <div className="user-info">
            <div className="main-info-area">
              <h3 className="name">Шевченко Олена</h3>
              <div className="location">
                <LocationIcon /> <span>Україна, Київ</span>
              </div>
            </div>
            <SolidButton
              width={"193px"}
              height={"43px"}
              fontSize={"16px"}
              borderRadius={"12px"}
              onClick={handleEditProfile}
            >
              Редагувати профіль
            </SolidButton>
          </div>
        </div>
        <div className="user-contacts">
          <div className="user-email">
            <span>E-mail</span>
            <p>{"shevolena1@gmail.com"}</p>
          </div>
          <div className="user-phone">
            <span>Номер телефона</span>
            <p>{"+380662652060"}</p>
          </div>
        </div>
      </div>
      <p className="user-description">
        Олена Шевченко — досвідчена менеджерка з понад 5-річним досвідом роботи
        в управлінні проєктами, командною роботою та оптимізацією
        бізнес-процесів. Володіє навичками стратегічного планування,
        аналітичного мислення та ефективної комунікації, що дозволяє їй успішно
        реалізовувати складні проєкти та досягати високих результатів.{" "}
      </p>
    </div>
  );
};

export default ProfileInfo;
