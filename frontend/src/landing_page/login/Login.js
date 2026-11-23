import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

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
        "http://localhost:3002/login",
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
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error(error);
      handleError("An error occurred during login");
    }

    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div
      style={{
        minHeight: "80vh",
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
          padding: "42px 36px",
          borderRadius: "4px",
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.05)",
          border: "1px solid #eaeaea",
          textAlign: "center",
        }}
      >
        {/* ZERODHA LOGO */}
        <Link to="/">
          <img
            src="/media/images/logo.svg"
            alt="Zerodha Kite"
            style={{ width: "140px", marginBottom: "30px" }}
          />
        </Link>

        <h3
          style={{
            fontSize: "1.4rem",
            fontWeight: "500",
            color: "#424242",
            marginBottom: "6px",
          }}
        >
          Login to Kite
        </h3>
        <p
          style={{
            fontSize: "0.85rem",
            color: "#9b9b9b",
            marginBottom: "30px",
          }}
        >
          Enter your login credentials to continue
        </p>

        <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
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
          <div style={{ marginBottom: "8px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "6px",
              }}
            >
              <label
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  color: "#666",
                }}
              >
                Password
              </label>
              <Link
                to="/forgot-password"
                style={{
                  fontSize: "0.78rem",
                  color: "#387ed1",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
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
              marginTop: "24px",
              marginBottom: "20px",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#2b6cb8")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#387ed1")}
          >
            Login
          </button>
        </form>

        <div
          style={{
            borderTop: "1px solid #f0f0f0",
            paddingTop: "20px",
            fontSize: "0.85rem",
            color: "#888",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#387ed1",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Sign up now
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
