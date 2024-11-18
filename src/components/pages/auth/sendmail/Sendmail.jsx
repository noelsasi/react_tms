import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../../custom/Logo'

function Sendmail() {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const emailParam = searchParams.get('email')

  React.useEffect(() => {
    if (emailParam) {
      setEmail(emailParam)
    }
  }, [emailParam])

  useEffect(() => {
    // Client-side form validation
    ; (function () {
      'use strict'
      const forms = document.querySelectorAll('.needs-validation')
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          'submit',
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          },
          false
        )
      })
    })()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    // Check if the email is entered and valid
    if (!email) {
      setErrorMessage('Please enter your email address.')
      setSuccessMessage('')
      return
    }

    // Clear previous success/error messages
    setErrorMessage('')
    setSuccessMessage('')

    try {
      // Make the POST request to the backend
      const response = await fetch(
        `http://localhost:3000/api/auth/sendemail?email=${email}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }), // Send email as the body
        }
      )

      if (!response.ok) {
        // Handle error response
        const data = await response.json()
        setErrorMessage(data.message || 'An error occurred. Please try again.')
      } else {
        // Handle successful response
        setSuccessMessage(
          'Verification email has been sent. Please check your inbox.'
        )
        setEmail('') // Clear the email field after successful submission
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again.' + err)
    }
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
                        Send Verification Email
                      </h4>
                      <form
                        onSubmit={handleSubmit} // Updated form submission handler
                        className="needs-validation"
                        noValidate
                      >
                        {/* Email Field */}
                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>Email Address</strong>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email address"
                          />
                          <div className="invalid-feedback">
                            Please enter a valid email address
                          </div>
                        </div>

                        {/* Error Message */}
                        {errorMessage && (
                          <div className="alert alert-danger" role="alert">
                            {errorMessage}
                          </div>
                        )}

                        {/* Success Message */}
                        {successMessage && (
                          <div className="alert alert-success" role="alert">
                            {successMessage}
                          </div>
                        )}

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Send Mail
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

export default Sendmail
