import React from "react";
import PropTypes from "prop-types";
import Hero from "../../sections/Hero";
import MenuSection from "../../sections/MenuSection/MenuSection";
import GiftCardSection from "../../sections/GiftCardSection";
import InfoSection from "../../sections/InfoSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <MenuSection />
      <GiftCardSection />
      <InfoSection />
    </div>
  );
};

Home.propTypes = {};

export default Home;
