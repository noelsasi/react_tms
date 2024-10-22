"use client";
import { useEffect } from "react";
function SubmitThesisForm({ mode, onCreate }) {
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
    <div className="col-xl-6 col-lg-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Submit Thesis</h4>
        </div>
        <div className="card-body">
          <div className="basic-form">
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="mb-3 ">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Title"
                    required
                  />
                  <div className="invalid-feedback">Please enter a Title.</div>
                </div>
              </div>
              <div className="row">
                <div className="mb-3 ">
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
                  <div className="invalid-feedback">Please select a Author</div>
                </div>
              </div>
              <div className="row">
                <div className="mb-3 ">
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
              </div>
              <div className="row">
                <div className="mb-3 ">
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
              <div className="row"></div>
              <div className="row">
                <label className="form-label">Abstract</label>

                <div className="mb-3">
                  <textarea
                    required
                    className="form-control"
                    rows={8}
                    id="comment"
                  />
                  <div className="invalid-feedback">
                    Please enter a Abstract.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="formFileSm" className="form-label">
                    Input file(.pdf,max size:10MB)
                  </label>
                  <input
                    required
                    className="form-control form-control-sm"
                    id="formFileSm"
                    type="file"
                  />
                  <div className="invalid-feedback">Please attach a file.</div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                {" "}
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitThesisForm;
