import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#8a4661",
        padding: "15px 20px",
        color: "white",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        textAlign: "center",
        boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p style={{ margin: 0, fontSize: "20px" , fontWeight: "bold"}}>
        " Thank you for visiting E-Commerce Hub! Happy Shopping! ☺️ "
      </p>
    </footer>
  );
}

export default Footer;
