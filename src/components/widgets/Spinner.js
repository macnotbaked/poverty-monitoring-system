import React from "react";

const Spinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spin-load">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="loading mt--2">
        <div className="scanner">
          <span>Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
