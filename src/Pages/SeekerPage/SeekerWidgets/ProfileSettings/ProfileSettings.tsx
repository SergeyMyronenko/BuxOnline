import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./ProfileSettings.scss";

const ProfileSettings = () => {
  return (
    <div className="profile-settings-wrapper">
      <div className="profile-settings-area">
        <div className="profile-statistics">
          <CircularProgressbar
            value={40}
            text={`${40}%`}
            styles={buildStyles({
              pathColor: "#007bff",
              textColor: "#282828",
              trailColor: "#d6d6d6",
              backgroundColor: "#f3f3f3"
            })}
          />
        </div>
        <div className="profile-settings">
          <h3>Налаштуйте повністю свій профіль, щоб подати заявку</h3>
          <div className="profile-settings-list">
            <div>
              <li className="profile-settings-item">
                <button>Додайте</button> місцезнаходження
              </li>
              <li className="profile-settings-item">
                <button>Додайте</button> контакти
              </li>
            </div>
            <div>
              <li className="profile-settings-item">
                <button>Додайте</button> фото
              </li>
              <li className="profile-settings-item">
                <button>Додайте</button> вид зайнятості
              </li>
            </div>
            <div>
              <li className="profile-settings-item">
                <button>Додайте</button> діапазон заробітної плати
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
