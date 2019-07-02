import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import WOW from "wowjs";
import "./Navigation.css";

class Navigation extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section className="navigation">
        <div className="nav-wrapper">
          <Link to="/">
            <div id="logo" className="wow fadeInLeft" data-wow-duration=".5s">
              <h3>NLT</h3>
            </div>
          </Link>
          <nav
            className="wow fadeInLeft"
            data-wow-iteration="1"
            data-wow-duration=".6s"
          >
            <Link to="/about">About</Link>
            <Link to="/contacts">Contacts</Link>

            <Link to="/publications">Publications</Link>
          </nav>
        </div>
      </section>
    );
  }
}

export default Navigation;
