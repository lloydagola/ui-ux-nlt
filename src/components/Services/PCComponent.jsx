import React from "react";
import { Scene, Controller } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import WOW from "wowjs";
import "./Services.css";

class PCComponent extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section className="services">
        <section className="panel white">
          <div
            className="training wow fadeInUp"
            data-wow-iteration="1"
            data-wow-offset="80"
            data-wow-delay=".15s"
          >
            <div className="service-text">
              <h1 className="font-76">Training</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt quam inventore mollitia. Iste fugiat quam amet
                accusantium, pariatur corrupti ut!
              </p>
            </div>
            <div className="service-image">
              <div className="service-image-layover hot-pink-gradient" />
              <img
                className="heavy-shadow"
                src="https://images.pexels.com/photos/1350615/pexels-photo-1350615.jpeg?cs=srgb&dl=adult-blank-board-1350615.jpg&fm=jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="panel light-grey">
          <div
            className="research wow fadeInUp"
            data-wow-iteration="1"
            data-wow-offset="80"
            data-wow-delay=".15s"
          >
            <div className="service-image">
              <div className="service-image-layover yellow" />
              <img
                className="heavy-shadow"
                src="https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?cs=srgb&dl=background-book-stack-books-1148399.jpg&fm=jpg"
                alt=""
              />
            </div>
            <div className="service-text">
              <h1 className="font-76">Research</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt quam inventore mollitia. Iste fugiat quam amet
                accusantium, pariatur corrupti ut!
              </p>
            </div>
          </div>
        </section>
        <section className="panel white">
          <div
            className="consultancy wow fadeInUp"
            data-wow-iteration="1"
            data-wow-offset="80"
            data-wow-delay=".15s"
          >
            <div
              className="service-text wow fadeInUp"
              data-wow-iteration="1"
              data-wow-offset="90"
            >
              <h1 className="font-76">Consultancy</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt quam inventore mollitia. Iste fugiat quam amet
                accusantium, pariatur corrupti ut!
              </p>
            </div>
            <div className="service-image wow">
              <div
                className="service-image-layover blue wow fadeInUp"
                data-wow-iteration="1"
                data-wow-offset="90"
              />
              <img
                className="heavy-shadow wow fadeInUp"
                src="https://images.pexels.com/photos/1061576/pexels-photo-1061576.jpeg?cs=srgb&dl=address-adult-african-1061576.jpg&fm=jpg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section
          className="panel  wow fadeIn"
          data-wow-iteration="1"
          data-wow-offset="120"
          data-wow-delay=".15s"
        >
          <span>
            <h1>Our Team</h1>
          </span>
        </section>
      </section>
    );
  }
}

export default PCComponent;
