import React from "react";
import WOW from "wowjs";
import "./AboutStory.css";

class AboutStory extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section className="about-story">
        <div className="about-story-wrapper">
          <div
            className="about-story-background yellow-gradient  heavy-shadow wow fadeInUp"
            data-wow-iteration="1"
            data-wow-delay=".5s"
            data-wow-duration=".9s"
          />
          <div
            className="about-story-text card-shadow wow fadeInUp"
            data-wow-iteration="1"
            data-wow-delay=".6s"
            data-wow-duration=".9s"
          >
            <h1 className="font-76">Our story</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              vel suscipit harum ipsum unde iusto repellendusm consequatur odio.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              vel suscipit harum ipsum unde iusto repellendusm consequatur odio.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              vel suscipit harum ipsum unde iusto repellendusm consequatur odio.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              vel suscipit harum ipsum unde iusto repellendusm consequatur odio.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutStory;
