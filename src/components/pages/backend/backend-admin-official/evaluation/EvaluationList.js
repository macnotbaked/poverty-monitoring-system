import { Chart as ChartJS } from "chart.js/auto";
import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { AiFillEye } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArchive, FaEdit, FaEye } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import useLoadAllActiveRepresentative from "../../../../custom-hooks/useLoadAllActiveRepresentative";
import useLoadAllActiveRepresentativeCount from "../../../../custom-hooks/useLoadAllActiveRepresentativeCount";
import { devNavUrl } from "../../../../helpers/functions-general";
import LoadMore from "../../../../widgets/LoadMore";
import NoData from "../../../../widgets/NoData";
import SearchBox from "../../../../widgets/SearchBox";
import Spinner from "../../../../widgets/Spinner";

const EvaluationList = ({
  loading,
  handleLoad,
  totalResult,
  result,
  handleSearch,
  handleChange,
}) => {
  const search = React.useRef(null);
  const { store, dispatch } = React.useContext(StoreContext);
  let count = 0;

  const { countRepresentative } = useLoadAllActiveRepresentativeCount(
    "/admin/admin-representative/read-representative-count-all.php"
  );

  const { activeRepresentative } = useLoadAllActiveRepresentative(
    "/admin/admin-representative/read-representative.php"
  );

  const getTotalPopulation = (id) => {
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_purok_id) === Number(id)) {
          val += Number(item.representative_total_people);
        }
      });
    }

    return val;
  };

  const getTotalUnderage = (id) => {
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_purok_id) === Number(id)) {
          val += Number(item.representative_total_underage);
        }
      });
    }

    return val;
  };

  const getTotalMiddleAge = (id) => {
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_purok_id) === Number(id)) {
          val += Number(item.representative_total_midage);
        }
      });
    }

    return val;
  };

  const getTotalAdult = (id) => {
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_purok_id) === Number(id)) {
          val += Number(item.representative_total_adult);
        }
      });
    }

    return val;
  };

  const getTotalSenior = (id) => {
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_purok_id) === Number(id)) {
          val += Number(item.representative_total_seniors);
        }
      });
    }

    return val;
  };

  const getTotalHousehold = (id) => {
    let val = 0;

    if (countRepresentative.length) {
      countRepresentative.map((item) => {
        if (Number(item.representative_purok_id) === Number(id)) {
          val = item.total;
        }
      });
    }

    return val;
  };

  const getTotalHouseholdOwn = (id) => {
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_purok_id) === Number(id)) {
          val += item.representative_household_living_id === "1";
        }
      });
    }

    return val;
  };

  const getTotalHouseholdRent = (id) => {
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_purok_id) === Number(id)) {
          val += item.representative_household_living_id === "2";
        }
      });
    }

    return val;
  };

  const getTotalHouseholdLivingWith = (id) => {
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_purok_id) === Number(id)) {
          val += item.representative_household_living_id === "3";
        }
      });
    }

    return val;
  };

  const getTotalUnemployment = (id) => {
    let ableToWork = 0;
    let employed = 0;
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_purok_id) === Number(id)) {
          ableToWork += Number(item.representative_total_able_work);
          employed += Number(item.representative_total_employed);
        }
      });
    }

    val = ((ableToWork - employed) / ableToWork) * 100;

    if (isNaN(val)) {
      return `${(0).toFixed(2)}`;
    } else {
      return val.toFixed(2);
    }
  };

  return (
    <>
      <div className="table__container">
        {loading && <Spinner />}
        <SearchBox
          search={search}
          handleSearch={handleSearch}
          handleChange={handleChange}
          loading={loading}
          result={result}
          store={store}
          url="/admin/admin-sitio/read-sitio-search.php"
        />
        <table>
          <thead className="">
            <tr>
              <th className="" rowSpan="1">
                #
              </th>
              <th className="row--name" rowSpan="1">
                Name
              </th>
              <th rowSpan="1">Population</th>
              <th rowSpan="1">Household</th>
              <th rowSpan="1">Monthly Expenses</th>
              <th rowSpan="1">Unemployed</th>
              <th rowSpan="1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {result.length > 0 ? (
              result.map((item, key) => {
                count += 1;
                return (
                  <tr key={key}>
                    <td>{count}.</td>
                    <td>{item.sitio_name}</td>
                    <td>
                      <div className="d--flex align-center justify-between">
                        {getTotalPopulation(item.sitio_aid)}{" "}
                        <div className="dropdown">
                          <span className="arrow">
                            <MdOutlineKeyboardArrowDown />
                          </span>
                          <div className="dropdown-content-secondary">
                            <table>
                              <thead>
                                <tr>
                                  <th>Under age</th>
                                  <th>Middle age</th>
                                  <th>Adult</th>
                                  <th>Senior</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{getTotalUnderage(item.sitio_aid)}</td>
                                  <td>{getTotalMiddleAge(item.sitio_aid)}</td>
                                  <td>{getTotalAdult(item.sitio_aid)}</td>
                                  <td>{getTotalSenior(item.sitio_aid)}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d--flex align-center justify-between">
                        {getTotalHousehold(item.sitio_aid)}
                        <div className="dropdown">
                          <span className="arrow">
                            <MdOutlineKeyboardArrowDown />
                          </span>
                          <div className="dropdown-content-secondary">
                            <table>
                              <thead>
                                <tr>
                                  <th>Own</th>
                                  <th>Rent</th>
                                  <th>Living</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    {getTotalHouseholdOwn(item.sitio_aid)}
                                  </td>
                                  <td>
                                    {getTotalHouseholdRent(item.sitio_aid)}
                                  </td>
                                  <td>
                                    {getTotalHouseholdLivingWith(
                                      item.sitio_aid
                                    )}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d--flex align-center justify-between">
                        {item.sitio_name}{" "}
                        <div className="dropdown">
                          <span className="arrow">
                            <MdOutlineKeyboardArrowDown />
                          </span>
                          <div className="dropdown-content-secondary">
                            <table>
                              <thead>
                                <tr>
                                  <th>Middle Age</th>
                                  <th>Child</th>
                                  <th>Adult</th>
                                  <th>Senior</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{getTotalMiddleAge(item.sitio_aid)}</td>
                                  <td>2</td>
                                  <td>3</td>
                                  <td>3</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{getTotalUnemployment(item.sitio_aid)}%</td>
                    <td>
                      <div className="d--flex justify-center">
                        <Link
                          to={`${devNavUrl}/admin/evaluation/household?sid=${item.sitio_aid}`}
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
    </>
  );
};

export default EvaluationList;
