import React from "react";
import "../scss/Global.scss";
import workingImage from "../assets/images/working-emoji.png";
import aboutImage from "../assets/images/about-img.webp";
import textImage from "../assets/images/text.svg";

const About = () => {
  return (
    <section className="about  spacing_top spacing_bottom" id="about">
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img src={workingImage} alt="emoji" className="work-emoji" />
            <img src={aboutImage} alt="me" className="img-side__main-img" />
            <span>
              <img src={textImage} alt="text" />
            </span>
          </div>
          <div className="text-side">
            <h3 className="section-title ">About me</h3>
            <h2 className="section-subtitle">A dedicated Front-end Developer <br /> based in Chandigarh, India📍</h2>
            
            <p>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
