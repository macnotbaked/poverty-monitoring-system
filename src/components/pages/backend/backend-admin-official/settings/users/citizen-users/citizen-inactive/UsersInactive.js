import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../../store/StoreContext";
import useFetchDataLoadMore from "../../../../../../../custom-hooks/useFetchDataLoadMore";
import useLoadAllActive from "../../../../../../../custom-hooks/useLoadAllActive";
import useLoadAllRole from "../../../../../../../custom-hooks/useLoadAllRole";
import { devNavUrl } from "../../../../../../../helpers/functions-general";
import Navigation from "../../../../../../../navigation/Navigation";
import SpinnerTab from "../../../../../../../widgets/SpinnerTab";
import ModalViewUsers from "./ModalViewUsers";
import UsersInactiveList from "./UsersInactiveList";

const UsersInactive = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { active } = useLoadAllActive(
    "/admin/admin-settings/users/read-user-active-all.php"
  );

  const { role } = useLoadAllRole("/admin/admin-settings/roles/read-role.php");

  const {
    loading,
    handleLoad,
    totalResult,
    result,
    handleSearch,
    handleChange,
  } = useFetchDataLoadMore(
    "/admin/admin-settings/users/read-user-inactive-limit.php",
    "/admin/admin-settings/users/read-user-inactive-all.php",
    5 // show number of records on a table
  );

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
              <div className="tab-menu shadow--primary pxy--3">
                <input type="radio" name="tabs" id="tab-users" defaultChecked />
                <label htmlFor="tab-users" className="menu-label">
                  <span>List</span>
                </label>
                <div className="tab">
                  <div className="tab-submenu" style={{ paddingTop: "unset" }}>
                    <input type="radio" name="sub-tabs" id="tab-active" />
                    <label htmlFor="tab-active" className="menu-label tab-icon">
                      <Link
                        to={`${devNavUrl}/admin/admin-official-users`}
                        onClick={() => {
                          dispatch(setStartIndex(0));
                        }}
                      >
                        Active{" "}
                        <small>
                          {" "}
                          {loading ? <SpinnerTab /> : active.length}
                        </small>
                      </Link>
                    </label>

                    <input
                      type="radio"
                      name="sub-tabs"
                      id="tab-inactive"
                      defaultChecked
                    />
                    <label
                      htmlFor="tab-inactive"
                      className="menu-label tab-icon"
                    >
                      <span>
                        Inactive{" "}
                        <small>
                          {" "}
                          {loading ? <SpinnerTab /> : result.length}
                        </small>
                      </span>
                    </label>
                    <div className="tab">
                      <UsersInactiveList
                        loading={loading}
                        handleLoad={handleLoad}
                        totalResult={totalResult}
                        result={result}
                        handleSearch={handleSearch}
                        handleChange={handleChange}
                        setItemEdit={setItemEdit}
                      />
                    </div>
                  </div>
                </div>

                <input type="radio" name="tabs" id="tab-role" />
                <label htmlFor="tab-role" className="menu-label">
                  <Link
                    to={`${devNavUrl}/admin/users-roles`}
                    onClick={() => {
                      dispatch(setStartIndex(0));
                    }}
                  >
                    Role
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.isAdd && <ModalViewUsers item={itemEdit} role={role} />}
      {/* <ModalViewUsers /> */}
    </>
  );
};

export default UsersInactive;
