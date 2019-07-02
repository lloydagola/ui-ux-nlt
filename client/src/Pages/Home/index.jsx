import React from "react";
import "../../css/styles.css";
import Welcome from "../../components/Welcome/";
import About from "../../components/About/";
import Services from "../../components/Services/";
import Team from "../../components/Team/";
import Csr from "../../components/Csr/";
import Infographics from "../../components/Infographics/";

const Home = () => (
  <>
    <Welcome />
    <About />
    <Services />
    <Team />
    <Csr />
    <Infographics />
  </>
);

export default Home;
