import React from "react";
import "../scss/Global.scss";
import gymateHomeImage from "../assets/images/gymate-home.webp";
import coindomFullImage from "../assets/images/coindom-full.png";
import carRentalImage from "../assets/images/car-rental-full.webp";
import ecomImage from "../assets/images/ecom.webp";

const Projects = () => {
  return (
    <section id="projects" className="projects spacing_top spacing_bottom">
      <div className="container">
        <div className="project-content">
          <h3 className="section-title">portfolio</h3>
          <h2 className="section-subtitle">
            Each project is a unique piece of development 🧩
          </h2>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project undefined">
              <div className="pro__img">
                <a
                  target="_blank"
                  href="https://car-rental-ten.vercel.app/"
                  rel="noreferrer"
                >
                  <img src={carRentalImage} alt="website" />
                </a>
              </div>
              <div className="pro__text">
                <h3>
                  Car Rental <span className="date-class">(February 2023)</span>{" "}
                  🚗
                </h3>
                <p>
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use.
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/"
                    rel="noreferrer"
                  >
                    {" "}
                    Code{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      {" "}
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>{" "}
                    </svg>{" "}
                  </a>
                  <a target="_blank" href="/" rel="noreferrer">
                    {" "}
                    Live Demo{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-external-link"
                    >
                      {" "}
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>{" "}
                      <path d="M11 13l9 -9"></path> <path d="M15 4h5v5"></path>{" "}
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project reversed-proj">
              <div className="pro__img">
                <a
                  target="_blank"
                  href="https://coindom-crypto-search.vercel.app/"
                  rel="noreferrer"
                >
                  <img src={coindomFullImage} alt="website" />
                </a>
              </div>
              <div className="pro__text">
                <h3>
                  Coindom <span className="date-class">(February 2023)</span> 🪙
                </h3>
                <p>
                  Coindom is a crypto app that allows users to search for
                  information about various cryptocurrencies in real-time.
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/"
                    rel="noreferrer"
                  >
                    {" "}
                    Code{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      {" "}
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>{" "}
                    </svg>{" "}
                  </a>
                  <a target="_blank" href="/" rel="noreferrer">
                    {" "}
                    Live Demo{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-external-link"
                    >
                      {" "}
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>{" "}
                      <path d="M11 13l9 -9"></path> <path d="M15 4h5v5"></path>{" "}
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="project undefined">
              <div className="pro__img">
                <a
                  target="_blank"
                  href="https://gymate-iota.vercel.app/"
                  rel="noreferrer"
                >
                  <img src={gymateHomeImage} alt="website" />
                </a>
              </div>
              <div className="pro__text">
                <h3>
                  Gymate <span className="date-class">(January 2023)</span> 🏋️
                </h3>
                <p>
                  A gym website is a comprehensive resource for fitness
                  information, class schedules, membership options, and tools to
                  help users achieve their fitness goals.
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>Tailwind CSS</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/"
                    rel="noreferrer"
                  >
                    {" "}
                    Code{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      {" "}
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>{" "}
                    </svg>{" "}
                  </a>
                  <a target="_blank" href="/" rel="noreferrer">
                    {" "}
                    Live Demo{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-external-link"
                    >
                      {" "}
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>{" "}
                      <path d="M11 13l9 -9"></path> <path d="M15 4h5v5"></path>{" "}
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
            {/* Project 4 */}
            <div className="project reversed-proj">
              <div className="pro__img">
                <a
                  target="_blank"
                  href="https://minimalist-e-commerce.vercel.app/"
                  rel="noreferrer"
                >
                  <img src={ecomImage} alt="website" />
                </a>
              </div>
              <div className="pro__text">
                <h3>
                  Ecommerce <span className="date-class">(December 2022)</span>{" "}
                  🛒
                </h3>
                <p>
                  With a focus on simplicity and clean design, this store
                  prioritizes user experience, making it easy for customers to
                  find and purchase the products they need.
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>Vanilla CSS</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/"
                    rel="noreferrer"
                  >
                    {" "}
                    Code{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      {" "}
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>{" "}
                    </svg>{" "}
                  </a>
                  <a target="_blank" href="/" rel="noreferrer">
                    {" "}
                    Live Demo{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-external-link"
                    >
                      {" "}
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>{" "}
                      <path d="M11 13l9 -9"></path> <path d="M15 4h5v5"></path>{" "}
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
