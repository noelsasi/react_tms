import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createGuideline,
  fileUploadHandler,
} from '../../pages/dashboard/slices/dashboardSlice'
import { ChevronDownIcon, Cross1Icon, TrashIcon } from '@radix-ui/react-icons'

const initialFormData = {
  title: '',
  description: '',
  file: null,
}

function ManageGuidelineForm({ guideline, show, setShow }) {
  const dispatch = useDispatch()
  const { formSubmitting } = useSelector(state => state.dashboard)
  const [formData, setFormData] = useState(initialFormData)
  const [file, setFile] = useState(null)

  useEffect(() => {
    if (guideline) {
      setFormData({
        title: guideline.title || '',
        description: guideline.description || '',
      })
      if (guideline.fileUrl) {
        setFile({
          name: guideline.fileUrl,
        })
      }
    }
  }, [guideline])

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
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
      const fileUrl = guideline?.fileUrl
        ? guideline?.file_url
        : await fileUploadHandler(file)

      const dataToSubmit = {
        ...formData,
        file_url: fileUrl,
      }

      if (guideline?.id) {
        dataToSubmit.id = guideline.id
      }

      dispatch(createGuideline(dataToSubmit, () => handleReset()))
    } else {
      e.target.classList.add('was-validated')
    }
  }

  return (
    <div className="col-lg-12">
      <div className="card">
        <div
          className="card-header d-flex justify-content-between align-items-center"
          style={{ cursor: 'pointer' }}
          onClick={() => setShow(!show)}
        >
          <h4 className="card-title">Manage Guidelines</h4>
          <button className="btn btn-sm" onClick={() => setShow(!show)}>
            <ChevronDownIcon style={{ rotate: show ? '180deg' : '0deg' }} />
          </button>
        </div>
        {show && (
          <div className="card-body">
            <div className="basic-form">
              <form
                className="needs-validation"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="mb-3 col-md-6">
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
                  {!file?.name && (
                    <div className="mb-3 col-md-6">
                      <label className="form-label">
                        File (.pdf, max size:10MB)
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="file"
                        onChange={handleFileChange}
                        accept=".pdf"
                        required
                      />
                      <div className="invalid-feedback">
                        Please attach a file.
                      </div>
                    </div>
                  )}

                  {file?.name && (
                    <div className="mb-3 col-md-6">
                      <label className="form-label">File</label>
                      <p className="form-control d-flex justify-content-between align-items-center">
                        {file?.name}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => setFile(null)}
                        >
                          <Cross1Icon />
                        </button>
                      </p>
                    </div>
                  )}
                </div>

                <div className="row">
                  <div className="mb-3 col-md-12">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      placeholder="Enter Description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter Description.
                    </div>
                  </div>
                </div>

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
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        {guideline?.id ? 'Editing...' : 'Creating...'}
                      </>
                    ) : (
                      `${guideline?.id ? 'Edit' : 'Create'} Guideline`
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ManageGuidelineForm
