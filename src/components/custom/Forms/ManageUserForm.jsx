import { ChevronDownIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createUser,
  fileUploadHandler,
} from '../../pages/dashboard/slices/dashboardSlice'

const initialFormData = {
  firstname: '',
  lastname: '',
  gender: '',
  dob: '',
  phone: '',
  address: '',
  email: '',
  role: '',
  status: '',
}

function ManageUserForm({ show, setShow, user }) {
  const dispatch = useDispatch()
  const { formSubmitting } = useSelector(state => state.dashboard)
  const [formData, setFormData] = useState(initialFormData)
  const [file, setFile] = useState(null)

  useEffect(() => {
    if (user) {
      setFormData({
        firstname: user.firstname || '',
        lastname: user.lastname || '',
        gender: user.gender || '',
        dob: new Date(user.dob).toISOString().split('T')[0] || '',
        phone: user.phone || '',
        address: user.address || '',
        email: user.email || '',
        role: user.role || '',
        status: user.status || '',
      })
      if (user.profile_picture) {
        setFile({
          name: user.profile_picture,
        })
      }
    }
  }, [user])

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
    e?.preventDefault()
    if (e.target.checkValidity()) {
      const fileUrl = user?.id
        ? user?.profile_picture
        : await fileUploadHandler(file)

      const dataToSubmit = {
        ...formData,
        profile_picture: fileUrl,
        role_name: formData.role,
      }

      if (user?.id) {
        dataToSubmit.id = user.id
      }
      dispatch(createUser(dataToSubmit, () => handleReset()))
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
          <h4 className="card-title">Manage Users</h4>
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
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstname"
                      placeholder="Enter First Name"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter First Name.
                    </div>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastname"
                      placeholder="Enter Last Name"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter Last Name.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Gender</label>
                    <select
                      name="gender"
                      className="form-control"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Choose Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select Gender.
                    </div>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">DOB</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      required
                      max={new Date().toISOString().split('T')[0]} // Disable future dates and 10
                    />
                    <div className="invalid-feedback">Please enter DOB.</div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="Enter Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      pattern="[0-9]{10}"
                      title="Phone number must be 10 digits"
                      maxLength={10}
                      required
                    />
                    <div className="invalid-feedback">Please enter Phone.</div>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Profile Picture</label>
                    <input
                      type="file"
                      className="form-control"
                      name="profile_picture"
                      onChange={handleFileChange}
                      required={!user?.id}
                    />
                    <div className="invalid-feedback">
                      Select Profile Picture.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Enter Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter Address.
                    </div>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="invalid-feedback">Please enter Email.</div>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Role</label>
                    <select
                      name="role"
                      className="form-control"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Choose Role
                      </option>
                      <option value="scholar">Scholar</option>
                      <option value="user">User</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a Role.
                    </div>
                  </div>
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
                      <option value="pending">Pending</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a Status.
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end gap-3">
                  <button
                    type="button"
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
                        {user?.id ? 'Editing...' : 'Creating...'}
                      </>
                    ) : (
                      `${user?.id ? 'Edit' : 'Create'} User`
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

export default ManageUserForm
