import React from "react";

const SpinnerWindow = () => {
  return (
    <div className="loading-spinner-window">
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

export default SpinnerWindow;
