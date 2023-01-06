import React from "react";
import { FaHistory, FaTrash } from "react-icons/fa";
import { setIsRestore } from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import useLoadAllActiveRepresentative from "../../../../../../custom-hooks/useLoadAllActiveRepresentative";
import LoadMore from "../../../../../../widgets/LoadMore";
import ModalDeleteRestore from "../../../../../../widgets/ModalDeleteRestore";
import NoData from "../../../../../../widgets/NoData";
import SearchBox from "../../../../../../widgets/SearchBox";
import Spinner from "../../../../../../widgets/Spinner";

const InactivePurokList = ({
  loading,
  handleLoad,
  totalResult,
  result,
  handleSearch,
  handleChange,
}) => {
  const search = React.useRef(null);
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  const [id, setId] = React.useState(null);

  let count = 0;

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.sitio_aid);
    setData(item);
    setDel(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsRestore(true));
    setId(item.sitio_aid);
    setData(item);
    setDel(true);
  };

  const { activeRepresentative } = useLoadAllActiveRepresentative(
    "/admin/admin-representative/read-representative-count-all.php"
  );

  const getTotal = (id) => {
    let val = 0;

    if (activeRepresentative.length) {
      activeRepresentative.map((item) => {
        if (Number(item.representative_purok_id) === Number(id)) {
          val = item.total;
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
        url="/admin/admin-sitio/read-sitio-search-inactive.php"
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
                      {getTotal(item.sitio_aid)}
                    </td>
                    <td data-label="Action">
                      <div className="d--flex">
                        <div
                          className="dropdown tooltip--table"
                          onClick={() => handleRestore(item)}
                          data-tooltip="Restore"
                        >
                          <span>
                            <FaHistory />
                          </span>
                        </div>
                        <div
                          className="dropdown tooltip--table"
                          onClick={() => handleDelete(item)}
                          data-tooltip="Delete"
                        >
                          <span>
                            <FaTrash />
                          </span>
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

      {store.isRestore && (
        <ModalDeleteRestore
          id={id}
          isDel={isDel}
          mysqlApiDelete="/admin/admin-sitio/delete-sitio.php"
          mysqlApiRestore="/admin/admin-sitio/restore-sitio.php"
          msg={
            isDel
              ? "Are you sure you want to permanently delete"
              : "Are you sure you want to restore"
          }
          item={dataItem.sitio_name}
        />
      )}
    </>
  );
};

export default InactivePurokList;
