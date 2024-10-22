"use client";

import { useEffect } from "react";

function UpdateProfile({ mode, onCreate }) {
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
    <form className="needs-validation" noValidate>
      <div className="row">
        <div className="mb-3 ">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter First Name"
            required
          />
          <div className="invalid-feedback">Please enter First Name.</div>
        </div>
        <div className="mb-3 ">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            required
          />
          <div className="invalid-feedback">Please enter Last Name.</div>
        </div>
      </div>
      <div className="row">
        <div className="mb-3 ">
          <label className="form-label">Gender</label>
          <select name="gender" className="form-control" required>
            <option value="" disabled>
              Choose Gender
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <div className="invalid-feedback">Please select Gender.</div>
        </div>
        <div className="mb-3 ">
          <label className="form-label">DOB</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter Date of Birth"
            required
          />
          <div className="invalid-feedback">Please enter DOB.</div>
        </div>
      </div>
      <div className="row">
        <div className="mb-3 ">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone"
            required
          />
          <div className="invalid-feedback">Please enter Phone.</div>
        </div>
        <div className="mb-3 ">
          <label className="form-label">Profile Picture</label>
          <input
            type="file"
            className="form-control"
            placeholder="Choose Profile Picture"
            required
          />
          <div className="invalid-feedback">Select Profile Picture.</div>
        </div>
      </div>
      <div className="row">
        <div className="mb-3 ">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address"
            required
          />
          <div className="invalid-feedback">Please enter Address.</div>
        </div>
        <div className="mb-3 ">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            required
          />
          <div className="invalid-feedback">Please enter Email.</div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        {" "}
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </div>
    </form>
  );
}

export default UpdateProfile;
