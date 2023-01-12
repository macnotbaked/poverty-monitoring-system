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
import HouseholdCriteriaList from "./HouseholdCriteriaList";
import ModalAddHouseholdCriteria from "./ModalAddHouseholdCriteria";

export const HouseholdCriteria = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const {
    loading,
    handleLoad,
    totalResult,
    result,
    handleSearch,
    handleChange,
  } = useFetchDataLoadMore(
    "/admin/admin-settings/household-criteria/read-limit-active-household-criteria.php",
    "/admin/admin-settings/household-criteria/read-all-active-household-criteria.php",
    5 // show number of records on a table
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="settings" />
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="content__header">
                <h3 className="t--bold py--2">
                  Criteria: <span className="color--primary">Household</span>
                </h3>
                <div className="content__button">
                  <button className="btn--primary" onClick={handleAdd}>
                    <FaPlusCircle /> <span>Add</span>
                  </button>
                  <Back />
                </div>
              </div>

              <div className="tab-menu">
                <input type="radio" name="tabs" id="population-criteria" />
                <label htmlFor="population-criteria" className="menu-label">
                  <Link
                    to={`${devNavUrl}/population-criteria`}
                    onClick={() => dispatch(setStartIndex(0))}
                  >
                    Population
                  </Link>
                </label>

                <input
                  type="radio"
                  name="tabs"
                  id="household-criteria"
                  defaultChecked
                />
                <label htmlFor="household-criteria" className="menu-label">
                  <span>Household</span>
                </label>

                <div className="tab">
                  <HouseholdCriteriaList
                    loading={loading}
                    handleLoad={handleLoad}
                    totalResult={totalResult}
                    result={result}
                    handleSearch={handleSearch}
                    handleChange={handleChange}
                    setItemEdit={setItemEdit}
                  />
                </div>

                <input type="radio" name="tabs" id="income-criteria" />
                <label htmlFor="income-criteria" className="menu-label">
                  <Link
                    to={`${devNavUrl}/income-criteria`}
                    onClick={() => dispatch(setStartIndex(0))}
                  >
                    Income
                  </Link>
                </label>

                <input type="radio" name="tabs" id="unemployment-criteria" />
                <label htmlFor="unemployment-criteria" className="menu-label">
                  <Link
                    to={`${devNavUrl}/unemployment-criteria`}
                    onClick={() => dispatch(setStartIndex(0))}
                  >
                    Unemployment
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.isAdd && <ModalAddHouseholdCriteria item={itemEdit} />}
      {store.error && <ModalError />}
      {store.success && <ModalSuccess />}
    </>
  );
};

export default HouseholdCriteria;
