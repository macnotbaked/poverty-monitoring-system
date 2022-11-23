import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArchive, FaEdit, FaEye, FaHistory, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../../../../store/StoreContext";
import { devNavUrl } from "../../../../../helpers/functions-general";
import LoadMore from "../../../../../widgets/LoadMore";
import NoData from "../../../../../widgets/NoData";
import SearchBox from "../../../../../widgets/SearchBox";
import Spinner from "../../../../../widgets/Spinner";

const CitizenList = ({
  loading,
  handleLoad,
  totalResult,
  result,
  handleSearch,
  handleChange,
  setItemEdit,
}) => {
  const search = React.useRef(null);
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [isSus, setSus] = React.useState(false);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
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
              <th>#</th>
              <th>Name</th>

              <th>Contact</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{count}</td>
              <td>{"item.household_representative"}</td>

              <td>{"09491040057"}</td>
              <td>ervin@gmail.com</td>
              <td>
                <div className="d--flex">
                  <Link
                    to={`${devNavUrl}/admin/purok/household?sid=`}
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
              </td>
            </tr>
            <>
              <tr className="nodata">
                <td colSpan="100%">
                  <NoData />
                </td>
              </tr>
            </>
          </tbody>
        </table>
      </div>

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
    </>
  );
};

export default CitizenList;
