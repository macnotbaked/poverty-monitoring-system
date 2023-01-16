import React from "react";
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
import Header from "../../../../header/Header";
import { formatDate } from "../../../../helpers/functions-general";
import Navigation from "../../../../navigation/Navigation";
import DashboardList from "./DashboardList";

const Dashboard = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const { evaluation, evaluationLoading } = useLoadAllEvaluation(
    "/admin/admin-evaluation/enable-evaluation/read-all-evaluation.php"
  );

  const { evaluationList } = useLoadAllEvaluationList(
    "/admin/admin-evaluation/enable-evaluation/read-enable-evaluation.php"
  );

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
  let povertyRate = [];
  let populationUnemployed = ["Unemployment Rate", "Total Population"];
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

    return val.toFixed(2);
  };

  const getTotalPoor = (id) => {
    let val = 0;
    let res = 0;
    let total = 0;

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

    total = (val / totalCount) * 100;

    if (total === 0) {
      return "";
    }
    return total.toFixed(2);
  };

  const getTotalLowIncome = (id) => {
    let val = 0;
    let res = 0;
    let total = 0;

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

    total = (val / totalCount) * 100;

    if (total === 0) {
      return "";
    }
    return total.toFixed(2);
  };

  const getTotalLowMiddle = (id) => {
    let val = 0;
    let res = 0;
    let total = 0;

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

    total = (val / totalCount) * 100;

    if (total === 0) {
      return "";
    }
    return total.toFixed(2);
  };

  const getTotalMiddleClass = (id) => {
    let val = 0;
    let res = 0;
    let total = 0;

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

    total = (val / totalCount) * 100;

    if (total === 0) {
      return "";
    }
    return total.toFixed(2);
  };

  const getTotalUpperMiddle = (id) => {
    let val = 0;
    let res = 0;
    let total = 0;

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

    total = (val / totalCount) * 100;

    if (total === 0) {
      return "";
    }
    return total.toFixed(2);
  };

  const getTotalHighIncome = (id) => {
    let val = 0;
    let res = 0;
    let total = 0;

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

    total = (val / totalCount) * 100;

    if (total === 0) {
      return "";
    }
    return total.toFixed(2);
  };

  const getTotalRich = (id) => {
    let val = 0;
    let res = 0;
    let total = 0;

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

    total = (val / totalCount) * 100;

    return total.toFixed(2);
  };

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

  const UnemploymentRate = {
    labels: populationUnemployed,
    datasets: [
      {
        data: [unemployment, unemployedPopulation],
        borderColor: ["rgba(255, 205, 86, 0.5)", "rgba(54, 162, 235, 0.5)"],
        backgroundColor: ["rgba(255, 205, 86, 0.5)", "rgba(54, 162, 235, 0.5)"],
        borderWidth: 1,
      },
    ],
  };

  const PopulationPerYear = {
    labels: year,
    datasets: [
      {
        label: "Population Growth",
        data: totalPopulation,
        borderColor: "rgb(0, 0, 0, .3)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
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
        borderColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(201, 203, 207, 0.5)",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(201, 203, 207, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const PovertyRate = {
    labels: year,
    datasets: [
      {
        label: "Poverty Rate",
        data: povertyRate,
        borderWidth: 1,
        borderColor: "rgba(58,175,169, 0.5)",
        backgroundColor: "rgba(58,175,169, 0.5)",
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

    return final.toFixed(2);
  };

  const getTotalMidage = (id) => {
    let val = 0;
    let res = 0;
    let final = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          res = Number(item.representative_total_midage);
        }
        val += res;
      });
    }

    final = (val / activeRepresentative.length) * 100;

    return final.toFixed(2);
  };

  const getTotalSenior = (id) => {
    let val = 0;
    let res = 0;
    let final = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          res = Number(item.representative_total_seniors);
        }
        val += res;
      });
    }

    final = (val / activeRepresentative.length) * 100;

    return final.toFixed(2);
  };

  const getTotalUnderage = (id) => {
    let val = 0;
    let res = 0;
    let final = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          res = Number(item.representative_total_underage);
        }
        val += res;
      });
    }

    final = (val / activeRepresentative.length) * 100;

    return final.toFixed(2);
  };

  const getTotalPwd = (id) => {
    let val = 0;
    let res = 0;
    let final = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          res = Number(item.representative_total_pwd);
        }
        val += res;
      });
    }

    final = (val / activeRepresentative.length) * 100;

    return final.toFixed(2);
  };

  const getTotalInDanger = (id) => {
    let val = 0;
    let res = 0;
    let final = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          res = item.representative_is_in_danger_area === "1";
        }
        val += res;
      });
    }

    final = (val / activeRepresentative.length) * 100;

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

    return final.toFixed(2);
  };

  const getTotalRenting = (id) => {
    let res = 0;
    let final = 0;
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_eval_id) === Number(id)) {
          res = item.representative_household_living_id === "2";
        }
        val += res;
      });
    }

    final = (val / activeRepresentative.length) * 100;

    return final.toFixed(2);
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

  const getTotalPopulationRenting = () => {
    let res = 0;
    if (evaluation.length) {
      evaluation.map((item) => {
        res = getTotalRenting(item.evaluation_list_aid);
      });
    }

    return res;
  };

  const getTotalPopulationInDanger = () => {
    let res = 0;
    if (evaluation.length) {
      evaluation.map((item) => {
        res = getTotalInDanger(item.evaluation_list_aid);
      });
    }

    return res;
  };

  const getTotalPopulationPwd = () => {
    let res = 0;
    if (evaluation.length) {
      evaluation.map((item) => {
        res = getTotalPwd(item.evaluation_list_aid);
      });
    }

    return res;
  };

  const getTotalUnemploymentRate = () => {
    let res = 0;
    if (evaluation.length) {
      evaluation.map((item) => {
        res = Number(getTotalUnemployed(item.evaluation_list_aid));
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

  const getTotalPopulationMidage = () => {
    let res = 0;
    if (evaluation.length) {
      evaluation.map((item) => {
        res = getTotalMidage(item.evaluation_list_aid);
      });
    }

    return res;
  };

  const getTotalPopulationUnderage = () => {
    let res = 0;
    if (evaluation.length) {
      evaluation.map((item) => {
        res = getTotalUnderage(item.evaluation_list_aid);
      });
    }

    return res;
  };

  const getTotalSeniors = () => {
    let res = 0;
    if (evaluation.length) {
      evaluation.map((item) => {
        res = getTotalSenior(item.evaluation_list_aid);
      });
    }

    return res;
  };

  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="home" />
        <div className="container">
          <div className="content">
            <h3 className="t--bold py--2">Dashboard</h3>
            <DashboardList
              activeRepresentative={activeRepresentative}
              inactive={inactive}
              incomeClass={incomeClass}
              countRepresentative={countRepresentative}
              evaluation={evaluation}
              evaluationList={evaluationList}
              evaluationLoading={evaluationLoading}
              activeHouseholdProgram={activeHouseholdProgram}
              loadingHouseholdProgram={loadingHouseholdProgram}
              activeIncomeProgram={activeIncomeProgram}
              loadingIncomeProgram={loadingIncomeProgram}
              activePopulationProgram={activePopulationProgram}
              loadingPopulationProgram={loadingPopulationProgram}
              activeUnemploymentProgram={activeUnemploymentProgram}
              loadingUnemploymentProgram={loadingUnemploymentProgram}
              getTotalPopulationInDanger={getTotalPopulationInDanger()}
              getTotalPopulationRenting={getTotalPopulationRenting()}
              getTotalPopulationBelowIncome={getTotalPopulationBelowIncome()}
              getTotalSeniors={getTotalSeniors()}
              getTotalPopulationUnderage={getTotalPopulationUnderage()}
              getTotalPopulationMemberForEvaluation={getTotalPopulationMemberForEvaluation()}
              getTotalPopulationMidage={getTotalPopulationMidage()}
              getTotalUnemploymentRate={getTotalUnemploymentRate()}
              getTotalPopulationPwd={getTotalPopulationPwd()}
              PovertyRate={PovertyRate}
              PopulationPerYear={PopulationPerYear}
              UnemploymentRate={UnemploymentRate}
              classification={classification}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
