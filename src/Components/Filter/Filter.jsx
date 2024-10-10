import { Children, useState } from "react";
import "./Filter.scss";

import { lift } from "@tiptap/pm/commands";
import FilterItem from "../FilterItem/FilterItem";

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
const Filter = ({
  onClose,
  isVisible,
  filter,
  cards,
  reset,
  selectedItems,
}) => {
  const [handleCloseCategory, handleCloseCompany, handleCloseDate] = onClose;
  const [isVisibleCategory, isVisibleCompany, isVisibleDate] = isVisible;
  const [selectedCategories, selectedCompanies] = selectedItems;

  const findedVacancy = filter > 0 ? filter.length : cards.length;

  return (
    <div className="filter">
      <p>Знайдено {findedVacancy} вакансій</p>
      <div className="filter-panel">
        <button className="filter-panel-button" onClick={reset}>
          <p className="clear">Очистити фільтр</p>
        </button>
        <ul className="filter-list">
          {isVisibleCategory &&
            selectedCategories.map((item) => {
              return (
                <li key={item} className="filter-item">
                  <FilterItem onClose={handleCloseCategory} title={item} />
                </li>
              );
            })}

          {isVisibleCompany &&
            selectedCompanies.map((item) => {
              return (
                <li key={item}>
                  <FilterItem onClose={handleCloseCategory} title={item} />
                </li>
              );
            })}
          {/* {isVisibleDate && (
            <FilterItem>
              <li className="wrapper">
                <p className=""></p>

              </li>
            </FilterItem>
          )} */}
        </ul>
        {/* {isVisibleCategory && (
          <button
            className="filter-panel-button category"
            onClick={() => {
              handleCloseCategory();
            }}
          >
            Software development
            <CgClose />
          </button>
        )} */}
        {/* {isVisibleCompany && (
          <button
            className="filter-panel-button company"
            onClick={() => {
              handleCloseCompany();
            }}
          >
            SoftServe
            <CgClose />
          </button>
        )} */}
        {/* {isVisibleDate && (
          <button
            className="filter-panel-button time"
            onClick={() => {
              handleCloseDate();
            }}
          >
            Сьогодні
            <CgClose />
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Filter;
