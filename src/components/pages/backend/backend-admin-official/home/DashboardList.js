import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  viewHousehold,
  viewIncome,
  viewPopulation,
  viewUnemployment,
} from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import NoData from "../../../../widgets/NoData";
import SpinnerWindow from "../../../../widgets/SpinnerWindow";
import ModalViewHouseholdProgram from "./ModalViewHouseholdProgram";
import ModalViewIncomeProgram from "./ModalViewIncomeProgram";
import ModalViewPopulationProgram from "./ModalViewPopulationProgram";
import ModalViewUnemploymentProgram from "./ModalViewUnemploymentProgram";
Chart.register(ChartDataLabels);

const DashboardList = ({
  activeRepresentative,
  inactive,
  incomeClass,
  countRepresentative,
  evaluation,
  evaluationList,
  evaluationLoading,
  activeHouseholdProgram,
  loadingHouseholdProgram,
  activeIncomeProgram,
  loadingIncomeProgram,
  activePopulationProgram,
  loadingPopulationProgram,
  activeUnemploymentProgram,
  loadingUnemploymentProgram,
  getTotalPopulationInDanger,
  getTotalPopulationRenting,
  getTotalPopulationBelowIncome,
  getTotalSeniors,
  getTotalPopulationUnderage,
  getTotalPopulationMemberForEvaluation,
  getTotalPopulationMidage,
  getTotalUnemploymentRate,
  getTotalPopulationPwd,
  PovertyRate,
  PopulationPerYear,
  UnemploymentRate,
  classification,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemView, setItemView] = React.useState(null);

  const handleViewHousehold = (item) => {
    dispatch(viewHousehold(true));
    setItemView(item);
  };

  const handleViewIncome = (item) => {
    dispatch(viewIncome(true));
    setItemView(item);
  };

  const handleViewPopulation = (item) => {
    dispatch(viewPopulation(true));
    setItemView(item);
  };

  const handleViewUnemployment = (item) => {
    dispatch(viewUnemployment(true));
    setItemView(item);
  };

  return (
    <>
      <div className="graph__container p--relative">
        {evaluationLoading && <SpinnerWindow />}
        <div className="graph__item" style={{ width: "100%" }}>
          <h3 className="full--width t--bold mb--1">Program Recommendation</h3>
          <div className="program__item">
            <h3 className="mb--2">Household Recommended Program</h3>
            {activeHouseholdProgram.length > 0 ? (
              activeHouseholdProgram.map((item, key) => {
                return (
                  <ul key={key} className="mb--1">
                    {loadingHouseholdProgram ? (
                      "Loading..."
                    ) : (
                      <>
                        {((item.household_program_aid === "1" &&
                          getTotalPopulationInDanger >=
                            Number(item.household_criteria_range_from) &&
                          getTotalPopulationInDanger <=
                            Number(item.household_criteria_range_to)) ||
                          (item.household_program_aid === "2" &&
                            getTotalPopulationInDanger >=
                              Number(item.household_criteria_range_from) &&
                            getTotalPopulationInDanger <=
                              Number(item.household_criteria_range_to)) ||
                          (item.household_program_aid === "3" &&
                            getTotalPopulationRenting >=
                              Number(item.household_criteria_range_from) &&
                            getTotalPopulationRenting <=
                              Number(item.household_criteria_range_to))) && (
                          <li>
                            {item.household_program_name}
                            <br />
                            <button
                              type="button"
                              onClick={() => handleViewHousehold(item)}
                            >
                              See details...
                            </button>
                          </li>
                        )}
                      </>
                    )}
                  </ul>
                );
              })
            ) : (
              <>
                <NoData />
              </>
            )}
          </div>
          <div className="program__item">
            <h3 className="mb--2">Income Recommended Program</h3>
            {activeIncomeProgram.length > 0 ? (
              activeIncomeProgram.map((item, key) => {
                return (
                  <ul key={key} className="mb--1">
                    {loadingIncomeProgram ? (
                      "Loading..."
                    ) : (
                      <>
                        {((item.income_program_aid === "1" &&
                          getTotalPopulationBelowIncome >=
                            Number(item.income_criteria_range_from) &&
                          getTotalPopulationBelowIncome <=
                            Number(item.income_criteria_range_to)) ||
                          (item.income_program_aid === "3" &&
                            getTotalSeniors >=
                              Number(item.income_criteria_range_from) &&
                            getTotalSeniors <=
                              Number(item.income_criteria_range_to)) ||
                          (item.income_program_aid === "4" &&
                            getTotalPopulationUnderage >=
                              Number(item.income_criteria_range_from) &&
                            getTotalPopulationUnderage <=
                              Number(item.income_criteria_range_to))) && (
                          <li>
                            {item.income_program_name} <br />
                            <button
                              type="button"
                              onClick={() => handleViewIncome(item)}
                            >
                              See details...
                            </button>
                          </li>
                        )}
                      </>
                    )}
                  </ul>
                );
              })
            ) : (
              <>
                <NoData />
              </>
            )}
          </div>
          <div className="program__item">
            <h3 className="mb--2">Population Recommended Program</h3>
            {activePopulationProgram.length > 0 ? (
              activePopulationProgram.map((item, key) => {
                return (
                  <ul key={key} className="mb--1">
                    {loadingPopulationProgram ? (
                      "Loading..."
                    ) : (
                      <>
                        {((item.population_program_aid === "1" &&
                          getTotalPopulationMemberForEvaluation >=
                            Number(item.population_criteria_range_from) &&
                          getTotalPopulationMemberForEvaluation <=
                            Number(item.population_criteria_range_to)) ||
                          (item.population_program_aid === "2" &&
                            getTotalPopulationMidage >=
                              Number(item.population_criteria_range_from) &&
                            getTotalPopulationMidage <=
                              Number(item.population_criteria_range_to))) && (
                          <li>
                            {item.population_program_name}
                            <br />
                            <button
                              type="button"
                              onClick={() => handleViewPopulation(item)}
                            >
                              See details...
                            </button>
                          </li>
                        )}
                      </>
                    )}
                  </ul>
                );
              })
            ) : (
              <>
                <NoData />
              </>
            )}
          </div>
          <div className="program__item">
            <h3 className="mb--2">Unemployment Recommended Program</h3>
            {activeUnemploymentProgram.length > 0 ? (
              activeUnemploymentProgram.map((item, key) => {
                return (
                  <ul key={key} className="mb--1">
                    {loadingUnemploymentProgram ? (
                      "Loading..."
                    ) : (
                      <>
                        {((item.unemployment_program_aid === "2" &&
                          getTotalUnemploymentRate >=
                            Number(item.unemployment_criteria_range_from) &&
                          getTotalUnemploymentRate <=
                            Number(item.unemployment_criteria_range_to)) ||
                          (item.unemployment_program_aid === "3" &&
                            getTotalPopulationBelowIncome >=
                              Number(item.unemployment_criteria_range_from) &&
                            getTotalPopulationBelowIncome <=
                              Number(item.unemployment_criteria_range_to)) ||
                          (item.unemployment_program_aid === "4" &&
                            getTotalPopulationPwd >=
                              Number(item.unemployment_criteria_range_from) &&
                            getTotalPopulationPwd <=
                              Number(item.unemployment_criteria_range_to) &&
                            getTotalPopulationBelowIncome >=
                              Number(item.unemployment_criteria_range_from) &&
                            getTotalPopulationBelowIncome <=
                              Number(item.unemployment_criteria_range_to))) && (
                          <li>
                            {item.unemployment_program_name} <br />
                            <button
                              type="button"
                              onClick={() => handleViewUnemployment(item)}
                            >
                              See details...
                            </button>
                          </li>
                        )}
                      </>
                    )}
                  </ul>
                );
              })
            ) : (
              <>
                <NoData />
              </>
            )}
          </div>
        </div>

        <div className="graph__item" style={{ minWidth: "100%" }}>
          <Line
            data={PovertyRate}
            options={{
              plugins: {
                datalabels: {
                  color: "#fff",
                  anchor: "end",
                  align: "start",
                  borderWidth: 1,
                  borderColor: "#fff",
                  borderRadius: 100,
                  offset: -10,
                  backgroundColor: (context) => {
                    return context.dataset.backgroundColor;
                  },
                  font: {
                    weight: 600,
                    size: "10",
                  },
                  formatter: (value) => {
                    if (
                      isNaN(value) ||
                      value === "" ||
                      value.length === 0 ||
                      value === null
                    ) {
                      return "No data";
                    } else {
                      return value + "%";
                    }
                  },
                },
                legend: {
                  display: true,
                },
              },
            }}
          />
        </div>
        <div className="graph__item" style={{ minWidth: "100%" }}>
          <Line
            data={PopulationPerYear}
            options={{
              plugins: {
                datalabels: {
                  color: "#fff",
                  anchor: "end",
                  align: "start",
                  borderWidth: 1,
                  borderColor: "#fff",
                  borderRadius: 100,
                  offset: -10,
                  backgroundColor: (context) => {
                    return context.dataset.backgroundColor;
                  },
                  font: {
                    weight: 600,
                    size: "10",
                  },
                  formatter: (value) => {
                    if (
                      isNaN(value) ||
                      value === "" ||
                      value.length === 0 ||
                      value === null
                    ) {
                      return "No data";
                    } else {
                      return value;
                    }
                  },
                },
                legend: {
                  display: true,
                },
              },
            }}
          />
        </div>
        <div className="graph__item" style={{ minWidth: "100%" }}>
          <Pie
            data={UnemploymentRate}
            options={{
              plugins: {
                datalabels: {
                  color: "#fff",
                  anchor: "end",
                  align: "start",
                  borderWidth: 1,
                  borderColor: "#fff",
                  borderRadius: 100,
                  offset: -10,
                  backgroundColor: (context) => {
                    return context.dataset.backgroundColor;
                  },
                  font: {
                    weight: 600,
                    size: "10",
                  },
                  formatter: (value) => {
                    if (
                      isNaN(value) ||
                      value === "" ||
                      value.length === 0 ||
                      value === null
                    ) {
                      return "No data";
                    } else {
                      return value + "%";
                    }
                  },
                },
                legend: {
                  display: true,
                },
              },
            }}
          />
        </div>
        <div className="graph__item" style={{ minWidth: "100%" }}>
          <Bar
            data={classification}
            options={{
              indexAxis: "y",
              plugins: {
                datalabels: {
                  color: "#fff",
                  anchor: "end",
                  align: "start",
                  borderWidth: 1,
                  borderColor: "#fff",
                  borderRadius: 100,
                  offset: -10,
                  backgroundColor: (context) => {
                    return context.dataset.backgroundColor;
                  },
                  font: {
                    weight: 600,
                    size: "10",
                  },
                  formatter: (value) => {
                    if (
                      isNaN(value) ||
                      value === "" ||
                      value.length === 0 ||
                      value === null
                    ) {
                      return "No data";
                    } else {
                      return value + "%";
                    }
                  },
                },
                beforeDraw: function (c) {
                  var legends = c.legend.legendItems;
                  legends.forEach(function (e) {
                    e.fillStyle = "red";
                  });
                },
                legend: {
                  // align: "start",
                  // position: "left",
                  color: "rgba(0,0,0,.4)",
                  fill: false,
                  display: true,
                },
              },
            }}
          />
        </div>
      </div>

      {store.isViewHousehold && <ModalViewHouseholdProgram item={itemView} />}
      {store.isViewIncome && <ModalViewIncomeProgram item={itemView} />}
      {store.isViewPopulation && <ModalViewPopulationProgram item={itemView} />}
      {store.isViewUnemployment && (
        <ModalViewUnemploymentProgram item={itemView} />
      )}
    </>
  );
};

export default DashboardList;
