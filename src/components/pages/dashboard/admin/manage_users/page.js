"use client";
import React, { useState } from "react";
import ManageUserForm from "@/app/components/Forms/ManageUserForm";
import Pagination from "@/app/components/misc/Pagination";

function Manage_users() {
  const [formMode, setFormMode] = useState("create");
  const [currentUser, setCurrentUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const users = [
    {
      id: "01",
      firstName: "Bobby",
      lastName: "Schol",
      name: "Mr. Bobby",
      email: "bobby@example.com",
      gender: "Male",
      dob: "1990-05-15",
      address: "123 Main St",
      phone: "123-456-7890",
      role: "Scholar",
      status: "Active",
    },
    {
      id: "02",
      firstName: "Chris",
      lastName: "Brown",
      name: "Chris Brown",
      email: "chris@example.com",
      gender: "Male",
      dob: "1988-07-21",
      address: "456 Oak St",
      phone: "987-654-3210",
      role: "Scholar",
      status: "Inactive",
    },
    {
      id: "03",
      firstName: "John",
      lastName: "Doe",
      name: "John Doe",
      email: "john@example.com",
      gender: "Male",
      dob: "1990-05-15",
      address: "123 Main St",
      phone: "123-456-7890",
      role: "User",
      status: "Active",
    },
    {
      id: "04",
      firstName: "Jane",
      lastName: "Smith",
      name: "Jane Smith",
      email: "jane@example.com",
      gender: "Female",
      dob: "1990-05-15",
      address: "123 Main St",
      phone: "123-456-7890",
      role: "User",
      status: "Active",
    },
    {
      id: "05",
      firstName: "Alice",
      lastName: "Johnson",
      name: "Alice Johnson",
      email: "alice@example.com",
      gender: "Female",
      dob: "1990-05-15",
      address: "123 Main St",
      phone: "123-456-7890",
      role: "User",
      status: "Active",
    },
  ];

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setFormMode("edit");
  };

  const handleDelete = (id) => {
    
  };

  const handleCreateMode = () => {
    setCurrentUser(null);
    setFormMode("create");
  };

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <ManageUserForm mode={formMode} onCreate={handleCreateMode} user={currentUser} />
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">List of Users</h4>
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
                          <strong>FIRST NAME</strong>
                        </th>
                        <th>
                          <strong>LAST NAME</strong>
                        </th>
                        <th>
                          <strong>GENDER</strong>
                        </th>
                        <th>
                          <strong>DOB</strong>
                        </th>
                        <th>
                          <strong>PHONE</strong>
                        </th>
                        <th>
                          <strong>ADDRESS</strong>
                        </th>
                        <th>
                          <strong>EMAIL</strong>
                        </th>
                        <th>
                          <strong>ROLE</strong>
                        </th>
                        <th>
                          <strong>STATUS</strong>
                        </th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={user.id}>
                          <td>
                            <strong>{user.id}</strong>
                          </td>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.gender}</td>
                          <td>{user.dob}</td>
                          <td>{user.phone}</td>
                          <td>{user.address}</td>
                          <td>{user.email}</td>
                          <td>{user.role}</td>
                          <td>{user.status}</td>
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
                                    onClick={() => handleEdit(user)}
                                  >
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => handleDelete(user.id)}
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

export default Manage_users;
