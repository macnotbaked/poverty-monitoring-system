import React from "react";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { devNavUrl } from "../../../../../../helpers/functions-general";
import NoData from "../../../../../../widgets/NoData";
import Spinner from "../../../../../../widgets/Spinner";

const UsersActiveList = ({
  loading,
  handleLoad,
  totalResult,
  result,
  handleSearch,
  handleChange,
}) => {
  return (
    <>
      <div className="mb--2">
        {/* <h3 className="t--bold mb--1">Baranggay San Marcos</h3> */}
        {/* {loading && <Spinner />} */}

        <table id="" className="" cellSpacing="0" width="100%">
          <thead className="">
            <tr>
              <th className="" rowSpan="1">
                #
              </th>
              <th rowSpan="1" style={{ width: "15rem" }}>
                Name
              </th>
              <th rowSpan="1" style={{ width: "20rem" }}>
                Email
              </th>
              <th rowSpan="1">Contact</th>
              <th rowSpan="1">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" ">
              <td>1.</td>
              <td>Merin, Mark Ryan B.</td>
              <td>merin.ryanmark@gmail.com</td>
              <td>09491040057</td>
              <td>
                <Link
                  to={`${devNavUrl}/admin/sitio`}
                  className="dropdown tooltip--view"
                >
                  <span>
                    <AiFillEye />
                  </span>
                </Link>
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

export default UsersActiveList;
