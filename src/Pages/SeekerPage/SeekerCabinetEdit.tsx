import React from "react";
import "./SeekerCabinetEdit.scss";
import CabinetWrapper from "./CabinetWrapper/CabinetWrapper";
import ProfileInfoEdit from "./SeekerWidgets/ProfileInfoEdit/ProfileInfoEdit";
import EditIcon from "../../Components/Icons/EditIcon";

const SeekerCabinetEdit = () => {
  return (
    <CabinetWrapper>
      <div className="profile-data-edit">
        <h3>Особисті дані</h3>
        <ProfileInfoEdit />

        <div className="profile-resume">
          <h3>Резюме</h3>
          <div className="resumes">
            <div className="resume">
              <button>
                Офіс-менеджер <EditIcon />
              </button>
            </div>
            <div className="add-resume">
              <button>+ Додати резюме</button>
            </div>
          </div>
        </div>
      </div>
    </CabinetWrapper>
  );
};

export default SeekerCabinetEdit;
