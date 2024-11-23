import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Logo from '../../../custom/Logo'
import axios from 'axios'
import showToast from '../../../../lib/showToast'
import { sendEmailVerification } from '../slices'
import { useDispatch } from 'react-redux'

const initialFormData = {
  firstname: '',
  lastname: '',
  gender: '',
  dob: '',
  phone: '',
  address: '',
  email: '',
  role: '',
  password: '',
  confirmPassword: '',
  profilePic: null,
}

function SignUp() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState(initialFormData)
  const [profilePicFile, setProfilePicFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [verificationEmail, setVerificationEmail] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = e => {
    setProfilePicFile(e.target.files[0])
  }

  const handleFileUpload = async () => {
    if (!profilePicFile) return null

    const formData = new FormData()
    formData.append('file', profilePicFile)
    formData.append('upload_preset', 'scholarVault')

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dyenwfhtf/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      )

      const data = await response.json()
      return data.secure_url || null
    } catch (error) {
      console.error('Error uploading file:', error)
      return null
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!e.target.checkValidity()) {
      e.target.classList.add('was-validated')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }

    setIsSubmitting(true)

    try {
      let profilePicUrl = formData.profilePic
      if (profilePicFile) {
        profilePicUrl = await handleFileUpload()
        if (!profilePicUrl) {
          alert('Failed to upload profile picture')
          setIsSubmitting(false)
          return
        }
      }

      const response = await axios.post('/api/auth/signup', {
        ...formData,
        profilePic: profilePicUrl,
      })

      if (response.data.message === 'User signed up successfully') {
        showToast({
          type: 'success',
          message: 'Registration successful',
        })

        dispatch(
          sendEmailVerification(formData.email, () => {
            setVerificationEmail(true)
          })
        )
      } else {
        alert(response.data.message || 'Signup failed')
      }
    } catch (error) {
      console.error('Error:', error)
      alert(error.response?.data?.message || 'An error occurred during signup')
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const validateForm = () => {
      const forms = document.querySelectorAll('.needs-validation')
      Array.from(forms).forEach(form => {
        form.addEventListener(
          'submit',
          event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          },
          false
        )
      })
    }

    validateForm()
  }, [])

  return (
    <div
      className="vh-100"
      style={{
        backgroundImage: "url('/dash/images/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="authentication h-100">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-9">
              <div className="authentication-content">
                <div className="row no-gutters">
                  <div className="col-lg-12">
                    <div className="auth-form">
                      <div className="text-center mb-3">
                        <Link to="/" className="brand-logo">
                          <Logo />
                        </Link>
                      </div>

                      {!verificationEmail ? (
                        <>
                          <h4 className="text-center mb-4">Sign Up</h4>
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
                                  name="firstname"
                                  className="form-control"
                                  value={formData.firstname}
                                  onChange={handleChange}
                                  placeholder="Enter First Name"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter First Name
                                </div>
                              </div>
                              <div className="mb-3 col-md-6">
                                <label className="form-label">Last Name</label>
                                <input
                                  type="text"
                                  name="lastname"
                                  className="form-control"
                                  value={formData.lastname}
                                  onChange={handleChange}
                                  placeholder="Enter Last Name"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter Last Name
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
                                  onChange={handleChange}
                                  required
                                >
                                  <option value="" disabled>
                                    Choose Gender
                                  </option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                </select>
                                <div className="invalid-feedback">
                                  Please select Gender
                                </div>
                              </div>
                              <div className="mb-3 col-md-6">
                                <label className="form-label">
                                  Date of Birth
                                </label>
                                <input
                                  type="date"
                                  name="dob"
                                  className="form-control"
                                  value={formData.dob}
                                  onChange={handleChange}
                                  required
                                  max={new Date().toISOString().split('T')[0]}
                                />
                                <div className="invalid-feedback">
                                  Please enter Date of Birth
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="mb-3 col-md-6">
                                <label className="form-label">Phone</label>
                                <input
                                  type="tel"
                                  name="phone"
                                  className="form-control"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  placeholder="Enter Phone Number"
                                  pattern="[0-9]{10}"
                                  maxLength={10}
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter a valid 10-digit phone number
                                </div>
                              </div>
                              <div className="mb-3 col-md-6">
                                <label className="form-label">
                                  Profile Picture
                                </label>
                                <input
                                  type="file"
                                  name="profilePic"
                                  className="form-control"
                                  onChange={handleFileChange}
                                  accept="image/*"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please select a profile picture
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="mb-3 col-md-12">
                                <label className="form-label">Address</label>
                                <textarea
                                  name="address"
                                  className="form-control"
                                  value={formData.address}
                                  onChange={handleChange}
                                  rows={3}
                                  placeholder="Enter Address"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter Address
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="mb-3 col-md-6">
                                <label className="form-label">Email</label>
                                <input
                                  type="email"
                                  name="email"
                                  className="form-control"
                                  value={formData.email}
                                  onChange={handleChange}
                                  placeholder="Enter Email Address"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter a valid email address
                                </div>
                              </div>
                              <div className="mb-3 col-md-6">
                                <label className="form-label">Role</label>
                                <select
                                  name="role"
                                  className="form-control"
                                  value={formData.role}
                                  onChange={handleChange}
                                  required
                                >
                                  <option value="" disabled>
                                    Choose Role
                                  </option>
                                  <option value="user">User</option>
                                </select>
                                <div className="invalid-feedback">
                                  Please select a Role
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="mb-3 col-md-6">
                                <label className="form-label">Password</label>
                                <input
                                  type="password"
                                  name="password"
                                  className="form-control"
                                  value={formData.password}
                                  onChange={handleChange}
                                  placeholder="Enter Password"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter Password
                                </div>
                              </div>
                              <div className="mb-3 col-md-6">
                                <label className="form-label">
                                  Confirm Password
                                </label>
                                <input
                                  type="password"
                                  name="confirmPassword"
                                  className="form-control"
                                  value={formData.confirmPassword}
                                  onChange={handleChange}
                                  placeholder="Confirm Password"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please confirm your password
                                </div>
                              </div>
                            </div>

                            <div className="text-center mt-4">
                              <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? (
                                  <>
                                    <span
                                      className="spinner-border spinner-border-sm me-2"
                                      role="status"
                                      aria-hidden="true"
                                    ></span>
                                    Signing Up...
                                  </>
                                ) : (
                                  'Sign Up'
                                )}
                              </button>
                            </div>
                          </form>

                          <div className="new-account mt-3">
                            <p>
                              Already have an account?{' '}
                              <Link
                                className="text-decoration-none"
                                to="/auth/signin"
                              >
                                Sign In
                              </Link>
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <h4 className="text-center mb-4">Verify Email</h4>
                          <p>
                            A verification email has been sent to your email
                            address. Please check your email and click the link
                            to verify your account.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
