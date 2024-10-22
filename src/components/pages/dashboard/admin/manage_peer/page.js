"use client";
import React, { useState } from "react";
import ManagePeerForm from "@/app/components/Forms/ManagePeerForm";
import Pagination from "@/app/components/misc/Pagination";

function Manage_Peer() {
  const [formMode, setFormMode] = useState("create");
  const [currentPeer, setCurrentPeer] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleEdit = () => {
    setFormMode("edit");
  };

  const handleCreateMode = () => {
    setCurrentPeer(null);
    setFormMode("create");
  };

  const peerReviews = [
    {
      id: 1,
      name: "AI in health care",
      review: "The use of AI in health care",
      status: "Pending",
      date: "2022-05-01",
    },
    {
      id: 2,
      name: "Machine Learning in Education",
      review: "Leveraging ML to enhance learning outcomes",
      status: "Pending",
      date: "2022-05-02",
    },
    {
      id: 3,
      name: "Blockchain for Data Security",
      review: "Exploring blockchain for enhancing data security",
      status: "Approved",
      date: "2022-05-03",
    },
    {
      id: 4,
      name: "Climate Change Modeling",
      review: "AI-based climate prediction models",
      status: "Rejected",
      date: "2022-05-04",
    },
  ];

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <ManagePeerForm mode={formMode} onCreate={handleCreateMode} />
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">List of Peer Reviews</h4>
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
                          <strong>Thesis Name</strong>
                        </th>
                        <th>
                          <strong>Review</strong>
                        </th>
                        <th>
                          <strong>Status</strong>
                        </th>
                        <th>
                          <strong>Date</strong>
                        </th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {peerReviews.map((peer, index) => (
                        <tr key={peer.id}>
                          <td>
                            <strong>{String(peer.id).padStart(2, "0")}</strong>
                          </td>
                          <td>{peer.name}</td>
                          <td>{peer.review}</td>
                          <td>{peer.status}</td>
                          <td>{peer.date}</td>
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
                                    <circle
                                      fill="#000000"
                                      cx={5}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={12}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={19}
                                      cy={12}
                                      r={2}
                                    />
                                  </g>
                                </svg>
                              </button>
                              {dropdownOpen === index && (
                                <div className="dropdown-menu show">
                                  {(peer.status === "Pending" ||
                                    peer.status === "Rejected") && (
                                    <button className="dropdown-item">
                                      Download Summary Report
                                    </button>
                                  )}
                                  <button
                                    className="dropdown-item"
                                    onClick={handleEdit}
                                  >
                                    Edit
                                  </button>
                                  <button className="dropdown-item">
                                    Delete
                                  </button>
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

export default Manage_Peer;
