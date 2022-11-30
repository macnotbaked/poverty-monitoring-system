import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArchive, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../../../../store/StoreContext";
import { devNavUrl } from "../../../../../helpers/functions-general";
import LoadMore from "../../../../../widgets/LoadMore";
import NoData from "../../../../../widgets/NoData";
import SearchBox from "../../../../../widgets/SearchBox";
import Spinner from "../../../../../widgets/Spinner";

const EvaluationHouseholdList = ({
  loading,
  handleLoad,
  totalResult,
  result,
  handleSearch,
  handleChange,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const search = React.useRef(null);

  let count = 0;
  return (
    <>
      <div className="table__container">
        {loading && <Spinner />}
        <SearchBox
          search={search}
          handleSearch={handleSearch}
          handleChange={handleChange}
          loading={loading}
          result={result}
          store={store}
          url="/admin/admin-sitio/read-sitio-search.php"
        />
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
              <th rowSpan="1">Action</th>
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
                      <div className="d--flex justify-center">
                        <Link
                          to={`${devNavUrl}/admin/evaluation/household?sid=${item.sitio_aid}`}
                          className="dropdown tooltip--table"
                          data-tooltip="View"
                        >
                          <span>
                            <FaEye />
                          </span>
                        </Link>
                      </div>
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

export default EvaluationHouseholdList;
