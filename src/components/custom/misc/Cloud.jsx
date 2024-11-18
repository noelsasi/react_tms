import { useState } from 'react'

function Cloud() {
  const [file, setFile] = useState(null)
  const submitImage = () => {
    console.log(file)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'scholarVault')
    fetch('https://api.cloudinary.com/v1_1/dyenwfhtf/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }
  return (
    <div>
      <input
        type="file"
        id="profile_picture"
        name="profile_picture"
        className="form-control"
        placeholder="Select your Profile Picture"
        required
        onChange={e => setFile(e.target.files[0])}
      />
      <button onClick={() => submitImage()}>Submit</button>
    </div>
  )
}

export default Cloud

// // import { useState } from "react";

// import { useState } from "react";

// function Cloud() {
//     const [file, setFile] = useState(null);

//     const submitFile = () => {
//       if (!file) {
//         console.log("No file selected");
//         return;
//       }

//       console.log(file);
//       const formData = new FormData();
//       formData.append("file", file);
//       formData.append("upload_preset", "profilepic"); // Update this to your Cloudinary preset
//       formData.append("resource_type", "raw"); // This is important for uploading non-image files like PDFs

//       fetch("https://api.cloudinary.com/v1_1/dyenwfhtf/upload", {
//         method: "POST",
//         body: formData,
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data); // You can handle the response here, for example, show the uploaded PDF URL
//         })
//         .catch((error) => {
//           console.error("Error uploading file:", error);
//         });
//     };

//     return (
//       <div>
//         <input
//           type="file"
//           id="pdf_file"
//           name="pdf_file"
//           className="form-control"
//           placeholder="Select a PDF file"
//           required
//           accept=".pdf" // Restrict input to PDF files
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <button onClick={submitFile}>Upload PDF</button>
//       </div>
//     );
//   }

//   export default Cloud;
