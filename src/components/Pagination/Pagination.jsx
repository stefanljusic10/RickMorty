import React, { useMemo } from "react";
import "./pagination.scss";
import { pageNumbersCalculator } from "../../utils/pageNumbersCalculator";
import { goToPage } from "../../utils/goToPage";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {

  const pageNumbers = useMemo(
    () => pageNumbersCalculator(currentPage, totalPages, 5),
    [currentPage, totalPages]
  );

  const content = pageNumbers.map((num) => {
    const currentPageColor = num === currentPage && "blue";
    return (
      <span
        key={num}
        className="pagination__pageNumber"
        onClick={() => goToPage.jump(num, setCurrentPage)}
        style={{ backgroundColor: currentPageColor }}
      >
        {num}
      </span>
    );
  });

  return (
    <div className="pagination">
      {currentPage !== 1 && (
        <button className="pagination__button" onClick={() => goToPage.prev(currentPage, setCurrentPage)}>
          Prev
        </button>
      )}
      {content}
      {currentPage !== totalPages && (
        <button className="pagination__button" onClick={() => goToPage.next(currentPage, setCurrentPage)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
