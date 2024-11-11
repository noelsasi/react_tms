// import { Link ,useHistory} from "react-router-dom";
// import { useEffect } from "react";
// import axios from "axios";
// import Logo from "../../../custom/Logo";
// import { useState } from "react";

// function Signin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const history = useHistory();

//   // Function to fetch CSRF token from NextAuth
//   const getCsrfToken = async () => {
//     try {
//       const response = await axios.get("/api/auth/csrf");
//       return response.data.csrfToken;
//     } catch (error) {
//       console.error("Error fetching CSRF token:", error);
//       return null;
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsSubmitting(true);

//     // Fetch CSRF token
//     const csrfToken = await getCsrfToken();
//     if (!csrfToken) {
//       alert("Unable to fetch CSRF token. Please try again.");
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       // Send credentials and CSRF token to NextAuth for authentication
//       const response = await axios.post("/api/auth/callback/credentials", {
//         csrfToken,
//         email,
//         password,
//       });

//       const result = response.data;
//       if (result.error) {
//         // Handle login error
//         console.error(result.error);
//         alert("Login failed. Please check your credentials.");
//       } else {
//         // Successfully authenticated, redirect to the appropriate dashboard
//         console.log("User logged in:", result);
//         history.push("/dashboard"); // Redirect to dashboard or protected route
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       alert("Login failed. Please check your credentials.");
//     }

//     setIsSubmitting(false);
//   };

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
//       className="vh-100 main-bnr bg-light"
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
//                       <h4 className="text-center mb-4">Sign In</h4>
//                       <form className="needs-validation" noValidate onSubmit={handleSubmit}>
//                         <div className="mb-3">
//                           <label className="mb-1">
//                             <strong>Email</strong>
//                           </label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             placeholder="Enter Email"
//                             required={true}
//                           />
//                           <div className="invalid-feedback">
//                             Please enter Email.
//                           </div>
//                         </div>
//                         <div className="mb-3">
//                           <label className="mb-1">
//                             <strong>Password</strong>
//                           </label>
//                           <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Enter Password"
//                             required={true}
//                           />
//                           <div className="invalid-feedback">
//                             Please enter Password.
//                           </div>
//                         </div>
//                         <div className="row d-flex justify-content-between mt-4 mb-2">
//                           <div className="mb-3">
//                             <Link to="/auth/forgot">Forgot Password?</Link>
//                           </div>
//                         </div>
//                         <div className="text-center">
//                           <button
//                             type="submit"
//                             className="btn btn-primary btn-block"
//                           >
//                             Sign In
//                           </button>
//                         </div>
//                       </form>
//                       <div className="new-account mt-3">
//                         <p>
//                           Dont have an account?{" "}
//                           <Link className="" to="/auth/signup">
//                             Sign Up
//                           </Link>
//                         </p>
//                       </div>
//                       <div className="d-flex justify-content-around">
//                         <Link to="/dashboard/admin">Admin</Link>
//                         <Link to="/dashboard/scholar">Scholar</Link>
//                         <Link to="/dashboard/user">User</Link>
//                       </div>
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

// export default Signin;
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Logo from "../../../custom/Logo";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// function Signin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate(); // useNavigate for navigation

//   // Function to fetch CSRF token from NextAuth
//   const getCsrfToken = async () => {
//     try {
//       const response = await axios.get("https://3a63-150-107-26-9.ngrok-free.app/api/auth/csrf");
//       return response.data.csrfToken;
//     } catch (error) {
//       console.error("Error fetching CSRF token:", error);
//       return null;
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsSubmitting(true);

//     // Fetch CSRF token
//     const csrfToken = await getCsrfToken();
//     if (!csrfToken) {
//       alert("Unable to fetch CSRF token. Please try again.");
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       // Send credentials and CSRF token to NextAuth for authentication
//       const response = await axios.post("https://3a63-150-107-26-9.ngrok-free.app/api/auth/callback/credentials", {
//         csrfToken,
//         email,
//         password,
//       });

//       const result = response.data;
//       if (result.error) {
//         // Handle login error
//         console.error(result.error);
//         alert("Login failed. Please check your credentials.");
//       } else {
//         // Successfully authenticated, redirect to the appropriate dashboard
//         console.log("User logged in:", result);
//         navigate("/dashboard/admin"); // Redirect to dashboard or protected route
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       alert("Login failed. Please check your credentials.");
//     }

//     setIsSubmitting(false);
//   };

//   useEffect(() => {
//     // Enable Bootstrap validation on form submission
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
//       className="vh-100 main-bnr bg-light"
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
//                       <h4 className="text-center mb-4">Sign In</h4>
//                       <form className="needs-validation" noValidate onSubmit={handleSubmit}>
//                         <div className="mb-3">
//                           <label className="mb-1">
//                             <strong>Email</strong>
//                           </label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             placeholder="Enter Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                           />
//                           <div className="invalid-feedback">Please enter Email.</div>
//                         </div>
//                         <div className="mb-3">
//                           <label className="mb-1">
//                             <strong>Password</strong>
//                           </label>
//                           <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Enter Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                           />
//                           <div className="invalid-feedback">Please enter Password.</div>
//                         </div>
//                         <div className="row d-flex justify-content-between mt-4 mb-2">
//                           <div className="mb-3">
//                             <Link to="/auth/forgot">Forgot Password?</Link>
//                           </div>
//                         </div>
//                         <div className="text-center">
//                           <button
//                             type="submit"
//                             className="btn btn-primary btn-block"
//                             disabled={isSubmitting}
//                           >
//                             {isSubmitting ? "Signing In..." : "Sign In"}
//                           </button>
//                         </div>
//                       </form>
//                       <div className="new-account mt-3">
//                         <p>
//                           Don't have an account?{" "}
//                           <Link to="/auth/signup">Sign Up</Link>
//                         </p>
//                       </div>
//                       <div className="d-flex justify-content-around">
//                         <Link to="/dashboard/admin">Admin</Link>
//                         <Link to="/dashboard/scholar">Scholar</Link>
//                         <Link to="/dashboard/user">User</Link>
//                       </div>
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

// export default Signin;
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Signin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [csrfToken, setCsrfToken] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Step 1: Fetch CSRF Token
//   useEffect(() => {
//     const fetchCsrfToken = async () => {
//       try {
//         const response = await axios.get("https://3a63-150-107-26-9.ngrok-free.app/api/auth/csrf");
//         console.log("CSRF Token:", response.data.csrfToken); // Log CSRF token to console
//         setCsrfToken(response.data.csrfToken); // Save CSRF token for future requests
//       } catch (error) {
//         console.error("Error fetching CSRF token:", error);
//       }
//     };

//     fetchCsrfToken();
//   }, []); // Run only once when the component mounts

//   // Step 2: Handle Form Submission (Login)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!csrfToken) {
//       alert("CSRF token is missing. Please try again.");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // Send email, password, and CSRF token to NextAuth for authentication
//       const response = await axios.post("https://3a63-150-107-26-9.ngrok-free.app/api/auth/callback/credentials", {
//         csrfToken,
//         email,
//         password,
//       });

//       if (response.data.error) {
//         console.error("Login failed:", response.data.error);
//         alert("Login failed. Please check your credentials.");
//       } else {
//         console.log("Login successful:", response.data);

//         // Step 3: Check Session
//         const sessionResponse = await axios.get("https://3a63-150-107-26-9.ngrok-free.app/api/auth/session",{
//           withCredentials: true, // Important for sending cookies
//         });
//         console.log("Session after login:", sessionResponse.data); // Log session data
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       alert("Login failed. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div
//       className="vh-100 main-bnr bg-light"
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
//                         {/* Add your logo here */}
//                       </div>
//                       <h4 className="text-center mb-4">Sign In</h4>
//                       <form className="needs-validation" onSubmit={handleSubmit} noValidate>
//                         <div className="mb-3">
//                           <label className="mb-1">
//                             <strong>Email</strong>
//                           </label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             placeholder="Enter Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                           />
//                           <div className="invalid-feedback">Please enter Email.</div>
//                         </div>
//                         <div className="mb-3">
//                           <label className="mb-1">
//                             <strong>Password</strong>
//                           </label>
//                           <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Enter Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                           />
//                           <div className="invalid-feedback">Please enter Password.</div>
//                         </div>
//                         <div className="row d-flex justify-content-between mt-4 mb-2">
//                           <div className="mb-3">
//                             <a href="/auth/forgot">Forgot Password?</a>
//                           </div>
//                         </div>
//                         <div className="text-center">
//                           <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
//                             {isSubmitting ? "Signing In..." : "Sign In"}
//                           </button>
//                         </div>
//                       </form>
//                       <div className="new-account mt-3">
//                         <p>
//                           Don't have an account?{" "}
//                           <a href="/auth/signup">Sign Up</a>
//                         </p>
//                       </div>
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

// export default Signin;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Using useNavigate for React Router v6+
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../../../custom/Logo";

function Signin() {
  const [email, setEmail] = useState("owner.reliance@gmail.com");
  const [password, setPassword] = useState("qwertyuiop");
  const [csrfToken, setCsrfToken] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Replaced useHistory with useNavigate

  useEffect(() => {
    // Fetch CSRF Token
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get(
          "https://3a63-150-107-26-9.ngrok-free.app/api/auth/csrf",
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": true,
            },
            
              withCredentials: true, // Make sure cookies are sent with the request
            
          }
        );
        setCsrfToken(response.data.csrfToken);
      } catch (err) {
        console.error("Error fetching CSRF token:", err);
      }
    };

    fetchCsrfToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (!csrfToken) {
      setError("CSRF Token not found. Please reload the page.");
      return;
    }

    try {
      // Submit credentials to authenticate the user
      const response = await axios.post(
        "https://3a63-150-107-26-9.ngrok-free.app/api/auth/callback/credentials",
        {
          csrfToken, // CSRF token
          email,
          password,
        },
        {
          withCredentials: true, // Make sure cookies are sent with the request
        }
      );
      console.log(response);
      // Check for any authentication errors
      if (response.data.error) {
        setError(response.data.error);
        return;
      }

      // Fetch the session after successful login
      const sessionResponse = await axios.get(
        "https://3a63-150-107-26-9.ngrok-free.app/api/auth/session",
        {
          withCredentials: true, // Make sure cookies are sent with the request
        }
      );

      console.log("Session data after login:", sessionResponse.data);

      if (sessionResponse.data.user) {
        // Redirect to a protected route after successful login
        navigate("/dashboard/admin"); // Or wherever you want to redirect the user
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div
      className="vh-100 main-bnr bg-light"
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
                      <h4 className="text-center mb-4">Sign In</h4>
                      <form
                        className="needs-validation"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>Email</strong>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter Email.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>Password</strong>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter Password.
                          </div>
                        </div>
                        {error && (
                          <div className="alert alert-danger" role="alert">
                            {error}
                          </div>
                        )}
                        <div className="row d-flex justify-content-between mt-4 mb-2">
                          <div className="mb-3">
                            <Link to="/auth/forgot">Forgot Password?</Link>
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                      <div className="new-account mt-3">
                        <p>
                          Don't have an account?{" "}
                          <Link className="" to="/auth/signup">
                            Sign Up
                          </Link>
                        </p>
                      </div>
                      <div className="d-flex justify-content-around">
                        <Link to="/dashboard/admin">Admin</Link>
                        <Link to="/dashboard/scholar">Scholar</Link>
                        <Link to="/dashboard/user">User</Link>
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
  );
}

export default Signin;
