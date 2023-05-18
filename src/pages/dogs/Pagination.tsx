// import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';

interface IPaginationProps {
  totalCount: number;
  handlePageChange: (newFilter: Dogs.ISearchParams) => void;
  currentPage: number;
}
export const Pagination: React.FC<IPaginationProps> = ({
  totalCount,
  handlePageChange,
  currentPage = 0
}) => {

  const pageCount = Math.ceil(totalCount / 10);
  const gotoPage = (selected: number) => {
    handlePageChange({ from: selected * 10 });
  };

  return (
    <div className='w-screen flex align-middle justify-center mb-10'>
      {pageCount > 0 &&
        <ReactPaginate
          containerClassName="pagination"
          activeClassName="active"
          disabledClassName="disabled"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          forcePage={currentPage}
          breakLabel="..."
          previousLabel={`<`}
          nextLabel={`>`}
          onPageChange={({ selected }) => gotoPage(selected)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageCount={pageCount}
        />}
    </div>
  );
};

export default Pagination;
