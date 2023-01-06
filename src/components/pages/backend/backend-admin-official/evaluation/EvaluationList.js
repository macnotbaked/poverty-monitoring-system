import React from "react";
import { FaEye } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import useLoadAllActiveIncomeClassification from "../../../../custom-hooks/useLoadAllActiveIncomeClassification";
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

  const { incomeClass } = useLoadAllActiveIncomeClassification(
    "/admin/admin-settings/income-classification/read-income-classification-all.php"
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

  const getTotalIncomeEarner = (id) => {
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_purok_id) === Number(id)) {
          val += Number(item.representative_total_employed);
        }
      });
    }

    return val;
  };

  const getTotalRepresentativeIncomeClassification = (rid) => {
    let val = 0;
    let className = [];

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_aid) === Number(rid)) {
          val =
            Number(item.representative_monthly_income) /
            Number(item.representative_total_people);
        }
      });
    }

    incomeClass.map((income) => {
      if (
        val >= Number(income.monthly_income_from / 5) &&
        val <= Number(income.monthly_income_to / 5)
      ) {
        className = income.monthly_income_aid;
      }
    });

    return className;
  };

  const getTotalPoor = (id) => {
    let val = 0;
    let res = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        res = [
          getTotalRepresentativeIncomeClassification(item.representative_aid),
        ].filter((i) => i === "1").length;
        if (Number(item.representative_purok_id) === Number(id)) {
          val += res;
        }
      });
    }

    return val;
  };

  const getTotalLowIncome = (id) => {
    let val = 0;
    let res = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        res = [
          getTotalRepresentativeIncomeClassification(item.representative_aid),
        ].filter((i) => i === "2").length;
        if (Number(item.representative_purok_id) === Number(id)) {
          val += res;
        }
      });
    }

    return val;
  };

  const getTotalLowMiddle = (id) => {
    let val = 0;
    let res = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        res = [
          getTotalRepresentativeIncomeClassification(item.representative_aid),
        ].filter((i) => i === "3").length;
        if (Number(item.representative_purok_id) === Number(id)) {
          val += res;
        }
      });
    }

    return val;
  };

  const getTotalMiddleClass = (id) => {
    let val = 0;
    let res = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        res = [
          getTotalRepresentativeIncomeClassification(item.representative_aid),
        ].filter((i) => i === "4").length;
        if (Number(item.representative_purok_id) === Number(id)) {
          val += res;
        }
      });
    }

    return val;
  };

  const getTotalUpperMiddle = (id) => {
    let val = 0;
    let res = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        res = [
          getTotalRepresentativeIncomeClassification(item.representative_aid),
        ].filter((i) => i === "5").length;
        if (Number(item.representative_purok_id) === Number(id)) {
          val += res;
        }
      });
    }

    return val;
  };

  const getTotalHighIncome = (id) => {
    let val = 0;
    let res = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        res = [
          getTotalRepresentativeIncomeClassification(item.representative_aid),
        ].filter((i) => i === "6").length;
        if (Number(item.representative_purok_id) === Number(id)) {
          val += res;
        }
      });
    }

    return val;
  };

  const getTotalRich = (id) => {
    let val = 0;
    let res = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        res = [
          getTotalRepresentativeIncomeClassification(item.representative_aid),
        ].filter((i) => i === "7").length;
        if (Number(item.representative_purok_id) === Number(id)) {
          val += res;
        }
      });
    }

    return val;
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
              <th rowSpan="1">Income Earner</th>
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
                    <td data-label="#">{count}.</td>
                    <td data-label="Sitio/Purok">{item.sitio_name}</td>
                    <td data-label="Population">
                      <div className="d--flex align-center justify-between">
                        {getTotalPopulation(item.sitio_aid)}{" "}
                        <div className="dropdown">
                          <span className="arrow">
                            <MdOutlineKeyboardArrowDown />
                          </span>
                          <div className="dropdown-content-secondary">
                            <ul>
                              <li>
                                <span>Under age</span>{" "}
                                <span>{getTotalUnderage(item.sitio_aid)}</span>
                              </li>
                              <li>
                                <span>Middle age</span>{" "}
                                <span>{getTotalMiddleAge(item.sitio_aid)}</span>
                              </li>
                              <li>
                                <span>Adult</span>{" "}
                                <span>{getTotalAdult(item.sitio_aid)}</span>
                              </li>
                              <li>
                                <span>Senior</span>{" "}
                                <span>{getTotalSenior(item.sitio_aid)}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td data-label="Household">
                      <div className="d--flex align-center justify-between">
                        {getTotalHousehold(item.sitio_aid)}
                        <div className="dropdown">
                          <span className="arrow">
                            <MdOutlineKeyboardArrowDown />
                          </span>
                          <div className="dropdown-content-secondary">
                            <ul>
                              <li>
                                <span>Own</span>{" "}
                                <span>
                                  {getTotalHouseholdOwn(item.sitio_aid)}
                                </span>
                              </li>
                              <li>
                                <span>Rent</span>{" "}
                                <span>
                                  {getTotalHouseholdRent(item.sitio_aid)}
                                </span>
                              </li>
                              <li>
                                <span>Living</span>{" "}
                                <span>
                                  {getTotalHouseholdLivingWith(item.sitio_aid)}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td data-label="Income Earner">
                      <div className="d--flex align-center justify-between">
                        {getTotalIncomeEarner(item.sitio_aid)}
                        <div className="dropdown">
                          <span className="arrow">
                            <MdOutlineKeyboardArrowDown />
                          </span>
                          <div className="dropdown-content-secondary">
                            <ul>
                              <li>
                                <span>Poor</span>{" "}
                                <span>{getTotalPoor(item.sitio_aid)}</span>
                              </li>
                              <li>
                                <span>Low Income (but not poor)</span>{" "}
                                <span>{getTotalLowIncome(item.sitio_aid)}</span>
                              </li>
                              <li>
                                <span>Lower middle class</span>{" "}
                                <span>{getTotalLowMiddle(item.sitio_aid)}</span>
                              </li>
                              <li>
                                <span>Middle class</span>{" "}
                                <span>
                                  {getTotalMiddleClass(item.sitio_aid)}
                                </span>
                              </li>
                              <li>
                                <span>Upper middle income</span>{" "}
                                <span>
                                  {getTotalUpperMiddle(item.sitio_aid)}
                                </span>
                              </li>
                              <li>
                                <span>High income (but not rich)</span>{" "}
                                <span>
                                  {getTotalHighIncome(item.sitio_aid)}
                                </span>
                              </li>
                              <li>
                                <span>Rich</span>{" "}
                                <span>{getTotalRich(item.sitio_aid)}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td data-label="Unemployed">
                      {getTotalUnemployment(item.sitio_aid)}%
                    </td>
                    <td data-label="Action">
                      <div className="d--flex">
                        <Link
                          to={`${devNavUrl}/admin/purok/household?sid=${item.sitio_aid}`}
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
    </>
  );
};

export default EvaluationList;
