import React from "react";

function Footer() {
  const linkStyle = {
    display: "block",
    color: "#4b5563",
    textDecoration: "none",
    fontSize: "16px",
    marginBottom: "8px",
    lineHeight: "1.6",
  };

  const headingStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#111827",
  };

  return (
    <footer
      style={{
        backgroundColor: "#fafafa",
        borderTop: "1px solid #e6e6e6",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <div className="container" style={{ paddingTop: "48px" }}>
        <div className="row" style={{ paddingBottom: "40px" }}>
          {/* Logo column */}
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "160px", marginBottom: "12px" }}
              alt="logo"
            />
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                lineHeight: "1.6",
              }}
            >
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col">
            <p style={headingStyle}>Company</p>
            <a href="" style={linkStyle}>About</a>
            <a href="" style={linkStyle}>Products</a>
            <a href="" style={linkStyle}>Pricing</a>
            <a href="" style={linkStyle}>Referral programme</a>
            <a href="" style={linkStyle}>Careers</a>
            <a href="" style={linkStyle}>Zerodha.tech</a>
            <a href="" style={linkStyle}>Press & media</a>
            <a href="" style={linkStyle}>Zerodha cares (CSR)</a>
          </div>

          {/* Support */}
          <div className="col">
            <p style={headingStyle}>Support</p>
            <a href="" style={linkStyle}>Contact</a>
            <a href="" style={linkStyle}>Support portal</a>
            <a href="" style={linkStyle}>Z-Connect blog</a>
            <a href="" style={linkStyle}>List of charges</a>
            <a href="" style={linkStyle}>Downloads & resources</a>
          </div>

          {/* Account */}
          <div className="col">
            <p style={headingStyle}>Account</p>
            <a href="" style={linkStyle}>Open an account</a>
            <a href="" style={linkStyle}>Fund transfer</a>
            <a href="" style={linkStyle}>60 day challenge</a>
          </div>
        </div>

        {/* Bottom legal section */}
        <div
          style={{
            borderTop: "1px solid #e6e6e6",
            paddingTop: "24px",
            fontSize: "13px",
            color: "#6b7280",
            lineHeight: "1.7",
          }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details: Name, PAN, Address, Mobile Number,
            E-mail ID.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
