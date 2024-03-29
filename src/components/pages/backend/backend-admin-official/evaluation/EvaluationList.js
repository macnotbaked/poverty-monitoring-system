import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { setStartIndex } from "../../../../../store/StoreAction";
import { Link } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";
import { AiFillEye } from "react-icons/ai";
import Spinner from "../../../../widgets/Spinner";
import NoData from "../../../../widgets/NoData";
import { StoreContext } from "../../../../../store/StoreContext";
import LoadMore from "../../../../widgets/LoadMore";
import SearchBox from "../../../../widgets/SearchBox";

const EvaluationList = ({
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

  const background = [];
  const border = [];
  const labels = ["Sitio 1", "Sitio 2", "Sitio 3", "Sitio 4", "Sitio 5"];

  for (let i = 0; i < labels.length; i++) {
    let r = Math.floor(Math.random() * 73);
    let g = Math.floor(Math.random() * 149);
    let b = Math.floor(Math.random() * 139);
    background.push("rgba(" + r + ", " + g + ", " + b + ", .5)");
    border.push("rgba(" + r + ", " + g + ", " + b + ", 1)");
  }

  const userData = {
    labels: ["Sitio 1", "Sitio 2", "Sitio 3", "Sitio 4", "Sitio 5"],
    datasets: [
      {
        label: "Yearly Poverty Rate",
        data: [80, 76, 89, 100, 92, 88],
        backgroundColor: background,
        borderColor: border,
        borderWidth: 1,
      },
    ],
  };
  const user = {
    labels: ["Sitio 1", "Sitio 2", "Sitio 3", "Sitio 4", "Sitio 5"],
    datasets: [
      {
        label: "Yearly Poverty Rate",
        data: [80, 76, 89, 100, 92, 88],
        backgroundColor: background,
        borderColor: border,
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="graph" style={{ maxWidth: "90rem", maxHeight: "35rem" }}>
        <Bar
          style={{ maxWidth: "90rem", maxHeight: "30rem" }}
          data={userData}
        />
      </div>

      <div className="mb--2">
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
      </div>
      <div className="t--center row">
        {!store.isSearch && (
          <LoadMore
            handleLoad={handleLoad}
            loading={loading}
            result={result}
            totalResult={totalResult}
          />
        )}
      </div>
    </>
  );
};

export default EvaluationList;
