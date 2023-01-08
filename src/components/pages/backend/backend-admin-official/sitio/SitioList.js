import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArchive, FaEdit, FaEye, FaHistory, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  setIsAdd,
  setIsConfirm,
  setStartIndex,
} from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import useLoadAllActiveRepresentative from "../../../../custom-hooks/useLoadAllActiveRepresentative";
import { devNavUrl } from "../../../../helpers/functions-general";
import LoadMore from "../../../../widgets/LoadMore";
import ModalConfirm from "../../../../widgets/ModalConfirm";
import NoData from "../../../../widgets/NoData";
import SearchBox from "../../../../widgets/SearchBox";
import Spinner from "../../../../widgets/Spinner";

const SitioList = ({
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
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  let count = 0;

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.sitio_aid);
    setDel(null);
    setData(item);
  };

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const { activeRepresentative } = useLoadAllActiveRepresentative(
    "/admin/admin-representative/read-representative-all.php"
  );

  const getTotal = (id) => {
    let val = 0;
    let res = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_aid) === Number(id)) {
          val = item.representative_household_living_id;
        }
      });
    }
    return val;
  };

  const getTotalHousehold = (id) => {
    let totalOwn = 0;
    let totalRent = 0;
    let own = 0;
    let rent = 0;
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        // console.log(getTotal(item.representative_aid));
        own = [getTotal(item.representative_aid)].filter(
          (i) => i === "1"
        ).length;
        rent = [getTotal(item.representative_aid)].filter(
          (i) => i === "2"
        ).length;
        if (Number(item.representative_purok_id) === Number(id)) {
          totalOwn += own;
          totalRent += rent;
          val = totalOwn + totalRent;
        }
      });
    }

    return val;
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
                    <td data-label="#">{count}.</td>
                    <td data-label="Name">{item.sitio_name}</td>
                    <td data-label="Total Household">
                      {getTotalHousehold(item.sitio_aid)}
                    </td>
                    <td data-label="Action">
                      <div className="d--flex">
                        <Link
                          to={`${devNavUrl}/admin/purok/household?sid=${item.sitio_aid}`}
                          className="dropdown tooltip--table"
                          data-tooltip="View"
                          onClick={() => dispatch(setStartIndex(0))}
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
                            <button onClick={() => handleEdit(item)}>
                              <FaEdit /> Edit
                            </button>
                            <button onClick={() => handleArchive(item)}>
                              <FaArchive /> Archive
                            </button>
                          </div>
                        </div>
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

        {store.isConfirm && (
          <ModalConfirm
            id={id}
            isDel={isDel}
            mysqlApiArchive={"/admin/admin-sitio/archive-sitio.php"}
            msg={"Are you sure you want to archive"}
            item={`"${dataItem.sitio_name}"`}
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

export default SitioList;
