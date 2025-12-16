// Donate.jsx
import React from "react";

const Donate = () => {
  return (
    <section className="donate" id="donate">
      <div className="donate-content">
        <h2>Make a Difference Today</h2>
        <p>
          Your support helps us continue our mission of empowering communities
          and creating lasting change in the African and Caribbean diaspora.
        </p>
        <a
          href="https://sites.google.com/view/legacyhandsofhope/give"
          className="donate-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          DONATE NOW
        </a>
      </div>
    </section>
  );
};

export default Donate;
