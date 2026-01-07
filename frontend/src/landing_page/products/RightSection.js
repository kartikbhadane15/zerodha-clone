import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5 mb-5">
      {/* row is the flex container */}
      <div className="row align-items-center">
        {/* Text section */}
        <div
          className="col-5 p-5"
          style={{ lineHeight: "1.8", fontSize: "20px" }}
        >
          <h1 style={{ fontSize: "32px", fontWeight: "500" }}>
            {productName}
          </h1>

          <p className="text-muted mt-4">
            {productDesription}
          </p>

          <div className="mt-4">
            <a
              href={learnMore}
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontWeight: "500",
              }}
            >
              Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Image section */}
        <div className="col-7 text-center">
          <img
            src={imageURL}
            alt={productName}
            style={{
              width: "90%",
              maxWidth: "700px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
