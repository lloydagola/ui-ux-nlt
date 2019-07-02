import React from "react";
import WOW from "wowjs";
import "./Footer.css";
import ContactForm from "../ContactForm";

class Footer extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section
        className="footer dark-grey wow fadeIn"
        data-wow-iteration="1"
        data-wow-offset="90"
      >
        <div className="footer-wrapper">
          <div className="footer-logo">
            <div className="footer-logo-exterior white">
              <div className="footer-logo-interior  dark-grey">
                <h1 className="font-76">NLT</h1>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
        <div />
      </section>
    );
  }
}

export default Footer;
