/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import PropTypes from "prop-types";

export const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="Compare__Table__Column frostBox">{title}</div>
        <div className="accordion-title-icon">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content">{children}</div>}
    </div>
  );
};

Accordion.defaultProps = {
  title: "",
};

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
