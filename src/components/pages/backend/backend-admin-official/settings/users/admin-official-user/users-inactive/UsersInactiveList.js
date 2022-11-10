import React from "react";
import { AiFillEye } from "react-icons/ai";
import { MdOutlineRestore } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  setIsAdd,
  setIsConfirm,
} from "../../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../../store/StoreContext";
import { devNavUrl } from "../../../../../../../helpers/functions-general";
import LoadMore from "../../../../../../../widgets/LoadMore";
import NoData from "../../../../../../../widgets/NoData";
import SearchBox from "../../../../../../../widgets/SearchBox";
import Spinner from "../../../../../../../widgets/Spinner";
import ModalRestoreUser from "./ModalRestoreUser";

const UsersInactiveList = ({
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
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  let count = 0;

  const handleView = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleRestore = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.users_aid);
    setData(item);
    setDel(null);
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
      <div className="mb--2">
        {loading && <Spinner />}
        <table id="" className="" cellSpacing="0" width="100%">
          <thead className="">
            <tr>
              <th className="" rowSpan="1">
                #
              </th>
              <th rowSpan="1" style={{ width: "15rem" }}>
                Name
              </th>
              <th rowSpan="1" style={{ width: "20rem" }}>
                Email
              </th>
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
                    <td className="table--name">
                      {item.users_lname}, {item.users_fname}{" "}
                      <span>{item.users_mname}</span>.
                    </td>
                    <td>{item.users_email}</td>
                    <td>{item.users_phone}</td>
                    <td>{item.roles_name}</td>
                    <td>
                      <button
                        className="dropdown tooltip--view"
                        onClick={() => handleView(item)}
                      >
                        <span>
                          <AiFillEye />
                        </span>
                      </button>
                      <button
                        className="dropdown tooltip--restore"
                        onClick={() => handleRestore(item)}
                      >
                        <span>
                          <MdOutlineRestore />
                        </span>
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="100%">
                  <NoData />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="t--center row">
        {!store.isSearch && (
          <LoadMore
            handleLoad={handleLoad}
            loading={loading}
            result={result}
            totalResult={totalResult}
          />
        )}
      </div>

      {store.isConfirm && (
        <ModalRestoreUser
          id={id}
          isDel={isDel}
          mysqlApiRestore={"/admin/admin-settings/users/restore-user.php"}
          msg={"Are you sure you want to restore"}
          item={dataItem.users_email}
        />
      )}
    </>
  );
};

export default UsersInactiveList;
