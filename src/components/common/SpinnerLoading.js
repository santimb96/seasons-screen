import React from "react";

const SpinnerLoading = ({msg}) => {
  return (
    <div>
      <div className="d-flex justify-content-center m-5">
        <div
          className="spinner-border"
          style={{ width: "10rem", height: "10rem" }}
          role="status"
        ></div>
      </div>
      <span className="d-flex justify-content-center">{msg}</span>
    </div>
  );
};

SpinnerLoading.defaultProps = {
    msg: 'Loading...'
}



export default SpinnerLoading;
