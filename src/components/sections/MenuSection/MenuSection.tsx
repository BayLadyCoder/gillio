import React from "react";
import PropTypes from "prop-types";
import MenuHeader from "./MenuHeader";
import Menu from "./Menu";

const MenuSection = () => {
  return (
    <div>
      <MenuHeader />
      <Menu />
    </div>
  );
};

MenuSection.propTypes = {};

export default MenuSection;
