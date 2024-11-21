import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SubmitThesisForm from '../../../../custom/Forms/SubmitThesisForm'
import { fetchMyThesis, fetchGuidelines } from '../../slices/dashboardSlice'

function Submit_Thesis() {
  const dispatch = useDispatch()
  const {
    thesisData,
    loading,
    guidelinesList: guidelines,
  } = useSelector(state => state.dashboard)
  const [activeAccordion, setActiveAccordion] = useState('1')

  useEffect(() => {
    dispatch(fetchMyThesis())
    dispatch(fetchGuidelines())
  }, [dispatch])

  const handleAccordionClick = guidelineId => {
    setActiveAccordion(activeAccordion === guidelineId ? null : guidelineId)
  }

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <SubmitThesisForm />
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header d-block">
                <h4 className="card-title">Guidelines and Template</h4>
                <p className="m-0 subtitle">
                  Follow every rule and guideline to submit thesis
                </p>
              </div>
              <div className="card-body">
                <div
                  className="accordion accordion-no-gutter accordion-bordered "
                  id="accordion-four"
                >
                  {guidelines.map(guideline => (
                    <div className="accordion-item" key={guideline.id}>
                      <div
                        className={`accordion-header rounded-lg ${
                          activeAccordion !== guideline.id ? 'collapsed' : ''
                        }`}
                        id={`accord-${guideline.id}`}
                        onClick={() => handleAccordionClick(guideline.id)}
                        role="button"
                      >
                        <span className="accordion-header-text">
                          {guideline.title}
                        </span>
                        <span className="accordion-header-indicator" />
                      </div>
                      <div
                        id={`collapse${guideline.id}`}
                        className={`collapse accordion__body ${
                          activeAccordion === guideline.id ? 'show' : ''
                        }`}
                      >
                        <div className="accordion-body-text">
                          {guideline.description}
                          {guideline.fileUrl && (
                            <div className="mt-3">
                              <a
                                href={guideline.fileUrl}
                                className="btn btn-primary btn-sm"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fa fa-download mr-2"></i>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

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
                          <strong>Reviewer</strong>
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
                          <strong>Status</strong>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="7" className="text-center">
                            Loading...
                          </td>
                        </tr>
                      ) : thesisData.length === 0 ? (
                        <tr>
                          <td colSpan="7" className="text-center">
                            No thesis found
                          </td>
                        </tr>
                      ) : (
                        thesisData.map(
                          ({
                            thesis_id,
                            title,
                            author_name,
                            reviewer_name,
                            category,
                            keywords,
                            abstract,
                            status,
                          }) => (
                            <tr key={thesis_id}>
                              <td>
                                <strong>
                                  {String(thesis_id).padStart(2, '0')}
                                </strong>
                              </td>
                              <td>{title}</td>
                              <td>{author_name}</td>
                              <td>{reviewer_name || 'Not Assigned'}</td>
                              <td>{category}</td>
                              <td>{keywords}</td>
                              <td>{abstract}</td>
                              <td>
                                <span
                                  className={`text-capitalize badge badge-${
                                    status.toLowerCase() === 'pending'
                                      ? 'warning'
                                      : status.toLowerCase() === 'approved'
                                      ? 'success'
                                      : 'danger'
                                  }`}
                                >
                                  {status}
                                </span>
                              </td>
                            </tr>
                          )
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <Pagination /> */}
        </div>
      </div>
    </div>
  )
}

export default Submit_Thesis
