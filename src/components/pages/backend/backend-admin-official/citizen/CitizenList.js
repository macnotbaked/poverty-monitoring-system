import React from "react";
import SearchBox from "../../../../widgets/SearchBox";
import { BiMessageDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArchive } from "react-icons/io";
import { FaArchive, FaTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";
import NoData from "../../../../widgets/NoData";

const CitizenList = () => {
  return (
    <>
      {/* <SearchBox url="/admin/admin-trainee/read-trainee-search-active.php" /> */}
      <div className="mb--2">
        <table id="" className="" cellSpacing="0" width="100%">
          <thead className="">
            <tr>
              <th className="" rowSpan="1">
                #
              </th>
              <th className="row--name" rowSpan="1" style={{ width: "15rem" }}>
                Name
              </th>
              <th style={{ width: "7rem" }} rowSpan="1">
                Sitio
              </th>
              <th style={{ width: "12rem" }} rowSpan="1">
                Contact
              </th>
              <th rowSpan="1">Email</th>
              <th rowSpan="1">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" ">
              <td>1.</td>
              <td>Merin, Mark Ryan B.</td>
              <td>Sitio 1</td>
              <td>09491040057</td>
              <td>merin.ryanmark@gmail.com</td>
              <td>
                <div className="dropdown tooltip--view">
                  <span>
                    <BiMessageDetail />
                  </span>
                </div>

                <div className="dropdown">
                  <span>
                    <BsThreeDotsVertical />
                  </span>
                  <div className="dropdown-content">
                    <Link to={`${devNavUrl}/admin/trainee-filter?id`}>
                      <AiFillEdit /> Edit
                    </Link>
                    <button>
                      <FaTrashAlt /> Delete
                    </button>
                    <button>
                      <FaArchive /> Archive
                    </button>
                  </div>
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

export default CitizenList;
