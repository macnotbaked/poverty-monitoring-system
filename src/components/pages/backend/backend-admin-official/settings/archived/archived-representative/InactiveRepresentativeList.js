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

const InactiveRepresentativeList = ({
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
    setId(item.representative_aid);
    setData(item);
    setDel(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsRestore(true));
    setId(item.representative_aid);
    setData(item);
    setDel(true);
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
        url="/admin/admin-representative/read-representative-search-inactive.php"
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
              <th rowSpan="1">Name</th>
              <th rowSpan="1">Contact</th>
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
                    <td data-label="Household Number">
                      House #{item.representative_house_number}
                    </td>
                    <td data-label="Name">{item.representative_name}</td>
                    <td data-label="Contact">{item.representative_contact}</td>
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
          mysqlApiDelete="/admin/admin-representative/delete-representative.php"
          mysqlApiRestore="/admin/admin-representative/restore-representative.php"
          msg={
            isDel
              ? "Are you sure you want to permanently delete"
              : "Are you sure you want to restore"
          }
          item={`House # ${dataItem.representative_house_number} "${dataItem.representative_name}"`}
        />
      )}
    </>
  );
};

export default InactiveRepresentativeList;
