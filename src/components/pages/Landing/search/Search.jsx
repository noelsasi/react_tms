import { useState, useEffect } from 'react'
import axios from 'axios'
import ThesisHorizontal from './../../../custom/Cards/ThesisHorizontal'
import { Link } from 'react-router-dom'

function Search() {
  const [theses, setTheses] = useState([])
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 20,
  })
  const [searchParams, setSearchParams] = useState({
    searchText: '',
    page: 1,
    limit: 20,
  })

  const fetchTheses = async () => {
    try {
      setLoading(true)
      const queryString = new URLSearchParams(searchParams).toString()
      const response = await axios.get(`/api/misc/search?${queryString}`)
      setTheses(response.data.theses)
      setPagination(response.data.pagination)
    } catch (error) {
      console.error('Error fetching theses:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTheses()
  }, [searchParams])

  const handleSearch = e => {
    e.preventDefault()
    setSearchParams(prev => ({
      ...prev,
      page: 1,
    }))
  }

  const handlePageChange = newPage => {
    setSearchParams(prev => ({
      ...prev,
      page: newPage,
    }))
  }

  return (
    <div>
      <div
        className="dz-bnr-inr dz-bnr-inr-sm text-center overlay-primary-dark"
        style={{ backgroundImage: 'url(/assets/images/banner/bnr1.jpg)' }}
      >
        <div className="container">
          <div className="dz-bnr-inr-entry">
            <h1>Search Thesis</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row m-t15">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Search Thesis
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="content-inner bg-white position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-4">
              <form onSubmit={handleSearch} className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Search thesis..."
                  value={searchParams.searchText}
                  onChange={e =>
                    setSearchParams(prev => ({
                      ...prev,
                      searchText: e.target.value,
                    }))
                  }
                />
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </form>
            </div>

            <div className="col-lg-12">
              <div className="row">
                {loading ? (
                  <div className="col-12 text-center">Loading...</div>
                ) : theses.length === 0 ? (
                  <div className="col-12 text-center">No theses found</div>
                ) : (
                  theses.map(thesis => (
                    <ThesisHorizontal
                      key={thesis.thesis_id}
                      thesis_id={thesis.thesis_id}
                      title={thesis.title}
                      abstract={thesis.abstract}
                      author={thesis.author_name}
                      date={new Date(thesis.created_at).toLocaleDateString(
                        'en-US',
                        {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        }
                      )}
                      img_src={
                        thesis.cover_image || '/assets/images/blog/t2.png'
                      }
                    />
                  ))
                )}

                {pagination.totalPages > 1 && (
                  <div className="col-lg-12 m-b30 m-t30 m-lg-t10">
                    <nav aria-label="Blog Pagination">
                      <ul className="pagination style-2 text-center wow fadeInUp">
                        <li
                          className={`page-item ${
                            pagination.currentPage === 1 ? 'disabled' : ''
                          }`}
                        >
                          <button
                            className="page-link prev"
                            onClick={() =>
                              handlePageChange(pagination.currentPage - 1)
                            }
                            disabled={pagination.currentPage === 1}
                          >
                            <i className="fas fa-chevron-left" />
                          </button>
                        </li>
                        {[...Array(pagination.totalPages)].map((_, i) => (
                          <li className="page-item" key={i + 1}>
                            <button
                              className={`page-link ${
                                pagination.currentPage === i + 1 ? 'active' : ''
                              }`}
                              onClick={() => handlePageChange(i + 1)}
                            >
                              {i + 1}
                            </button>
                          </li>
                        ))}
                        <li
                          className={`page-item ${
                            pagination.currentPage === pagination.totalPages
                              ? 'disabled'
                              : ''
                          }`}
                        >
                          <button
                            className="page-link next"
                            onClick={() =>
                              handlePageChange(pagination.currentPage + 1)
                            }
                            disabled={
                              pagination.currentPage === pagination.totalPages
                            }
                          >
                            <i className="fas fa-chevron-right" />
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Search
