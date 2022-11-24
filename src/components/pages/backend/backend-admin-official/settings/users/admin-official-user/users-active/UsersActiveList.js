import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { RiUserUnfollowFill } from "react-icons/ri";
import {
  setIsAdd,
  setIsConfirm,
} from "../../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../../store/StoreContext";
import LoadMore from "../../../../../../../widgets/LoadMore";
import NoData from "../../../../../../../widgets/NoData";
import SearchBox from "../../../../../../../widgets/SearchBox";
import Spinner from "../../../../../../../widgets/Spinner";
import ModalUserConfirm from "./ModalUserConfirm";

const UsersActiveList = ({
  loading,
  handleLoad,
  totalResult,
  result,
  handleSearch,
  handleChange,
  setItemEdit,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [isSus, setSus] = React.useState(false);
  const search = React.useRef(null);
  let count = 0;

  const handleReset = (item) => {
    dispatch(setIsConfirm(true));
    setSus(false);
    setData(item);
  };

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleSuspend = (item) => {
    dispatch(setIsConfirm(true));
    setSus(true);
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
        url="/admin/admin-settings/users/read-user-search.php"
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
                    <td data-label="#">{count}.</td>
                    <td data-label="Name">
                      {item.users_lname}, {item.users_fname}{" "}
                      <span>{item.users_mname}</span>.
                    </td>
                    <td data-label="Email">{item.users_email}</td>
                    <td data-label="Contact">{item.users_phone}</td>
                    <td data-label="Role">{item.users_role}</td>
                    <td data-label="Action">
                      <div className="d--flex">
                        <div
                          className="dropdown tooltip--table"
                          onClick={() => handleReset(item)}
                          data-tooltip="Reset password"
                        >
                          <span>
                            <MdPassword />
                          </span>
                        </div>

                        <div className="dropdown">
                          <span>
                            <BsThreeDotsVertical />
                          </span>
                          <div className="dropdown-content">
                            <button onClick={() => handleEdit(item)}>
                              <AiFillEdit /> Edit
                            </button>
                            <button onClick={() => handleSuspend(item)}>
                              <RiUserUnfollowFill /> Suspend
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
        <div className="mt--2 t--center">
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

      {store.isConfirm && (
        <ModalUserConfirm
          isSus={isSus}
          susEndpoint="/admin/admin-settings/users/archive-user.php"
          resetEndpoint="/admin/admin-settings/users/update-user-forgot-pass.php"
          item={dataItem}
        />
      )}
    </>
  );
};

export default UsersActiveList;
