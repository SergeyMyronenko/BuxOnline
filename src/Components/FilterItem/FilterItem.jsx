import "./FilterItem.scss";
import { CgClose } from "react-icons/cg";

const FilterItem = ({ title, onClose }) => {
  return (
    <div className="filter-wrapper">
      <p className="filter-title">{title}</p>
      <CgClose onClick={onClose} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default FilterItem;
