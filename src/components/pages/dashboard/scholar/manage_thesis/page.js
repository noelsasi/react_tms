
"use client";
import React, { useState } from "react";
import ManageThesisForm from "@/app/components/Forms/ManageThesisForm";
import Pagination from "@/app/components/misc/Pagination";

function Manage_Thesis() {
  const [formMode, setFormMode] = useState("create");
  const [currentThesis, setCurrentThesis] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const theses = [
    {
      id: 1,
      title: "AI in health care",
      author: "David",
      category: "Medicine",
      keywords: "Bioinformatics",
      abstract: "The use of AI in health care",
      views: 740,
      downloads: 210,
      status: "Pending",
    },
    {
      id: 2,
      title: "Machine Learning in Education",
      author: "Susan",
      category: "Education",
      keywords: "Data Science",
      abstract: "Leveraging ML to enhance learning outcomes",
      views: 900,
      downloads: 200,
      status: "Accepted",
    },
    {
      id: 3,
      title: "Blockchain for Data Security",
      author: "Michael",
      category: "Computer Science",
      keywords: "Security",
      abstract: "Exploring blockchain for enhancing data security",
      views: 600,
      downloads: 120,
      status: "Pending",
    },
    {
      id: 4,
      title: "Climate Change Modeling",
      author: "Emma",
      category: "Environmental Science",
      keywords: "Climate Studies",
      abstract: "AI-based climate prediction models",
      views: 720,
      downloads: 98,
      status: "Pending",
    },
  ];

  const handleEdit = (thesis) => {
    setCurrentThesis(thesis);
    setFormMode("edit");
  };

  const handleCreateMode = () => {
    setCurrentThesis(null);
    setFormMode("create");
  };

  const handleDelete = (id) => {
    // Add your delete logic here
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <ManageThesisForm mode={formMode} onCreate={handleCreateMode} thesis={currentThesis} />

          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">List of Thesis</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-responsive-md">
                    <thead>
                      <tr>
                        <th style={{ width: 80 }}>
                          <strong>ID</strong>
                        </th>
                        <th>
                          <strong>Title</strong>
                        </th>
                        <th>
                          <strong>Author</strong>
                        </th>
                        <th>
                          <strong>Category</strong>
                        </th>
                        <th>
                          <strong>Keywords</strong>
                        </th>
                        <th>
                          <strong>Abstract</strong>
                        </th>
                        <th>
                          <strong>Views</strong>
                        </th>
                        <th>
                          <strong>Downloads</strong>
                        </th>
                        <th>
                          <strong>Status</strong>
                        </th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {theses.map((thesis, index) => (
                        <tr key={thesis.id}>
                          <td>
                            <strong>{String(thesis.id).padStart(2, '0')}</strong>
                          </td>
                          <td>{thesis.title}</td>
                          <td>{thesis.author}</td>
                          <td>{thesis.category}</td>
                          <td>{thesis.keywords}</td>
                          <td>{thesis.abstract}</td>
                          <td>{thesis.views}</td>
                          <td>{thesis.downloads}</td>
                          <td>{thesis.status}</td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-success light sharp"
                                onClick={() => toggleDropdown(index)}
                              >
                                <svg
                                  width="20px"
                                  height="20px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    strokeWidth={1}
                                    fill="none"
                                    fillRule="evenodd"
                                  >
                                    <rect x={0} y={0} width={24} height={24} />
                                    <circle fill="#000000" cx={5} cy={12} r={2} />
                                    <circle fill="#000000" cx={12} cy={12} r={2} />
                                    <circle fill="#000000" cx={19} cy={12} r={2} />
                                  </g>
                                </svg>
                              </button>
                              {dropdownOpen === index && (
                                <div className="dropdown-menu show">
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => handleEdit(thesis)}
                                  >
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => handleDelete(thesis.id)}
                                  >
                                    Delete
                                  </a>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Manage_Thesis;
