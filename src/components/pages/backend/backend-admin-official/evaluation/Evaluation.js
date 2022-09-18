import React from "react";
import { HiFilter } from "react-icons/hi";
import { Link } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";
import Navigation from "../../../../navigation/Navigation";
import EvaluationList from "./EvaluationList";

const Evaluation = () => {
  return (
    <>
      <Navigation menu="evaluation" />
      <div className="main-content">
        <div className="container">
          <div className="title">
            <div className="row">
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="tab-title">Evaluation</span>
                <Link
                  className="btn float--right "
                  to={`${devNavUrl}/admin/evaluation-filter`}
                >
                  <HiFilter /> <span>Filter</span>
                </Link>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="content-block bg--highlight ">
              <div className="tab">
                {/* <h4 className=" title-box-light mb--20">
                    Information Posting
                  </h4> */}

                <EvaluationList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Evaluation;
