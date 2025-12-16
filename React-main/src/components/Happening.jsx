// Happening.jsx
import React from "react";
import hostingImg from "../assets/Hosting.jpg";
import educationImg from "../assets/educational-program.jpg";
import healthImg from "../assets/health-organization.jpg";
import voluntierImg from "../assets/voluntier-opportunities.jpg";
const Happening = () => {
  const happenings = [
    {
      img: educationImg,
      title: "Launching new community education programs",
      desc: "to equip individuals with vocational skills and life skills."
    },
    {
      img: healthImg,
      title: "Partnering with local health organizations",
      desc: "to provide wellness support to underserved families."
    },
    {
      img: hostingImg,
      title: "Hosting a fundraising campaign",
      desc: "to raise funds for a new resource center that will offer emergency assistance, job training, and mental health services."
    },
    {
      img: voluntierImg,
      title: "Expanding volunteer opportunities",
      desc: "inviting more individuals to get involved and make a difference in their communities."
    }
  ];

  return (
    <section className="happening">
      <div className="section-container">
        <h2 className="section-title" style={{ textAlign: "center" }}>WHAT'S HAPPENING</h2>
        <div className="happening-grid">
          {happenings.map((item, index) => (
            <div className="happening-card" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="happening-card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Happening;
