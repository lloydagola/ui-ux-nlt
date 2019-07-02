import React from "react";
import WOW from "wowjs";
import "./Publication.css";

class Publication extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    let date = this.props.date.split("T");
    const sanitisedDate = date[0];

    return (
      <div
        className="publication card-shadow  wow fadeInUp"
        data-wow-iteration="1"
        data-wow-offset="80"
        data-wow-delay=".15s"
      >
        <div className="publication-details">
          {/*
            <p className="author">
              <b>{this.props.author}</b>
            </p>
            <p className="cardDate">{sanitisedDate}</p>
          */}
        </div>
        <div className="publication-excerpt">
          <h1>{this.props.title}</h1>
        </div>
        <div>
          <a href={this.props.fileUrl} target="_blank">
            <div className="flat-button-white">Read it</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Publication;
