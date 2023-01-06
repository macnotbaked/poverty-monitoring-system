import React from "react";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import useFetchDataLoadMore from "../../../../../../custom-hooks/useFetchDataLoadMore";
import Header from "../../../../../../header/Header";
import { devNavUrl } from "../../../../../../helpers/functions-general";
import Navigation from "../../../../../../navigation/Navigation";
import Back from "../../../../../../widgets/Back";
import ModalError from "../../../../../../widgets/ModalError";
import ModalSuccess from "../../../../../../widgets/ModalSuccess";
import InactiveRepresentativeList from "./InactiveRepresentativeList";

export const InactiveRepresentative = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const {
    loading,
    handleLoad,
    totalResult,
    result,
    handleSearch,
    handleChange,
  } = useFetchDataLoadMore(
    "/admin/admin-representative/read-representative-limit-inactive.php",
    "/admin/admin-representative/read-representative-all-inactive.php",
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
                <input type="radio" name="tabs" id="user" />
                <label htmlFor="user" className="menu-label">
                  <Link
                    to={`${devNavUrl}/admin/inactive-users`}
                    onClick={() => dispatch(setStartIndex(0))}
                  >
                    Users{" "}
                  </Link>
                </label>

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

                <input type="radio" name="tabs" id="sitio" defaultChecked />
                <label htmlFor="sitio" className="menu-label">
                  <Link
                    to={`${devNavUrl}/admin/inactive-sitio`}
                    onClick={() => dispatch(setStartIndex(0))}
                  >
                    Purok{" "}
                  </Link>
                </label>

                <input
                  type="radio"
                  name="tabs"
                  id="representative"
                  defaultChecked
                />
                <label htmlFor="representative" className="menu-label">
                  <span>Representative</span>
                </label>

                <div className="tab">
                  <InactiveRepresentativeList
                    loading={loading}
                    handleLoad={handleLoad}
                    totalResult={totalResult}
                    result={result}
                    handleSearch={handleSearch}
                    handleChange={handleChange}
                  />
                </div>
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

export default InactiveRepresentative;
