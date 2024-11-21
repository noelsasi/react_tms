import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUserProfile } from '../../pages/dashboard/slices/dashboardSlice'

function UpdateProfile({ user }) {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    dob: '',
    phone: '',
    profilePic: null,
    address: '',
    email: '',
  })

  useEffect(() => {
    if (user) {
      setFormData({
        firstname: user.firstName || '',
        lastname: user.lastName || '',
        gender: user.gender || '',
        dob: user.dob || '',
        phone: user.phone || '',
        profilePic: user.profilePic || null,
        address: user.address || '',
        email: user.email || '',
      })
    }
  }, [user])

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    if (form.checkValidity()) {
      try {
        dispatch(updateUserProfile({ ...user, ...formData }, 'admin'))
      } catch (error) {
        console.error('Error submitting form:', error)
      }
    } else {
      form.classList.add('was-validated')
    }
  }

  return (
    <form className="needs-validation" noValidate onSubmit={handleSubmit}>
      <div className="row">
        <div className="mb-3">
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
          <div className="invalid-feedback">Please enter First Name.</div>
        </div>
        <div className="mb-3">
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
          <div className="invalid-feedback">Please enter Last Name.</div>
        </div>
      </div>
      <div className="row">
        <div className="mb-3">
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
            <option value={'Male'}>Male</option>
            <option value={'Female'}>Female</option>
          </select>
          <div className="invalid-feedback">Please select Gender.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">DOB</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={
              formData.dob
                ? new Date(formData.dob).toISOString().split('T')[0]
                : ''
            }
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Please enter DOB.</div>
        </div>
      </div>
      <div className="row">
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            placeholder="Enter Phone"
            pattern="[0-9]{10}"
            maxLength={10}
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Please enter Phone.</div>
        </div>
      </div>
      <div className="row">
        <div className="mb-3">
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
          <div className="invalid-feedback">Please enter Address.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInputChange}
            disabled
          />
          <div className="invalid-feedback">Please enter Email.</div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </div>
    </form>
  )
}

export default UpdateProfile
