import React from "react";
import "./CabinetWrapper.scss";
import WavyLine from "../../../Components/Icons/WavyLine";
import ProfileSettings from "../SeekerWidgets/ProfileSettings/ProfileSettings";

const CabinetWrapper = ({ children }) => {
  return (
    <section className="seeker-profile-wrapper">
      <div className="profile-title">
        <div className="profile-header">
          <WavyLine />
          <h2>Мій кабінет</h2>
        </div>
      </div>
      <ProfileSettings />
      <div className="profile-data-wrapper ">{children}</div>
    </section>
  );
};

export default CabinetWrapper;
