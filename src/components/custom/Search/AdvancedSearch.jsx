"use client";
import React, { useState } from "react";

const AdvancedSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategories, setSelectedCategories] = useState({});
  const [visibleCategoryDropdown, setVisibleCategoryDropdown] = useState(null);

  const categoryOptions = {
    Topic: ["Science", "Engineering", "Humanities"],
    Author: ["Mark", "Sans", "Harris Edwinn"],
    Keywords: ["Data Science", "AI", "Cybersecurity"],
    Year: ["2024", "2023", "2022", "2021", "2020"],
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchQuery = `${searchInput} ${Object.values(
      selectedCategories
    ).join(" ")}`.trim();
    console.log("Searching for:", searchQuery);
  };

  const handleCategorySelect = (category, option) => {
    setSelectedCategories({
      ...selectedCategories,
      [category]: `${category}: ${option}`,
    });
    setVisibleCategoryDropdown(null);
  };

  const handleReset = () => {
    setSearchInput("");
    setSelectedCategories({});
  };

  const handleRemoveCategory = (category) => {
    const updatedCategories = { ...selectedCategories };
    delete updatedCategories[category];
    setSelectedCategories(updatedCategories);
  };

  return (
    <div className="col-xl-4 col-lg-4">
      <aside className="side-bar sticky-top right">
        <div className="widget">
          <div className="widget-title">
            <h4 className="title">Search</h4>
          </div>
          <div className="search-bx">
            <form role="search" method="post" onSubmit={handleSearchSubmit}>
              <div className="input-group">
                <input
                  name="text"
                  className="form-control style-1"
                  placeholder="Search.."
                  type="text"
                  value={searchInput}
                  onChange={handleSearchChange}
                />
                <span className="input-group-btn">
                  <button
                    type="submit"
                    className="btn btn-primary sharp radius-no"
                  >
                    <i className="fa-solid fa-magnifying-glass scale3" />
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="widget">
          {Object.keys(selectedCategories).length > 0 && (
            <div className="selected-categories">
              <strong>Selected Categories:</strong>
              <ul>
                {Object.entries(selectedCategories).map(
                  ([category, value], idx) => (
                    <li key={idx}>
                      {value}{" "}
                      <button
                        title="Delete Filter"
                        onClick={() => handleRemoveCategory(category)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "red",
                          cursor: "pointer",
                          padding: "0",
                          marginLeft: "10px",
                        }}
                      >
                        <i
                          className="fa fa-trash"
                          style={{ fontSize: "16px" }}
                        ></i>
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="widget widget_categories">
          <div className="widget-title">
            <h4 className="title">Categories</h4>
          </div>
          <ul>
            {Object.keys(categoryOptions).map((category, index) => (
              <li
                key={index}
                className="cat-item"
                onClick={() => setVisibleCategoryDropdown(category)}
              >
                <a href="#">{category}</a>
                {visibleCategoryDropdown === category && (
                  <ul className="dropdown-list">
                    {categoryOptions[category].map((option, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleCategorySelect(category, option)}
                      >
                        <a href="#">{option}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="widget">
          <button className="btn btn-secondary" onClick={handleReset}>
            Reset
          </button>
        </div>
      </aside>
    </div>
  );
};

export default AdvancedSearch;
