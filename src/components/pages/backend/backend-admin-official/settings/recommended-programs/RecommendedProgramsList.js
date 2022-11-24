import React from "react";
import { FaHouseUser, FaMoneyCheckAlt, FaUser, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import useLoadAllActiveHouseholdProgram from "../../../../../custom-hooks/useLoadAllActiveHouseholdProgram";
import useLoadAllActiveIncomeProgram from "../../../../../custom-hooks/useLoadAllActiveIncomeProgram";
import useLoadAllActivePopulationProgram from "../../../../../custom-hooks/useLoadAllActivePopulationProgram";
import useLoadAllActiveUnemploymentProgram from "../../../../../custom-hooks/useLoadAllActiveUnemploymentProgram";
import { devNavUrl } from "../../../../../helpers/functions-general";
import SpinnerCard from "../../../../../widgets/SpinnerCard";

const RecommendedProgramsList = ({}) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const { activePopulationProgram, loadingPopulationProgram } =
    useLoadAllActivePopulationProgram(
      "/admin/admin-settings/population-program/read-all-active-population-program.php"
    );

  const { activeHouseholdProgram, loadingHouseholdProgram } =
    useLoadAllActiveHouseholdProgram(
      "/admin/admin-settings/household-program/read-all-active-household-program.php"
    );

  const { activeIncomeProgram, loadingIncomeProgram } =
    useLoadAllActiveIncomeProgram(
      "/admin/admin-settings/income-program/read-all-active-income-program.php"
    );

  const { activeUnemploymentProgram, loadingUnemploymentProgram } =
    useLoadAllActiveUnemploymentProgram(
      "/admin/admin-settings/unemployment-program/read-all-active-unemployment-program.php"
    );

  return (
    <>
      <div className="grid-col-3 mb--2 shadow--primary pxy--2">
        {/* 1 */}
        <div className="list__container">
          <span>
            <FaUsers />
          </span>
          <Link
            to={`${devNavUrl}/admin/population-rate`}
            onClick={() => {
              dispatch(setStartIndex(0));
            }}
            className="setting shadow--primary mt--2 "
          >
            {loadingPopulationProgram && <SpinnerCard />}
            <h4 className="t--bold my--1">
              {loadingPopulationProgram ? "" : "Population Rate"}
            </h4>
            <ul>
              {activePopulationProgram.length > 0 ? (
                activePopulationProgram.slice(0, 3).map((item, key) => {
                  return <li key={key}>{item.population_program_name}</li>;
                })
              ) : (
                <>{loadingPopulationProgram ? "" : <li>No Data</li>}</>
              )}
              <p className="mt--1 color--primary">
                {" "}
                {loadingPopulationProgram ? "" : "See more.."}.
              </p>
            </ul>
          </Link>
        </div>

        {/* 2 */}
        <div className="list__container">
          <span>
            <FaHouseUser />
          </span>
          <Link
            to={`${devNavUrl}/admin/household-rate`}
            onClick={() => {
              dispatch(setStartIndex(0));
            }}
            className="setting shadow--primary mt--2"
          >
            {loadingHouseholdProgram && <SpinnerCard />}
            <h4 className="t--bold my--1">
              {loadingHouseholdProgram ? "" : "Household Rate"}
            </h4>
            <ul>
              {activeHouseholdProgram.length > 0 ? (
                activeHouseholdProgram.slice(0, 3).map((item, key) => {
                  return <li key={key}>{item.household_program_name}</li>;
                })
              ) : (
                <>{loadingHouseholdProgram ? "" : <li>No Data</li>}</>
              )}
              <p className="mt--1 color--primary">
                {" "}
                {loadingHouseholdProgram ? "" : "See more.."}.
              </p>
            </ul>
          </Link>
        </div>

        {/* 3 */}
        <div className="list__container">
          <span>
            <FaMoneyCheckAlt />
          </span>
          <Link
            to={`${devNavUrl}/admin/income`}
            onClick={() => {
              dispatch(setStartIndex(0));
            }}
            className="setting shadow--primary mt--2"
          >
            {loadingIncomeProgram && <SpinnerCard />}
            <h4 className="t--bold my--1">
              {loadingIncomeProgram ? (
                ""
              ) : (
                <>
                  <strong>Income Rate</strong> <br />
                  <i>ie., Bills Expenses, Food Threshold, Education Expenses</i>
                </>
              )}
            </h4>
            <ul>
              {activeIncomeProgram.length > 0 ? (
                activeIncomeProgram.slice(0, 3).map((item, key) => {
                  return <li key={key}>{item.income_program_name}</li>;
                })
              ) : (
                <>{loadingIncomeProgram ? "" : <li>No Data</li>}</>
              )}
              <p className="mt--1 color--primary">
                {" "}
                {loadingIncomeProgram ? "" : "See more.."}.
              </p>
            </ul>
          </Link>
        </div>

        {/* 4 */}
        <div className="list__container">
          <span>
            <FaUser />
          </span>
          <Link
            to={`${devNavUrl}/admin/unemployment-rate`}
            onClick={() => {
              dispatch(setStartIndex(0));
            }}
            className="setting shadow--primary mt--2"
          >
            {loadingUnemploymentProgram && <SpinnerCard />}
            <h4 className="t--bold my--1">
              {loadingUnemploymentProgram ? "" : "Unemployment Rate"}
            </h4>
            <ul>
              {activeUnemploymentProgram.length > 0 ? (
                activeUnemploymentProgram.slice(0, 3).map((item, key) => {
                  return <li key={key}>{item.unemployment_program_name}</li>;
                })
              ) : (
                <>{loadingUnemploymentProgram ? "" : <li>No Data</li>}</>
              )}
              <p className="mt--1 color--primary">
                {" "}
                {loadingUnemploymentProgram ? "" : "See more.."}.
              </p>
            </ul>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecommendedProgramsList;
