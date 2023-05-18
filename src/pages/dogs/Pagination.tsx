import ReactPaginate from 'react-paginate';

interface IPaginationProps {
    totalCount: number;
    // gotoPage: (selected: number) => void;
}
export const Pagination: React.FC<IPaginationProps> = ({
    totalCount,
    // gotoPage
}) => {

    const pageCount = Math.ceil(totalCount / 10);
    const gotoPage = (selected: number) => {
        console.log(`selected :::`, selected)
    }
    console.log(`pageCount :::`, pageCount)
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
                    breakLabel="..."
                    previousLabel={`<`}
                    nextLabel={`>`}
                    onPageChange={({ selected }) => gotoPage(selected)}
                    // forcePage={pageIndex}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                />}
        </div>
    )
}

export default Pagination