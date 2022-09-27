import React from "react";
import CitizenNavigation from "../../../../navigation/CitizenNavigation";

const MyInfo = () => {
  return (
    <>
      <CitizenNavigation menu="my-info" />
      <div className="main-content">
        <div className="container">
          <div className="title">
            <div className="row">
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="tab-title">{"My Information"}</span>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyInfo;
