import React from "react";

function NavBar({ cartItemCount = 0 }) {
  return (
    <nav
      style={{
        backgroundColor: "#8a4661",
        padding: "15px 20px",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "bold", textAlign: "center", flex: 1 }}>
        E-Commerce Hub
      </h1>
      <div style={{ position: "absolute", right: "90px", cursor: "pointer" }}>
        <span style={{ fontSize: "28px" }}>🛍️</span>
        {cartItemCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-10px",
              backgroundColor: "#ff4757",
              color: "white",
              borderRadius: "50%",
              padding: "5px 9px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {cartItemCount}
          </span>
        )}
      </div>
    </nav>
  );
}


export default NavBar;
