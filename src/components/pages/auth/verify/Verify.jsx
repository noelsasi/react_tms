import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Logo from '../../../custom/Logo'
import { verifyEmail } from '../slices'
import { useDispatch } from 'react-redux'

function Verify() {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const [verificationCode, setVerificationCode] = useState('')
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const emailFromUrl = searchParams.get('email')
    if (emailFromUrl) {
      setEmail(emailFromUrl)
    }
  }, [searchParams])



  const handleSubmit = async event => {
    event.preventDefault()

    if (!verificationCode || !email) {
      setErrorMessage('Please enter both verification code and email.')
      return
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setErrorMessage('')
    setSuccessMessage('')

    dispatch(verifyEmail(verificationCode, email))

  }

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
            <div className="col-md-6">
              <div className="authentication-content">
                <div className="row no-gutters">
                  <div className="col-lg-12">
                    <div className="auth-form">
                      <div className="text-center mb-3">
                        <Link to="/" className="brand-logo">
                          <Logo />
                        </Link>
                      </div>
                      <h4 className="text-center mb-4">
                        Verify Email
                      </h4>
                      <p className="text-center mb-4">
                        Please enter the verification code sent to your email
                        address.
                      </p>
                      <form
                        onSubmit={handleSubmit}
                        className="needs-validation"
                        noValidate
                      >


                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>Email</strong>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                            disabled
                          />
                          <div className="invalid-feedback">
                            Please enter a valid email address
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>Verification Code</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={verificationCode}
                            onChange={e => setVerificationCode(e.target.value)}
                            required
                            placeholder="Enter verification Code"
                          />
                          <div className="invalid-feedback">
                            Please enter verification Code
                          </div>
                        </div>

                        {/* Display Error Message */}
                        {errorMessage && (
                          <div className="alert alert-danger" role="alert">
                            {errorMessage}
                          </div>
                        )}

                        {/* Display Success Message */}
                        {successMessage && (
                          <div className="alert alert-success" role="alert">
                            {successMessage}
                          </div>
                        )}

                        {/* Show loading state */}
                        {isLoading && (
                          <div className="text-center mb-3">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        )}

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={isLoading}
                          >
                            {isLoading ? 'Verifying...' : 'Verify Email'}
                          </button>
                        </div>
                      </form>
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

export default Verify
