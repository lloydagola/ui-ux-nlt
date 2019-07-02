import React from "react";
import WOW from "wowjs";
import "./Csr.css";

class Csr extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section className="csr">
        <div
          className="csr-text wow fadeInUp"
          data-wow-iteration="1"
          data-wow-offset="90"
        >
          <h1 className="font-76">CSR</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos beatae laboriosam inventore maiores reiciendis illo
            praesentium, tempora nam quidem consectetur natus aspernatur esse,
            sed repellat excepturi cupiditate ut at impedit cumque.{" "}
          </p>
        </div>
        <div className="csr-images">
          <div
            className="csr-gradient-background yellow wow fadeInUp"
            data-wow-iteration="1"
            data-wow-offset="90"
          />
          <div
            className="csr-image-top heavy-shadow wow fadeInUp"
            data-wow-iteration="1"
            data-wow-offset="90"
          >
            <img
              src="https://images.pexels.com/photos/977539/pexels-photo-977539.jpeg?cs=srgb&dl=african-dress-earrings-977539.jpg&fm=jpg"
              alt=""
            />
          </div>
          <div
            className="csr-image-centre heavy-shadow wow fadeInUp"
            data-wow-iteration="1"
            data-wow-offset="90"
          >
            <img
              src="https://images.pexels.com/photos/1653222/pexels-photo-1653222.jpeg?cs=srgb&dl=adorable-adult-bag-1653222.jpg&fm=jpg"
              alt=""
            />
          </div>
          <div
            className="csr-image-bottom heavy-shadow wow fadeInUp"
            data-wow-iteration="1"
            data-wow-offset="90"
          >
            <img
              src="https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?cs=srgb&dl=beautiful-daylight-dress-1666073.jpg&fm=jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Csr;
