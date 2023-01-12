import React from "react";
import { StoreContext } from "../../../../../store/StoreContext";
import useFetchDataLoadMore from "../../../../custom-hooks/useFetchDataLoadMore";
import Header from "../../../../header/Header";
import { getUrlParam } from "../../../../helpers/functions-general";
import Navigation from "../../../../navigation/Navigation";
import CitizensList from "./CitizensList";

const Citizens = () => {
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
    "/admin/admin-representative/read-representative-limit.php",
    "/admin/admin-representative/read-representative-all.php",
    20 // show number of records on a table
  );

  const sitioId = getUrlParam().get("sid");

  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="household" />
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="content__header">
                <h3 className="t--bold py--2">Household</h3>
              </div>
              <CitizensList
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
    </>
  );
};

export default Citizens;
