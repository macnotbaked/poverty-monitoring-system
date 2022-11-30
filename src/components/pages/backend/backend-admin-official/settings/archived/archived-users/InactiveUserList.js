import React from "react";
import { FaArchive, FaEdit, FaHistory, FaTrash } from "react-icons/fa";
import {
  setIsAdd,
  setIsConfirm,
  setIsRestore,
} from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import LoadMore from "../../../../../../widgets/LoadMore";
import ModalConfirm from "../../../../../../widgets/ModalConfirm";
import ModalDeleteRestore from "../../../../../../widgets/ModalDeleteRestore";
import NoData from "../../../../../../widgets/NoData";
import SearchBox from "../../../../../../widgets/SearchBox";
import Spinner from "../../../../../../widgets/Spinner";

const InactiveUserList = ({
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
    setId(item.users_aid);
    setData(item);
    setDel(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsRestore(true));
    setId(item.users_aid);
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
        url="/admin/admin-settings/users/read-user-inactive-search.php"
      />
      <div className="table__container">
        {loading && <Spinner />}
        <table>
          <thead className="">
            <tr>
              <th className="" rowSpan="1">
                #
              </th>
              <th rowSpan="1">Name</th>
              <th rowSpan="1">Email</th>
              <th rowSpan="1">Contact</th>
              <th rowSpan="1">Role</th>
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
                    <td>
                      {item.users_lname}, {item.users_fname}{" "}
                      <span>{item.users_mname}</span>.
                    </td>
                    <td>{item.users_email}</td>
                    <td>{item.users_phone}</td>
                    <td>{item.roles_name}</td>
                    <td>
                      <div className="d--flex justify-center">
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
          mysqlApiDelete="/admin/admin-settings/users/delete-user.php"
          mysqlApiRestore="/admin/admin-settings/users/restore-user.php"
          msg={
            isDel
              ? "Are you sure you want to permanently delete"
              : "Are you sure you want to restore"
          }
          item={dataItem.users_email}
        />
      )}
    </>
  );
};

export default InactiveUserList;
