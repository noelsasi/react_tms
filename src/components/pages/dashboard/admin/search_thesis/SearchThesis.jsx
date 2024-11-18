import { Link, useLocation } from "react-router-dom";
import Comment from "../../../../custom/Forms/Comment";
import Pagination from "../../../../custom/misc/Pagination";
import RenderPdf from "../../../../custom/pdfRender/RenderPdf";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllThesis, fetchUsers, searchThesis } from "../../slices/dashboardSlice";

function SearchThesis() {
  const dispatch = useDispatch();
  const { thesisData, usersList } = useSelector(state => state.dashboard)
  const [role, setRole] = useState(null);
  const location = useLocation();
  const [selectedThesis, setSelectedThesis] = useState(null);

  const [formData, setFormData] = useState({
    search: "",
    author: "",
    keyword: "",
    status: "",
    startdate: null,
    enddate: null,
  });


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
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const payload = {}
    if (formData.search) payload.search = formData.search
    if (formData.author) payload.author_name = formData.author
    if (formData.keyword) payload.keywords = [formData.keyword]
    if (formData.status) payload.status = formData.status
    if (formData.startdate) payload.startdate = formData.startdate
    if (formData.enddate) payload.enddate = formData.enddate

    dispatch(searchThesis(payload))
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  const handleThesisClick = (thesis) => {
    setSelectedThesis(thesis);
  }

  useEffect(() => {
    if (location.pathname) {
      const currentRole = location.pathname.split("/")[2];
      setRole(currentRole);
    }

    dispatch(fetchAllThesis())
    dispatch(fetchUsers())
  }, [location.pathname]);

  useEffect(() => {
    setSelectedThesis(thesisData[0])
  }, [thesisData])

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row d-none">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <form
                  id="searchform"
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="mb-3 col-lg-2 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control h-50"
                          placeholder="Search"
                          name="search"
                          value={formData.search}
                          onChange={handleChange}

                        />

                      </div>
                    </div>

                    <div className="mb-3 col-lg-2 col-md-6">
                      <div className="form-group">
                        <select
                          className="form-select"
                          name="author"
                          value={formData.author}
                          onChange={handleChange}

                        >
                          <option value="" disabled>
                            Author
                          </option>
                          {usersList?.map(user => (
                            <option value={user.user_id}>{user.firstname} {user.lastname}</option>
                          ))}
                        </select>

                      </div>
                    </div>

                    <div className="mb-3 col-lg-2 col-md-6">
                      <div className="form-group">
                        <select
                          className="form-select"
                          name="keyword"
                          value={formData.keyword}
                          onChange={handleChange}

                        >
                          <option value="" disabled>
                            Keywords
                          </option>
                          <option value="AI">AI</option>
                          <option value="ML">ML</option>
                          <option value="NLP">NLP</option>
                          <option value="Others">Others</option>
                        </select>

                      </div>
                    </div>

                    <div className="mb-3 col-lg-2 col-md-6">
                      <div className="form-group">
                        <select
                          className="form-select"
                          name="status"
                          value={formData.status}
                          onChange={handleChange}

                        >
                          <option value="" disabled>
                            Status
                          </option>
                          <option value="pending">Pending</option>
                          <option value="approved">Approved</option>
                          <option value="rejected">Rejected</option>
                        </select>

                      </div>
                    </div>

                    <div className="mb-3 col-lg-2 col-md-6">
                      <div className="form-group">
                        <input
                          type="date"
                          className="form-control h-50"
                          placeholder="Date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}

                        />

                      </div>
                    </div>

                    <div className="mb-3 col-lg-2 col-md-6">
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
                        {thesisData?.map(thesis => (
                          <tr onClick={() => handleThesisClick(thesis)} key={thesis.thesis_id}>
                            <td>{thesis.thesis_id}</td>
                            <td>{thesis.title}</td>
                            <td>{thesis.author_name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <RenderPdf fileUrl={selectedThesis?.document_url} />
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

                                  {role !== "user" && (
                                    <button
                                      onClick={() =>
                                        handleDeleteComment(comment.id)
                                      }
                                      title="Delete Comment"
                                      aria-label={`Delete comment by ${comment.author}`}
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
                                  )}
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
