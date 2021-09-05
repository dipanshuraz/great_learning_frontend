import React from "react";
import PropTypes from "prop-types";

const Form = ({
  name,
  email,
  mobile,
  experience,
  organization,
  handleChange,
  handleSubmit,
}) => (
  <form>
    <span>Get Started Now</span>
    <hr className="seperator" />
    <input
      name="name"
      value={name}
      onChange={handleChange}
      type="text"
      placeholder="Name"
    />
    <input
      name="email"
      value={email}
      onChange={handleChange}
      type="email"
      placeholder="Email"
    />
    <input
      name="mobile"
      value={mobile}
      onChange={handleChange}
      type="phone"
      placeholder="Mobile No"
    />
    <input
      name="experience"
      value={experience}
      onChange={handleChange}
      type="text"
      placeholder="Working Experience"
    />
    <select
      value={organization}
      onBlur={handleChange}
      name="organization"
      id="">
      <option value="Current Organization">Current Organization</option>
      <option value="Last Organization">Last Organization</option>
    </select>
    <div className="checkbox-container">
      <input className="" type="checkbox" id="gridCheck1" />
      <span>I authorize a Great Learning representative to contact me.</span>
    </div>
    <button onClick={handleSubmit} type="button" className="apply-now">
      Apply Now
    </button>
  </form>
);

Form.defaultProps = {
  name: "",
  email: "",
  mobile: "",
  experience: "",
  organization: "",
};

Form.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  mobile: PropTypes.string,
  experience: PropTypes.string,
  organization: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
