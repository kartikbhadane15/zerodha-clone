import React from "react";

const Signup = () => {
  return (
    <div className="container py-5 mt-5 ">

      {/* TOP CENTER TEXT */}
      <div className="text-center mb-5 mt-3">
        <h2 className=" mb-3 fs-2 fw-semibold ">
          Open a free demat and trading account online
        </h2>

        <p className="text-muted fs-4">
          Start investing brokerage free and join a community of
          <strong> 1.6+ crore </strong>
          investors and traders
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="row align-items-center justify-content-between mt-5 mb-5">

        {/* LEFT IMAGE */}
        <div className="col-lg-8 text-center">
          <img
            src="/media/images/account_open.svg"
            alt="Account Open"
            className="img-fluid"
            style={{ maxWidth: "520px", opacity: 0.95 }}
          />
        </div>

        {/* RIGHT FORM */}
        <div className="col-lg-4">

          <h2 className="fw-semibold mb-1">Signup now</h2>
          <p className="text-muted mb-4">
            Or track your existing application
          </p>

          {/* MOBILE INPUT */}
          <div
            className="d-flex align-items-center border rounded px-3 mb-3"
            style={{ height: "48px" }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
              alt="India"
              width="20"
              className="me-2"
            />
            <span className="me-2">+91</span>

            <input
              type="tel"
              className="form-control border-0 p-0"
              placeholder="Enter your mobile number"
              maxLength="10"
            />
          </div>

          {/* OTP BUTTON */}
          <button
            className="btn btn-primary w-100 mb-3"
            style={{ height: "48px" }}
          >
            Get OTP
          </button>

          {/* TERMS */}
          <p className="text-muted small">
            By proceeding, you agree to the Zerodha{" "}
            <a href="#" className="text-decoration-none">
              terms
            </a>{" "}
            &{" "}
            <a href="#" className="text-decoration-none">
              privacy policy
            </a>
          </p>

          <hr />

          <p className="text-muted">
            Looking to open NRI account?{" "}
            <a href="#" className="text-decoration-none">
              Click here
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;
