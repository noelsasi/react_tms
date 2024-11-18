// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import Logo from "../../../custom/Logo";

// function Reset() {
//   useEffect(() => {
//     (function () {
//       "use strict";
//       const forms = document.querySelectorAll(".needs-validation");
//       Array.prototype.slice.call(forms).forEach(function (form) {
//         form.addEventListener(
//           "submit",
//           function (event) {
//             if (!form.checkValidity()) {
//               event.preventDefault();
//               event.stopPropagation();
//             }
//             form.classList.add("was-validated");
//           },
//           false
//         );
//       });
//     })();
//   }, []);
//   return (
//     <div
//       className="vh-100"
//       style={{
//         backgroundImage: "url('/dash/images/bg.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="authentication h-100">
//         <div className="container h-100">
//           <div className="row justify-content-center h-100 align-items-center">
//             <div className="col-md-6">
//               <div className="authentication-content">
//                 <div className="row no-gutters">
//                   <div className="col-lg-12">
//                     <div className="auth-form">
//                       <div className="text-center mb-3">
//                         <Link to="/" className="brand-logo">
//                           <Logo />
//                         </Link>
//                       </div>
//                       <h4 className="text-center mb-4">Reset Password</h4>
//                       <form
//                         action="/dashboard/admin"
//                         className="needs-validation"
//                         noValidate
//                       >
//                         <div className="mb-3">
//                           <label className="mb-1">
//                             <strong>Verification Code</strong>
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             required
//                             placeholder="Enter verification Code"
//                           />
//                           <div className="invalid-feedback">
//                             Please enter verification Code
//                           </div>
//                         </div>
//                         <div className="mb-3">
//                           <label className="mb-1">
//                             <strong>New Password</strong>
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             required
//                             placeholder="Enter New Password"
//                           />
//                           <div className="invalid-feedback">
//                             Please enter New Password
//                           </div>
//                         </div>

//                         <div className="text-center">
//                           <button
//                             type="submit"
//                             className="btn btn-primary btn-block"
//                           >
//                             Submit
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Reset;
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation after reset
import { useState, useEffect } from "react";
import Logo from "../../../custom/Logo";
import axios from "axios"; // Import axios for making API requests

function Reset() {
  const [token, setToken] = useState(""); // State for the verification token
  const [newPassword, setNewPassword] = useState(""); // State for the new password
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage form submission state
  const [errorMessage, setErrorMessage] = useState(""); // State to manage error messages
  const [successMessage, setSuccessMessage] = useState(""); // State to manage success messages
  const navigate = useNavigate(); // useNavigate hook for redirecting after successful reset

  // Handle input change for token
  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  // Handle input change for new password
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation
    if (!token || !newPassword) {
      setErrorMessage("Both fields are required.");
      return;
    }

    setIsSubmitting(true); // Set loading state
    setErrorMessage(""); // Clear previous error messages
    setSuccessMessage(""); // Clear success message

    try {
      // Send POST request with token and new password
      const response = await axios.post(
        "http://localhost:3000/api/auth/resetpass",
        {
          token,
          newPassword,
        }
      );

      if (response.data.success) {
        setSuccessMessage("Password reset successfully!");
        // Redirect user after successful reset
        setTimeout(() => {
          navigate("/auth/signin"); // Redirect to sign-in page
        }, 2000); // Wait 2 seconds before redirecting
      } else {
        setErrorMessage(
          response.data.message || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  useEffect(() => {
    // Form validation logic (Bootstrap)
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
            <div className="col-md-6">
              <div className="authentication-content">
                <div className="row no-gutters">
                  <div className="col-lg-12">
                    <div className="auth-form">
                      <div className="text-center mb-3">
                        <Link to="/" className="brand-logo">
                          <Logo />
                        </Link>
                      </div>
                      <h4 className="text-center mb-4">Reset Password</h4>

                      {/* Show error or success messages */}
                      {errorMessage && (
                        <div className="alert alert-danger">{errorMessage}</div>
                      )}
                      {successMessage && (
                        <div className="alert alert-success">
                          {successMessage}
                        </div>
                      )}

                      {/* Password reset form */}
                      <form
                        onSubmit={handleSubmit}
                        className="needs-validation"
                        noValidate
                      >
                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>Verification Code</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder="Enter Verification Code"
                            value={token}
                            onChange={handleTokenChange}
                          />
                          <div className="invalid-feedback">
                            Please enter verification code.
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>New Password</strong>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            required
                            placeholder="Enter New Password"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                          />
                          <div className="invalid-feedback">
                            Please enter a new password.
                          </div>
                        </div>

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={isSubmitting} // Disable the button during submission
                          >
                            {isSubmitting ? "Submitting..." : "Submit"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reset;
