import { Chart as ChartJS } from "chart.js/auto";
import React from "react";
import { Bar, Doughnut, Line, PolarArea } from "react-chartjs-2";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
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

  const labels = ["Sitio 1", "Sitio 2", "Sitio 3", "Sitio 4", "Sitio 5"];

  const userData = {
    labels: labels,
    datasets: [
      {
        label: "Total Population",
        data: [80, 76, 89, 100, 92],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 1,
      },
      {
        label: "Poverty Rate",
        data: [20, 36, 19, 70, 44],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="graph__container">
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

      {/* <div className="mb--2">
        <h3 className="t--bold mb--1">Baranggay San Marcos</h3>
        <SearchBox
          search={search}
          handleSearch={handleSearch}
          handleChange={handleChange}
          loading={loading}
          result={result}
          store={store}
          url="/admin/admin-sitio/read-sitio-search.php"
        />
        <table id="" className="" cellSpacing="0" width="100%">
          <thead className="">
            <tr>
              <th className="" rowSpan="1">
                #
              </th>
              <th className="row--name" rowSpan="1" style={{ width: "15rem" }}>
                Name
              </th>
              <th rowSpan="1">Ratings</th>
              <th rowSpan="1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {result.length > 0 ? (
              result.map((item, key) => {
                count += 1;
                return (
                  <tr key={key}>
                    <td>{count}.</td>
                    <td>{item.sitio_name}</td>
                    <td>{"80%"}</td>
                    <td>
                      <Link
                        to={`${devNavUrl}/admin/citizen?sid=${item.sitio_aid}`}
                        className="dropdown tooltip--view"
                      >
                        <span>
                          <AiFillEye />
                        </span>
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="100%">
                  <NoData />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div> */}
      {/* <div className="t--center">
        {!store.isSearch && (
          <LoadMore
            handleLoad={handleLoad}
            loading={loading}
            result={result}
            totalResult={totalResult}
          />
        )}
      </div> */}
    </>
  );
};

export default DashboardList;
