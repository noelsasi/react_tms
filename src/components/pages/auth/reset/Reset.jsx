import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../../custom/Logo";
import axios from "axios";

function Reset() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setErrorMessage("Invalid or missing reset token");
      setTimeout(() => {
        navigate("/auth/signin");
      }, 2000);
    }
  }, [token, navigate]);

  const validateForm = () => {
    if (!newPassword || !confirmPassword) {
      setErrorMessage("Please fill in all fields");
      return false;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return false;
    }

    if (newPassword.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/resetpass",
        {
          token,
          newPassword,
        }
      );

      setSuccessMessage("Password reset successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/auth/signin");
      }, 2000);
    } catch (error) {
      console.error("Error during password reset:", error);
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="vh-100"
      style={{
        backgroundImage: "url('/dash/images/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
                      <h4 className="text-center mb-4">Reset Password</h4>

                      {errorMessage && (
                        <div className="alert alert-danger">{errorMessage}</div>
                      )}
                      {successMessage && (
                        <div className="alert alert-success">{successMessage}</div>
                      )}

                      <form onSubmit={handleSubmit} className="needs-validation">
                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>New Password</strong>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            required
                            placeholder="Enter New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="mb-1">
                            <strong>Confirm New Password</strong>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            required
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Resetting..." : "Reset Password"}
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
  );
}

export default Reset;
