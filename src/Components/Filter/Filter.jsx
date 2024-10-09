import { Children, useState } from "react";
import "./Filter.scss";

import { CgClose } from "react-icons/cg";
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
          {isVisibleCategory && (
            <FilterItem>
              <li className="wrapper">
                {selectedCategories.forEach((element) => {
                  <p className="">{element}</p>;
                })}
                <CgClose
                  onClick={handleCloseCategory}
                  style={{ cursor: "pointer" }}
                />
              </li>
            </FilterItem>
          )}
          {isVisibleCompany && (
            <FilterItem>
              <li className="wrapper">
                <p className="">{selectedCompanies}</p>
                <CgClose
                  onClick={handleCloseCompany}
                  style={{ cursor: "pointer" }}
                />
              </li>
            </FilterItem>
          )}
          {isVisibleDate && (
            <FilterItem>
              <li className="wrapper">
                <p className="">{filter.name}</p>
                <CgClose
                  onClick={handleCloseDate}
                  style={{ cursor: "pointer" }}
                />
              </li>
            </FilterItem>
          )}
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
