import React from "react";
import PropTypes from "prop-types";
import Summer from "../geolocation/Summer";
import Winter from "../geolocation/Winter";

const SuccessGeo = ({ lat }) => {  
  const getSeason = (lat, month) => month > 2 && month < 9 
  ?  lat > 0 ? <Summer /> : <Winter />
  :  lat > 0 ? <Winter /> : <Summer />
  
  return <div>{getSeason(lat, new Date().getMonth())}</div>;
};

SuccessGeo.propTypes = {
  lat: PropTypes.number.isRequired,
};

export default SuccessGeo;
