import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ onChangePage, currentPage }) => {
  return (
    <div>
      <ReactPaginate
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={8}
        pageCount={2}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
