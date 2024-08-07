import "./HeroSection.css";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Sankar Mukesh Yalamandla</p>
          <div className="hero--section--img-dummy">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>
            <br />
            MERN Developer
          </h1>

          <h1 className="hero--section--title-dummy">MERN Full Stack developer</h1>
          <p className="hero--section-description">
            Skilled Senior Engineer at <b>Tiger Analytics</b>, adept in building web applications (React, Node.js) and leveraging data (MongoDB). Cloud savvy (AWS) and a Python enthusiast. Active contributor on GitHub.
            <br />
          </p>
        </div>
        <a href="https://www.linkedin.com/in/sankar-mukesh-yalamandla-2b0946199/" className="btn btn-primary">Get In Touch</a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
