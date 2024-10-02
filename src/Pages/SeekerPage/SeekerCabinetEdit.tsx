import React from "react";
import "./SeekerCabinet.scss";
import CabinetWrapper from "./CabinetWrapper/CabinetWrapper";

const SeekerCabinetEdit = () => {
  return (
    <CabinetWrapper>
      <div className="profile-data">
        <h3>Особисті дані</h3>
        <div className="personal-data-wraper">
          <div className="seeker-photo"></div>
          <div className="seeker-data">
            <div className="seeker-info">
              <h3></h3>
            </div>
            <div className="seeker-contacts"></div>
          </div>
        </div>
      </div>
      <div className="profile-resume">
        <h3>Резюме</h3>
      </div>
    </CabinetWrapper>
  );
};

export default SeekerCabinetEdit;
