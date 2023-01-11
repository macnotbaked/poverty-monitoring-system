import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import { Bar, Line, Pie, Radar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { setStartIndex, viewHousehold } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import useLoadAllActiveHouseholdProgram from "../../../../custom-hooks/useLoadAllActiveHouseholdProgram";
import useLoadAllActiveIncomeClassification from "../../../../custom-hooks/useLoadAllActiveIncomeClassification";
import useLoadAllActiveIncomeProgram from "../../../../custom-hooks/useLoadAllActiveIncomeProgram";
import useLoadAllActivePopulationProgram from "../../../../custom-hooks/useLoadAllActivePopulationProgram";
import useLoadAllActiveRepresentative from "../../../../custom-hooks/useLoadAllActiveRepresentative";
import useLoadAllActiveRepresentativeCount from "../../../../custom-hooks/useLoadAllActiveRepresentativeCount";
import useLoadAllActiveUnemploymentProgram from "../../../../custom-hooks/useLoadAllActiveUnemploymentProgram";
import useLoadAllEvaluation from "../../../../custom-hooks/useLoadAllEvaluation";
import useLoadAllEvaluationList from "../../../../custom-hooks/useLoadAllEvaluationList";
import useLoadAllInactive from "../../../../custom-hooks/useLoadAllInactive";
import { devNavUrl, formatDate } from "../../../../helpers/functions-general";
import NoData from "../../../../widgets/NoData";
import Spinner from "../../../../widgets/Spinner";
import ModalViewHouseholdProgram from "./ModalViewHouseholdProgram";
Chart.register(ChartDataLabels);

const DashboardList = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const { loadingHouseholdProgram, activeHouseholdProgram } =
    useLoadAllActiveHouseholdProgram(
      "/admin/admin-recommended-programs/read-household-recommended-program-all.php"
    );

  const { loadingIncomeProgram, activeIncomeProgram } =
    useLoadAllActiveIncomeProgram(
      "/admin/admin-recommended-programs/read-income-recommended-program-all.php"
    );

  const { loadingPopulationProgram, activePopulationProgram } =
    useLoadAllActivePopulationProgram(
      "/admin/admin-recommended-programs/read-population-recommended-program-all.php"
    );

  const { loadingUnemploymentProgram, activeUnemploymentProgram } =
    useLoadAllActiveUnemploymentProgram(
      "/admin/admin-recommended-programs/read-unemployment-recommended-program-all.php"
    );

  const { evaluation, evaluationLoading } = useLoadAllEvaluation(
    "/admin/admin-evaluation/enable-evaluation/read-all-evaluation.php"
  );

  const { evaluationList, loadingevaluationList } = useLoadAllEvaluationList(
    "/admin/admin-evaluation/enable-evaluation/read-enable-evaluation.php"
  );

  const { activeRepresentative } = useLoadAllActiveRepresentative(
    "/admin/admin-representative/read-representative.php"
  );

  const { incomeClass } = useLoadAllActiveIncomeClassification(
    "/admin/admin-settings/income-classification/read-income-classification-all.php"
  );

  const { inactive } = useLoadAllInactive(
    "/admin/admin-representative/read-representative-inactive.php"
  );

  const { countRepresentative } = useLoadAllActiveRepresentativeCount(
    "/admin/admin-evaluation/enable-evaluation/read-all-evaluation-representative.php"
  );

  let totalCount = activeRepresentative.length;

  const getTotalRepresentativeIncomeClassification = (rid) => {
    let val = 0;
    let className = [];

    if (inactive.length) {
      inactive.map((item) => {
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

  const getPovertyRate = (id) => {
    let val = 0;
    let res = 0;
    let total = 0;
    let countPopulation = 0;

    if (countRepresentative.length) {
      countRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          countPopulation = item.total;
        }
      });
    }

    if (inactive.length) {
      inactive.map((item) => {
        res = [
          getTotalRepresentativeIncomeClassification(
            Number(item.representative_aid)
          ),
        ].filter((i) => i === "1").length;

        if (Number(item.representative_eval_id) === Number(id)) {
          val += res;
        }
      });
    }

    total = (val / countPopulation) * 100;

    if (total === 0) {
      return "";
    }
    return total.toFixed(2);
  };

  const getTotalPopulation = (id) => {
    let val = 0;

    if (inactive.length) {
      inactive.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          val += Number(item.representative_total_people);
        }
      });
    }

    // console.log(val.toFixed(2));

    return val.toFixed(2);
  };

  const getTotalUnemployedPopulation = (id) => {
    let val = 0;
    let ableToWork = 0;
    let employed = 0;
    let population = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          population += Number(item.representative_total_people);
          ableToWork += Number(item.representative_total_able_work);
          employed += Number(item.representative_total_employed);
        }
      });
    }

    val = ((population - (ableToWork - employed)) / population) * 100;

    // console.log(val);

    return val.toFixed(2);
  };

  const getTotalUnemployed = (id) => {
    let ableToWork = 0;
    let employed = 0;
    let population = 0;
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          population += Number(item.representative_total_people);
          ableToWork += Number(item.representative_total_able_work);
          employed += Number(item.representative_total_employed);
        }
      });
    }

    val = ((ableToWork - employed) / population) * 100;

    // console.log(val);

    return val.toFixed(2);
  };

  const getTotalPoor = (id) => {
    let val = 0;
    let res = 0;
    let population = 0;
    let total = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        population += Number(item.representative_total_people);
        res = [
          getTotalRepresentativeIncomeClassification(item.representative_aid),
        ].filter((i) => i === "1").length;
        if (Number(item.representative_eval_id) === Number(id)) {
          val += res;
        }
      });
    }

    total = (val / totalCount) * 100;

    if (total === 0) {
      return "";
    }
    return total.toFixed(2);
  };

  const getTotalLowIncome = (id) => {
    let val = 0;
    let res = 0;
    let population = 0;
    let total = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        population += Number(item.representative_total_people);
        res = [
          getTotalRepresentativeIncomeClassification(item.representative_aid),
        ].filter((i) => i === "2").length;
        if (Number(item.representative_eval_id) === Number(id)) {
          val += res;
        }
      });
    }

    total = (val / totalCount) * 100;

    if (total === 0) {
      return "";
    }
    return total.toFixed(2);
  };

  const getTotalLowMiddle = (id) => {
    let val = 0;
    let res = 0;
    let population = 0;
    let total = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        population += Number(item.representative_total_people);
        res = [
          getTotalRepresentativeIncomeClassification(item.representative_aid),
        ].filter((i) => i === "3").length;
        if (Number(item.representative_eval_id) === Number(id)) {
          val += res;
        }
      });
    }

    total = (val / totalCount) * 100;

    if (total === 0) {
      return "";
    }
    return total.toFixed(2);
  };

  const getTotalMiddleClass = (id) => {
    let val = 0;
    let res = 0;
    let population = 0;
    let total = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        population += Number(item.representative_total_people);
        res = [
          getTotalRepresentativeIncomeClassification(item.representative_aid),
        ].filter((i) => i === "4").length;
        if (Number(item.representative_eval_id) === Number(id)) {
          val += res;
        }
      });
    }

    total = (val / totalCount) * 100;

    if (total === 0) {
      return "";
    }
    return total.toFixed(2);
  };

  const getTotalUpperMiddle = (id) => {
    let val = 0;
    let res = 0;
    let population = 0;
    let total = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        population += Number(item.representative_total_people);
        res = [
          getTotalRepresentativeIncomeClassification(item.representative_aid),
        ].filter((i) => i === "5").length;
        if (Number(item.representative_eval_id) === Number(id)) {
          val += res;
        }
      });
    }

    total = (val / totalCount) * 100;

    if (total === 0) {
      return "";
    }
    return total.toFixed(2);
  };

  const getTotalHighIncome = (id) => {
    let val = 0;
    let res = 0;
    let population = 0;
    let total = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        population += Number(item.representative_total_people);
        res = [
          getTotalRepresentativeIncomeClassification(item.representative_aid),
        ].filter((i) => i === "6").length;
        if (Number(item.representative_eval_id) === Number(id)) {
          val += res;
        }
      });
    }

    total = (val / totalCount) * 100;

    if (total === 0) {
      return "";
    }
    return total.toFixed(2);
  };

  const getTotalRich = (id) => {
    let val = 0;
    let res = 0;
    let population = 0;
    let total = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        population += Number(item.representative_total_people);
        res = [
          getTotalRepresentativeIncomeClassification(item.representative_aid),
        ].filter((i) => i === "7").length;

        if (Number(item.representative_eval_id) === Number(id)) {
          val += res;
        }
      });
    }

    total = (val / totalCount) * 100;

    return total.toFixed(2);
  };

  let unemployment = [];
  let unemployedPopulation = [];
  let totalPopulation = [];
  let year = [];
  let poor = [];
  let low = [];
  let lowMiddle = [];
  let middle = [];
  let upperMiddle = [];
  let high = [];
  let rich = [];
  let backgroundIncome = [];
  let backgroundPopulationUnemployed = [];
  let povertyRate = [];

  evaluation.map((item) => {
    year.push(
      `${formatDate(item.evaluation_list_created).split(" ")[0]} ${
        formatDate(item.evaluation_list_created).split(" ")[2]
      }`
    );
    totalPopulation.push(getTotalPopulation(Number(item.evaluation_list_aid)));
    povertyRate.push(getPovertyRate(Number(item.evaluation_list_aid)));
  });

  evaluationList.map((item) => {
    unemployedPopulation.push(
      getTotalUnemployedPopulation(Number(item.evaluation_list_aid))
    );
    unemployment.push(getTotalUnemployed(Number(item.evaluation_list_aid)));
    poor.push(getTotalPoor(Number(item.evaluation_list_aid)));
    low.push(getTotalLowIncome(Number(item.evaluation_list_aid)));
    lowMiddle.push(getTotalLowMiddle(Number(item.evaluation_list_aid)));
    middle.push(getTotalMiddleClass(Number(item.evaluation_list_aid)));
    upperMiddle.push(getTotalUpperMiddle(Number(item.evaluation_list_aid)));
    high.push(getTotalHighIncome(Number(item.evaluation_list_aid)));
    rich.push(getTotalRich(Number(item.evaluation_list_aid)));
  });

  let populationUnemployed = ["Total Population", "Unemployment Rate"];

  const UnemploymentRate = {
    labels: populationUnemployed,
    datasets: [
      {
        data: [unemployment, unemployedPopulation],
        backgroundColor: backgroundPopulationUnemployed,
        borderWidth: 1,
      },
    ],
  };

  // console.log(totalPopulation);
  // console.log(povertyRate);

  const PopulationPerYear = {
    labels: year,
    datasets: [
      {
        label: "Population Growth",
        data: totalPopulation,
        backgroundColor: ["#17252a"],
        borderWidth: 1,
      },
    ],
  };

  let label = [
    "Poor",
    "Low Income (but not poor)",
    "Lower Middle Income",
    "Middle Income",
    "Upper Middle Income",
    "High income (but not rich)",
    "Rich",
  ];

  const classification = {
    labels: label,
    datasets: [
      {
        label: "Income Classification",
        data: [poor, low, lowMiddle, middle, upperMiddle, high, rich],
        backgroundColor: backgroundIncome,
        borderWidth: 1,
      },
    ],
  };

  for (let i = 0; i < label.length; i++) {
    let r = Math.floor(Math.random() * 43);
    let g = Math.floor(Math.random() * 122);
    let b = Math.floor(Math.random() * 120);
    backgroundIncome.push("rgb(" + r + ", " + g + ", " + b + ", .7)");
  }

  for (let i = 0; i < populationUnemployed.length; i++) {
    let r = Math.floor(Math.random() * 43);
    let g = Math.floor(Math.random() * 122);
    let b = Math.floor(Math.random() * 120);
    backgroundPopulationUnemployed.push(
      "rgb(" + r + ", " + g + ", " + b + ", .7)"
    );
  }

  const PovertyRate = {
    labels: year,
    datasets: [
      {
        label: "Poverty Rate",
        data: povertyRate,
        // backgroundColor: ["#17252a"],
        borderWidth: 1,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: true,
      },
    ],
  };

  const getTotalHouseholdMember = (id) => {
    let val = 0;
    let res = 0;
    let final = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          res =
            Number(item.representative_total_people) >= 4 &&
            Number(item.representative_total_people) <= 12;
        }

        val += res;
      });
    }

    final = (val / activeRepresentative.length) * 100;

    // console.log(ageTotal);

    return final.toFixed(2);
  };

  const getTotalUnderge = (id) => {
    let val = 0;
    let res = 0;
    let final = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          res =
            Number(item.representative_total_underage) >= 10 &&
            Number(item.representative_total_underage) <= 19;
        }
        val += res;
      });
    }

    final = (val / activeRepresentative.length) * 100;

    // console.log(ageTotal);

    return final.toFixed(2);
  };

  const getTotalBelowIncome = (id) => {
    let res = 0;
    let final = 0;
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          res = Number(item.representative_monthly_income) <= 12000;
        }
        val += res;
      });
    }

    final = (val / activeRepresentative.length) * 100;

    // console.log(final);

    return final.toFixed(2);
  };

  const getTotalSocialPension = (id) => {
    let res = 0;
    let final = 0;
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          res = Number(item.representative_total_seniors) >= 60;
        }

        val += res;
      });
    }

    final = (val / activeRepresentative.length) * 100;

    return final.toFixed(2);
  };

  const getTotalSenior = () => {
    let res = 0;
    if (evaluation.length) {
      evaluation.map((item) => {
        res = getTotalSocialPension(item.evaluation_list_aid);
      });
    }

    return res;
  };

  const getTotalPopulationMemberForEvaluation = () => {
    let res = 0;
    if (evaluation.length) {
      evaluation.map((item) => {
        res = getTotalHouseholdMember(item.evaluation_list_aid);
      });
    }

    return res;
  };

  const getTotalPopulationBelowIncome = () => {
    let res = 0;
    if (evaluation.length) {
      evaluation.map((item) => {
        res = getTotalBelowIncome(item.evaluation_list_aid);
      });
    }

    return res;
  };

  const getTotalPopulationUnderage = () => {
    let res = 0;
    if (evaluation.length) {
      evaluation.map((item) => {
        res = getTotalUnderge(item.evaluation_list_aid);
      });
    }

    return res;
  };

  const handleViewHousehold = () => {
    dispatch(viewHousehold(true));
  };

  return (
    <>
      <div className="graph__container p--relative">
        {evaluationLoading && <Spinner />}
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
                        <li>
                          {item.household_program_name}
                          <br />
                          <button type="button" onClick={handleViewHousehold}>
                            See details...
                          </button>
                        </li>
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
                        {((getTotalPopulationBelowIncome() >=
                          Number(item.income_criteria_range_from) &&
                          getTotalPopulationBelowIncome() <=
                            Number(item.income_criteria_range_to)) ||
                          (getTotalSenior() >=
                            Number(item.income_criteria_range_from) &&
                            getTotalSenior() <=
                              Number(item.income_criteria_range_to))) && (
                          <li>
                            {item.income_program_name} <br />
                            <button type="button" onClick={handleViewHousehold}>
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
                        {((getTotalPopulationMemberForEvaluation() >=
                          Number(item.population_criteria_range_from) &&
                          getTotalPopulationMemberForEvaluation() <=
                            Number(item.population_criteria_range_to)) ||
                          (getTotalPopulationUnderage() >=
                            Number(item.population_criteria_range_from) &&
                            getTotalPopulationUnderage() <=
                              Number(item.population_criteria_range_to))) && (
                          <li>
                            {item.population_program_name}
                            <br />
                            <button type="button" onClick={handleViewHousehold}>
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
                        <li>
                          {item.unemployment_program_name} <br />
                          <button type="button" onClick={handleViewHousehold}>
                            See details...
                          </button>
                        </li>
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
                  // align: "start",
                  // position: "left",
                  display: true,
                },
              },
            }}
          />
        </div>
      </div>

      {store.isViewHousehold && <ModalViewHouseholdProgram />}
    </>
  );
};

export default DashboardList;
