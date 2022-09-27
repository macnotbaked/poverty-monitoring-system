import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArchive, FaTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";
import NoData from "../../../../widgets/NoData";
import { StoreContext } from "../../../../../store/StoreContext";
import Spinner from "../../../../widgets/Spinner";

const CitizensList = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  return (
    <>
      {/* <SearchBox url="/admin/admin-trainee/read-trainee-search-active.php" /> */}
      <div className="mb--2">
        {loading && <Spinner />}
        <table id="" className="" cellSpacing="0" width="100%">
          <thead className="">
            <tr>
              <th className="" rowSpan="1">
                #
              </th>
              <th className="row--name" rowSpan="1" style={{ width: "15rem" }}>
                Name
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
              <td>Reyes, Ervin B.</td>

              <td>09491040057</td>
              <td>ervin@gmail.com</td>
              <td>
                <div className="dropdown tooltip--view">
                  <span>
                    <AiFillEdit />
                  </span>
                </div>

                <div className="dropdown">
                  <span>
                    <BsThreeDotsVertical />
                  </span>
                  <div className="dropdown-content">
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
            <tr className=" ">
              <td>2.</td>
              <td>Maralit, Meirejoy C.</td>

              <td>09491040057</td>
              <td>maralit@gmail.com</td>
              <td>
                <div className="dropdown tooltip--view">
                  <span>
                    <AiFillEdit />
                  </span>
                </div>

                <div className="dropdown">
                  <span>
                    <BsThreeDotsVertical />
                  </span>
                  <div className="dropdown-content">
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
            <tr className=" ">
              <td>3.</td>
              <td>Briones, Carlo D.</td>

              <td>09491040057</td>
              <td>carlo@gmail.com</td>
              <td>
                <div className="dropdown tooltip--view">
                  <span>
                    <AiFillEdit />
                  </span>
                </div>

                <div className="dropdown">
                  <span>
                    <BsThreeDotsVertical />
                  </span>
                  <div className="dropdown-content">
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
            <tr className=" ">
              <td>4.</td>
              <td>Merin, Mark Ryan B.</td>

              <td>09491040057</td>
              <td>merin.ryanmark@gmail.com</td>
              <td>
                <div className="dropdown tooltip--view">
                  <span>
                    <AiFillEdit />
                  </span>
                </div>

                <div className="dropdown">
                  <span>
                    <BsThreeDotsVertical />
                  </span>
                  <div className="dropdown-content">
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

export default CitizensList;
