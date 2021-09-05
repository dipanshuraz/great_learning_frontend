import React from "react";
import PropTypes from "prop-types";
import Background from "../../assets/bg.jpg";

const Overlay = ({ children }) => (
  <div className="content">
    <div className="content-overlay" />
    <img alt="img" className="content-image" src={Background} />
    <div className="content-details">{children}</div>
  </div>
);

Overlay.defaultProps = {};

Overlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Overlay;
