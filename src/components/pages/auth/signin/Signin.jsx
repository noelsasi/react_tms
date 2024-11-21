import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from '../../../custom/Logo'
import { useDispatch, useSelector } from 'react-redux'
import { authenticateUser, fetchCsrfToken } from '../slices/authSlice'

function Signin() {
  const dispatch = useDispatch()
  const { csrfToken, loading: isLoading } = useSelector(state => state.auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }

    if (!csrfToken) {
      setError('CSRF Token not found. Please reload the page.')
      return
    }

    dispatch(
      authenticateUser({ email, password }, res => {
        if (res?.user?.role?.role_name) {
          navigate('/dashboard/' + res.user.role.role_name)
        } else {
          navigate('/dashboard/admin')
        }
      })
    )
  }

  useEffect(() => {
    dispatch(fetchCsrfToken())
  }, [])

  return (
    <div
      className="vh-100 main-bnr bg-light"
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
                      <h4 className="text-center mb-4">Sign In</h4>
                      <form
                        className="needs-validation"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>Email</strong>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>Password</strong>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        {error && (
                          <div className="alert alert-danger" role="alert">
                            {error}
                          </div>
                        )}
                        <div className="row d-flex justify-content-between mt-4 mb-2">
                          <div className="mb-3">
                            <Link to="/auth/forgot">Forgot Password?</Link>
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={isLoading}
                          >
                            {isLoading ? 'Signing In...' : 'Sign In'}
                          </button>
                        </div>
                      </form>
                      <div className="new-account mt-3">
                        <p>
                          Don’t have an account?{' '}
                          <Link to="/auth/signup">Sign Up</Link>
                        </p>
                      </div>
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

export default Signin
