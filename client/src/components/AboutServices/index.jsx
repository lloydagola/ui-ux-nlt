import React from "react";
import WOW from "wowjs";
import "./AboutServices.css";

class AboutServices extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section className="about-services">
        <div className="about-services-wrapper">
          <div
            className="about-services-description  wow fadeInUp"
            data-wow-iteration="1"
            data-wow-delay=".6s"
            data-wow-duration=".7s"
          >
            <h3>SERVICES</h3>
            <h1 className="font-48">Lorem ipsum dolor sit amet?</h1>
          </div>

          <div className="about-services-cards ">
            <div
              className="about-services-background blue  wow fadeInLeft"
              data-wow-iteration="1"
              data-wow-delay=".6s"
              data-wow-duration=".7s"
            >
              <h1 className="font-48">Lorem ipsum dolor sit amet?</h1>
            </div>
            <div
              className="about-services-card card-shadow  wow fadeInUp"
              data-wow-iteration="1"
              data-wow-delay=".6s"
              data-wow-duration=".7s"
            >
              <div className="about-service-card-icon light-grey">
                <i class="far fa-handshake" />
              </div>
              <p>LOREM IPSUM</p>
            </div>
            <div
              className="about-services-card card-shadow  wow fadeInUp"
              data-wow-iteration="1"
              data-wow-delay=".6s"
              data-wow-duration=".7s"
            >
              <div className="about-service-card-icon light-grey">
                <i class="fas fa-chalkboard-teacher" />
              </div>
              <p>LOREM IPSUM</p>
            </div>
            <div
              className="about-services-card card-shadow  wow fadeInUp"
              data-wow-iteration="1"
              data-wow-delay=".6s"
              data-wow-duration=".7s"
            >
              <div className="about-service-card-icon light-grey">
                <i class="fas fa-book-open" />
              </div>
              <p>LOREM IPSUM</p>
            </div>
            <div
              className="about-services-card card-shadow  wow fadeInUp"
              data-wow-iteration="1"
              data-wow-delay=".6s"
              data-wow-duration=".7s"
            >
              <div className="about-service-card-icon light-grey">
                <i class="fas fa-chalkboard-teacher" />
              </div>
              <p>LOREM IPSUM</p>
            </div>
            <div
              className="about-services-card card-shadow  wow fadeInUp"
              data-wow-iteration="1"
              data-wow-delay=".6s"
              data-wow-duration=".7s"
            >
              <div className="about-service-card-icon light-grey">
                <i class="fas fa-book-open" />
              </div>
              <p>LOREM IPSUM</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutServices;
