import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { setIsAdd } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import useFetchDataLoadMore from "../../../../custom-hooks/useFetchDataLoadMore";
import { devNavUrl } from "../../../../helpers/functions-general";
import Navigation from "../../../../navigation/Navigation";
import ModalAddSitio from "./ModalAddSitio";
import SitioList from "./SitioList";

const Sitio = () => {
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
    "/admin/admin-sitio/read-sitio-limit.php",
    "/admin/admin-sitio/read-sitio-all.php",
    5 // show number of records on a table
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <Navigation menu="sitio" />
      <div className="main-content">
        <div className="container">
          <div className="title">
            <div className="row">
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="tab-title">Sitio</span>
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
            <div className="content-block bg--highlight ">
              <div className="tab">
                <SitioList
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

      {store.isAdd && <ModalAddSitio item={itemEdit} />}
    </>
  );
};

export default Sitio;
