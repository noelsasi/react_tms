"use client";
import { useEffect } from "react";

function ManagePeerForm({ mode, onCreate }) {
  useEffect(() => {
    (function () {
      "use strict";
      const forms = document.querySelectorAll(".needs-validation");
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mode === "edit" ? "Editing" : "Creating");
  };
  return (
    <div className="col-lg-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Manage Peer Review</h4>
        </div>
        <div className="card-body">
          <div className="basic-form">
            <form
              className="needs-validation"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">Thesis Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Title"
                    required
                  />
                  <div className="invalid-feedback">Please enter a Title.</div>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Enter Date"
                    required
                  />
                  <div className="invalid-feedback">Please enter a Date.</div>
                </div>
              </div>

              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">Review</label>
                  <textarea
                    required
                    className="form-control"
                    placeholder="Enter Review"
                  />
                  <div className="invalid-feedback">Please enter Message.</div>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Status</label>
                  <select name="status" className="form-control" required>
                    <option value="" disabled>
                      Choose Status
                    </option>
                    <option>Pending</option>
                    <option>Approv</option>
                    <option>Reject</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a Status.
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                {" "}
                <button type="submit" className="btn btn-primary">
                  {mode === "edit" ? "Edit" : "Create"} Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagePeerForm;
