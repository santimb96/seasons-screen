import React from "react";
import PropTypes from "prop-types";

const ErrorGeo = ({ error }) => {
  return (
    <div>
      <h2 className="text-danger text-center">Error message: {error}</h2>
    </div>
  );
};

ErrorGeo.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorGeo;
