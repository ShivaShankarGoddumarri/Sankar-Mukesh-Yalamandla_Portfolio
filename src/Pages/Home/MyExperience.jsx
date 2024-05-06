import React from 'react';
import data from "../../data/index.json";

export default function Experience() {
  return (
    <section id="Experience" className="experience--section">
      <div className="experience--section--content">
        <p className="section--title">Experience</p>
        <h2 className="experience--section--heading">My Work Experience</h2>
        {data?.experience?.map((item, index) => (
          <div key={index} className="experience--section--card">
            <h3 className="experience--section--title">{item.title}</h3>
            <p className="experience--section--position">{item.position}</p>
            <p className="experience--section--description">{item.description}</p>
            <p className="experience--section--date">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
