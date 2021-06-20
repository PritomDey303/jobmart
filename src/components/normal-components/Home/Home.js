import React from "react";
import Footer from "../../shared-components/Footer/Footer";
import Navigation from "../../shared-components/Navigation/Navigation";
import Jobs from "./Jobs/Jobs";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Jobs />
      <Footer />
    </div>
  );
};

export default Home;
