// Impact.jsx
import React from "react";
import africanImg from "../assets/african-dispora.png";
import caribbeanImg from "../assets/caribbean-Diaspora.png";
import urbanImg from "../assets/urban-communities.png";


const Impact = () => {
  return (
    <section className="impact">
      <div className="impact-content">
        <h2 className="impact-title">Where LHOH Makes a Difference</h2>
        <p className="impact-subtitle">
          Our impact primarily targets communities within the African and Caribbean diaspora
        </p>
        <div className="impact-grid">
          <div className="impact-card">
            <img 
              src={africanImg}
              alt="Urban Communities" 
              className="impact-card-image"
            />
            <div className="impact-card-content">
              <h3>Urban Communities</h3>
              <p>
                Empowering individuals in urban areas with access to education, resources, and opportunities for growth.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <img 
              src={caribbeanImg}
              alt="Caribbean Diaspora" 
              className="impact-card-image"
            />
            <div className="impact-card-content">
              <h3>Caribbean Diaspora</h3>
              <p>
                Supporting Caribbean communities through educational initiatives and essential resource provision.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <img 
              src={urbanImg}
              alt="African Diaspora" 
              className="impact-card-image"
            />
            <div className="impact-card-content">
              <h3>African Diaspora</h3>
              <p>
                Breaking down barriers to economic and educational opportunities across Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
