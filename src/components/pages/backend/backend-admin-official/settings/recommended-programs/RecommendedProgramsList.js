import React from "react";
import {
  FaHouseUser,
  FaMoneyCheckAlt,
  FaUser,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import useLoadAllActivePopulationProgram from "../../../../../custom-hooks/useLoadAllActivePopulationProgram";
import { devNavUrl } from "../../../../../helpers/functions-general";
import SpinnerCard from "../../../../../widgets/SpinnerCard";

const RecommendedProgramsList = ({}) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const { activePopulationProgram, loadingPopulationProgram } =
    useLoadAllActivePopulationProgram(
      "/admin/admin-settings/population-program/read-all-active-population-program.php"
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
                activePopulationProgram.map((item, key) => {
                  return <li key={key}>{item.population_program_name}</li>;
                })
              ) : (
                <>{loadingPopulationProgram ? "" : <li>No Data</li>}</>
              )}
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
            <h4 className="t--bold my--1">Household Rate</h4>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, odit.
              </li>
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
            <h4 className="t--bold my--1">
              Income Rate{" "}
              <i>ie., Bills Expenses, Food Treshold, Education Expenses</i>
            </h4>

            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, odit.
              </li>
            </ul>
          </Link>
        </div>

        {/* 4 */}
        <div className="list__container">
          <span>
            <FaUserTie />
          </span>
          <Link
            to={`${devNavUrl}/admin/employment-rate`}
            onClick={() => {
              dispatch(setStartIndex(0));
            }}
            className="setting shadow--primary mt--2"
          >
            <h4 className="t--bold mb--1">Employment Rate</h4>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, odit.
              </li>
            </ul>
          </Link>
        </div>

        {/* 5 */}
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
            <h4 className="t--bold mb--1">Unemployment Rate</h4>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, odit.
              </li>
            </ul>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecommendedProgramsList;
