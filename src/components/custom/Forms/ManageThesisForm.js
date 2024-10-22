"use client";

import { useEffect } from "react";

function ManageThesisForm({ mode, onCreate }) {
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
    <div>
      <form className="needs-validation" noValidate>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Manage Thesis</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <div className="row">
                  <div className="mb-3 ">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Title"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a Title.
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Category</label>
                    <select id="inputState" className="form-control" required>
                      <option value="" disabled>
                        Choose Category
                      </option>
                      <option>Science</option>
                      <option>Bio</option>
                      <option>Environmental</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select at least one Category.
                    </div>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Keywords</label>
                    <select
                      required
                      className="form-control"
                      id="multi-value-select"
                      multiple={true}
                    >
                      <option>ML</option>
                      <option>AI</option>
                      <option>IT</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select at least one Keyword.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Status</label>
                    <select id="inputState" className="form-control" required>
                      <option value="" disabled>
                        Choose Status
                      </option>
                      <option>Pending</option>
                      <option>Accepted</option>
                      <option>Rejected</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a Status.
                    </div>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Author Name</label>
                    <select id="inputState" className="form-control" required>
                      <option value="" disabled>
                        Select Author
                      </option>
                      <option>Mark</option>
                      <option>David</option>
                      <option>Susan</option>
                      <option>Emma</option>
                      <option>Michael</option>
                      <option>Brad</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a Author
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 ">
                    <label className="form-label">Abstract</label>
                    <textarea
                      className="form-control"
                      rows={8}
                      id="comment"
                      placeholder="Enter Abstract"
                      defaultValue={""}
                      required
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-end">
                  {" "}
                  <button type="submit" className="btn btn-primary">
                    {mode === "edit" ? "Edit" : "Create"} Thesis
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ManageThesisForm;
