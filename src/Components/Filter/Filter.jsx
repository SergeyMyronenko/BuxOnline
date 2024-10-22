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
  const [selectedCategories, selectedCompanies, selectedDate] = selectedItems;

  const findedVacancy = filter > 0 ? filter.length : cards.length;
  const dateTitles = [
    "Сьогодні",
    "Вчора",
    "Останні 7 днів",
    "Останні 30 днів",
    "Вказаний період",
  ];

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
                  <FilterItem
                    onClose={() => handleCloseCategory(item)}
                    title={item}
                  />
                </li>
              );
            })}

          {isVisibleCompany &&
            selectedCompanies.map((item) => {
              return (
                <li key={item}>
                  <FilterItem
                    onClose={() => handleCloseCompany(item)}
                    title={item}
                  />
                </li>
              );
            })}
          {isVisibleDate && (
            <>
              {dateTitles.map((title) => {
                return (
                  selectedDate === title && (
                    <li key={title}>
                      <FilterItem onClose={handleCloseDate} title={title} />
                    </li>
                  )
                );
              })}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
