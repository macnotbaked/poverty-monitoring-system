import React from "react";

const SpinnerButton = () => {
  return (
    <div className="spinner">
      <svg viewBox="25 25 50 50" className="circular">
        <circle
          strokeMiterlimit="10"
          strokeWidth="5"
          fill="none"
          r="20"
          cy="50"
          cx="50"
          className="path"
        ></circle>
      </svg>
    </div>
  );
};

export default SpinnerButton;
