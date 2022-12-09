import { Chart as ChartJS } from "chart.js/auto";
import React from "react";
import { Bar, Doughnut, Line, PolarArea } from "react-chartjs-2";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import useLoadAll from "../../../../custom-hooks/useLoadAll";
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

  let sitio = [];
  let population = [];
  let unemployment = [];
  let year = [];

  activePurok.map((item) => {
    sitio.push(item.sitio_name);
    unemployment.push(getTotalUnemployment(item.sitio_aid));
  });

  result.map((item) => {
    year.push(formatDate(item.evaluation_list_created).split(" ")[2]);
    population.push(getTotalPopulation(item.evaluation_list_aid));
  });

  const TotalPopulationTotalHousehold = {
    labels: sitio,
    datasets: [
      {
        label: "Unemployment Rate Percentage",
        data: unemployment,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 1,
      },
    ],
  };

  const PopulationPerYear = {
    labels: year,
    datasets: [
      {
        label: "Total Population",
        data: population,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="graph__container p--relative">
        {loading && <Spinner />}
        <div className="graph__item">
          <Bar
            style={{ width: "100%", maxHeight: "30rem" }}
            data={TotalPopulationTotalHousehold}
          />
        </div>
        <div className="graph__item">
          <Doughnut
            style={{ width: "100%", maxHeight: "30rem" }}
            data={TotalPopulationTotalHousehold}
          />
        </div>
        <div className="graph__item">
          <PolarArea
            style={{ width: "100%", maxHeight: "30rem" }}
            data={TotalPopulationTotalHousehold}
          />
        </div>
        <div className="graph__item">
          <Line
            style={{ width: "100%", maxHeight: "30rem" }}
            data={PopulationPerYear}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardList;
