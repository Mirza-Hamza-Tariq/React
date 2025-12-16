import React, { useState } from "react";
import "./GivePage.css"; // import the styles
import giveImage from "../assets/student-give-page.png";

import volunteerImage from "../assets/give_page-img.png";

const amountDescriptions = {
  50: "Provides essential supplies for one student for a month.",
  100: "Funds a week of nutritious meals for a classroom.",
  300: "Helps fund a community workshop that empowers women with skills for sustainable income.",
  500: "Supports emergency assistance for a family in need.",
};

const GivePage = () => {
  const [selectedAmount, setSelectedAmount] = useState(300);
  const [selectedFrequency, setSelectedFrequency] = useState("one-time");
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("credit");

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
  };

  const handleFrequencyClick = (frequency) => {
    setSelectedFrequency(frequency);
  };

  const showCheckout = () => {
    setCheckoutVisible(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToAmounts = () => {
    setCheckoutVisible(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  const submitDonation = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      city: form.city.value,
      state: form.state.value,
      zipCode: form.zipCode.value,
      country: form.country.value,
      paymentMethod: selectedPayment,
      amount: selectedAmount,
      frequency: selectedFrequency,
    };

    console.log("Donation submitted:", formData);

    alert(`Thank you for your ${formData.frequency} donation of $${formData.amount}, ${formData.firstName}! 🎉
You will receive a confirmation email at ${formData.email}.
100% of your donation goes directly to supporting our mission!`);

    form.reset();
    backToAmounts();
  };

  return (
    <div className="main-container">
      <h1 className="page-title">Support the Mission</h1>

      {!checkoutVisible && (
        <div className="donation-section">
          <div className="donation-image">
            <img src={giveImage} alt="Children learning" />
          </div>

          <div className="donation-form-container">
            <h2 className="form-title">Choose an amount:</h2>

            <div className="amount-tabs">
              <div
                className={`amount-tab ${
                  selectedFrequency === "one-time" ? "active" : ""
                }`}
                onClick={() => handleFrequencyClick("one-time")}
              >
                One-time
              </div>
              <div
                className={`amount-tab ${
                  selectedFrequency === "monthly" ? "active" : ""
                }`}
                onClick={() => handleFrequencyClick("monthly")}
              >
                ❤️ Monthly
              </div>
            </div>

            <div className="amount-grid">
              {[50, 100, 300, 500].map((amt) => (
                <div
                  key={amt}
                  className={`amount-option ${
                    selectedAmount === amt ? "active" : ""
                  }`}
                  onClick={() => handleAmountClick(amt)}
                >
                  ${amt}
                </div>
              ))}
            </div>

            <div className="selected-amount">
              <div className="amount-display">
                $ <span>{selectedAmount}</span>
              </div>
              <p className="amount-description">
                {amountDescriptions[selectedAmount]}
              </p>
            </div>

            <div className="info-box">
              <div className="info-icon">📄</div>
              <div className="info-text">
                You'll receive a tax receipt for{" "}
                <strong>${selectedAmount}</strong> for making this donation.
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon">💡</div>
              <div className="info-text">
                <strong>Did you know?</strong> We fundraise with Zeffy to ensure
                100% of your donation goes to our mission!
              </div>
            </div>

            <button className="continue-btn" onClick={showCheckout}>
              Continue →
            </button>
          </div>
        </div>
      )}

      {checkoutVisible && (
        <div className="checkout-section active">
          <h2 className="form-title">Complete Your Donation</h2>

          <form id="donationForm" onSubmit={submitDonation}>
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" name="firstName" required />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input type="text" name="lastName" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" required />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" required />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Billing Address</h3>
              <div className="form-group">
                <label>Street Address *</label>
                <input type="text" name="address" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City *</label>
                  <input type="text" name="city" required />
                </div>
                <div className="form-group">
                  <label>State/Province *</label>
                  <input type="text" name="state" required />
                </div>
                <div className="form-group">
                  <label>ZIP/Postal Code *</label>
                  <input type="text" name="zipCode" required />
                </div>
              </div>
              <div className="form-group">
                <label>Country *</label>
                <select name="country" required>
                  <option value="">Select Country</option>
                  <option value="US" selected>
                    United States
                  </option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <h3>Payment Method</h3>
              <div className="payment-methods">
                {["credit", "debit", "paypal", "venmo"].map((method) => (
                  <label
                    key={method}
                    className={`payment-method ${
                      selectedPayment === method ? "selected" : ""
                    }`}
                    onClick={() => handlePaymentSelect(method)}
                  >
                    <input type="radio" name="payment" value={method} hidden />
                    <div className="payment-method-icon">
                      {method === "paypal"
                        ? "🅿️"
                        : method === "venmo"
                        ? "📱"
                        : "💳"}
                    </div>
                    <div>
                      {method.charAt(0).toUpperCase() + method.slice(1)} Card
                    </div>
                  </label>
                ))}
              </div>

              {selectedPayment !== "paypal" && selectedPayment !== "venmo" && (
                <div id="cardDetails">
                  <div className="form-group">
                    <label>Card Number *</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date *</label>
                      <input type="text" placeholder="MM/YY" maxLength="5" />
                    </div>
                    <div className="form-group">
                      <label>CVV *</label>
                      <input type="text" placeholder="123" maxLength="4" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="form-section">
              <h3>Donation Summary</h3>
              <div className="selected-amount">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                    Donation Amount
                  </span>
                  <span className="amount-display" style={{ fontSize: "2rem" }}>
                    ${selectedAmount}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "1rem",
                    borderTop: "2px solid #e5e7eb",
                  }}
                >
                  <span style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                    Frequency
                  </span>
                  <span style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                    {selectedFrequency === "monthly" ? "Monthly" : "One-time"}
                  </span>
                </div>
              </div>
            </div>

            <button type="submit" className="continue-btn">
              Complete Donation 🎉
            </button>
            <div className="back-to-amounts" onClick={backToAmounts}>
              ← Back to amounts
            </div>
          </form>
        </div>
      )}

      <div className="volunteer-section">
        <img src={volunteerImage} alt="Volunteers" />
      </div>
    </div>
  );
};

export default GivePage;
