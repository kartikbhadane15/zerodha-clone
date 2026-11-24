import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => {
        setAllOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="orders" style={{ padding: "30px" }}>
        <p className="text-muted">Loading orders...</p>
      </div>
    );
  }

  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => {
              const isBuy = order.mode === "BUY";
              return (
                <tr key={index}>
                  <td style={{ fontWeight: 500 }}>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>₹{order.price ? order.price.toFixed(2) : "0.00"}</td>
                  <td>
                    <span
                      style={{
                        padding: "3px 8px",
                        borderRadius: "3px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        backgroundColor: isBuy ? "#e8f0fe" : "#fce8e6",
                        color: isBuy ? "#1a73e8" : "#d93025",
                      }}
                    >
                      {order.mode || "BUY"}
                    </span>
                  </td>
                  <td>
                    <span
                      style={{
                        padding: "3px 8px",
                        borderRadius: "3px",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        backgroundColor: "#edf7ed",
                        color: "#1e4620",
                      }}
                    >
                      COMPLETE
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
