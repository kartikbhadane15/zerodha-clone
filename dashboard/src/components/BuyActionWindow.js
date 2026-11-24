import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { watchlist } from "../data/data";
import "./BuyActionWindow.css";

const BuyActionWindow = () => {
  const ctx = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const isSell = ctx.orderMode === "SELL";
  const actionColor = isSell ? "#ff5722" : "#4184f3";
  const actionHoverColor = isSell ? "#ea4512" : "#2f73e2";
  const actionText = isSell ? "Sell" : "Buy";

  // Automatically update stock price when stock is selected
  useEffect(() => {
    if (ctx.selectedStockUID) {
      const foundStock = watchlist.find((s) => s.name === ctx.selectedStockUID);
      if (foundStock) {
        setStockPrice(foundStock.price);
      }
    }
  }, [ctx.selectedStockUID]);

  if (!ctx.isBuyWindowOpen) return null;

  const handleOrderSubmit = async () => {
    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: ctx.selectedStockUID,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: ctx.orderMode || "BUY",
      });

      alert(
        `${actionText} order placed successfully for ${stockQuantity} shares of ${ctx.selectedStockUID}! Check Orders tab.`
      );
      ctx.closeBuyWindow();
    } catch (err) {
      console.error("Order error:", err);
      alert(`Failed to place ${actionText} order.`);
    }
  };

  const marginRequired = (Number(stockQuantity) * Number(stockPrice)).toFixed(2);

  return (
    <div className="container" style={{ zIndex: 999 }}>
      {/* HEADER */}
      <div
        style={{
          padding: "14px 20px",
          borderBottom: "1px solid #f0f0f0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: actionColor,
          color: "#fff",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
          transition: "background-color 0.2s ease",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>
          {actionText} {ctx.selectedStockUID} x {stockQuantity} Qty
        </span>
        <span
          onClick={ctx.closeBuyWindow}
          style={{ cursor: "pointer", fontSize: "1.2rem", lineHeight: 1 }}
        >
          ×
        </span>
      </div>

      {/* INPUTS */}
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Math.max(1, Number(e.target.value)))}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
            />
          </fieldset>
        </div>
      </div>

      {/* FOOTER */}
      <div className="buttons">
        <span style={{ color: "#666" }}>
          {isSell ? "Margin received:" : "Margin required:"}{" "}
          <strong>₹{marginRequired}</strong>
        </span>
        <div>
          <button
            className="btn"
            style={{
              backgroundColor: actionColor,
              color: "#fff",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = actionHoverColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = actionColor)}
            onClick={handleOrderSubmit}
          >
            {actionText}
          </button>
          <button className="btn btn-grey" onClick={ctx.closeBuyWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
