import React from "react";
import WOW from "wowjs";
import "./Publication.css";

class Publication extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    let publications = [];

    for (let i = 0; i < 12; i++) {
      publications.push(
        <div
          className="publication light-shadow publication-shadow  wow fadeInUp"
          data-wow-iteration="1"
          data-wow-offset="80"
          data-wow-delay=".15s"
        >
          <div className="publication-details">
            <div className="vertical-line" />
            <p class="author">
              <b>Charles Ouma</b>
            </p>
            <p>24/3/2019</p>
          </div>
          <div className="publication-excerpt">
            <h1 className="font-48">lorem ipsum</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              vel suscipit harum ipsum unde iusto repellendus quam consequatur
              odio. Assumenda at minus corrupti eum nisi animi et fuga similique
              modi.
            </p>
            <div className="flat-button-white">read</div>
          </div>
          <div className="publication-social">
            <div className="love">
              <i class="fas fa-heart" />
            </div>
            <div className="fb">
              <i class="fab fa-facebook" />
            </div>
            <div className="linkedin">
              <i class="fab fa-linkedin" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <section className="publications box-layout">{publications}</section>
    );
  }
}

export default Publication;
