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
import { setIsConfirm } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { devNavUrl } from "../../../../helpers/functions-general";
import LoadMore from "../../../../widgets/LoadMore";
import ModalConfirm from "../../../../widgets/ModalConfirm";
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
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.representative_aid);
    setDel(null);
    setData(item);
  };
  return (
    <>
      <SearchBox
        search={search}
        handleSearch={handleSearch}
        handleChange={handleChange}
        loading={loading}
        result={result}
        store={store}
        url="/admin/admin-representative/read-representative-search-active.php"
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
                Household Number
              </th>
              <th className="row--name" rowSpan="1">
                Representative
              </th>
              <th rowSpan="1">Purok</th>
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
                    <td>House {item.representative_house_number}</td>
                    <td>{item.representative_name}</td>
                    <td>{item.sitio_name}</td>
                    <td>
                      {item.sitio_is_active === "1" && (
                        <div className="d--flex justify-center">
                          <Link
                            to={`${devNavUrl}/admin/purok/household-view?hid=${item.representative_aid}`}
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
                              <Link
                                to={`${devNavUrl}/admin/purok/household-edit?hid=${item.representative_aid}`}
                                className="tooltip--table"
                                data-tooltip="View"
                              >
                                <span>
                                  <FaEdit /> Edit
                                </span>
                              </Link>
                              <button onClick={() => handleArchive(item)}>
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

        {store.isConfirm && (
          <ModalConfirm
            id={id}
            isDel={isDel}
            mysqlApiArchive={
              "/admin/admin-representative/archive-representative.php"
            }
            msg={"Are you sure you want to archive"}
            item={`"${dataItem.representative_house_number}"`}
          />
        )}

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
