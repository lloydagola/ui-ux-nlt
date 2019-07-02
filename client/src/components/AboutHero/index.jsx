import React from "react";
import WOW from "wowjs";
import "./AboutHero.css";

class AboutHero extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section
        className="about-hero wow fadeIn"
        data-wow-iteration="1"
        data-wow-delay="1s"
        data-wow-duration="1.4s"
      >
        <div className="about-hero-wrapper">
          <div
            className="about-hero-text wow fadeInDown"
            data-wow-iteration="1"
            data-wow-delay="1s"
            data-wow-duration=".6s"
          >
            <h1 className="font-76">No one does it better</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              vel suscipit harum ipsum unde iusto repellendus quam consequatur
              odio. Assumenda at minus corrupti eum nisi animi et fuga similique
              modi.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutHero;
