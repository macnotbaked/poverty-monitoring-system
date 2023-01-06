import React from "react";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../../store/StoreContext";
import useFetchDataLoadMore from "../../../../../../../custom-hooks/useFetchDataLoadMore";
import Header from "../../../../../../../header/Header";
import { devNavUrl } from "../../../../../../../helpers/functions-general";
import Navigation from "../../../../../../../navigation/Navigation";
import Back from "../../../../../../../widgets/Back";
import ModalError from "../../../../../../../widgets/ModalError";
import ModalSuccess from "../../../../../../../widgets/ModalSuccess";
import InactiveHouseholdCriteriaList from "./InactiveHouseholdCriteriaList";

export const InactiveHouseholdCriteria = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const {
    loading,
    handleLoad,
    totalResult,
    result,
    handleSearch,
    handleChange,
  } = useFetchDataLoadMore(
    "/admin/admin-settings/household-criteria/read-limit-inactive-household-criteria.php",
    "/admin/admin-settings/household-criteria/read-all-inactive-household-criteria.php",
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
                    Users
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

                <input type="radio" name="tabs" id="criteria" defaultChecked />
                <label htmlFor="criteria" className="menu-label">
                  <span>Program Criteria</span>
                </label>

                <div className="tab">
                  <div className="tab-menu">
                    <input
                      type="radio"
                      name="sub-tabs"
                      id="inactive-population"
                    />
                    <label htmlFor="inactive-population" className="menu-label">
                      <Link
                        to={`${devNavUrl}/admin/inactive-population-criteria`}
                        onClick={() => dispatch(setStartIndex(0))}
                      >
                        Population
                      </Link>
                    </label>

                    <input
                      type="radio"
                      name="sub-tabs"
                      id="inactive-household"
                      defaultChecked
                    />
                    <label htmlFor="inactive-household" className="menu-label">
                      <span>Household</span>
                    </label>

                    <div className="tab">
                      <InactiveHouseholdCriteriaList
                        loading={loading}
                        handleLoad={handleLoad}
                        totalResult={totalResult}
                        result={result}
                        handleSearch={handleSearch}
                        handleChange={handleChange}
                      />
                    </div>

                    <input type="radio" name="sub-tabs" id="inactive-income" />
                    <label htmlFor="inactive-income" className="menu-label">
                      <Link
                        to={`${devNavUrl}/admin/inactive-income-criteria`}
                        onClick={() => dispatch(setStartIndex(0))}
                      >
                        Income
                      </Link>
                    </label>

                    <input
                      type="radio"
                      name="sub-tabs"
                      id="inactive-unemployment"
                    />
                    <label
                      htmlFor="inactive-unemployment"
                      className="menu-label"
                    >
                      <Link
                        to={`${devNavUrl}/admin/inactive-unemployment-criteria`}
                        onClick={() => dispatch(setStartIndex(0))}
                      >
                        Unemployment
                      </Link>
                    </label>
                  </div>
                </div>

                <input type="radio" name="tabs" id="sitio" />
                <label htmlFor="sitio" className="menu-label">
                  <Link
                    to={`${devNavUrl}/admin/inactive-sitio`}
                    onClick={() => dispatch(setStartIndex(0))}
                  >
                    Purok
                  </Link>
                </label>

                <input type="radio" name="tabs" id="representative" />
                <label htmlFor="representative" className="menu-label">
                  <Link
                    to={`${devNavUrl}/admin/inactive-representative`}
                    onClick={() => dispatch(setStartIndex(0))}
                  >
                    Representative
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

export default InactiveHouseholdCriteria;
