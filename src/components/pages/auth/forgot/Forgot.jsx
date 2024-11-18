// import {Link} from"react-router-dom";
// import { useEffect } from "react";
// import Logo from "../../../custom/Logo";

// function Forgot() {
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
//                       <h4 className="text-center mb-4">Forgot Password</h4>
//                       <form
//                         action="/auth/reset"
//                         className="needs-validation"
//                         noValidate
//                       >
//                         <div className="mb-3">
//                           <label className="mb-1">
//                             <strong>Email</strong>
//                           </label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             required
//                             placeholder="Enter Email "
//                           />
//                           <div className="invalid-feedback">
//                             Please enter Email.
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

// export default Forgot;
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../../custom/Logo";
// import axios from "axios";

// function Forgot() {
//   const [email, setEmail] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     // Client-side form validation
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

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Check if the email is entered and valid
//     if (!email) {
//       setErrorMessage("Please enter your email address.");
//       setSuccessMessage("");
//       return;
//     }

//     // Clear previous success/error messages
//     setErrorMessage("");
//     setSuccessMessage("");

//     try {
//       // Make the POST request to the backend with the email in the request body
//       const response = await axios({
//         method: "POST",
//         url: "http://localhost:3000/api/auth/sendemail",
//         data: {
//           email,
//         },
//       });
// console.log(response.data)
//       if (response.data.message=="Verification email sent") {
//         // Handle error response
//         setSuccessMessage(
//           "Verification email has been sent. Please check your inbox."
//         );
//         setEmail(""); // Clear the email field after successful submission
//         const data = await response.json();
//         setErrorMessage(data.message || "An error occurred. Please try again.");
//       } else {
//         // Handle successful response

//       }
//     } catch (error) {
//       setErrorMessage("Network error. Please try again.");
//     }
//   };

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
//                       <h4 className="text-center mb-4">
//                         Send Verification Email
//                       </h4>
//                       <form
//                         onSubmit={handleSubmit} // Updated form submission handler
//                         className="needs-validation"
//                         noValidate
//                       >
//                         {/* Email Field */}
//                         <div className="mb-3">
//                           <label className="mb-1">
//                             <strong>Email Address</strong>
//                           </label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             placeholder="Enter your email address"
//                           />
//                           <div className="invalid-feedback">
//                             Please enter a valid email address
//                           </div>
//                         </div>

//                         {/* Error Message */}
//                         {errorMessage && (
//                           <div className="alert alert-danger" role="alert">
//                             {errorMessage}
//                           </div>
//                         )}

//                         {/* Success Message */}
//                         {successMessage && (
//                           <div className="alert alert-success" role="alert">
//                             {successMessage}
//                           </div>
//                         )}

//                         <div className="text-center">
//                           <button
//                             type="submit"
//                             className="btn btn-primary btn-block"
//                           >
//                             Send Mail
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

// export default Forgot;
import { useState } from "react";
import axios from "axios"; // Ensure you have axios imported
import { Link } from "react-router-dom";
import Logo from "../../../custom/Logo";

function Forgot() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the email is entered and valid
    if (!email) {
      setErrorMessage("Please enter your email address.");
      setSuccessMessage("");
      return;
    }

    // Clear previous success/error messages
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Make the POST request to the backend with the email in the request body
      const response = await axios.post(
        "http://localhost:3000/api/auth/resetmail",
        { email } // Send email as the request body
      );

      console.log(response.data); // Log the response to inspect the structure

      if (response.data.message) {
        setSuccessMessage(
          response.data.message
        );
        setEmail(""); // Clear the email field after successful submission
      } else {
        // Handle non-successful response (if any)
        setErrorMessage(
          response.data.message || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      // Handle errors from the axios request (e.g., network errors)
      setErrorMessage("Network error. Please try again.");
      console.error("Error during email sending:", error);
    }
  };

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
                      <h4 className="text-center mb-4">
                        Send Verification Email
                      </h4>
                      <form
                        onSubmit={handleSubmit}
                        className="needs-validation"
                        noValidate
                      >
                        {/* Email Field */}
                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>Email Address</strong>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email address"
                          />
                          <div className="invalid-feedback">
                            Please enter a valid email address
                          </div>
                        </div>

                        {/* Error Message */}
                        {errorMessage && (
                          <div className="alert alert-danger" role="alert">
                            {errorMessage}
                          </div>
                        )}

                        {/* Success Message */}
                        {successMessage && (
                          <div className="alert alert-success" role="alert">
                            {successMessage}
                          </div>
                        )}

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Send Mail
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

export default Forgot;
