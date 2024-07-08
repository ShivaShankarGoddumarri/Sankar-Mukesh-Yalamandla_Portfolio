import { useState } from "react";
import data from "../../../data/index.json";
import "./MyProjects.css";

export default function MyProjects() {

  const [showGithubLinks, setShowGithubLinks] = useState(
    Array(data?.portfolio?.length).fill(false)
  );

  const toggleGithubLinks = (index) => {
    setShowGithubLinks((prev) =>
      prev.map((show, idx) => (idx === index ? !show : show))
    );
  };

  const handleAppClick = (website) => {
    if (website) {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="portfolio--section" id="MyProjects">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="section--title">Recent Projects</p>
          <h2 className="section--heading">My Projects</h2>
        </div>
        <div>
          <a
            href="https://github.com/sankarroyals"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              height="3rem"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                fill="currentColor"
              />
            </svg>
            Visit My GitHub
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
      {data?.portfolio?.map((item, index) => (
        <div key={index} className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src={item.src} alt={item.title} />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">{item.title}</h3>
              <p className="text-md">{item.description}</p>
            </div>
            <div className="buttons-container">
              <button
                onClick={() => toggleGithubLinks(index)}
                className="btn--github"
              >
                {!showGithubLinks[index] ? 'Show GitHub Links' : 'Close Links'}
              </button>
              <button
                className="btn--live"
                onClick={() => handleAppClick(item.website)}
              >
                App
              </button>
            </div>
            {showGithubLinks[index] && item?.githubLinks && item?.githubLinks?.length > 0 && (
              <div className="portfolio--links">
                {item?.githubLinks?.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.link}
                    className="text-sm portfolio--link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <path
                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                        stroke="currentColor"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}
