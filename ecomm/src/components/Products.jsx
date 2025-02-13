import React from "react";

function Products({ product, onAddToCart }) {
  return (
    <div
      style={{
        border: "none",
        padding: "15px",
        margin: "10px",
        borderRadius: "12px",
        width: "220px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        textAlign: "center",
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <h3 style={{ margin: "10px 0", fontSize: "16px", fontWeight: "600" }}>
        {product.name}
      </h3>

      <p style={{ color: "#333", fontSize: "14px", fontWeight: "bold" }}>
        ${product.price}
      </p>

      <button
        onClick={() => onAddToCart(product)}
        style={{
          backgroundColor: "#ff4757",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          width: "100%",
          fontWeight: "bold",
          marginTop: "10px",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#e03e4e")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff4757")}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Products;
