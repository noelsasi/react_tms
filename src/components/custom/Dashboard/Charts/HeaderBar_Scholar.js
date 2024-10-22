function HeaderBar_Scholar() {
  return (
    <div className="col-lg-12">
      <div className="card">
        <div className="card-body">
          <div className="row   d-flex justify-content-between">
            <div className="col-lg-2 col-sm-4 col-6">
              <div className="static-icon">
                <span>
                  <i className="fas fa-eye" />
                </span>
                <h3 className="count mb-0">540</h3>
                <span className="fs-14">Total Viewes</span>
              </div>
            </div>

            <div className="col-lg-2 col-sm-4 col-6">
              <div className="static-icon">
                <span>
                  <i className="fas fa-download" />
                </span>
                <h3 className="count mb-0">874</h3>
                <span className="fs-14">Total Downloads</span>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6">
              <div className="static-icon">
                <span>
                  <i className="fas fa-solid fa-file" />
                </span>
                <h3 className="count mb-0">1200</h3>
                <span className="fs-14">Total Thesis</span>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6">
              <div className="static-icon">
                <span>
                  <i className=" fa-regular fa-file" />
                </span>
                <h3 className="count mb-0">50</h3>
                <span className="fs-14">Under Review Thesis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar_Scholar;
