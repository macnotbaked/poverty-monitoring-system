import React from "react";
import CitizenNavigation from "../../../../navigation/CitizenNavigation";

const CitizenEvaluation = () => {
  return (
    <>
      <CitizenNavigation menu="citizen-evaluation" />
      <div className="main-content">
        <div className="container">
          <div className="title">
            <div className="row">
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="tab-title">{"Evaluation"}</span>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CitizenEvaluation;
