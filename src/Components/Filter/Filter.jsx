import { useState } from "react";
import "./Filter.scss";

import { CgClose } from "react-icons/cg";

/**
 * Filter component renders a filter panel with various filter options.
 *
 * @component
 * @example
 * return (
 *   <Filter />
 * )
 *
 * @returns {JSX.Element} A div containing filter options and buttons to clear or select filters.
 */
const Filter = ({ onClose, isVisible, filter, cards, reset }) => {
  const [handleCloseCategory, handleCloseCompany, handleCloseDate] = onClose;
  const [isVisibleCategory, isVisibleCompany, isVisibleDate] = isVisible;
  const findVacancy = filter > 0 ? filter.length : cards.length;

  return (
    <div className="filter">
      <p>Знайдено {findVacancy} вакансій</p>
      <div className="filter-panel">
        <button className="filter-panel-button clear" onClick={reset}>
          Очистити фільтр
        </button>
        {isVisibleCategory && (
          <button
            className="filter-panel-button category"
            onClick={() => {
              handleCloseCategory();
            }}
          >
            Software development
            <CgClose />
          </button>
        )}
        {isVisibleCompany && (
          <button
            className="filter-panel-button company"
            onClick={() => {
              handleCloseCompany();
            }}
          >
            SoftServe
            <CgClose />
          </button>
        )}
        {isVisibleDate && (
          <button
            className="filter-panel-button time"
            onClick={() => {
              handleCloseDate();
            }}
          >
            Сьогодні
            <CgClose />
          </button>
        )}
      </div>
    </div>
  );
};

export default Filter;
