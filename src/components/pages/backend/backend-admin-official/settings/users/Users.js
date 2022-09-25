import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import { devNavUrl } from "../../../../../helpers/functions-general";
import Navigation from "../../../../../navigation/Navigation";
import UsersList from "./UsersList";

const Users = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <Navigation menu="settings" />
      <div className="main-content">
        <div className="container">
          <div className="title">
            <div className="row">
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="tab-title">{"Settings"}</span>
                <Link
                  className="btn--back float--right"
                  to={`${devNavUrl}/admin/settings`}
                  onClick={() => {
                    dispatch(setStartIndex(0));
                  }}
                >
                  <IoMdArrowRoundBack /> <span>Back</span>
                </Link>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="content-block">
              <UsersList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
