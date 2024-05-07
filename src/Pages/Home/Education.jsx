import React from "react";
import "./Education.css";
import data from "../../data/index.json";

export default function Education() {
  return (
    <section className="education--section" id="education">
      <div className="experience--section--content">
        <p className="section--title">Education</p>
        <h2 className="experience--section--heading">Educational Experience</h2>
        <div className="education--timeline">
          {data?.education?.map((item, index) => (
            <div key={index} className="education--timeline--item">
              <img src={item.icon} alt="Institution Icon" className="institution-icon" />
              {index !== data.education.length - 1 && <div className="timeline--line-horizontal"></div>}
              <div className="education--details">
                <p className="text-md education--institution--name">{item.institution}</p>
                <p className="text-md education--degree">{item.degree}</p>
                <p className="text-md education--degree">CGPA : {item.CGPA}</p>
                <p className="text-md education--duration">{item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
