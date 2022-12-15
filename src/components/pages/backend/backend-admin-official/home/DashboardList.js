import Chart from "chart.js/auto";
import React from "react";
import { Doughnut, Line, Pie } from "react-chartjs-2";
import useLoadAll from "../../../../custom-hooks/useLoadAll";
import useLoadAllActiveIncomeClassification from "../../../../custom-hooks/useLoadAllActiveIncomeClassification";
import useLoadAllActiveRepresentative from "../../../../custom-hooks/useLoadAllActiveRepresentative";
import { formatDate } from "../../../../helpers/functions-general";
import Spinner from "../../../../widgets/Spinner";

const DashboardList = () => {
  const { result, loading } = useLoadAll(
    "/admin/admin-evaluation/enable-evaluation/read-all-evaluation.php"
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
        if (Number(item.representative_eval_id) === Number(id)) {
          val += Number(item.representative_total_people);
        }
      });
    }

    return val;
  };

  const getTotalUnemployed = (id) => {
    let ableToWork = 0;
    let employed = 0;
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          ableToWork += Number(item.representative_total_able_work);
          employed += Number(item.representative_total_employed);
        }
      });
    }

    val = ableToWork - employed;

    if (isNaN(val)) {
      return `${(0).toFixed(2)}`;
    } else {
      return val.toFixed(2);
    }
  };

  const getTotalAbleToWork = (id) => {
    let ableToWork = 0;
    let employed = 0;
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          ableToWork += Number(item.representative_total_able_work);
        }
      });
    }

    return ableToWork;
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
        if (Number(item.representative_eval_id) === Number(id)) {
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
        if (Number(item.representative_eval_id) === Number(id)) {
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
        if (Number(item.representative_eval_id) === Number(id)) {
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
        if (Number(item.representative_eval_id) === Number(id)) {
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
        if (Number(item.representative_eval_id) === Number(id)) {
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
        if (Number(item.representative_eval_id) === Number(id)) {
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
        if (Number(item.representative_eval_id) === Number(id)) {
          val += res;
        }
      });
    }

    return val;
  };

  let unemployment = [];
  let population = [];
  let year = [];
  let poor = [];
  let low = [];
  let lowMiddle = [];
  let middle = [];
  let upperMiddle = [];
  let high = [];
  let rich = [];
  let ableToWork = [];

  result.map((item) => {
    year.push(
      `${formatDate(item.evaluation_list_created).split(" ")[0]} ${
        formatDate(item.evaluation_list_created).split(" ")[2]
      }`
    );
    population.push(getTotalPopulation(item.evaluation_list_aid));
    unemployment.push(getTotalUnemployed(item.evaluation_list_aid));
    ableToWork.push(getTotalAbleToWork(item.evaluation_list_aid));
    poor.push(getTotalPoor(item.evaluation_list_aid));
    low.push(getTotalLowIncome(item.evaluation_list_aid));
    lowMiddle.push(getTotalLowMiddle(item.evaluation_list_aid));
    middle.push(getTotalMiddleClass(item.evaluation_list_aid));
    upperMiddle.push(getTotalUpperMiddle(item.evaluation_list_aid));
    high.push(getTotalHighIncome(item.evaluation_list_aid));
    rich.push(getTotalRich(item.evaluation_list_aid));
  });

  const UnemploymentRate = {
    labels: ["Total unemployed", "Total Able To Work"],
    datasets: [
      {
        data: [unemployment, ableToWork],
        backgroundColor: ["#94C973", "#2F5233"],
        borderWidth: 1,
      },
    ],
  };

  const PopulationPerYear = {
    labels: year,
    datasets: [
      {
        label: "Population Growth",
        data: population,
        backgroundColor: ["#17252a"],
        borderWidth: 1,
      },
    ],
  };

  const classification = {
    labels: [
      "Poor",
      "Low Income (but not poor)",
      "Lower Middle Income",
      "Middle Income",
      "Upper Middle Income",
      "High income (but not rich)",
      "Rich",
    ],
    datasets: [
      {
        data: [poor, low, lowMiddle, middle, upperMiddle, high, rich],
        backgroundColor: [
          "#F51720",
          "#FA26A0",
          "#F8D210",
          "#2FF3E0",
          "#B1D4E0",
          "#0C2D48",
          "#145DA0",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="graph__container p--relative">
        {loading && <Spinner />}
        <div className="graph__item">
          <Line
            style={{ width: "100%", maxHeight: "30rem" }}
            data={PopulationPerYear}
          />
        </div>
        <div className="graph__item">
          <Doughnut
            style={{ width: "100%", maxHeight: "30rem" }}
            data={UnemploymentRate}
            options={{
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    color: "#2b7a78",
                    font: {
                      weight: 600,
                    },
                  },
                },
              },
            }}
          />
        </div>
        <div className="graph__item">
          <Pie
            style={{ width: "100%", maxHeight: "30rem" }}
            data={classification}
            options={{
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    color: "#2b7a78",
                    font: {
                      weight: 600,
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardList;
