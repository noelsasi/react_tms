"use client";

import { useEffect } from "react";

function ValidationsForm() {
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
                  <div className="mb-3 col-md-6">
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
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Author</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Author Name"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter an Author.
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
                  <label className="form-label">Abstract</label>
                  <div className="mb-3 col-md-6">
                    <textarea
                      className="form-control"
                      rows={8}
                      id="comment"
                      defaultValue={""}
                      required
                    />
                  </div>

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
                </div>

                <button type="submit" className="btn btn-primary">
                  Update Thesis
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ValidationsForm;
