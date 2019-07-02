import React from "react";
import PCComponent from "./PCComponent";
import MobileComponent from "./MobileComponent";

class Services extends React.Component {
  constructor() {
    super();

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
    this.handleScreenSizeChange = this.handleScreenSizeChange.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleScreenSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleScreenSizeChange);
  }

  handleScreenSizeChange() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }
  render() {
    const { windowWidth, windowHeight } = this.state;
    const isMobile = windowWidth < windowHeight;

    if (isMobile) {
      console.log("isMobile");
      console.log("windowWidth: ", windowWidth);
      console.log("windowHeight: ", windowHeight);
      return <MobileComponent />;
    } else {
      console.log("isNotMobile: ");
      console.log("windowWidth: ", windowWidth);
      console.log("windowHeight: ", windowHeight);
      return <PCComponent />;
    }
  }
}

export default Services;
