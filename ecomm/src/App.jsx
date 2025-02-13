import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  const products = [
    {
      id: 1,
      name: "Minimalist 10% Niacinamide Face Serum With Matmarine And Zinc",
      price: 569,
      image:
        "https://images-static.nykaa.com/uploads/22dfa845-ec18-4c9c-8036-95d792d5b721.jpg?tr=cm-pad_resize,w-450",
    },
    {
      id: 2,
      name: "CeraVe Facewash & Moisturizer Combo with Ceramides",
      price: 643,
      image:
        "https://images-static.nykaa.com/uploads/ecac92e3-03b9-4632-9526-179d532ab24e.jpg?tr=cm-pad_resize,w-450",
    },
    {
      id: 3,
      name: "Ponds Super Light Gel Oil-Free Moisturize + Hydra Miracle  Gel Lotion Combo",
      price: 545,
      image:
        "https://images-static.nykaa.com/uploads/79d02e80-52de-4f94-a3c2-a93fe9b3d3cc.jpg?tr=cm-pad_resize,w-450",
    },
    {
      id: 4,
      name: "Cetaphil Gentle Cleansing & Moisturizing (Hyaluronic acid) Combo  ",
      price: 966,
      image:
      "https://images-static.nykaa.com/uploads/bab1391e-64d4-4f06-88d4-0234d92a4ecb.jpg?tr=cm-pad_resize,w-450",
    }
  ];

  const [cartItem, setCartItem] = useState([]);

  const cartItemCount = cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const onAddToCart = (product) => {
    setCartItem((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // true
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const onRemoveFromCart = (productId) => {
    setCartItem((e) => {
      return e
        .map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 }; 
          }
          return item;
        })
        .filter((item) => item.quantity > 0); 
    });
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <NavBar cartItemCount={cartItemCount} />
      <h1></h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      <Cart items={cartItem} onRemoveFromCart={onRemoveFromCart} />
      <Footer />
    </div>
  );


}

export default App;
