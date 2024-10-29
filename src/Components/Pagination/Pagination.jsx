import "./Pagination.scss";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import clsx from "clsx";

const Pagination = ({
  vacancyPerPage,
  totalVacancy,
  paginateNum,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVacancy / vacancyPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-box">
      <img
        className="pagination-box-button"
        src={leftArrow}
        alt="icon left arrow"
      />
      <ul className="pagination-list">
        {pageNumbers.map((number) => {
          return (
            <li
              className={clsx(
                "pagination-number",
                currentPage === number && "pagination-number-active"
              )}
              key={number}
              onClick={() => paginateNum(number)}
            >
              <span>{number}</span>
            </li>
          );
        })}
      </ul>
      <img
        className="pagination-box-button"
        src={rightArrow}
        alt="icon right arrow"
      />
    </div>
  );
};

export default Pagination;