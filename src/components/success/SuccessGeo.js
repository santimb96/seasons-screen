import React from "react";
import PropTypes from "prop-types";

const SuccessGeo = ({ lat, long }) => {
  return (
    <div>
      <h1 className="text-success text-center">
        Latitude: {lat}, and longitude: {long}
      </h1>
    </div>
  );
};

SuccessGeo.propTypes = {
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
};

export default SuccessGeo;
