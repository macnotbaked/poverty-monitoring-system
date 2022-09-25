import React from "react";

const Spinner = () => {
  return (
    // <div className="spinner">
    //   <div className="loader">
    //     <span className="load-1"></span>
    //     <span className="load-2"></span>
    //     <span className="load-3"></span>
    //   </div>
    // </div>
    <div className="spinner">
      <div className="progress">
        <div className="color"></div>
        <span>loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
