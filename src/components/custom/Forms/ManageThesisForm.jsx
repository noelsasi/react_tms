import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createThesis,
  fetchUsers,
  fileUploadHandler,
} from '../../pages/dashboard/slices/dashboardSlice'
import { Cross1Icon, ChevronDownIcon } from '@radix-ui/react-icons'

const CATEGORIES = [
  { value: 'science', label: 'Science' },
  { value: 'bio', label: 'Bio' },
  { value: 'environmental', label: 'Environmental' },
]

const KEYWORDS = [
  { value: 'ML', label: 'ML' },
  { value: 'AI', label: 'AI' },
  { value: 'IT', label: 'IT' },
]

const STATUSES = [
  { value: 'pending', label: 'Pending' },
  { value: 'approved', label: 'Approved' },
  { value: 'rejected', label: 'Rejected' },
]

const initialFormData = {
  title: '',
  category: '',
  keywords: [],
  status: '',
  author_id: '',
  abstract: '',
  reviewer_id: '',
}

function ManageThesisForm({ thesis: currentThesis, show, setShow }) {

  const dispatch = useDispatch()
  const { usersList, formSubmitting } = useSelector(state => state.dashboard)
  const { userInfo } = useSelector(state => state.auth)
  const [formData, setFormData] = useState(initialFormData)
  const [file, setFile] = useState(null)

  console.log('file  ', file)


  useEffect(() => {
    if (currentThesis) {
      setFormData({
        title: currentThesis.title || '',
        category: currentThesis.category || '',
        keywords: currentThesis.keywords || [],
        status: currentThesis.status || '',
        author_id: currentThesis.author_id || '',
        abstract: currentThesis.abstract || '',
        reviewer_id: currentThesis.reviewer_id || '',
      })
      setFile({
        name: currentThesis.document_url || '',
      })
    }
  }, [currentThesis])

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleKeywordsChange = e => {
    const selectedKeywords = Array.from(
      e.target.selectedOptions,
      option => option.value
    )
    setFormData(prev => ({ ...prev, keywords: selectedKeywords }))
  }

  const handleFileChange = e => {
    setFile(e.target.files[0])
  }

  const handleReset = e => {
    e?.preventDefault()
    setFormData(initialFormData)
    setFile(null)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (e.target.checkValidity()) {
      let fileUrl = file?.name

      if (!file?.name?.includes('https')) {
        fileUrl = await fileUploadHandler(file)
      }

      const dataToSubmit = { ...formData, document_url: fileUrl, status: formData.status?.toLowerCase() }

      if (currentThesis?.thesis_id) {
        dataToSubmit.thesis_id = currentThesis.thesis_id
      }
      dispatch(createThesis(dataToSubmit, () => handleReset()))
    } else {
      console.log('Form is not valid', e.target)
      e.target.classList.add('was-validated')
    }
  }

  const renderOptions = options =>
    options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))

  return (
    <div>
      <form className="needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="col-lg-12">
          <div className="card">
            <div
              className="card-header d-flex align-items-center justify-content-between"
              onClick={() => setShow(!show)}
            >
              <h4 className="card-title">Manage Thesis</h4>

              <ChevronDownIcon
                style={{ transform: show ? 'rotate(180deg)' : 'rotate(0deg)' }}
                onClick={() => setShow(!show)}
                className="cursor-pointer"
              />
            </div>
            {show && (
              <div className="card-body">
                <div className="basic-form">
                  {/* Title */}
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="Enter Title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a Title.
                    </div>
                  </div>

                  {/* Category & Keywords */}
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label">Category</label>
                      <select
                        name="category"
                        className="form-control"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled>
                          Choose Category
                        </option>
                        {renderOptions(CATEGORIES)}
                      </select>
                      <div className="invalid-feedback">
                        Please select at least one Category.
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label">Keywords</label>
                      <select
                        name="keywords"
                        className="form-control"
                        multiple
                        value={formData.keywords}
                        onChange={handleKeywordsChange}
                        required
                      >
                        {renderOptions(KEYWORDS)}
                      </select>
                      <div className="invalid-feedback">
                        Please select at least one Keyword.
                      </div>
                    </div>
                  </div>

                  {/* Status & Author */}
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label">Status</label>
                      <select
                        name="status"
                        className="form-control"
                        value={formData.status}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled>
                          Choose Status
                        </option>
                        {renderOptions(STATUSES)}
                      </select>
                      <div className="invalid-feedback">
                        Please select a Status.
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label">Author Name</label>
                      <select
                        name="author_id"
                        className="form-control"
                        value={formData.author_id}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled>
                          Select Author
                        </option>
                        {usersList.map(user => (
                          <option key={user.id} value={user.id}>
                            {user.firstname} {user.lastname}
                          </option>
                        ))}
                      </select>
                      <div className="invalid-feedback">
                        Please select an Author.
                      </div>
                    </div>
                  </div>

                  {/* Abstract */}
                  <div className="mb-3">
                    <label className="form-label">Abstract</label>
                    <textarea
                      className="form-control"
                      name="abstract"
                      rows={8}
                      placeholder="Enter Abstract"
                      value={formData.abstract}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter an Abstract.
                    </div>
                  </div>

                  {!file?.name && (
                    <div className="mb-3">
                      <label className="form-label">Thesis File</label>
                      <input
                        type="file"
                        className="form-control"
                        name="thesisFile"
                        key={file ? file.name : 'file-input'} // Key ensures the component re-renders when file changes
                        onChange={handleFileChange}
                        required
                      />
                      <div className="invalid-feedback">
                        Please select a Thesis File.
                      </div>
                    </div>
                  )}

                  {file && (
                    <div
                      className="mb-3 py-2 d-flex gap-4 align-items-center px-3"
                      style={{
                        width: 'fit-content',
                        backgroundColor: '#f1f1f1',
                        borderRadius: '10px',
                      }}
                    >
                      <p className="m-0 ">{file.name}</p>

                      <span
                        onClick={() => {
                          setFile(null)
                        }}
                        style={{ cursor: 'pointer' }}
                        className="text-danger "
                      >
                        <Cross1Icon />
                      </span>
                    </div>
                  )}

                  {['admin', 'scholar'].includes(userInfo?.role?.role_name) && (
                    <div className="mb-3">
                      <label className="form-label">Reviewer</label>
                      <select name="reviewer_id" className="form-control" value={formData.reviewer_id} onChange={handleInputChange} >
                        <option value="" disabled>Select Reviewer</option>
                        {usersList.map(user => (
                          <option key={user.id} value={user.id}>
                            {user.firstname} {user.lastname}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="d-flex justify-content-end gap-3">
                    <button
                      type="reset"
                      className="btn btn-outline-primary"
                      onClick={handleReset}
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={formSubmitting}
                    >
                      {formSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          {currentThesis?.thesis_id ? 'Editing...' : 'Creating...'}
                        </>
                      ) : (
                        `${currentThesis?.thesis_id ? 'Edit' : 'Create'} Thesis`
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default ManageThesisForm
