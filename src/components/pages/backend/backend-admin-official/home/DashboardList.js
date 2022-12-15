import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import { Doughnut, Line, Pie, PolarArea, Radar } from "react-chartjs-2";
import useLoadAll from "../../../../custom-hooks/useLoadAll";
import useLoadAllActiveIncomeClassification from "../../../../custom-hooks/useLoadAllActiveIncomeClassification";
import useLoadAllActiveRepresentative from "../../../../custom-hooks/useLoadAllActiveRepresentative";
import { formatDate } from "../../../../helpers/functions-general";
import Spinner from "../../../../widgets/Spinner";
Chart.register(ChartDataLabels);

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

  let totalCount = activeRepresentative.length;

  const getTotalPopulation = (id) => {
    let val = 0;
    let res = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          val += Number(item.representative_total_people);
        }
      });
    }
    res = (val / val) * 100;

    return res;
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

    if (isNaN(val)) {
      return `${(0).toFixed(2)}`;
    } else {
      return val.toFixed(2);
    }
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

    if (total === 0) {
      return "";
    }
    return total.toFixed(2);
  };

  let unemployment = [];
  let population = [];
  let unemployedPopulation = [];
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

  result.map((item) => {
    year.push(
      `${formatDate(item.evaluation_list_created).split(" ")[0]} ${
        formatDate(item.evaluation_list_created).split(" ")[2]
      }`
    );
    population.push(getTotalPopulation(item.evaluation_list_aid));
    unemployedPopulation.push(
      getTotalUnemployedPopulation(item.evaluation_list_aid)
    );
    unemployment.push(getTotalUnemployed(item.evaluation_list_aid));
    poor.push(getTotalPoor(item.evaluation_list_aid));
    low.push(getTotalLowIncome(item.evaluation_list_aid));
    lowMiddle.push(getTotalLowMiddle(item.evaluation_list_aid));
    middle.push(getTotalMiddleClass(item.evaluation_list_aid));
    upperMiddle.push(getTotalUpperMiddle(item.evaluation_list_aid));
    high.push(getTotalHighIncome(item.evaluation_list_aid));
    rich.push(getTotalRich(item.evaluation_list_aid));
  });

  let populationUnemployed = ["Total Population", "Unemployment Rate"];

  const UnemploymentRate = {
    labels: populationUnemployed,
    datasets: [
      {
        data: [unemployedPopulation, unemployment],
        backgroundColor: backgroundPopulationUnemployed,
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

  return (
    <>
      <div className="graph__container p--relative">
        {loading && <Spinner />}
        <div className="graph__item" style={{ minWidth: "100%" }}>
          <Line
            style={{ width: "100%", maxHeight: "40rem" }}
            data={PopulationPerYear}
          />
        </div>
        <div className="graph__item" style={{ minWidth: "48%" }}>
          <Pie
            style={{ width: "100%", maxHeight: "40rem" }}
            data={UnemploymentRate}
            options={{
              plugins: {
                datalabels: {
                  color: "#fff",
                  anchor: "end",
                  align: "start",
                  offset: 2,
                  borderWidth: 2,
                  borderColor: "#fff",
                  borderRadius: 25,
                  backgroundColor: (context) => {
                    return context.dataset.backgroundColor;
                  },
                  font: {
                    weight: 600,
                    size: "10",
                  },
                  formatter: (value) => {
                    if (value === 0) {
                      return "";
                    } else {
                      return value + "%";
                    }
                  },
                },
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
        <div className="graph__item" style={{ minWidth: "48%" }}>
          <Doughnut
            style={{ width: "100%", maxHeight: "40rem" }}
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
                  offset: 2,
                  backgroundColor: (context) => {
                    return context.dataset.backgroundColor;
                  },
                  font: {
                    weight: "bold",
                    size: "12",
                  },
                  formatter: (value) => {
                    if (value === " ") {
                      return " ";
                    } else {
                      return value + "%";
                    }
                  },
                },
                legend: {
                  align: "start",
                  position: "left",
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
