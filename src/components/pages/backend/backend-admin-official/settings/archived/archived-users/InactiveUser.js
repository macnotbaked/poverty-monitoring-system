import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  setIsAdd,
  setStartIndex,
} from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import useFetchDataLoadMore from "../../../../../../custom-hooks/useFetchDataLoadMore";
import Header from "../../../../../../header/Header";
import { devNavUrl } from "../../../../../../helpers/functions-general";
import Navigation from "../../../../../../navigation/Navigation";
import Back from "../../../../../../widgets/Back";
import ModalError from "../../../../../../widgets/ModalError";
import ModalSuccess from "../../../../../../widgets/ModalSuccess";
import InactiveUserList from "./InactiveUserList";

export const InactiveUser = () => {
  const { store, dispatch } = React.useContext(StoreContext);

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
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="settings" />
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="content__header">
                <h3 className="t--bold py--2">Archived</h3>
                <div className="content__button">
                  <Back />
                </div>
              </div>

              <div className="tab-menu">
                <input type="radio" name="tabs" id="user" defaultChecked />
                <label htmlFor="user" className="menu-label">
                  <span>Users</span>
                </label>
                <div className="tab">
                  <InactiveUserList
                    loading={loading}
                    handleLoad={handleLoad}
                    totalResult={totalResult}
                    result={result}
                    handleSearch={handleSearch}
                    handleChange={handleChange}
                  />
                </div>

                <input type="radio" name="tabs" id="program" />
                <label htmlFor="program" className="menu-label">
                  <Link
                    to={`${devNavUrl}/admin/inactive-population-program`}
                    onClick={() => dispatch(setStartIndex(0))}
                  >
                    Recommended Programs
                  </Link>
                </label>

                <input type="radio" name="tabs" id="criteria" />
                <label htmlFor="criteria" className="menu-label">
                  <Link
                    to={`${devNavUrl}/admin/inactive-population-criteria`}
                    onClick={() => dispatch(setStartIndex(0))}
                  >
                    Program Criteria
                  </Link>
                </label>

                <input type="radio" name="tabs" id="sitio" />
                <label htmlFor="sitio" className="menu-label">
                  <Link
                    to={`${devNavUrl}/admin/inactive-sitio`}
                    onClick={() => dispatch(setStartIndex(0))}
                  >
                    Sitio
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.error && <ModalError />}
      {store.success && <ModalSuccess />}
    </>
  );
};

export default InactiveUser;
