import React from "react";
import ContactForm from "../../components/ContactForm/index";
import MapContainer from "../../components/MapContainer";
import WOW from "wowjs";

class Contacts extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <>
        <div
          className="wow fadeInUp"
          data-wow-iteration="1"
          data-wow-offset="80"
          data-wow-delay=".15s"
        >
          <br />
          <br />
          <br />
          <ContactForm />
        </div>
        <div
          className="map wow fadeInUp light-shadow"
          data-wow-iteration="1"
          data-wow-offset="80"
          data-wow-delay=".15s"
        >
          <MapContainer
            initialCenter={{
              lat: -1.268813,
              lng: 36.811465
            }}
          />
        </div>
      </>
    );
  }
}

export default Contacts;
