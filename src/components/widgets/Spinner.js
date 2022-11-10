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
    // <div className="spinner">
    //   <div className="progress">
    //     <div className="color"></div>
    //     <span>loading...</span>
    //   </div>
    // </div>
    <>
      <div className="loading-spinner">
        <div class="spin-load">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="loading mt--2">
          <div class="scanner">
            <span>Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
