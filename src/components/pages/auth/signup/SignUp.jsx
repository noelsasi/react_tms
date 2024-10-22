import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../../../custom/Logo";

function SignUp() {
  useEffect(() => {
    (function () {
      "use strict";
      const forms = document.querySelectorAll(".needs-validation");
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            const genderRadios = form.querySelectorAll(
              'input[name="optradio"]'
            );
            let genderSelected = false;
            for (const radio of genderRadios) {
              if (radio.checked) {
                genderSelected = true;
                break;
              }
            }
            if (!genderSelected) {
              const genderGroup = form.querySelector(".gender-group");
              genderGroup.classList.add("is-invalid");
              event.preventDefault();
              event.stopPropagation();
            } else {
              form
                .querySelector(".gender-group")
                .classList.remove("is-invalid");
            }

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
    <>
      <div
        className="vh-100"
        style={{
          backgroundImage: "url('/dash/images/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="authentication h-100">
          <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
              <div className="col-md-9">
                <div className="authentication-content">
                  <div className="row no-gutters">
                    <div className="col-lg-12">
                      <div className="auth-form">
                        <div className="text-center mb-3">
                          <Link to="/" className="brand-logo">
                            <Logo />
                          </Link>
                        </div>
                        <h4 className="text-center mb-4">Sign Up</h4>
                        <div className=" col-lg-12">
                          <form className="needs-validation" noValidate>
                            <div className="row">
                              <div className="mb-3 col-md-6">
                                <strong>
                                  <label className="mb-1">First Name</label>
                                </strong>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter First Name"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter First Name.
                                </div>
                              </div>
                              <div className="mb-3 col-md-6">
                                <strong>
                                  <label className="mb-1">Last Name</label>
                                </strong>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Last Name"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter Last Name.
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="mb-3 col-md-6">
                                <strong>
                                  <label className="mb-1">Gender</label>
                                </strong>
                                <div className="gender-group">
                                  <select
                                    id="inputState"
                                    className="form-control"
                                    required
                                  >
                                    <option value="" disabled>
                                      Choose Gender
                                    </option>
                                    <option>Male</option>
                                    <option>Female</option>
                                  </select>
                                </div>
                                <div className="invalid-feedback">
                                  Please select Gender.
                                </div>
                              </div>
                              <div className="mb-3 col-md-6">
                                <strong>
                                  <label className="mb-1">Date of Birth</label>
                                </strong>
                                <input
                                  type="date"
                                  defaultValue={
                                    new Date().toISOString().split("T")[0]
                                  }
                                  className="form-control"
                                  placeholder="Enter Date of Birth"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter DOB.
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="mb-3 col-md-6">
                                <strong>
                                  <label className="mb-1">Phone</label>
                                </strong>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Phone Number"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter Phone Number
                                </div>
                              </div>
                              <div className="mb-3 col-md-6">
                                <strong>
                                  <label className="mb-1">
                                    Profile Picture
                                  </label>
                                </strong>
                                <input
                                  type="file"
                                  className="form-control"
                                  placeholder="Select your Profile Picture"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please select valid Profile Picture.
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="mb-3 col-md-12">
                                <strong>
                                  <label className="mb-1">Address</label>
                                </strong>
                                <textarea
                                  className="form-control"
                                  rows={6}
                                  id="comment"
                                  defaultValue={""}
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter Address.
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="mb-3 col-md-6">
                                <strong>
                                  <label className="mb-1">Email</label>
                                </strong>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Email Address"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter Email Address.
                                </div>
                              </div>
                              <div className="mb-3 col-md-6">
                                <strong>
                                  <label className="mb-1">Role</label>
                                </strong>
                                <select
                                  id="inputState"
                                  className="form-control"
                                  required
                                >
                                  <option value="" disabled>
                                    Choose Role
                                  </option>
                                  <option>Scholar</option>
                                  <option>User</option>
                                </select>
                                <div className="invalid-feedback">
                                  Please select a Role.
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="mb-3 col-md-6">
                                <strong>
                                  <label className="mb-1">Password</label>
                                </strong>
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="Enter Password"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter Password.
                                </div>
                              </div>
                              <div className="mb-3 col-md-6">
                                <strong>
                                  <label className="mb-1">
                                    Confirm Password
                                  </label>
                                </strong>
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="Enter Confirm Password"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter Confirm Password.
                                </div>
                                <div></div>
                                <br></br>
                              </div>
                            </div>
                            <div className="text-center">
                              <button
                                type="submit"
                                className="btn btn-primary btn-block"
                              >
                                Sign Up
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="new-account mt-3">
                          <p>
                            Already have an account?{" "}
                            <Link
                              className="text-decoration-none"
                              to="/auth/signin"
                            >
                              Sign In
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
