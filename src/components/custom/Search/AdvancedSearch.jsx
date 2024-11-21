"use client";
import React, { useState } from "react";

const AdvancedSearch = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    keywords: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <div className="col-lg-4">
      <form onSubmit={handleSubmit}>
        {/* Add your search form fields here */}
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default AdvancedSearch;
