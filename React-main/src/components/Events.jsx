// Events.jsx
import React from "react";
import christmasImg from "../assets/christmas-Fundraising-Gala.jpg";
import merchandiseImg from "../assets/Merchandise.jpg";



const Events = () => {
  const events = [
    {
      img: christmasImg,
      link: "https://sites.google.com/view/legacyhandsofhope/events",
      btnText: "PURCHASE TIX",
      alt: "Christmas Fundraising Gala"
    },
    {
      img: merchandiseImg,
      link: "https://sites.google.com/view/legacyhandsofhope/give",
      btnText: "SHOP NOW",
      alt: "Merchandise"
    }
  ];

  return (
    <section className="events" id="events">
      <div className="section-container">
        <h2 className="section-title" style={{ color: "white", textAlign: "center" }}>
          UPCOMING EVENTS
        </h2>
        <div className="events-grid">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <img src={event.img} alt={event.alt} />
              <div className="event-card-content">
                <a href={event.link} className="event-btn">{event.btnText}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
