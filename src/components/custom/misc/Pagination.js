function Pagination() {
  return (
    <div className="d-flex justify-content-end">
      <ul className="pagination pagination">
        <li className="page-item page-indicator">
          <a className="page-link">
            <i className="la la-angle-left" />
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link">1</a>
        </li>
        <li className="page-item">
          <a className="page-link">2</a>
        </li>
        <li className="page-item">
          <a className="page-link">3</a>
        </li>
        <li className="page-item">
          <a className="page-link">4</a>
        </li>
        <li className="page-item page-indicator">
          <a className="page-link">
            <i className="la la-angle-right" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
