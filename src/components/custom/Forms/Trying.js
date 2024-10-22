"use client";
import { useEffect, useState } from "react";

function Trying() {
  useEffect(() => {
    // scholarvault validation setup
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

  const [showMenu, setShowMenu] = useState(null);

  const toggleMenu = (id) => {
    if (showMenu === id) {
      setShowMenu(null);
    } else {
      setShowMenu(id);
    }
  };

  const handleEdit = (id) => {
    alert(`Edit item with ID: ${id}`);
    setShowMenu(null);
  };

  const handleDelete = (id) => {
    alert(`Delete item with ID: ${id}`);
    setShowMenu(null);
  };

  return (
    <div className="col-lg-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">List of Peer Reviews</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
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
                {[
                  {
                    id: "01",
                    thesisName: "AI in Health Care",
                    review:
                      "Excellent insights into AI applications in health.",
                    status: "Accepted",
                    date: "2024-01-12",
                  },
                  {
                    id: "02",
                    thesisName: "Machine Learning in Education",
                    review: "Innovative approach to personalized learning.",
                    status: "Accepted",
                    date: "2024-02-18",
                  },
                  {
                    id: "03",
                    thesisName: "Blockchain for Data Security",
                    review: "Promising but needs more depth in analysis.",
                    status: "Pending",
                    date: "2024-03-10",
                  },
                  {
                    id: "04",
                    thesisName: "Climate Change Modeling",
                    review: "The data models are unclear.",
                    status: "Rejected",
                    date: "2024-04-22",
                  },
                  {
                    id: "05",
                    thesisName: "Smart Farming with IoT",
                    review:
                      "Very practical approach with real-world applications.",
                    status: "Accepted",
                    date: "2024-05-30",
                  },
                  {
                    id: "06",
                    thesisName: "Augmented Reality in Tourism",
                    review: "Creative ideas for tourism development.",
                    status: "Accepted",
                    date: "2024-06-15",
                  },
                  {
                    id: "07",
                    thesisName: "Cybersecurity Strategies",
                    review: "Lacks comprehensive details on strategies.",
                    status: "Rejected",
                    date: "2024-07-05",
                  },
                  {
                    id: "08",
                    thesisName: "Deep Learning for Image Recognition",
                    review: "Highly technical, well-researched.",
                    status: "Accepted",
                    date: "2024-08-20",
                  },
                  {
                    id: "09",
                    thesisName: "Natural Language Processing",
                    review: "Good discussion on NLP applications.",
                    status: "Accepted",
                    date: "2024-09-12",
                  },
                  {
                    id: "10",
                    thesisName: "Renewable Energy Solutions",
                    review: "Interesting innovations but needs more data.",
                    status: "Accepted",
                    date: "2024-10-01",
                  },
                ].map(({ id, thesisName, review, status, date }) => (
                  <tr key={id}>
                    <td>{thesisName}</td>
                    <td>{review}</td>
                    <td>{status}</td>
                    <td>{date}</td>
                    <td>
                      <div className="action-container">
                        <button
                          type="button"
                          className="btn btn-success light sharp"
                          onClick={() => toggleMenu(id)}
                        >
                          Actions
                        </button>
                        {showMenu === id && (
                          <div className="dropdown-menu show">
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={() => handleEdit(id)}
                            >
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={() => handleDelete(id)}
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
  );
}

export default Trying;
