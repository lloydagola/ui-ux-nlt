import React from "react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

class Root extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export default Root;
