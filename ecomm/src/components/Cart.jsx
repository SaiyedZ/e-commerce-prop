import React from "react";

function Cart({ items, onRemoveFromCart }) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", marginTop: "20px" }}>
      <h2 style={{ marginTop: 0, textAlign: "center", color: "#343a40" }}>Shopping Cart</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <div style={{ flex: 1, marginLeft: "15px" }}>
              <p style={{ margin: "5px 0", fontWeight: "bold", color: "#343a40" }}>{item.name}</p>
              <p style={{ margin: "5px 0", color: "#6c757d" }}>
                ${item.price} x {item.quantity}
              </p>
            </div>
            <button
              onClick={() => onRemoveFromCart(item.id)}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                padding: "8px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <h3 style={{ textAlign: "right", marginTop: "20px", color: "#343a40" }}>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
