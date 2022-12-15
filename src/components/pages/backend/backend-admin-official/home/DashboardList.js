import { Chart as ChartJS } from "chart.js/auto";
import React from "react";
import { Bar, Doughnut, Line, Pie, PolarArea } from "react-chartjs-2";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import useLoadAll from "../../../../custom-hooks/useLoadAll";
import useLoadAllActiveIncomeClassification from "../../../../custom-hooks/useLoadAllActiveIncomeClassification";
import useLoadAllActivePurok from "../../../../custom-hooks/useLoadAllActivePurok";
import useLoadAllActiveRepresentative from "../../../../custom-hooks/useLoadAllActiveRepresentative";
import useLoadAllActiveRepresentativeCount from "../../../../custom-hooks/useLoadAllActiveRepresentativeCount";
import { devNavUrl, formatDate } from "../../../../helpers/functions-general";
import LoadMore from "../../../../widgets/LoadMore";
import NoData from "../../../../widgets/NoData";
import SearchBox from "../../../../widgets/SearchBox";
import Spinner from "../../../../widgets/Spinner";

const DashboardList = () => {
  const search = React.useRef(null);

  const { activePurok } = useLoadAllActivePurok(
    "/admin/admin-sitio/read-sitio-all.php"
  );

  const { result, loading } = useLoadAll(
    "/admin/admin-evaluation/enable-evaluation/read-all-evaluation.php"
  );

  // bar graph for list of sitio with total population and total household
  const { activeRepresentative } = useLoadAllActiveRepresentative(
    "/admin/admin-representative/read-representative.php"
  );

  const { countRepresentative } = useLoadAllActiveRepresentativeCount(
    "/admin/admin-representative/read-representative-count-all.php"
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

  let sitio = [];
  let unemployment = [];
  let population = [];
  let year = [];
  let incomeClassification = [];
  let poor = [];
  let low = [];
  let lowMiddle = [];
  let middle = [];
  let upperMiddle = [];
  let high = [];
  let rich = [];
  let background = [];

  incomeClass.map((item) => {
    incomeClassification.push(item.monthly_income_name);
  });

  activePurok.map((item) => {
    sitio.push(item.sitio_name);
    unemployment.push(getTotalUnemployment(item.sitio_aid));
    poor.push(getTotalPoor(item.sitio_aid));
    low.push(getTotalLowIncome(item.sitio_aid));
    lowMiddle.push(getTotalLowMiddle(item.sitio_aid));
    middle.push(getTotalMiddleClass(item.sitio_aid));
    upperMiddle.push(getTotalUpperMiddle(item.sitio_aid));
    high.push(getTotalHighIncome(item.sitio_aid));
    rich.push(getTotalRich(item.sitio_aid));
  });

  result.map((item) => {
    year.push(
      `${formatDate(item.evaluation_list_created).split(" ")[0]} ${
        formatDate(item.evaluation_list_created).split(" ")[2]
      }`
    );
    population.push(getTotalPopulation(item.evaluation_list_aid));
  });

  for (let i = 0; i < incomeClassification.length; i++) {
    let r = Math.floor(Math.random() * 42);
    let g = Math.floor(Math.random() * 122);
    let b = Math.floor(Math.random() * 120);
    background.push("rgba(" + r + ", " + g + ", " + b + ", .5)");

    // border.push("rgba(" + r + ", " + g + ", " + b + ", 1)");
  }

  const UnemploymentRate = {
    labels: sitio,
    datasets: [
      {
        label: "Unemployment Rate Percentage",
        data: unemployment,
        backgroundColor: background,
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
        backgroundColor: background,
        borderWidth: 1,
      },
    ],
  };

  const classification = {
    labels: sitio,
    datasets: [
      {
        label: "Poor",
        data: poor,
        borderWidth: 1,
      },
      {
        label: "Low Income (but not poor)",
        data: low,
        borderWidth: 1,
      },
      {
        label: "Lower Middle Income",
        data: lowMiddle,
        borderWidth: 1,
      },
      {
        label: "Middle Income",
        data: middle,
        borderWidth: 1,
      },
      {
        label: "Upper Middle Income",
        data: upperMiddle,
        borderWidth: 1,
      },
      {
        label: "High income (but not rich)",
        data: high,
        borderWidth: 1,
      },
      {
        label: "Rich",
        data: rich,
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
          <Bar
            style={{ width: "100%", maxHeight: "30rem" }}
            data={UnemploymentRate}
          />
        </div>
        <div className="graph__item">
          <Bar
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
        {/* <div className="graph__item">
          <PolarArea
            style={{ width: "100%", maxHeight: "30rem" }}
            data={TotalPopulationTotalHousehold}
          />
        </div> */}
      </div>
    </>
  );
};

export default DashboardList;
