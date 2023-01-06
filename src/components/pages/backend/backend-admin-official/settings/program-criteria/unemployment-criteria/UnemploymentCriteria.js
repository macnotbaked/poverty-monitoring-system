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
import ModalAddUnemploymentCriteria from "./ModalAddUnemploymentCriteria";
import UnemploymentCriteriaList from "./UnemploymentCriteriaList";

export const UnemploymentCriteria = () => {
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
    "/admin/admin-settings/unemployment-criteria/read-limit-active-unemployment-criteria.php",
    "/admin/admin-settings/unemployment-criteria/read-all-active-unemployment-criteria.php",
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
                  Criteria: <span className="color--primary">Unemployment</span>
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
                    to={`${devNavUrl}/admin/population-criteria`}
                    onClick={() => dispatch(setStartIndex(0))}
                  >
                    Population
                  </Link>
                </label>

                <input type="radio" name="tabs" id="household-criteria" />
                <label htmlFor="household-criteria" className="menu-label">
                  <Link
                    to={`${devNavUrl}/admin/household-criteria`}
                    onClick={() => dispatch(setStartIndex(0))}
                  >
                    Household
                  </Link>
                </label>

                <input type="radio" name="tabs" id="income-criteria" />
                <label htmlFor="income-criteria" className="menu-label">
                  <Link
                    to={`${devNavUrl}/admin/income-criteria`}
                    onClick={() => dispatch(setStartIndex(0))}
                  >
                    Income
                  </Link>
                </label>

                <input
                  type="radio"
                  name="tabs"
                  id="unemployment-criteria"
                  defaultChecked
                />
                <label htmlFor="unemployment-criteria" className="menu-label">
                  <span>Unemployment</span>
                </label>

                <div className="tab">
                  <UnemploymentCriteriaList
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
          </div>
        </div>
      </div>

      {store.isAdd && <ModalAddUnemploymentCriteria item={itemEdit} />}
      {store.error && <ModalError />}
      {store.success && <ModalSuccess />}
    </>
  );
};

export default UnemploymentCriteria;
