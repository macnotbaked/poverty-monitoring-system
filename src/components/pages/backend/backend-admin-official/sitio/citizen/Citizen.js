import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../../../../store/StoreContext";
import useFetchDataLoadMore from "../../../../../custom-hooks/useFetchDataLoadMore";
import useLoadAllActivePurok from "../../../../../custom-hooks/useLoadAllActivePurok";
import Header from "../../../../../header/Header";
import {
  devNavUrl,
  getUrlParam,
} from "../../../../../helpers/functions-general";
import Navigation from "../../../../../navigation/Navigation";
import Back from "../../../../../widgets/Back";
import CitizenList from "./CitizenList";

const Citizen = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const purokId = getUrlParam().get("sid");

  const { loadingActivePurok, activePurok } = useLoadAllActivePurok(
    "/admin/admin-sitio/read-sitio-by-id.php",
    purokId
  );

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

  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="sitio" />
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="content__header">
                <h3 className="t--bold py--2">
                  {activePurok.length
                    ? activePurok[0].sitio_name
                    : "Loading..."}
                </h3>
                <div className="content__button">
                  <Link
                    className="btn--primary mr--1"
                    to={`${devNavUrl}/admin/household-add?sid=${purokId}`}
                  >
                    <FaPlusCircle /> <span>Add</span>
                  </Link>
                  <Back />
                </div>
              </div>

              <CitizenList
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

export default Citizen;
