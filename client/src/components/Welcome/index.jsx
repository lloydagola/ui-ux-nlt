import React from "react";
import WOW from "wowjs";
import "./Welcome.css";

class Welcome extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section className="welcome">
        <div
          className="welcome-image  wow fadeInDown"
          data-wow-iteration="1"
          data-wow-delay=".5s"
          data-wow-duration=".6s"
        >
          <img
            className="heavy-shadow"
            src="https://images.unsplash.com/photo-1549920867-1629df28cdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
            alt=""
          />
        </div>
        <div
          className="welcome-text  wow fadeInUp"
          data-wow-iteration="1"
          data-wow-delay=".5s"
          data-wow-duration=".6s"
        >
          <div className="welcome-text-left">
            <h1 className="font-76">Welcome</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              vel suscipit harum ipsum unde iusto repellendus quam consequatur
              odio. Assumenda at minus corrupti eum nisi animi et fuga similique
              modi.
            </p>
          </div>
          <div id="details-btn" className="flat-button">
            SAY HELLO
          </div>
        </div>

        <div
          className="welcome-sidebar  wow fadeInDown"
          data-wow-iteration="1"
          data-wow-delay=".5s"
          data-wow-duration=".6s"
        >
          <div className="social">
            <a href="https://www.facebook.com/charles.ouma.18" target="_blank">
              facebook
            </a>
            <a
              href="https://ke.linkedin.com/in/charles-b-g-ouma-71645b12"
              target="_blank"
            >
              linkedIn
            </a>
          </div>
        </div>
        <div
          className="welcome-gallery-widgets wow fadeIn"
          data-wow-iteration="1"
          data-wow-delay="1.4s"
          data-wow-duration=".6s"
        >
          <div id="welcome-loader">
            <div
              id="welcome-gallery-loader"
              className="yellow welcome-gallery-loader"
            >
              TEAM
            </div>
            <div id="welcome-number-loader">CSR</div>
          </div>
          <div id="gallery-nav">
            <div id="gallery-nav-left" className="yellow">
              <svg width="14" height="14" viewBox="0 0 64 64">
                <path
                  id="arrow-left-1"
                  d="M46.077 55.738c0.858 0.867 0.858 2.266 0 3.133s-2.243 0.867-3.101 0l-25.056-25.302c-0.858-0.867-0.858-2.269 0-3.133l25.056-25.306c0.858-0.867 2.243-0.867 3.101 0s0.858 2.266 0 3.133l-22.848 23.738 22.848 23.738z"
                />
              </svg>
            </div>
            <div id="gallery-nav-right">
              <svg width="14" height="14" viewBox="0 0 64 64">
                <path
                  id="arrow-right-1"
                  d="M17.919 55.738c-0.858 0.867-0.858 2.266 0 3.133s2.243 0.867 3.101 0l25.056-25.302c0.858-0.867 0.858-2.269 0-3.133l-25.056-25.306c-0.858-0.867-2.243-0.867-3.101 0s-0.858 2.266 0 3.133l22.848 23.738-22.848 23.738z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;
