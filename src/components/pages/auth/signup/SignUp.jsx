// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Logo from "../../../custom/Logo";

// function SignUp() {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     gender: "",
//     dob: "",
//     phone: "",
//     address: "",
//     email: "",
//     role: "",
//     password: "",
//     confirmPassword: "",
//     profilePic: "",
//   });

//   const [file, setFile] = useState(null); // To store the profile pic

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]); // Set the selected file to state
//   };

//   // Function to upload the image to Cloudinary
//   // const handleFileUpload = async () => {
//   //   if (!file) return;

//   //   const formData = new FormData();
//   //   formData.append("file", file);
//   //   formData.append("upload_preset", "profilepic"); // Cloudinary preset (you can modify this as needed)

//   //   try {
//   //     const response = await fetch("https://api.cloudinary.com/v1_1/dknje3po9/image/upload", {
//   //       method: "POST",
//   //       body: formData,
//   //     });

//   //     const data = await response.json();

//   //     if (data.secure_url) {
//   //       console.log("File uploaded successfully:", data);
//   //       // Update formData with the image URL
//   //       setFormData({ ...formData, profilePic: data.secure_url });
//   //     } else {
//   //       alert("File upload failed, please try again.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error uploading file:", error);
//   //     alert("An error occurred during the file upload.");
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // If file is selected, upload it first and get the URL
//     if (file) {
//       await handleFileUpload(); // Ensure file is uploaded and URL is set in formData
//     }

//     // Now send the form data (including profile pic URL)
//     try {
//       const response = await fetch("https://3a63-150-107-26-9.ngrok-free.app/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json", // Make sure the content type is set to JSON
//         },
//         body: JSON.stringify(formData), // Send the form data as JSON
//       });

//       if (response.ok) {
//         alert("User registered successfully");
//         setFormData({
//           firstname: "",
//           lastname: "",
//           gender: "",
//           dob: "",
//           phone: "",
//           address: "",
//           email: "",
//           role: "",
//           password: "",
//           confirmPassword: "",
//           profilePic: "", // Reset the profile pic URL
//         });
//       } else {
//         alert("Signup failed");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred during signup");
//     }
//   };

//   const handleFileUpload = async () => {
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "profilepic"); // Cloudinary preset (you can modify this as needed)

//     try {
//       const response = await fetch("https://api.cloudinary.com/v1_1/dknje3po9/image/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (data.secure_url) {
//         console.log("File uploaded successfully:", data);
//         // Update formData with the image URL
//         setFormData({ ...formData, profilePic: data.secure_url });
//       } else {
//         alert("File upload failed, please try again.");
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       alert("An error occurred during the file upload.");
//     }
//   };

//   useEffect(() => {
//     (function () {
//       "use strict";
//       const forms = document.querySelectorAll(".needs-validation");
//       Array.prototype.slice.call(forms).forEach(function (form) {
//         form.addEventListener(
//           "submit",
//           function (event) {
//             const genderSelect = form.querySelector('select[name="gender"]');
//             if (genderSelect && !genderSelect.value) {
//               const genderGroup = form.querySelector(".gender-group");
//               genderGroup.classList.add("is-invalid");
//               event.preventDefault();
//               event.stopPropagation();
//             } else {
//               form
//                 .querySelector(".gender-group")
//                 .classList.remove("is-invalid");
//             }

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
//     <>
//       <div
//         className="vh-100"
//         style={{
//           backgroundImage: "url('/dash/images/bg.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="authentication h-100">
//           <div className="container h-100">
//             <div className="row justify-content-center h-100 align-items-center">
//               <div className="col-md-9">
//                 <div className="authentication-content">
//                   <div className="row no-gutters">
//                     <div className="col-lg-12">
//                       <div className="auth-form">
//                         <div className="text-center mb-3">
//                           <Link to="/" className="brand-logo">
//                             <Logo />
//                           </Link>
//                         </div>
//                         <h4 className="text-center mb-4">Sign Up</h4>
//                         <div className="col-lg-12">
//                           <form className="needs-validation" noValidate onSubmit={handleSubmit}>
//                             <div className="row">
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">First Name</label>
//                                 </strong>
//                                 <input
//                                   type="text"
//                                   name="firstname"
//                                   value={formData.firstname}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter First Name"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter First Name.
//                                 </div>
//                               </div>
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Last Name</label>
//                                 </strong>
//                                 <input
//                                   type="text"
//                                   name="lastname"
//                                   value={formData.lastname}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Last Name"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Last Name.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Gender</label>
//                                 </strong>
//                                 <div className="gender-group">
//                                   <select
//                                     id="inputState"
//                                     name="gender"
//                                     value={formData.gender}
//                                     onChange={handleChange}
//                                     className="form-control"
//                                     required
//                                   >
//                                     <option value="" disabled>
//                                       Choose Gender
//                                     </option>
//                                     <option value="Male">Male</option>
//                                     <option value="Female">Female</option>
//                                   </select>
//                                 </div>
//                                 <div className="invalid-feedback">
//                                   Please select Gender.
//                                 </div>
//                               </div>
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Date of Birth</label>
//                                 </strong>
//                                 <input
//                                   type="date"
//                                   name="dob"
//                                   value={formData.dob}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Date of Birth"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter DOB.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Phone</label>
//                                 </strong>
//                                 <input
//                                   type="text"
//                                   name="phone"
//                                   value={formData.phone}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Phone Number"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Phone Number
//                                 </div>
//                               </div>
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">
//                                     Profile Pic
//                                   </label>
//                                 </strong>
//                                 <input
//                                   type="file"
//                                   name="profilePic"
//                                   onChange={handleFileChange}
//                                   className="form-control"
//                                   placeholder="Select your Profile Pic"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please select valid Profile Pic.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="mb-3 col-md-12">
//                                 <strong>
//                                   <label className="mb-1">Address</label>
//                                 </strong>
//                                 <textarea
//                                   name="address"
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   rows={6}
//                                   id="comment"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Address.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Email</label>
//                                 </strong>
//                                 <input
//                                   type="text"
//                                   name="email"
//                                   value={formData.email}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Email Address"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Email Address.
//                                 </div>
//                               </div>
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Role</label>
//                                 </strong>
//                                 <select
//                                   name="role"
//                                   value={formData.role}
//                                   onChange={handleChange}
//                                   id="inputState"
//                                   className="form-control"
//                                   required
//                                 >
//                                   <option value="" disabled>
//                                     Choose Role
//                                   </option>
//                                   <option>Scholar</option>
//                                   <option>User</option>
//                                 </select>
//                                 <div className="invalid-feedback">
//                                   Please select a Role.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Password</label>
//                                 </strong>
//                                 <input
//                                   type="password"
//                                   name="password"
//                                   value={formData.password}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Password"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Password.
//                                 </div>
//                               </div>
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">
//                                     Confirm Password
//                                   </label>
//                                 </strong>
//                                 <input
//                                   type="password"
//                                   name="confirmPassword"
//                                   value={formData.confirmPassword}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Confirm Password"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Confirm Password.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-center">
//                               <button
//                                 type="submit"
//                                 className="btn btn-primary btn-block"
//                               >
//                                 Sign Up
//                               </button>
//                             </div>
//                           </form>
//                         </div>
//                         <div className="new-account mt-3">
//                           <p>
//                             Already have an account?{" "}
//                             <Link
//                               className="text-decoration-none"
//                               to="/auth/signin"
//                             >
//                               Sign In
//                             </Link>
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignUp;

// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Logo from "../../../custom/Logo";

// function SignUp() {
//   const [formFields, setFormFields] = useState({
//     firstname: "",
//     lastname: "",
//     gender: "",
//     dob: "",
//     phone: "",
//     address: "",
//     email: "",
//     role: "",
//     password: "",
//     confirmPassword: "",
//     profilePic: "", // Store profile pic URL here
//   });

//   const [profilePicFile, setProfilePicFile] = useState(null); // To store the profile pic file

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormFields({ ...formFields, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setProfilePicFile(e.target.files[0]); // Store the selected file in the state
//   };

//   const handleFileUpload = async () => {
//     if (!profilePicFile) return null; // If no file is selected, return null

//     const formData = new FormData();
//     formData.append("file", profilePicFile);
//     formData.append("upload_preset", "profilepic"); // Cloudinary preset

//     try {
//       const response = await fetch("https://api.cloudinary.com/v1_1/dknje3po9/image/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (data.secure_url) {
//         return data.secure_url; // Return the image URL to be added to formFields
//       } else {
//         alert("File upload failed, please try again.");
//         return null;
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       alert("An error occurred during the file upload.");
//       return null;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // If a profile picture file is selected, upload it first and get the URL
//     let uploadedProfilePic = formFields.profilePic;
//     if (profilePicFile) {
//       uploadedProfilePic = await handleFileUpload();
//       if (!uploadedProfilePic) return; // If file upload failed, stop the form submission
//     }

//     // Now send the form data (including profile pic URL if file is uploaded)
//     const dataToSend = {
//       ...formFields,
//       profilePic: uploadedProfilePic, // Add the profile pic URL
//     };

//     try {
//       console.log("data to api",dataToSend)
//       const response = await fetch("https://3a63-150-107-26-9.ngrok-free.app/api/auth/signup", {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json", // Make sure the content type is set to JSON
//         },
//         body: JSON.stringify(dataToSend), // Send the form data as JSON

//       });

//       if (response.ok) {
//         alert("User registered successfully");
//         // Reset the formFields state to clear the form
//         setFormFields({
//           firstname: "",
//           lastname: "",
//           gender: "",
//           dob: "",
//           phone: "",
//           address: "",
//           email: "",
//           role: "",
//           password: "",
//           confirmPassword: "",
//           profilePic: "", // Reset the profile pic URL
//         });
//       } else {
//         alert("Signup failed");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred during signup");
//     }
//   };

//   useEffect(() => {
//     (function () {
//       "use strict";
//       const forms = document.querySelectorAll(".needs-validation");
//       Array.prototype.slice.call(forms).forEach(function (form) {
//         form.addEventListener(
//           "submit",
//           function (event) {
//             const genderSelect = form.querySelector('select[name="gender"]');
//             if (genderSelect && !genderSelect.value) {
//               const genderGroup = form.querySelector(".gender-group");
//               genderGroup.classList.add("is-invalid");
//               event.preventDefault();
//               event.stopPropagation();
//             } else {
//               form.querySelector(".gender-group").classList.remove("is-invalid");
//             }

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
//     <>
//       <div
//         className="vh-100"
//         style={{
//           backgroundImage: "url('/dash/images/bg.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="authentication h-100">
//           <div className="container h-100">
//             <div className="row justify-content-center h-100 align-items-center">
//               <div className="col-md-9">
//                 <div className="authentication-content">
//                   <div className="row no-gutters">
//                     <div className="col-lg-12">
//                       <div className="auth-form">
//                         <div className="text-center mb-3">
//                           <Link to="/" className="brand-logo">
//                             <Logo />
//                           </Link>
//                         </div>
//                         <h4 className="text-center mb-4">Sign Up</h4>
//                         <div className="col-lg-12">
//                           <form className="needs-validation" noValidate onSubmit={handleSubmit}>
//                             <div className="row">
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">First Name</label>
//                                 </strong>
//                                 <input
//                                   type="text"
//                                   name="firstname"
//                                   value={formFields.firstname}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter First Name"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter First Name.
//                                 </div>
//                               </div>
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Last Name</label>
//                                 </strong>
//                                 <input
//                                   type="text"
//                                   name="lastname"
//                                   value={formFields.lastname}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Last Name"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Last Name.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Gender</label>
//                                 </strong>
//                                 <div className="gender-group">
//                                   <select
//                                     id="inputState"
//                                     name="gender"
//                                     value={formFields.gender}
//                                     onChange={handleChange}
//                                     className="form-control"
//                                     required
//                                   >
//                                     <option value="" disabled>
//                                       Choose Gender
//                                     </option>
//                                     <option value="Male">Male</option>
//                                     <option value="Female">Female</option>
//                                   </select>
//                                 </div>
//                                 <div className="invalid-feedback">
//                                   Please select Gender.
//                                 </div>
//                               </div>
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Date of Birth</label>
//                                 </strong>
//                                 <input
//                                   type="date"
//                                   name="dob"
//                                   value={formFields.dob}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Date of Birth"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter DOB.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Phone</label>
//                                 </strong>
//                                 <input
//                                   type="text"
//                                   name="phone"
//                                   value={formFields.phone}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Phone Number"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Phone Number
//                                 </div>
//                               </div>
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">
//                                     Profile Pic
//                                   </label>
//                                 </strong>
//                                 <input
//                                   type="file"
//                                   name="profilePic"
//                                   onChange={handleFileChange}
//                                   className="form-control"
//                                   placeholder="Select your Profile Pic"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please select valid Profile Pic.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="mb-3 col-md-12">
//                                 <strong>
//                                   <label className="mb-1">Address</label>
//                                 </strong>
//                                 <textarea
//                                   name="address"
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   rows={6}
//                                   id="comment"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Address.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Email</label>
//                                 </strong>
//                                 <input
//                                   type="text"
//                                   name="email"
//                                   value={formFields.email}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Email Address"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Email Address.
//                                 </div>
//                               </div>
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Role</label>
//                                 </strong>
//                                 <select
//                                   name="role"
//                                   value={formFields.role}
//                                   onChange={handleChange}
//                                   id="inputState"
//                                   className="form-control"
//                                   required
//                                 >
//                                   <option value="" disabled>
//                                     Choose Role
//                                   </option>
//                                   <option>Scholar</option>
//                                   <option>User</option>
//                                 </select>
//                                 <div className="invalid-feedback">
//                                   Please select a Role.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Password</label>
//                                 </strong>
//                                 <input
//                                   type="password"
//                                   name="password"
//                                   value={formFields.password}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Password"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Password.
//                                 </div>
//                               </div>
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">
//                                     Confirm Password
//                                   </label>
//                                 </strong>
//                                 <input
//                                   type="password"
//                                   name="confirmPassword"
//                                   value={formFields.confirmPassword}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Confirm Password"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Confirm Password.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-center">
//                               <button
//                                 type="submit"
//                                 className="btn btn-primary btn-block"
//                               >
//                                 Sign Up
//                               </button>
//                             </div>
//                           </form>
//                         </div>
//                         <div className="new-account mt-3">
//                           <p>
//                             Already have an account?{" "}
//                             <Link
//                               className="text-decoration-none"
//                               to="/auth/signin"
//                             >
//                               Sign In
//                             </Link>
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignUp;
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Logo from "../../../custom/Logo";
// import axios from "axios";

// function SignUp() {
//   const [formFields, setFormFields] = useState({
//     firstname: "saiteja",
//     lastname: "tehja",
//     gender: "Male",
//     dob: "23-505-2003",
//     phone: "1234567890",
//     address: "demo address",
//     email: "temp@emgial.com",
//     role: "User",
//     password: "Demopassword",
//     confirmPassword: "Demopassword",

//     profilePic:
//       "https://res.cloudinary.com/dknje3po9/image/upload/v1673913236/profilepic.png",
//   });

//   const [profilePicFile, setProfilePicFile] = useState(null); // To store the profile pic file

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormFields({ ...formFields, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setProfilePicFile(e.target.files[0]); // Store the selected file in the state
//   };

//   const handleFileUpload = async () => {
//     if (!profilePicFile) return null; // If no file is selected, return null

//     const formData = new FormData();
//     formData.append("file", profilePicFile);
//     formData.append("upload_preset", "profilepic"); // Cloudinary preset

//     try {
//       const response = await fetch(
//         "https://api.cloudinary.com/v1_1/dknje3po9/image/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await response.json();

//       if (data.secure_url) {
//         return data.secure_url; // Return the image URL to be added to formFields
//       } else {
//         alert("File upload failed, please try again.");
//         return null;
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       alert("An error occurred during the file upload.");
//       return null;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if passwords match
//     if (formFields.password !== formFields.confirmPassword) {
//       alert("Passwords do not match.");
//       return; // Stop submission if passwords don't match
//     }

//     // If a profile picture file is selected, upload it first and get the URL
//     let uploadedProfilePic = formFields.profilePic;
//     if (profilePicFile) {
//       uploadedProfilePic = await handleFileUpload();
//       if (!uploadedProfilePic) return; // If file upload failed, stop the form submission
//     }

//     // Now send the form data (including profile pic URL if file is uploaded)
//     const dataToSend = {
//       ...formFields,
//       profilePic: uploadedProfilePic, // Add the profile pic URL
//     };

//     try {
//       const response = await axios.post(
//         "https://3a63-150-107-26-9.ngrok-free.app/api/auth/signup",
//         dataToSend
//       );

//       const responseData =response.data;

//       if (response.message == "User signed up successfully") {
//         alert("User registered successfully");
//         // Reset the form
//         setFormFields({
//           firstname: "",
//           lastname: "",
//           gender: "",
//           dob: "",
//           phone: "",
//           address: "",
//           email: "",
//           role: "",
//           password: "",
//           confirmPassword: "",
//           profilePic: "", // Reset the profile pic URL
//         });
//       } else {
//         alert(responseData.message || "Signup failed");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred during signup");
//     }
//   };

//   useEffect(() => {
//     (function () {
//       "use strict";
//       const forms = document.querySelectorAll(".needs-validation");
//       Array.prototype.slice.call(forms).forEach(function (form) {
//         form.addEventListener(
//           "submit",
//           function (event) {
//             const genderSelect = form.querySelector('select[name="gender"]');
//             if (genderSelect && !genderSelect.value) {
//               const genderGroup = form.querySelector(".gender-group");
//               genderGroup.classList.add("is-invalid");
//               event.preventDefault();
//               event.stopPropagation();
//             } else {
//               form
//                 .querySelector(".gender-group")
//                 .classList.remove("is-invalid");
//             }

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
//     <>
//       <div
//         className="vh-100"
//         style={{
//           backgroundImage: "url('/dash/images/bg.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="authentication h-100">
//           <div className="container h-100">
//             <div className="row justify-content-center h-100 align-items-center">
//               <div className="col-md-9">
//                 <div className="authentication-content">
//                   <div className="row no-gutters">
//                     <div className="col-lg-12">
//                       <div className="auth-form">
//                         <div className="text-center mb-3">
//                           <Link to="/" className="brand-logo">
//                             <Logo />
//                           </Link>
//                         </div>
//                         <h4 className="text-center mb-4">Sign Up</h4>
//                         <div className="col-lg-12">
//                           <form
//                             className="needs-validation"
//                             noValidate
//                             onSubmit={handleSubmit}
//                           >
//                             <div className="row">
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">First Name</label>
//                                 </strong>
//                                 <input
//                                   type="text"
//                                   name="firstname"
//                                   value={formFields.firstname}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter First Name"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter First Name.
//                                 </div>
//                               </div>
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Last Name</label>
//                                 </strong>
//                                 <input
//                                   type="text"
//                                   name="lastname"
//                                   value={formFields.lastname}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Last Name"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Last Name.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Gender</label>
//                                 </strong>
//                                 <div className="gender-group">
//                                   <select
//                                     name="gender"
//                                     value={formFields.gender}
//                                     onChange={handleChange}
//                                     className="form-control"
//                                     required
//                                   >
//                                     <option value="" disabled>
//                                       Choose Gender
//                                     </option>
//                                     <option value="Male">Male</option>
//                                     <option value="Female">Female</option>
//                                   </select>
//                                 </div>
//                                 <div className="invalid-feedback">
//                                   Please select Gender.
//                                 </div>
//                               </div>
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Date of Birth</label>
//                                 </strong>
//                                 <input
//                                   type="date"
//                                   name="dob"
//                                   value={formFields.dob}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Date of Birth"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter DOB.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Phone</label>
//                                 </strong>
//                                 <input
//                                   type="text"
//                                   name="phone"
//                                   value={formFields.phone}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Phone Number"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Phone Number.
//                                 </div>
//                               </div>
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Profile Pic</label>
//                                 </strong>
//                                 <input
//                                   type="file"
//                                   name="profilePic"
//                                   onChange={handleFileChange}
//                                   className="form-control"
//                                   placeholder="Select your Profile Pic"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please select a valid Profile Pic.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="mb-3 col-md-12">
//                                 <strong>
//                                   <label className="mb-1">Address</label>
//                                 </strong>
//                                 <textarea
//                                   name="address"
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   rows={6}
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Address.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Email</label>
//                                 </strong>
//                                 <input
//                                   type="email"
//                                   name="email"
//                                   value={formFields.email}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Email Address"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter a valid Email Address.
//                                 </div>
//                               </div>
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Role</label>
//                                 </strong>
//                                 <select
//                                   name="role"
//                                   value={formFields.role}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   required
//                                 >
//                                   <option value="" disabled>
//                                     Choose Role
//                                   </option>
//                                   <option value="User">User</option>
//                                   <option value="Scholar">Scholar</option>
//                                 </select>
//                                 <div className="invalid-feedback">
//                                   Please select a Role.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">Password</label>
//                                 </strong>
//                                 <input
//                                   type="password"
//                                   name="password"
//                                   value={formFields.password}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Enter Password"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Password.
//                                 </div>
//                               </div>
//                               <div className="mb-3 col-md-6">
//                                 <strong>
//                                   <label className="mb-1">
//                                     Confirm Password
//                                   </label>
//                                 </strong>
//                                 <input
//                                   type="password"
//                                   name="confirmPassword"
//                                   value={formFields.confirmPassword}
//                                   onChange={handleChange}
//                                   className="form-control"
//                                   placeholder="Confirm Password"
//                                   required
//                                 />
//                                 <div className="invalid-feedback">
//                                   Please enter Confirm Password.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-center">
//                               <button
//                                 type="submit"
//                                 className="btn btn-primary btn-block"
//                               >
//                                 Sign Up
//                               </button>
//                             </div>
//                           </form>
//                         </div>
//                         <div className="new-account mt-3">
//                           <p>
//                             Already have an account?{" "}
//                             <Link
//                               className="text-decoration-none"
//                               to="/auth/signin"
//                             >
//                               Sign In
//                             </Link>
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignUp;
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../../custom/Logo";
import axios from "axios";

function SignUp() {
  const [formFields, setFormFields] = useState({
    firstname: "saiteja",
    lastname: "tehja",
    gender: "Male",
    dob: "23-505-2003",
    phone: "1234567890",
    address: "demo address",
    email: "temp@emgial.com",
    role: "User",
    password: "Demopassword",
    confirmPassword: "Demopassword",

    profilePic:
      "https://res.cloudinary.com/dknje3po9/image/upload/v1673913236/profilepic.png",
  });

  const [profilePicFile, setProfilePicFile] = useState(null); // To store the profile pic file
  const navigate = useNavigate(); // Hook to handle navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFileChange = (e) => {
    setProfilePicFile(e.target.files[0]); // Store the selected file in the state
  };

  const handleFileUpload = async () => {
    if (!profilePicFile) return null; // If no file is selected, return null

    const formData = new FormData();
    formData.append("file", profilePicFile);
    formData.append("upload_preset", "profilepic"); // Cloudinary preset

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dknje3po9/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.secure_url) {
        return data.secure_url; // Return the image URL to be added to formFields
      } else {
        alert("File upload failed, please try again.");
        return null;
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred during the file upload.");
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formFields.password !== formFields.confirmPassword) {
      alert("Passwords do not match.");
      return; // Stop submission if passwords don't match
    }

    // If a profile picture file is selected, upload it first and get the URL
    let uploadedProfilePic = formFields.profilePic;
    if (profilePicFile) {
      uploadedProfilePic = await handleFileUpload();
      if (!uploadedProfilePic) return; // If file upload failed, stop the form submission
    }

    // Now send the form data (including profile pic URL if file is uploaded)
    const dataToSend = {
      ...formFields,
      profilePic: uploadedProfilePic, // Add the profile pic URL
    };

    try {
      const response = await axios.post(
        "https://3a63-150-107-26-9.ngrok-free.app/api/auth/signup",
        dataToSend
      );

      const responseData = response.data;

      if (responseData.message === "User signed up successfully") {
        alert("User registered successfully");

        // Redirect to the sendmail page after successful signup
        navigate("/auth/sendmail");

        // Reset the form
        setFormFields({
          firstname: "",
          lastname: "",
          gender: "",
          dob: "",
          phone: "",
          address: "",
          email: "",
          role: "",
          password: "",
          confirmPassword: "",
          profilePic: "", // Reset the profile pic URL
        });
      } else {
        alert(responseData.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during signup");
    }
  };

  useEffect(() => {
    (function () {
      "use strict";
      const forms = document.querySelectorAll(".needs-validation");
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            const genderSelect = form.querySelector('select[name="gender"]');
            if (genderSelect && !genderSelect.value) {
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
                        <div className="col-lg-12">
                          <form
                            className="needs-validation"
                            noValidate
                            onSubmit={handleSubmit}
                          >
                            <div className="row">
                              <div className="mb-3 col-md-6">
                                <strong>
                                  <label className="mb-1">First Name</label>
                                </strong>
                                <input
                                  type="text"
                                  name="firstname"
                                  value={formFields.firstname}
                                  onChange={handleChange}
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
                                  name="lastname"
                                  value={formFields.lastname}
                                  onChange={handleChange}
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
                                    name="gender"
                                    value={formFields.gender}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                  >
                                    <option value="" disabled>
                                      Choose Gender
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
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
                                  name="dob"
                                  value={formFields.dob}
                                  onChange={handleChange}
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
                                  name="phone"
                                  value={formFields.phone}
                                  onChange={handleChange}
                                  className="form-control"
                                  placeholder="Enter Phone Number"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter Phone Number.
                                </div>
                              </div>
                              <div className="mb-3 col-md-6">
                                <strong>
                                  <label className="mb-1">Profile Pic</label>
                                </strong>
                                <input
                                  type="file"
                                  name="profilePic"
                                  onChange={handleFileChange}
                                  className="form-control"
                                  placeholder="Select your Profile Pic"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please select a valid Profile Pic.
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="mb-3 col-md-12">
                                <strong>
                                  <label className="mb-1">Address</label>
                                </strong>
                                <textarea
                                  name="address"
                                  onChange={handleChange}
                                  className="form-control"
                                  rows={6}
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
                                  type="email"
                                  name="email"
                                  value={formFields.email}
                                  onChange={handleChange}
                                  className="form-control"
                                  placeholder="Enter Email Address"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter a valid Email Address.
                                </div>
                              </div>
                              <div className="mb-3 col-md-6">
                                <strong>
                                  <label className="mb-1">Role</label>
                                </strong>
                                <select
                                  name="role"
                                  value={formFields.role}
                                  onChange={handleChange}
                                  className="form-control"
                                  required
                                >
                                  <option value="" disabled>
                                    Choose Role
                                  </option>
                                  <option value="User">User</option>
                                  <option value="Scholar">Scholar</option>
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
                                  name="password"
                                  value={formFields.password}
                                  onChange={handleChange}
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
                                  name="confirmPassword"
                                  value={formFields.confirmPassword}
                                  onChange={handleChange}
                                  className="form-control"
                                  placeholder="Confirm Password"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter Confirm Password.
                                </div>
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
