import React from "react";
import { FaEye, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../../../../../store/StoreAction";
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
import LoadMore from "../../../../../widgets/LoadMore";
import NoData from "../../../../../widgets/NoData";
import SearchBox from "../../../../../widgets/SearchBox";
import Spinner from "../../../../../widgets/Spinner";

const EvaluationFilterCitezenList = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const search = React.useRef(null);

  let count = 0;

  const purokId = getUrlParam().get("sid");

  const { activePurok } = useLoadAllActivePurok(
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
    "/admin/admin-evaluation/enable-evaluation/read-representative-limit.php",
    "/admin/admin-evaluation/enable-evaluation/read-representative-all.php",
    5, // show number of records on a table
    purokId
  );

  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="evaluation" />
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="content__header">
                <h3 className="t--bold py--2">
                  {purokId === 0 || purokId === null || purokId === ""
                    ? "No Data"
                    : activePurok.length > 0
                    ? activePurok[0].sitio_name
                    : "Loading..."}
                </h3>
                <div className="content__button">
                  <Link
                    className="btn--primary mr--1"
                    to={`${devNavUrl}/household-add?sid=${purokId}`}
                    onClick={() => dispatch(setStartIndex(0))}
                  >
                    <FaPlusCircle /> <span>Add</span>
                  </Link>
                  <Back />
                </div>
              </div>

              <SearchBox
                search={search}
                handleSearch={handleSearch}
                handleChange={handleChange}
                loading={loading}
                result={result}
                store={store}
                url="/admin/admin-representative/read-representative-search.php"
              />

              <div className="table__container">
                {loading && <Spinner />}
                <table>
                  <thead className="">
                    <tr>
                      <th>#</th>
                      <th>Household Number</th>
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.length > 0 ? (
                      result.map((item, key) => {
                        count += 1;
                        return (
                          <tr key={key}>
                            <td>{count}.</td>
                            <td>
                              House #{Number(item.representative_house_number)}
                            </td>

                            <td>{item.representative_name}</td>

                            <td>{item.representative_contact}</td>
                            <td>
                              <div className="d--flex justify-center">
                                <Link
                                  to={`${devNavUrl}/purok/household-view?hid=${item.representative_aid}`}
                                  className="dropdown tooltip--table"
                                  data-tooltip="View"
                                >
                                  <span>
                                    <FaEye />
                                  </span>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr className="nodata">
                        <td colSpan="100%">
                          <NoData />
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="mt--2 t--center row">
                {!store.isSearch && (
                  <LoadMore
                    handleLoad={handleLoad}
                    loading={loading}
                    result={result}
                    totalResult={totalResult}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EvaluationFilterCitezenList;
