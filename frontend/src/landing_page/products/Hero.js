import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h1>Zerodha Products</h1>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p
          className="mt-3 mb-5"
          style={{
            lineHeight: "2.2",
            fontSize: "18px",
          }}
        >
          Check out our{" "}
          <a
            href="#"style={{textDecoration: "none",color: "#387ed1",fontWeight: "500" }}
          >
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
