import React from "react";
import "./SeekerCabinet.scss";
import CabinetWrapper from "./CabinetWrapper/CabinetWrapper";
import MessagesAndEvents from "./SeekerWidgets/MessagesAndEvents/MessagesAndEvents";
import ProfileInfo from "./SeekerWidgets/ProfileInfo/ProfileInfo";

const SeekerCabinet = () => {
  return (
    <CabinetWrapper>
      <div className="profile-data">
        <MessagesAndEvents />
        <ProfileInfo />
      </div>
    </CabinetWrapper>
  );
};

export default SeekerCabinet;
