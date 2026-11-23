import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points down">22,146.65</p>
          <p className="percent down">-35.40 (-0.16%)</p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points down">73,088.33</p>
          <p className="percent down">-112.50 (-0.15%)</p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
