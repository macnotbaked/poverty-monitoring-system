import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  setIsAdd,
  setStartIndex,
} from "../../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../../store/StoreContext";
import useFetchDataLoadMore from "../../../../../../../custom-hooks/useFetchDataLoadMore";
import useLoadAllInactive from "../../../../../../../custom-hooks/useLoadAllInactive";
import useLoadAllRole from "../../../../../../../custom-hooks/useLoadAllRole";
import { devNavUrl } from "../../../../../../../helpers/functions-general";
import Navigation from "../../../../../../../navigation/Navigation";
import ModalError from "../../../../../../../widgets/ModalError";
import ModalSuccess from "../../../../../../../widgets/ModalSuccess";
import SpinnerTab from "../../../../../../../widgets/SpinnerTab";
import ModalAddUsers from "./ModalAddUsers";
import UsersActiveList from "./UsersActiveList";

const UsersActive = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { role } = useLoadAllRole("/admin/admin-settings/roles/read-role.php");

  const { inactive } = useLoadAllInactive(
    "/admin/admin-settings/users/read-user-inactive-all.php"
  );

  const {
    loading,
    handleLoad,
    totalResult,
    result,
    handleSearch,
    handleChange,
  } = useFetchDataLoadMore(
    "/admin/admin-settings/users/read-user-active-limit.php",
    "/admin/admin-settings/users/read-user-active-all.php",
    5 // show number of records on a table
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

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
                <button className="btn float--right " onClick={handleAdd}>
                  <AiFillPlusCircle /> <span>Add</span>
                </button>
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
                        Active{" "}
                        <small>
                          {loading ? <SpinnerTab /> : result.length}
                        </small>
                      </span>
                    </label>
                    <div className="tab">
                      <UsersActiveList
                        loading={loading}
                        handleLoad={handleLoad}
                        totalResult={totalResult}
                        result={result}
                        handleSearch={handleSearch}
                        handleChange={handleChange}
                        setItemEdit={setItemEdit}
                      />
                    </div>

                    <input type="radio" name="sub-tabs" id="tab-inactive" />
                    <label
                      htmlFor="tab-inactive"
                      className="menu-label tab-icon"
                    >
                      <Link
                        to={`${devNavUrl}/admin/admin-official-users-inactive`}
                        onClick={() => {
                          dispatch(setStartIndex(0));
                        }}
                      >
                        Inactive{" "}
                        <small>
                          {loading ? <SpinnerTab /> : inactive.length}
                        </small>
                      </Link>
                    </label>
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

      {store.isAdd && <ModalAddUsers item={itemEdit} role={role} />}
      {store.error && <ModalError />}
      {store.success && <ModalSuccess />}
    </>
  );
};

export default UsersActive;
