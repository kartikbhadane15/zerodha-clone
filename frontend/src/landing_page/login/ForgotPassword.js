import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      handleError("Please enter your registered email");
      return;
    }
    // Simulation / endpoint call
    handleSuccess("Password reset instructions sent to your email!");
    setIsSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 15px",
        backgroundColor: "#fbfbfb",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          background: "#ffffff",
          padding: "40px 35px",
          borderRadius: "4px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
          border: "1px solid #eaeaea",
          textAlign: "center",
        }}
      >
        <Link to="/">
          <img
            src="/media/images/logo.svg"
            alt="Zerodha Kite"
            style={{ width: "135px", marginBottom: "28px" }}
          />
        </Link>

        <h3
          style={{
            fontSize: "1.35rem",
            fontWeight: "500",
            color: "#424242",
            marginBottom: "8px",
          }}
        >
          Forgot password?
        </h3>
        <p
          style={{
            fontSize: "0.85rem",
            color: "#9b9b9b",
            lineHeight: "1.4",
            marginBottom: "28px",
          }}
        >
          Enter your registered email address and we will send you a password reset link.
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
            <div style={{ marginBottom: "22px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  color: "#666",
                  marginBottom: "8px",
                }}
              >
                E-mail
              </label>
              <input
                type="email"
                value={email}
                placeholder="eg: yourname@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  height: "44px",
                  padding: "10px 14px",
                  fontSize: "0.9rem",
                  border: "1px solid #dcdcdc",
                  borderRadius: "3px",
                  outline: "none",
                  boxSizing: "border-box",
                  color: "#333",
                  transition: "border-color 0.15s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#387ed1")}
                onBlur={(e) => (e.target.style.borderColor = "#dcdcdc")}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                height: "44px",
                backgroundColor: "#387ed1",
                color: "#fff",
                border: "none",
                borderRadius: "3px",
                fontSize: "0.95rem",
                fontWeight: "500",
                cursor: "pointer",
                transition: "background-color 0.15s ease",
                marginBottom: "20px",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#2b6cb8")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#387ed1")}
            >
              Reset Password
            </button>
          </form>
        ) : (
          <div
            style={{
              padding: "15px",
              backgroundColor: "#edf7ed",
              borderRadius: "4px",
              marginBottom: "25px",
              color: "#1e4620",
              fontSize: "0.88rem",
            }}
          >
            Check your inbox for <strong>{email}</strong> and follow the link to reset your password.
          </div>
        )}

        <div style={{ marginTop: "10px", fontSize: "0.82rem" }}>
          <Link
            to="/login"
            style={{
              color: "#387ed1",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            ← Back to Login
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
