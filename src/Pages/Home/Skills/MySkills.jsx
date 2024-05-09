import React, { useState } from "react";
import data from "../../../data/index.json";
import "./MySkills.css";

export default function MySkills() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            className={`skills--section--card ${
              hoveredCard === index ? "skeleton" : ""
            }`}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
          >
            <div className="skills--section--img">
              <img src={item.src} alt="Skill Icon" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>

              <div className="skills--section--skills">
                {item.skill.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skills--section--skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
