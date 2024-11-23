import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../../../../custom/misc/Pagination'
import { fetchMyThesis } from '../../slices/dashboardSlice'

function My_thesis() {
  const dispatch = useDispatch()
  const { thesisData, loading } = useSelector(state => state.dashboard)
  console.log(thesisData)
  useEffect(() => {
    dispatch(fetchMyThesis())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
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
                          <strong>Reviewer</strong>
                        </th>
                        <th>
                          <strong>Status</strong>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {thesisData.map(
                        ({
                          thesis_id,
                          title,
                          author_name,
                          category,
                          keywords,
                          abstract,
                          views_count,
                          downloads_count,
                          reviewer_name,
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
                            <td>{category}</td>
                            <td>{keywords}</td>
                            <td>{abstract}</td>
                            <td>{status === 'approved' ? views_count : '-'}</td>
                            <td>
                              {status === 'approved' ? downloads_count : '-'}
                            </td>
                            <td>{reviewer_name || 'Not assigned'}</td>
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

export default My_thesis
