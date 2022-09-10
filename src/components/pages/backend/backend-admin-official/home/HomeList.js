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

const HomeList = () => {
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

  return (
    <>
      <div className="graph" style={{ maxWidth: "90rem", maxHeight: "35rem" }}>
        <Bar
          style={{ maxWidth: "90rem", maxHeight: "30rem" }}
          data={userData}
        />
      </div>

      <div className="mb--2 responsive--table">
        <table id="" className="" cellSpacing="0" width="100%">
          <thead className="">
            <tr>
              <th className="" rowSpan="1">
                #
              </th>
              <th className="row--name" rowSpan="1">
                Name
              </th>
              <th rowSpan="1">Ratings</th>
              <th rowSpan="1">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" ">
              <td>1.</td>
              <td>Sitio 1</td>
              <td>80%</td>
              <td>
                <div className="dropdown tooltip--view">
                  <span>
                    <Link to={`${devNavUrl}`} className="d-block">
                      <AiFillEye />
                    </Link>
                  </span>
                </div>
              </td>
            </tr>
            <>
              <tr className="">
                <td colSpan="100%">
                  <NoData />
                </td>
              </tr>
            </>
          </tbody>
        </table>
      </div>
      <div className="t--center row">{/* <LoadMore /> */}</div>
    </>
  );
};

export default HomeList;
