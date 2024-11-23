function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageClick = pageNumber => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber)
    }
  }

  return (
    <div className="d-flex justify-content-end">
      <ul className="pagination pagination">
        <li
          className={`page-item page-indicator ${
            currentPage === 1 ? 'disabled' : ''
          }`}
        >
          <button
            className="page-link"
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="la la-angle-left" />
          </button>
        </li>

        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1
          return (
            <li
              key={pageNumber}
              className={`page-item ${
                currentPage === pageNumber ? 'active' : ''
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          )
        })}

        <li
          className={`page-item page-indicator ${
            currentPage === totalPages ? 'disabled' : ''
          }`}
        >
          <button
            className="page-link"
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <i className="la la-angle-right" />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
