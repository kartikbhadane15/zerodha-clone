import React from "react";

function Universe() {
  return (
    <>
      {/* Inline styles */}
      <style>
        {`
          .universe-logo {
            width: 160px;
            height: 80px;
            object-fit: contain;
            display: block;
            margin: 0 auto 12px;
          }

          .universe-desc {
            font-size: 0.85rem;
            line-height: 1.4;
            max-width: 260px;
            margin: 0 auto;
          }
        `}
      </style>

      <div className="container mt-5">
        <div className="row text-center">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          <div className="col-4 p-3 mt-5">
            <img
              className="universe-logo"
              src="media/images/zerodhaFundhouse.png"
            />
            <p className="text-muted universe-desc">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="col-4 p-3 mt-5">
            <img
              className="universe-logo"
              src="media/images/sensibullLogo.svg"
            />
            <p className="text-muted universe-desc">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>

          <div className="col-4 p-3 mt-5">
            <img
              className="universe-logo"
              src="media/images/goldenpiLogo.png"
            />
            <p className="text-muted universe-desc">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>

          <div className="col-4 p-3 mt-5">
            <img className="universe-logo" src="media/images/streakLogo.png" />
            <p className="text-muted universe-desc">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>

          <div className="col-4 p-3 mt-5">
            <img
              className="universe-logo"
              src="media/images/smallcaseLogo.png"
            />
            <p className="text-muted universe-desc">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks and ETFs.
            </p>
          </div>

          <div className="col-4 p-3 mt-5">
            <img className="universe-logo" src="media/images/dittoLogo.png" />
            <p className="text-muted universe-desc">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>

          <button
            className="p-2 btn btn-primary fs-5 mb-5 mt-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Universe;
