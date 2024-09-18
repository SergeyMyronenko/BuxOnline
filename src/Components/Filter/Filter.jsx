import "./Filter.scss";

import { CgClose } from "react-icons/cg";

const Filter = () => {
  return (
    <div className="filter">
      <p>Знайдено 10 вакансій</p>
      <div className="filter-panel">
        <button className="filter-panel-button clear">Очистити фільтр</button>
        <button className="filter-panel-button category">
          Software development
          <CgClose />
        </button>
        <button className="filter-panel-button company">
          SoftServe
          <CgClose />
        </button>
        <button className="filter-panel-button time">
          Сьогодні
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Filter;
