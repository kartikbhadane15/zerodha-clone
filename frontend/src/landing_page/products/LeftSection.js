import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Image section */}
        <div className="col-8">
          <img
            src={imageURL}
            alt={productName}
            style={{
              width: "90%",
              maxWidth: "700px",
            }}
          />
        </div>

        {/* Text section */}
        <div className="col-4 ps-5">
          <h1 style={{ fontSize: "32px", fontWeight: "500" }}>
            {productName}
          </h1>

          <p
            className="text-muted mt-4"
            style={{ lineHeight: "1.8", fontSize: "20px" }}
          >
            {productDesription}
          </p>

          {/* Links */}
          <div className="mt-4">
            <a
              href={tryDemo}
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontWeight: "500",
              }}
            >
              Try demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a
              href={learnMore}
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontWeight: "500",
                marginLeft: "40px",
              }}
            >
              Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* Store badges */}
          <div className="mt-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "42px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                style={{ height: "42px", marginLeft: "20px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
