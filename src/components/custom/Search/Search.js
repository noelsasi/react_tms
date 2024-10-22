"use client";
import React, { useState } from "react";

const Sidebar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [visibleCategoryDropdown, setVisibleCategoryDropdown] = useState(null);
  const [isYearDropdownVisible, setYearDropdownVisible] = useState(false);

  const categoryOptions = {
    Topic: ["Science", "Engineering", "Humanities"],
    Author: ["Mark", "Sans", "Harris Edwinn"],
    Keywords: ["Data Science", "AI", "Cybersecurity"],

    Year: ["2024", "2023", "2022", "2021", "2020"],
  };

  const yearOptions = ["2024", "2023", "2022", "2021", "2020"];

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchQuery =
      `${searchInput} ${selectedCategory} ${selectedYear}`.trim();
    console.log("Searching for:", searchQuery);
  };

  const handleCategorySelect = (category, option) => {
    setSelectedCategory(`${category}: ${option}`);
    setVisibleCategoryDropdown(null);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(`Year: ${year}`);
    setYearDropdownVisible(false);
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
                  value={`${searchInput} ${selectedCategory} ${selectedYear}`.trim()}
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
          <div className="widget-title">
            <h4 className="title">Filter by Year</h4>
          </div>
          <ul>
            <li onClick={() => setYearDropdownVisible(!isYearDropdownVisible)}>
              <a href="#">Select Year</a>

              {isYearDropdownVisible && (
                <ul className="dropdown-list">
                  {yearOptions.map((year, index) => (
                    <li
                      key={index}
                      className="year-item"
                      onClick={() => handleYearSelect(year)}
                    >
                      <a href="#">{year}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
