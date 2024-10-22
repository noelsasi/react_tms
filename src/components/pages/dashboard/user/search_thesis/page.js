"use client";

import Comment from "@/app/components/Forms/Comment";
import Pagination from "@/app/components/misc/Pagination";
import RenderPdf from "@/app/components/pdfRender/RenderPdf";
import Link from "next/link";
import { useState } from "react";

function SearchThesis() {
  const [formData, setFormData] = useState({
    search: "",
    author: "",
    keyword: "",
    tag: "",
    date: new Date().toISOString().split("T")[0],
  });

  const [validated, setValidated] = useState(false);

  const [comments, setComments] = useState([
    {
      id: 1,
      author: "David",
      avatar: "/assets/images/avatar/user.png",
      content:
        "Good to know that you are working on this project which clarifies my doubts about the AI in healthcare.",
    },
    {
      id: 2,
      author: "Mark",
      avatar: "/assets/images/avatar/user.png",
      content: "Deep insights on AI influence on healthcare.",
    },
    {
      id: 3,
      author: "Chris",
      avatar: "/assets/images/avatar/user.png",
      content:
        "I am working on this project and I would like to know more about the AI in healthcare.",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      console.log("Form submitted:", formData);
    }

    setValidated(true);
  };

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <form
                  className={`needs-validation ${
                    validated ? "was-validated" : ""
                  }`}
                  noValidate
                  id="searchform"
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-lg-2 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control h-50"
                          placeholder="Search"
                          name="search"
                          value={formData.search}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a valid search term
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                      <div className="form-group">
                        <select
                          className="form-select"
                          name="author"
                          value={formData.author}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Author
                          </option>
                          <option value="John">John</option>
                          <option value="Jane">Jane</option>
                          <option value="Doe">Doe</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select an author
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                      <div className="form-group">
                        <select
                          className="form-select"
                          name="keyword"
                          value={formData.keyword}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Keywords
                          </option>
                          <option value="AI">AI</option>
                          <option value="ML">ML</option>
                          <option value="NLP">NLP</option>
                          <option value="Others">Others</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a keyword
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                      <div className="form-group">
                        <select
                          className="form-select"
                          name="tag"
                          value={formData.tag}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Tags
                          </option>
                          <option value="AI">AI</option>
                          <option value="ML">ML</option>
                          <option value="NLP">NLP</option>
                          <option value="Others">Others</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a tag
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                      <div className="form-group">
                        <input
                          type="date"
                          className="form-control h-50"
                          placeholder="Date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">
                          Please select a date
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm w-100"
                          style={{ padding: "0.4rem" }}
                        >
                          Search Thesis
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="card p-3">
                  <div className="card-header p-3">
                    <h4 className="fs-20 mb-0">List of Thesis</h4>
                  </div>
                  <div className="table-responsive p-2">
                    <table className="table table-responsive">
                      <thead>
                        <tr>
                          <th>
                            <strong>ID</strong>
                          </th>
                          <th>
                            <strong>Title</strong>
                          </th>
                          <th>
                            <strong>Author</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>01</strong>
                          </td>
                          <td>
                            <Link href="#">AI in Health Care</Link>
                          </td>
                          <td>David</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>02</strong>
                          </td>
                          <td>
                            <Link href="#">Machine Learning in Education</Link>
                          </td>
                          <td>Susan</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>03</strong>
                          </td>
                          <td>
                            <Link href="#">Blockchain for Data Security</Link>
                          </td>
                          <td>Michael</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>04</strong>
                          </td>
                          <td>
                            <Link href="#">Climate Change Modeling</Link>
                          </td>
                          <td>Emma</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>05</strong>
                          </td>
                          <td>
                            <Link href="#">Quantum Computing Applications</Link>
                          </td>
                          <td>John</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>06</strong>
                          </td>
                          <td>
                            <Link href="#">Robotics in Surgery</Link>
                          </td>
                          <td>Alice</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>07</strong>
                          </td>
                          <td>
                            <Link href="#">Technology Adoption</Link>
                          </td>
                          <td>Chris</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>08</strong>
                          </td>
                          <td>
                            <Link href="#">Renewable Energy Innovations</Link>
                          </td>
                          <td>Olivia</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>09</strong>
                          </td>
                          <td>
                            <Link href="#">Cybersecurity in IoT</Link>
                          </td>
                          <td>Lucas</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>10</strong>
                          </td>
                          <td>
                            <Link href="#">Learning in NLP</Link>
                          </td>
                          <td>Lily</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>11</strong>
                          </td>
                          <td>
                            <Link href="#">Augmented Reality in Education</Link>
                          </td>
                          <td>Henry</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>12</strong>
                          </td>
                          <td>
                            <Link href="#">Virtual Reality for Training</Link>
                          </td>
                          <td>Isabella</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>13</strong>
                          </td>
                          <td>
                            <Link href="#">Autonomous Vehicles</Link>
                          </td>
                          <td>James</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>14</strong>
                          </td>
                          <td>
                            <Link href="#">in Financial Forecasting</Link>
                          </td>
                          <td>Grace</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>15</strong>
                          </td>
                          <td>
                            <Link href="#">Wearable Health Devices</Link>
                          </td>
                          <td>Ethan</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>16</strong>
                          </td>
                          <td>
                            <Link href="#">Data Analytics in Retail</Link>
                          </td>
                          <td>Sophia</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>17</strong>
                          </td>
                          <td>
                            <Link href="#">Computing for IoT</Link>
                          </td>
                          <td>Oliver</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>18</strong>
                          </td>
                          <td>
                            <Link href="#">in Agriculture</Link>
                          </td>
                          <td>Charlotte</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>19</strong>
                          </td>
                          <td>
                            <Link href="#">Privacy in Social Media</Link>
                          </td>
                          <td>William</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>20</strong>
                          </td>
                          <td>
                            <Link href="#">
                              Neural Networks in Image Processing
                            </Link>
                          </td>
                          <td>Ava</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>21</strong>
                          </td>
                          <td>
                            <Link href="#">
                              Machine Learning for Financial Analysis
                            </Link>
                          </td>
                          <td>John</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>22</strong>
                          </td>
                          <td>
                            <Link href="#">BlockChain for Medical Records</Link>
                          </td>
                          <td>Danny</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>23</strong>
                          </td>
                          <td>
                            <Link href="#">BlockChain for Voting</Link>
                          </td>
                          <td>Garry</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Pagination />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <RenderPdf />
                  <div className="card-footer border-0">
                    <div className="clear" id="comment-list">
                      <div className="comments-area" id="comments">
                        <div className="widget-title style-1">
                          <h4 className="title">Comments</h4>
                        </div>
                        <div className="clearfix">
                          <ol
                            className="comment-list py-3"
                            style={{ paddingLeft: "0" }}
                          >
                            {comments.map((comment) => (
                              <li className="comment" key={comment.id}>
                                <div className="comment-body d-flex align-items-start justify-content-between w-100">
                                  <div className="d-flex align-items-start">
                                    <img
                                      className="avatar photo me-3"
                                      src={comment.avatar}
                                      alt={`${comment.author}'s avatar`}
                                      width="40"
                                    />
                                    <div>
                                      <cite className="fn">
                                        {comment.author}
                                      </cite>
                                      <p>{comment.content}</p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ol>
                          <div className="widget-title style-1">
                            <h4 className="title" id="reply-title">
                              Leave Your Comment
                            </h4>
                          </div>
                          <Comment />
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
    </div>
  );
}

export default SearchThesis;
