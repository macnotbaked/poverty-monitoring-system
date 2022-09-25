import React from "react";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import { devNavUrl } from "../../../../../helpers/functions-general";

const UsersList = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <div className="grid-col-2 mb--2 shadow--primary pxy--2">
        {/* 1 */}
        <div className="setting shadow--primary ">
          <h4 className="t--bold mb--1">Admin and Official Users</h4>
          <h5>Manage the system users.</h5>
          <div className="mb--4">
            <Link
              to={`${devNavUrl}/admin/admin-official-users`}
              className="btn--primary mt--3"
              onClick={() => {
                dispatch(setStartIndex(0));
              }}
            >
              View
            </Link>
          </div>
        </div>

        {/* 2 */}
        <div className="setting shadow--primary ">
          <h4 className="t--bold mb--1">Citizen Users</h4>
          <h5>Manage the services being offered.</h5>
          <div className="mb--4">
            <label htmlFor="tab-events-calendar">
              <Link
                to={`${devNavUrl}/admin/system-information`}
                onClick={() => {
                  dispatch(setStartIndex(0));
                }}
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

export default UsersList;
