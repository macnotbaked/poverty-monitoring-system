import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { devNavUrl } from "../../../../../helpers/functions-general";
import Navigation from "../../../../../navigation/Navigation";
import UsersActiveList from "./UsersActiveList";

const UsersActive = () => {
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
                  className="btn float--right"
                  to={`${devNavUrl}/admin/settings`}
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
              <div className="tab-menu shadow--primary pxy--3">
                <input type="radio" name="tabs" id="tab-users" defaultChecked />
                <label htmlFor="tab-users" className="menu-label">
                  <span>List</span>
                </label>
                <div className="tab">
                  <div className="tab-submenu" style={{ paddingTop: "unset" }}>
                    <input
                      type="radio"
                      name="sub-tabs"
                      id="tab-active"
                      defaultChecked
                    />
                    <label htmlFor="tab-active" className="menu-label tab-icon">
                      <span>
                        Active <small className="badge--active">3</small>
                      </span>
                    </label>
                    <div className="tab">
                      <UsersActiveList />
                    </div>

                    <input type="radio" name="sub-tabs" id="tab-inactive" />
                    <label
                      htmlFor="tab-inactive"
                      className="menu-label tab-icon"
                    >
                      <Link
                        to={`${devNavUrl}/admin/settings-system-user-account-inactive`}
                      >
                        Inactive <small className="badge--active">3</small>
                      </Link>
                    </label>
                  </div>
                </div>

                <input type="radio" name="tabs" id="tab-role" />
                <label htmlFor="tab-role" className="menu-label">
                  <Link to={`${devNavUrl}/admin/users-role`}>Role</Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersActive;
