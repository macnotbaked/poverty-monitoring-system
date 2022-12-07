import { Chart as ChartJS } from "chart.js/auto";
import React from "react";
import { Bar, Doughnut, Line, PolarArea } from "react-chartjs-2";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import useLoadAllActivePurok from "../../../../custom-hooks/useLoadAllActivePurok";
import useLoadAllActiveRepresentative from "../../../../custom-hooks/useLoadAllActiveRepresentative";
import useLoadAllActiveRepresentativeCount from "../../../../custom-hooks/useLoadAllActiveRepresentativeCount";
import { devNavUrl } from "../../../../helpers/functions-general";
import LoadMore from "../../../../widgets/LoadMore";
import NoData from "../../../../widgets/NoData";
import SearchBox from "../../../../widgets/SearchBox";
import Spinner from "../../../../widgets/Spinner";

const DashboardList = ({
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

  const { activePurok, loadingActivePurok } = useLoadAllActivePurok(
    "/admin/admin-sitio/read-sitio-all.php"
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
        if (Number(item.representative_purok_id) === Number(id)) {
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

  let sitio = [];
  let population = [];
  let household = [];

  activePurok.map((item) => {
    sitio.push(item.sitio_name);
    population.push(getTotalPopulation(item.sitio_aid));
    household.push(getTotalHousehold(item.sitio_aid));
  });

  const userData = {
    labels: sitio,
    datasets: [
      {
        label: "Total Population",
        data: population,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 1,
      },
      {
        label: "Total Household",
        data: household,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="graph__container p--relative">
        {loading && <Spinner />}
        <div className="graph__item">
          <Bar style={{ width: "100%", maxHeight: "30rem" }} data={userData} />
        </div>
        <div className="graph__item">
          <Doughnut
            style={{ width: "100%", maxHeight: "30rem" }}
            data={userData}
          />
        </div>
        <div className="graph__item">
          <PolarArea
            style={{ width: "100%", maxHeight: "30rem" }}
            data={userData}
          />
        </div>
        <div className="graph__item">
          <Line style={{ width: "100%", maxHeight: "30rem" }} data={userData} />
        </div>
      </div>
    </>
  );
};

export default DashboardList;
