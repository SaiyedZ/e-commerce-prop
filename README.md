
# 🛍️ E-Commerce Hub  

This is a simple **E-Commerce website** built using **React.js** with features like adding products to a cart and updating the cart count dynamically.  

## 📌 Features  
✅ **Product Listing** – Display a list of products with images, names, and prices.  
✅ **Add to Cart** – Users can add products to their cart.  
✅ **Cart Management** – View items in the cart and remove them when needed.  
✅ **Sticky Navbar** – Displays the cart icon with the count of items in the cart.  
✅ **Footer Message** – A thank-you message at the bottom of the page.  

## 📂 Project Structure  
```
src/
├── components/
│   ├── NavBar.jsx       # Top navigation bar
│   ├── Footer.jsx       # Footer with a thank-you message
│   ├── Products.jsx     # Displays product details
│   ├── Cart.jsx         # Shopping cart functionality
├── App.jsx              # Main application file
├── index.js             # Entry point of the app
├── styles.css           # Global styles (optional)
└── README.md            # Documentation file
```

## 🛠️ Technologies Used  
- React.js  
- JavaScript (ES6+)  
- HTML5 & CSS3  

## 🚀 How to Run the Project  

### 1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/your-username/ecommerce-hub.git
cd ecommerce-hub
```

### 2️⃣ **Install Dependencies**  
```sh
npm install
```

### 3️⃣ **Start the Development Server**  
```sh
npm start
```
This will start the app at `http://localhost:3000/` in your browser.  

## 🎨 UI Components  
### **Navbar (`NavBar.jsx`)**  
- Fixed at the top with a centered title.  
- Displays the shopping cart icon with a dynamic item count.  

### **Product List (`Products.jsx`)**  
- Renders products with names, images, and prices.  
- "Add to Cart" button to update the cart.  

### **Cart (`Cart.jsx`)**  
- Displays added items with their quantity.  
- Users can remove products from the cart.  

### **Footer (`Footer.jsx`)**  
- Displays a message: `"Thank you for visiting E-Commerce Hub! Happy Shopping! 😊"`  
- Positioned at the bottom of the page.  

## 📌 Future Enhancements  
🚀 Implement a **backend** to fetch products dynamically.  
🚀 Add a **checkout** feature.  
🚀 Improve **UI/UX** with animations.  

