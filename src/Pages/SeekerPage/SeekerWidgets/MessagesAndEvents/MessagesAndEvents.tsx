import React from "react";
import { Link } from "react-router-dom";
import "./MessagesAndEvents.scss";
import BagIcon from "../../../../Components/Icons/BagIcon";
import MessageIcon from "../../../../Components/Icons/MessageIcon";
import ConvertIcon from "../../../../Components/Icons/ConvertIcon";
import HeartIcon from "../../../../Components/Icons/HeartIcon";
import SolidButton from "../../../../Components/Buttons/SolidButton/SolidButton";
import HollowButton from "../../../../Components/Buttons/HollowButton/HollowButton";

const MessagesAndEvents = () => {
  return (
    <div className="messages-and-events-wrapper">
      <h3 className="title">Повідомлення та події</h3>
      <div className="messages-and-events-list">
        <MessagesAndEventsItem
          icon={<BagIcon />}
          linkTo={"resumes"}
          name={"Мої резюме"}
          amount={1}
        />
        <MessagesAndEventsItem
          icon={<MessageIcon />}
          linkTo={"offers"}
          name={"Відгуки та запрошення"}
          amount={19}
        />
        <MessagesAndEventsItem
          icon={<ConvertIcon />}
          linkTo={"messages"}
          name={"Повідомлення"}
          amount={7}
        />
        <MessagesAndEventsItem
          icon={<HeartIcon />}
          linkTo={"favorites"}
          name={"Обрані вакансії"}
          amount={0}
        />
      </div>
      <div className="actions">
        <SolidButton
          width={"167px"}
          height={"43px"}
          fontSize={"16px"}
          borderRadius={"12px"}
        >
          Оновити резюме
        </SolidButton>
        <HollowButton
          width={"167px"}
          height={"43px"}
          fontSize={"16px"}
          borderRadius={"12px"}
        >
          Знайти вакансію
        </HollowButton>
      </div>
    </div>
  );
};

const MessagesAndEventsItem = ({ icon, linkTo, name, amount }) => {
  return (
    <div className="messages-and-events-item">
      <Link to={linkTo} className="item-link">
        {icon} {name}
      </Link>
      <span className="amount">{amount}</span>
    </div>
  );
};

export default MessagesAndEvents;