import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  FaArchive,
  FaEdit,
  FaEye,
  FaHistory,
  FaTrash,
  FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../../../store/StoreContext";
import { devNavUrl } from "../../../../helpers/functions-general";
import LoadMore from "../../../../widgets/LoadMore";
import NoData from "../../../../widgets/NoData";
import SearchBox from "../../../../widgets/SearchBox";
import Spinner from "../../../../widgets/Spinner";

const CitizensList = ({
  loading,
  handleLoad,
  totalResult,
  result,
  handleSearch,
  handleChange,
  setItemEdit,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const search = React.useRef(null);
  let count = 0;
  return (
    <>
      <SearchBox
        search={search}
        handleSearch={handleSearch}
        handleChange={handleChange}
        loading={loading}
        result={result}
        store={store}
        url="/admin/admin-sitio/read-sitio-search.php"
      />
      <div className="table__container">
        {loading && <Spinner />}
        <table>
          <thead className="">
            <tr>
              <th className="" rowSpan="1">
                #
              </th>
              <th className="row--name" rowSpan="1">
                Name
              </th>
              <th rowSpan="1">Total Household</th>
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
                    <td>{100}</td>
                    <td>
                      {item.sitio_is_active === "1" && (
                        <div className="d--flex">
                          <Link
                            to={`${devNavUrl}/admin/household-view?sid=${item.sitio_aid}`}
                            className="dropdown tooltip--table"
                            data-tooltip="View"
                          >
                            <span>
                              <FaEye />
                            </span>
                          </Link>

                          <div className="dropdown">
                            <span>
                              <BsThreeDotsVertical />
                            </span>
                            <div className="dropdown-content">
                              <button>
                                <FaEdit /> Edit
                              </button>
                              <button>
                                <FaArchive /> Archive
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {item.sitio_is_active === "0" && (
                        <>
                          <div className="d--flex">
                            <button
                              className="dropdown tooltip--table"
                              data-tooltip="Restore"
                            >
                              <span>
                                <FaHistory />
                              </span>
                            </button>

                            <button
                              className="dropdown tooltip--table"
                              data-tooltip="Delete"
                            >
                              <span>
                                <FaTrash />
                              </span>
                            </button>
                          </div>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="nodata">
                <td colSpan="100%">
                  <NoData />
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="mt--2 t--center row">
          {!store.isSearch && (
            <LoadMore
              handleLoad={handleLoad}
              loading={loading}
              result={result}
              totalResult={totalResult}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CitizensList;
