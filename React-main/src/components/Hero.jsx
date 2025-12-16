// Hero.jsx
import React from "react";
import heroBg from "../assets/hero-Bg.jpg"; // image path

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="hero-content">
        <h1>LEGACY HANDS OF HOPE</h1>
        <p className="hero-tagline">"Empowering Communities with Hope"</p>
      </div>
      <div className="scroll-indicator"></div>
    </section>
  );
};

export default Hero;
