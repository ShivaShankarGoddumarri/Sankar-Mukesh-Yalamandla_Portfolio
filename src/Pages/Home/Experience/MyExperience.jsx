import React from "react";
import data from "../../../data/index.json";
import "./MyExperience.css";

export default function MyExperience() {
  return (
    <section id="Experience" className="experience--section">
      <div className="experience--section--content">
        <p className="section--title">Experience</p>
        <h2 className="experience--section--heading">My Work Experience</h2>
        {data?.experience?.map((company, index) => (
          <div key={index} className="experience--section--company">
            <div className="company--header">
              <div className="company--logo">
                <img src={company.companyLogo} alt={company.company} />
              </div>
              <div className="company--details">
                <h3 className="company--name">{company.company}</h3>
                <p className="company--type">Full-time</p>
              </div>
            </div>
            <div className="roles--timeline">
              {company.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="role--item">
                  <div className="timeline--dot"></div>
                  {roleIndex < company.roles.length - 1 && (
                    <div className="timeline--line"></div>
                  )}
                  <div className="role--info">
                    <h3 className="role--position">{role.position}</h3>
                    <p className="role--date">{role.date}</p>
                    <p className="role--location">{role.location}</p>
                  </div>
                  <div className="role--description">
                    <p>{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
