import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  submitThesis,
  fileUploadHandler,
} from '../../pages/dashboard/slices/dashboardSlice'
import { CATEGORIES, KEYWORDS } from './ManageThesisForm'
import CreatableSelect from 'react-select/creatable'
const initialFormData = {
  title: '',
  author_id: '',
  category: '',
  keywords: [],
  abstract: '',
}

function SubmitThesisForm() {
  const dispatch = useDispatch()
  const { formSubmitting } = useSelector(state => state.dashboard)
  const { userInfo: user } = useSelector(state => state.auth)
  const [formData, setFormData] = useState(initialFormData)
  const [file, setFile] = useState(null)

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleKeywordsChange = e => {
    setFormData(prev => ({ ...prev, keywords: e }))
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
      try {
        // Check if file exists and is PDF
        if (!file || !file.name.toLowerCase().endsWith('.pdf')) {
          showToast({
            type: 'error',
            message: 'Please upload a valid PDF file',
          })
          return
        }

        // Check file size (10MB limit)
        if (file.size > 10 * 1024 * 1024) {
          showToast({
            type: 'error',
            message: 'File size must be less than 10MB',
          })
          return
        }

        // Upload file first
        const fileUrl = await fileUploadHandler(file)
        if (!fileUrl) {
          throw new Error('File upload failed')
        }

        // Prepare data for submission
        const dataToSubmit = {
          ...formData,
          document_url: fileUrl,
          status: 'pending', // default status for new submissions
          author_id: user?.id,
          keywords: formData.keywords.map(keyword => keyword.value).join(', '),
        }

        // Submit thesis
        dispatch(
          submitThesis(dataToSubmit, () => {
            handleReset()
          })
        )
      } catch (error) {
        console.error('Submission error:', error)
        showToast({
          type: 'error',
          message: error.message || 'Error submitting thesis',
        })
      }
    } else {
      e.target.classList.add('was-validated')
    }
  }

  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Submit Thesis</h4>
        </div>
        <div className="card-body">
          <div className="basic-form">
            <form
              className="needs-validation"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="row">
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
                  <div className="invalid-feedback">Please enter a Title.</div>
                </div>
              </div>

              <div className="row">
                <div className="mb-3">
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
                    {CATEGORIES.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="invalid-feedback">
                    Please select at least one Category.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="mb-3">
                  <label className="form-label">Keywords</label>
                  <CreatableSelect
                    options={KEYWORDS}
                    isMulti
                    value={formData.keywords}
                    onChange={handleKeywordsChange}
                    required
                    placeholder="Select or create keywords..."
                    formatCreateLabel={inputValue => `Create "${inputValue}"`}
                  />
                  <div className="invalid-feedback">
                    Please select at least one Keyword.
                  </div>
                </div>
              </div>

              <div className="row">
                <label className="form-label">Abstract</label>
                <div className="mb-3">
                  <textarea
                    name="abstract"
                    className="form-control"
                    rows={8}
                    value={formData.abstract}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter an Abstract.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="formFileSm" className="form-label">
                    Input file (.pdf, max size: 10MB)
                  </label>
                  {!file?.name ? (
                    <input
                      required
                      className="form-control form-control-sm"
                      id="formFileSm"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                  ) : (
                    <div className="d-flex align-items-center gap-3 bg-light p-2 rounded">
                      <span>{file.name}</span>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        onClick={() => setFile(null)}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  <div className="invalid-feedback">
                    Please upload a valid PDF file (max 10MB).
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                {' '}
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={formSubmitting}
                >
                  {formSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmitThesisForm
