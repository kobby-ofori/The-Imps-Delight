import React from "react";
import About from "../../about/About";
import Description from "../../description/Description";
import Extra from "../../etra/Extra";
import Footer from "../../footer/Footer";

const Home = () => {
  return (
    <div className="home-div" id="home">
      <About />
      <Description />
      <Extra />
      <Footer />
    </div>
  );
};

export default Home;
