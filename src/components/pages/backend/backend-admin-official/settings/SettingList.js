import React from "react";
import { Link } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";

const SettingList = () => {
  return (
    <>
      <div className="grid-col-2 mb--2">
        {/* 1 */}
        <div className="setting shadow--primary ">
          <h4 className="t--bold mb--1">Users</h4>
          <h5>Manage the system users.</h5>
          <div className="mb--4">
            <Link
              to={`${devNavUrl}/admin/users`}
              className="btn--primary mt--3"
            >
              View
            </Link>
          </div>
        </div>

        {/* 2 */}
        <div className="setting shadow--primary ">
          <h4 className="t--bold mb--1">System Information</h4>
          <h5>Manage the services being offered.</h5>
          <div className="mb--4">
            <label htmlFor="tab-events-calendar">
              <Link
                to={`${devNavUrl}/admin/system-information`}
                className="btn--primary mt--3"
              >
                View
              </Link>
            </label>
          </div>
        </div>

        {/* 3 */}
        <div className="setting shadow--primary ">
          <h4 className="t--bold mb--1">Recommended Program</h4>
          <h5>Manage the services being offered.</h5>
          <div className="mb--4">
            <label htmlFor="tab-events-calendar">
              <Link
                to={`${devNavUrl}/admin/recommended-programs`}
                className="btn--primary mt--3"
              >
                View
              </Link>
            </label>
          </div>
        </div>

        {/* 4 */}
        <div className="setting shadow--primary ">
          <h4 className="t--bold mb--1">Program Criteria</h4>
          <h5>Manage the services being offered.</h5>
          <div className="mb--4">
            <label htmlFor="tab-events-calendar">
              <Link
                to={`${devNavUrl}/admin/program-criteria`}
                className="btn--primary mt--3"
              >
                View
              </Link>
            </label>
          </div>
        </div>

        {/* 5 */}
        <div className="setting shadow--primary ">
          <h4 className="t--bold mb--1">Evaluation Questionnaire</h4>
          <h5>Manage the services being offered.</h5>
          <div className="mb--4">
            <label htmlFor="tab-events-calendar">
              <Link
                to={`${devNavUrl}/admin/evaluation-questionnaire`}
                className="btn--primary mt--3"
              >
                View
              </Link>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingList;
