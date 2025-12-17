import React from "react";
import "./Team.css";

import logoImg from "../assets/Charity-logo.jpg";
import rebeccaImg from "../assets/Rebecca Crumbley.jpg";
import natashaImg from "../assets/Natasha Moore.jpg";
import christineImg from "../assets/Christine Hoyte.jpg";
import alissaImg from "../assets/Alissa Gittens.jpg";

const TeamPage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="team-header">
        <div className="header-content">
          <img src={logoImg} alt="LHOH Charity Logo" className="header-logo" />
          <div className="header-text">
            <h1>THE TEAM</h1>
            <p>
              Founded in October 2024, LHOH's headquarters is located in
              Virginia, but the organization operates globally, with a special
              focus on African and Caribbean diaspora communities.
            </p>
          </div>
        </div>
      </div>

      {/* Executive Leadership */}
      <div className="section-title-bar">
        <h2>EXECUTIVE LEADERSHIP AND FOUNDERS</h2>
      </div>

      <div className="main-container">
        {/* Rebecca */}
        <div className="team-member-full">
          <img
            src={rebeccaImg}
            alt="Rebecca Crumbley"
            className="member-image-full"
          />
          <div className="member-info-full">
            <h3>Rebecca Crumbley</h3>
            <p className="member-title">Executive Director</p>

            <p className="member-bio">
              Rebecca E. Crumbley is an accomplished aviation professional,
              entrepreneur, philanthropist, and co-founder of Legacy Hands of
              Hope (LHOH).
            </p>

            <p className="member-bio">
              With over 17 years of experience as a Flight Attendant, Rebecca’s
              passion for service has shaped her professional journey.
            </p>

            <p className="member-bio">
              Rebecca also owns two successful businesses and is deeply
              committed to community engagement.
            </p>

            <p className="member-bio">
              She enjoys spending time with her family and planning community
              outreach programs.
            </p>
          </div>
        </div>

        {/* Natasha & Christine */}
        <div className="team-grid">
          <div className="team-member">
            <img
              src={natashaImg}
              alt="Natasha Moore"
              className="member-image"
            />
            <h3 className="member-name">Natasha Moore</h3>
            <p className="member-position">Chief Financial Officer</p>
            <p className="member-description">
              Natasha Moore is a dedicated flight attendant whose global
              experiences fuel her passion for sustainable community change.
            </p>
          </div>

          <div className="team-member">
            <img
              src={christineImg}
              alt="Christine Hoyte"
              className="member-image"
            />
            <h3 className="member-name">Christine Hoyte</h3>
            <p className="member-position">Chief Operating Officer</p>
            <p className="member-description">
              Christine Hoyte is a co-founder and healthcare advocate with a
              strong commitment to marginalized communities.
            </p>
          </div>
        </div>
      </div>

      {/* Operations */}
      <div className="section-title-bar">
        <h2>OPERATIONS</h2>
      </div>

      <div className="main-container operations-section">
        <div className="operations-member">
          <img
            src={alissaImg}
            alt="Alissa Gittens"
            className="operations-image"
          />
          <div className="operations-info">
            <h3>Alissa Gittens</h3>
            <p className="member-position">Web Manager</p>
            <p className="member-description">
              Alissa Gittens is a Communications Manager and education advocate
              who champions arts, mental health, and community partnerships.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
