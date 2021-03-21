import React from "react";
import PropTypes from "prop-types";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center justify-center py-10 bg-gray-100"
    >
      <h2 className="text-gray-800 w-3/4 text-4xl font-light leading-10">
        Traditional fresh pasta since 1978.
      </h2>
      <img
        className="w-3/4 mt-5"
        src="https://cdn.shopify.com/s/files/1/0262/1983/9510/files/newpastaficed-2_503x.png?v=1589548218"
        alt="Three ravioli"
      />
    </section>
  );
};

Hero.propTypes = {};

export default Hero;
