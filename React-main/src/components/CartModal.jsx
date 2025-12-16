import React, { useState } from "react";

const CartModal = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => setShowCheckout(true);
  const backToCart = () => setShowCheckout(false);

  const submitOrder = (e) => {
    e.preventDefault();
    alert("Order submitted!");
    setCartItems([]);
    setShowCheckout(false);
    onClose();
  };

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-cart" onClick={onClose}>
            ×
          </button>
        </div>

        {!showCheckout && (
          <>
            <div className="cart-items">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <h3>Your cart is empty</h3>
                  <p>Add items to your cart to support our mission!</p>
                </div>
              ) : (
                <div id="cartItemsList">
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="cart-item">
                      <span>{item.name}</span>
                      <span>${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-summary">
                <div className="cart-total">
                  <span>Total:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
              </div>
            )}
          </>
        )}

        {showCheckout && (
          <div className="checkout-form">
            <form onSubmit={submitOrder}>
              <div className="form-section">
                <h3>Contact Information</h3>
                <input type="text" placeholder="First Name *" required />
                <input type="text" placeholder="Last Name *" required />
                <input type="email" placeholder="Email *" required />
                <input type="tel" placeholder="Phone *" required />
              </div>

              <div className="form-section">
                <h3>Shipping Address</h3>
                <input type="text" placeholder="Street Address *" required />
                <input type="text" placeholder="City *" required />
                <input type="text" placeholder="State/Province *" required />
                <input type="text" placeholder="ZIP/Postal Code *" required />
                <select required>
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-section">
                <h3>Payment Method</h3>
                <input type="text" placeholder="Card Number *" required />
                <input type="text" placeholder="Expiry Date *" required />
                <input type="text" placeholder="CVV *" required />
              </div>

              <div className="form-section">
                <h3>Order Summary</h3>
                <div className="cart-total">
                  <span>Total Amount:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>

              <button type="submit" className="submit-order-btn">
                Complete Order
              </button>
              <div className="back-to-cart" onClick={backToCart}>
                ← Back to Cart
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;

