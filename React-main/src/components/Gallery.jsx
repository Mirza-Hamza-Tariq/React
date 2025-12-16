// Gallery.jsx
import React from "react";
import roseImg from "../assets/Rose-fest.jpg";
import lhohImg from "../assets/LHOH-Webiste-Gallery.jpg";
const Gallery = () => {
  const galleryItems = [
    {
      img: roseImg,
      link: "https://photos.app.goo.gl/vygpiX4JMMcqbbZc6",
      alt: "Rose Fest",
      text: "View Rose Fest Pics →"
    },
    {
      img: lhohImg,
      link: "https://collinsasenso.pixieset.com/lhohwebsite/",
      alt: "LHOH Website Gallery",
      text: "View Gallery →"
    }
  ];

  return (
    <section className="gallery">
      <div className="section-container">
        <h2 className="section-title" style={{ textAlign: "center" }}>
          OUR IMPACT IN ACTION
        </h2>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-card" key={index}>
              <img src={item.img} alt={item.alt} />
              <div className="gallery-overlay">
                <a href={item.link} className="gallery-link">{item.text}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
