import { Form, Formik } from "formik";
import React from "react";
import { Bar } from "react-chartjs-2";
import { AiFillEye } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { setStartIndex } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import useFetchDataLoadMore from "../../../../custom-hooks/useFetchDataLoadMore";
import Header from "../../../../header/Header";
import { InputText } from "../../../../helpers/FormInputs";
import { devNavUrl, formatDate } from "../../../../helpers/functions-general";
import Navigation from "../../../../navigation/Navigation";
import Back from "../../../../widgets/Back";
import LoadMore from "../../../../widgets/LoadMore";
import NoData from "../../../../widgets/NoData";
import SearchBox from "../../../../widgets/SearchBox";
import Spinner from "../../../../widgets/Spinner";
import SpinnerButton from "../../../../widgets/SpinnerButton";

const EvaluationFilter = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const search = React.useRef(null);
  let count = 0;

  const {
    loading,
    handleLoad,
    totalResult,
    result,
    handleSearch,
    handleChange,
  } = useFetchDataLoadMore(
    "/admin/admin-evaluation/enable-evaluation/read-limit-evaluation.php",
    "/admin/admin-evaluation/enable-evaluation/read-all-evaluation.php",
    5 // show number of records on a table
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
                <h3 className="t--bold py--2">Santa Elena</h3>
                <div className="content__button">
                  <Back />
                </div>
              </div>

              <div className="table__container">
                {loading && <Spinner />}
                <SearchBox
                  search={search}
                  handleSearch={handleSearch}
                  handleChange={handleChange}
                  loading={loading}
                  result={result}
                  store={store}
                  url="/admin/admin-evaluation/enable-evaluation/read-search-evaluation.php"
                />
                <table>
                  <thead className="">
                    <tr>
                      <th className="" rowSpan="1">
                        #
                      </th>
                      <th className="row--name" rowSpan="1">
                        Date Coverage
                      </th>
                      <th rowSpan="1">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.length > 0 ? (
                      result.map((item, key) => {
                        count += 1;
                        return (
                          <tr key={key}>
                            <td data-label="#">{count}.</td>
                            <td data-label="Date Coverage">
                              {formatDate(item.evaluation_list_created)} to{" "}
                              {formatDate(item.evaluation_list_datetime)}
                            </td>
                            <td data-label="Action">
                              <div className="d--flex">
                                <Link
                                  to={`${devNavUrl}/admin/evaluation-filter/date?date=${item.evaluation_list_created}to${item.evaluation_list_datetime}&eid=${item.evaluation_list_aid}`}
                                  className="dropdown tooltip--table"
                                  data-tooltip="View"
                                  onClick={() => dispatch(setStartIndex(0))}
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
      </div>
    </>
  );
};

export default EvaluationFilter;
