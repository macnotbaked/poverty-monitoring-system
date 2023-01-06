import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { setIsAdd } from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import useFetchDataLoadMore from "../../../../../../custom-hooks/useFetchDataLoadMore";
import Header from "../../../../../../header/Header";
import Navigation from "../../../../../../navigation/Navigation";
import Back from "../../../../../../widgets/Back";
import ModalError from "../../../../../../widgets/ModalError";
import ModalSuccess from "../../../../../../widgets/ModalSuccess";
import ModalAddUnemploymentProgram from "./ModalAddUnemploymentProgram";
import UnemploymentRateList from "./UnemploymentRateList";

export const UnemploymentRate = () => {
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
    "/admin/admin-settings/unemployment-program/read-limit-active-unemployment-program.php",
    "/admin/admin-settings/unemployment-program/read-all-active-unemployment-program.php",
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
                  Program:{" "}
                  <span className="color--primary">Unemployment Rate</span>
                </h3>
                <div className="content__button">
                  <button className="btn--primary" onClick={handleAdd}>
                    <FaPlusCircle /> <span>Add</span>
                  </button>
                  <Back />
                </div>
              </div>
              <UnemploymentRateList
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

      {store.isAdd && <ModalAddUnemploymentProgram item={itemEdit} />}
      {store.error && <ModalError />}
      {store.success && <ModalSuccess />}
    </>
  );
};

export default UnemploymentRate;
