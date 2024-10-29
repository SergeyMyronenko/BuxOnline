import React, { useState } from "react";
import "./ProfileInfoEdit.scss";
import SolidButton from "../../../../Components/Buttons/SolidButton/SolidButton";
import { useNavigate } from "react-router-dom";
import UploadPhoto from "../../../../Components/Icons/UploadPhoto";

const fakeUser = {
  name: "Шевченко Олена",
  birthdate: "28 вересня 1996",
  location: "Київ, Україна",
  cv: "ShevOlenaCV.pdf",
  contacts: {
    email: "shevolena1@gmail.com",
    phone: "+380662652060",
    linkedin: "http://linkedin.com",
  },
};

const ProfileInfoEdit = () => {
  const [isEditing, setIsEditing] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="profile-info-edit-wrapper">
      <label className="seeker-photo" htmlFor="upload-photo">
         <div className="seeker-photo-text-icon">
            <UploadPhoto/>
            <span>Завантажити фото</span>
         </div>
         <input type="file" id="upload-photo"/>
      </label>
      <div className="seeker-data">
        <div className="seeker-info-wrapper">
          <div className="seeker-info">
            <h3 className="seeker-name">{fakeUser.name}</h3>
            <div className="other-info">
              <SeekerInfoItem
                fieldName={"Дата народження:"}
                data={fakeUser.birthdate}
                isEdit={isEditing}
              />
              <SeekerInfoItem
                fieldName={"Місто проживання:"}
                data={fakeUser.location}
                isEdit={isEditing}
              />
              <SeekerInfoItem
                fieldName={"CV:"}
                data={fakeUser.cv}
                isEdit={isEditing}
              />
            </div>
          </div>
          <div className="seeker-info">
            <h3 className="seeker-name">Контакти</h3>
            <div className="other-info">
              <SeekerInfoItem
                fieldName={"E-mail:"}
                data={fakeUser.contacts.email}
                isEdit={isEditing}
              />
              <SeekerInfoItem
                fieldName={"Номер телефону:"}
                data={fakeUser.contacts.phone}
                isEdit={isEditing}
              />
              <SeekerInfoItem
                fieldName={"LinkedIn:"}
                data={fakeUser.contacts.linkedin}
                isEdit={isEditing}
              />
            </div>
          </div>
        </div>
        <SolidButton onClick={() => setIsEditing((prev) => !prev)}>
          {isEditing ? "Зберегти зміни" : "Редагувати"}
        </SolidButton>
      </div>
    </div>
  );
};

const SeekerInfoItem = ({ fieldName, data, isEdit }) => {
  return (
    <p>
      {fieldName} <span className={isEdit ? "editing" : ""}>{data}</span>
    </p>
  );
};

export default ProfileInfoEdit;
