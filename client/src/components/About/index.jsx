import React from "react";
import WOW from "wowjs";
import "./About.css";

class About extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section id="about" className="about light-grey">
        <div
          className="about-description wow fadeInUp"
          data-wow-iteration="1"
          data-wow-offset="90"
          data-wow-delay=".25s"
        >
          <h1 id="about-title" className="font-76">
            Who we are
          </h1>
          <p id="about-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
            aliquid. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Molestiae nesciunt aspernatur cupiditate at vero, minima
            consectetur, eligendi officia provident dolorum autem incidunt sed,
            earum excepturi? Reprehenderit dolores voluptas nobis ut.
          </p>
          <p id="about-price" className="font-36" />
          <div className="flat-button">more</div>
        </div>
        <div
          className="about-image wow fadeInUp"
          data-wow-iteration="1"
          data-wow-offset="90"
          data-wow-delay=".25s"
        >
          <img
            className="heavy-shadow white"
            src="https://cdnb.artstation.com/p/assets/images/images/006/447/829/large/sihu-acroberial-nlt-logo-01.jpg?1498661967"
            alt=""
          />
        </div>
        <div
          className="about-page-number yellow wow fadeInUp"
          data-wow-iteration="1"
          data-wow-offset="90"
          data-wow-delay=".25s"
        />
      </section>
    );
  }
}

export default About;
