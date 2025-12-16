import React, { useState, useEffect } from "react";
import blueTShirtImg from "../assets/BLUE LHOH T-SHIRTS.webp";
import greenImg from "../assets/GREEN LHOH T-SHIRTS.webp";
import braceletImg from "../assets/LHOH King Bracelet.webp";
import queenbraceletImg from "../assets/LHOH Queen Bracelet.webp";
import whiteTshirtImg from "../assets/WHITE LHOH T-SHIRTS.webp";
import shippingImg from "../assets/SHIPPING FEE.webp";

// Static products data
const productsData = [
  {
    id: 1,
    name: "BLUE LHOH T-SHIRTS",
    category: "apparel",
    price: 30,
    description: "Premium cotton t-shirt with LHOH logo",
    image: blueTShirtImg,
    badge: "Popular",
  },
  {
    id: 2,
    name: "GREEN LHOH T-SHIRTS",
    category: "apparel",
    price: 30,
    description: "Comfortable hoodie with inspiring message",
    image: greenImg,
    badge: "New",
  },
    {
    id: 3,
    name: "LHOH King Bracelet",
    category: "apparel",
    price: 30,
    description: "A bold and stylish men's bracelet",
    image: braceletImg,
    badge: "Popular",
  },
    {
    id: 4,
    name: "LHOH Queen Bracelet",
    category: "apparel",
    price: 30,
    description: "waterproof and tarnish-free.",
    image: queenbraceletImg,
    badge: "Popular",
  },
    {
    id: 5,
    name: "WHITE LHOH T-SHIRTS",
    category: "apparel",
    price: 30,
    description: "Comfortable hoodie with inspiring message",
    image: whiteTshirtImg,
    badge: "New",
  },
   {
    id: 6,
    name: "SHIPPING FEE",
    category: "apparel",
    price: 11.95,
    description: "Add this item if you'd like us to ship your order. USPS Standard shipping",
    image: shippingImg,
    // badge: "New",
  },
  // ... add the rest of your products here
];

function CartAndStore() {
  const [products, setProducts] = useState([]);

  // Initialize products
  useEffect(() => {
    setProducts(productsData);
  }, []); // No ESLint warning because productsData is static

  return (
    <section className="store" id="store">
      <div className="section-container">
        <h2 className="section-title" style={{ textAlign: "center" }}>LHOH Store</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {product.badge && <div className="product-badge">{product.badge}</div>}
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">${product.price.toFixed(2)}</div>
                {/* Quantity and Add to Cart buttons go here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CartAndStore;
