import React, { useState } from "react";
function UsePagination(initialState) {
  const { data, startFrom, itemsPerPage } = initialState;
  const perPage = 5;
  const pages = Math.ceil(data.length / perPage);
  const Pagination = [];
  const [currentPage, setCurrentPage] = useState(
    startFrom <= pages ? startFrom : 1
  );
  const [slicedData, setSlicedData] = useState(
    [...data].slice((currentPage - 1) * perPage, currentPage * perPage)
  );
  let ellipsisLeft = false;
  let ellipsisRight = false;
  for (let i = 1; i <= pages; i++) {
    if (i === currentPage) {
      Pagination.push({ id: i, current: true, ellipsis: false });
    } else {
      if (
        i < 2 ||
        i > pages - 1 ||
        i === currentPage - 1 ||
        i === currentPage + 1
      ) {
        Pagination.push({ id: 1, current: false, ellipsis: false });
      } else if (i > 1 && i < currentPage && !ellipsisLeft) {
        Pagination.push({ id: 1, current: false, ellipsis: true });
        ellipsisLeft = true;
      } else if (i < pages && i > currentPage && !ellipsisRight) {
        Pagination.push({ id: i, current: false, ellipsis: true });
        ellipsisRight = true;
      }
    }
  }
  const changePage = (page, e) => {
    e.preventDefault();
    if (page !== currentPage) {
      setCurrentPage(page);
      setSlicedData([...data].slice(page - 1) * perPage, page * perPage);
    }
  };
  const goToPrevPage = (e) => {
    e.preventDefault();
    setCurrentPage((prevVal) => (prevVal - 1 === 0 ? prevVal : prevVal - 1));
    if (currentPage !== 1) {
      setSlicedData(
        [...data].slice(
          (currentPage - 2) * perPage,
          (currentPage - 1) * perPage
        )
      );
    }
  };
  const goToNextPage = (e) => {
    e.preventDefault();
    setCurrentPage((prevVal) => (prevVal === pages ? prevVal : prevVal + 1));
    if (currentPage !== pages) {
      setSlicedData(
        [...data].slice(currentPage * perPage, (currentPage + 1) * perPage)
      );
    }
  };
  return {
    slicedData,
    Pagination,
    prevPage: goToPrevPage,
    nextPage: goToNextPage,
    changePage,
  };
}
export default UsePagination;
