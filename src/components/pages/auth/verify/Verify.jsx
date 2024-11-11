// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../../custom/Logo";

// function Verify() {
//   const [verificationCode, setVerificationCode] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false); // Track loading state

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
//     event.preventDefault(); // Prevent default form submission behavior

//     // Check if the verification code is entered
//     if (!verificationCode) {
//       setErrorMessage("Please enter the verification code.");
//       return;
//     }

//     // Clear any previous error message
//     setErrorMessage("");
//     setIsLoading(true); // Set loading state to true

//     try {
//       // Make the GET request to the backend
//       const response = await fetch(
//         `https://3a63-150-107-26-9.ngrok-free.app/api/auth/verify?token=${verificationCode}`,
//         {
//           method: "GET",
//         }
//       );
// console.log(response)
//       setIsLoading(false); // Set loading state to false

//       if (!response.ok) {
//         // Handle error response
//         const data = await response.json();
//         setErrorMessage(data.message || "An error occurred. Please try again.");
//       } else {
//         // Handle successful verification
//         setErrorMessage(""); // Clear previous error message
//         window.location.href = "/dashboard/admin"; // Redirect to the admin page
//       }
//     } catch (error) {
//       setIsLoading(false); // Stop loading if there is an error
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
//                       <h4 className="text-center mb-4">Verify</h4>
//                       <form
//                         onSubmit={handleSubmit} // Use form submission handler
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
//                             value={verificationCode}
//                             onChange={(e) => setVerificationCode(e.target.value)}
//                             required
//                             placeholder="Enter verification Code"
//                           />
//                           <div className="invalid-feedback">
//                             Please enter the verification Code
//                           </div>
//                         </div>

//                         {/* Display Error Message */}
//                         {errorMessage && (
//                           <div className="alert alert-danger" role="alert">
//                             {errorMessage}
//                           </div>
//                         )}

//                         {/* Show loading state */}
//                         {isLoading && (
//                           <div className="alert alert-info" role="alert">
//                             Verifying, please wait...
//                           </div>
//                         )}

//                         <div className="text-center">
//                           <button
//                             type="submit"
//                             className="btn btn-primary btn-block"
//                             disabled={isLoading} // Disable button while loading
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

// export default Verify;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../custom/Logo";

function Verify() {
  const [verificationCode, setVerificationCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  useEffect(() => {
    // Client-side form validation
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

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if the verification code is entered
    if (!verificationCode) {
      setErrorMessage("Please enter the verification code.");
      return;
    }

    // Clear any previous messages
    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(true); // Set loading state to true

    try {
      // Make the GET request to the backend
      const response = await fetch(
        `https://3a63-150-107-26-9.ngrok-free.app/api/auth/verify?token=${verificationCode}`,
        {
          method: "GET",
        }
      );

      setIsLoading(false); // Set loading state to false

      if (!response.ok) {
        // Handle error response
        const data = await response.json();
        setErrorMessage(data.message || "An error occurred. Please try again.");
      } else {
        // Handle successful verification
        const data = await response.json();
        setSuccessMessage(data.message || "Email verified successfully.");

        // Wait a few seconds before redirecting
        setTimeout(() => {
          window.location.href = "/dashboard/admin"; // Redirect to the admin page
        }, 2000); // 2 seconds delay
      }
    } catch (error) {
      setIsLoading(false); // Stop loading if there is an error
      setErrorMessage("Network error. Please try again.");
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
                      <h4 className="text-center mb-4">Verify</h4>
                      <form
                        onSubmit={handleSubmit} // Use form submission handler
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
                            value={verificationCode}
                            onChange={(e) =>
                              setVerificationCode(e.target.value)
                            }
                            required
                            placeholder="Enter verification Code"
                          />
                          <div className="invalid-feedback">
                            Please enter verification Code
                          </div>
                        </div>

                        {/* Display Error Message */}
                        {errorMessage && (
                          <div className="alert alert-danger" role="alert">
                            {errorMessage}
                          </div>
                        )}

                        {/* Display Success Message */}
                        {successMessage && (
                          <div className="alert alert-success" role="alert">
                            {successMessage}
                          </div>
                        )}

                        {/* Show loading state */}
                        {isLoading && (
                          <div className="alert alert-info" role="alert">
                            Verifying, please wait...
                          </div>
                        )}

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={isLoading} // Disable button while loading
                          >
                            Submit
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

export default Verify;
