import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

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
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3001";
        }, 1200);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error(error);
      handleError("An error occurred during signup");
    }

    setInputValue({
      ...inputValue,
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container py-5 mt-4">
      {/* TOP HEADER */}
      <div className="text-center mb-5">
        <h1
          style={{
            fontSize: "2.35rem",
            fontWeight: "500",
            color: "#424242",
            marginBottom: "12px",
          }}
        >
          Open a free demat and trading account online
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#666",
            fontWeight: "300",
          }}
        >
          Start investing brokerage free and join a community of{" "}
          <strong style={{ fontWeight: "600", color: "#424242" }}>
            1.6+ crore
          </strong>{" "}
          investors and traders
        </p>
      </div>

      {/* TWO COLUMN ROW */}
      <div className="row align-items-center justify-content-center py-4">
        {/* LEFT PRODUCT SUITE GRAPHIC */}
        <div className="col-lg-7 text-center mb-5 mb-lg-0 pe-lg-5">
          <img
            src="/media/images/account_open.svg"
            alt="Zerodha Platform Ecosystem"
            className="img-fluid"
            style={{ maxWidth: "540px", width: "100%" }}
          />
        </div>

        {/* RIGHT SIGNUP FORM CARD */}
        <div className="col-lg-5 col-xl-4">
          <div
            style={{
              background: "#ffffff",
              padding: "36px 32px",
              borderRadius: "4px",
              boxShadow: "0 2px 14px rgba(0, 0, 0, 0.06)",
              border: "1px solid #eaeaea",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "#424242",
                marginBottom: "4px",
              }}
            >
              Signup now
            </h2>
            <p
              style={{
                fontSize: "0.85rem",
                color: "#9b9b9b",
                marginBottom: "26px",
              }}
            >
              Or track your existing application
            </p>

            <form onSubmit={handleSubmit}>
              {/* USERNAME */}
              <div style={{ marginBottom: "18px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "#666",
                    marginBottom: "6px",
                  }}
                >
                  Full Name / Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your name"
                  onChange={handleOnChange}
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

              {/* EMAIL */}
              <div style={{ marginBottom: "18px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "#666",
                    marginBottom: "6px",
                  }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="eg: yourname@gmail.com"
                  onChange={handleOnChange}
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

              {/* PASSWORD */}
              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "#666",
                    marginBottom: "6px",
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Create a strong password"
                  onChange={handleOnChange}
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

              {/* SUBMIT BUTTON */}
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
                  marginBottom: "16px",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#2b6cb8")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#387ed1")}
              >
                Continue
              </button>

              <div
                style={{
                  textAlign: "center",
                  fontSize: "0.85rem",
                  color: "#888",
                  marginBottom: "20px",
                }}
              >
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{
                    color: "#387ed1",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  Login
                </Link>
              </div>

              <div
                style={{
                  borderTop: "1px solid #f0f0f0",
                  paddingTop: "16px",
                  fontSize: "0.78rem",
                  color: "#999",
                  lineHeight: "1.5",
                  textAlign: "center",
                }}
              >
                By proceeding, you agree to the Zerodha{" "}
                <a
                  href="#"
                  style={{ color: "#387ed1", textDecoration: "none" }}
                >
                  terms
                </a>{" "}
                &{" "}
                <a
                  href="#"
                  style={{ color: "#387ed1", textDecoration: "none" }}
                >
                  privacy policy
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
