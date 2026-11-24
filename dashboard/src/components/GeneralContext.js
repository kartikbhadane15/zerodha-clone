import React, { useState } from "react";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid) => {},
  closeBuyWindow: () => {},
  isBuyWindowOpen: false,
  selectedStockUID: "",
  orderMode: "BUY",
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderMode, setOrderMode] = useState("BUY");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setOrderMode("BUY");
  };

  const handleOpenSellWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setOrderMode("SELL");
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setOrderMode("BUY");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeBuyWindow: handleCloseBuyWindow,
        isBuyWindowOpen,
        selectedStockUID,
        orderMode,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
