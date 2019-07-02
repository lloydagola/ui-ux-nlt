import React from "react";
import WOW from "wowjs";
import "./Infographics.css";

class Infographics extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section className="infographics purple-gradient">
        <div
          className="infographics-wrapper box-layout wow fadeInUp"
          data-wow-iteration="1"
          data-wow-offset="90"
        >
          <div className="infographic-item-1">
            <h1 className="font-76">123</h1>
            <h1>publications</h1>
          </div>
          <div className="infographic-item-2">
            <h1 className="font-76">10</h1>
            <h1>partners</h1>
          </div>
          <div className="infographic-item-3">
            <h1 className="font-76">48</h1>
            <h1>students</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Infographics;
