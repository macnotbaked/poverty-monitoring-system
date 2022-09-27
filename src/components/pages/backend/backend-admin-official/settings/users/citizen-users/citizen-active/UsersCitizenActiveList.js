import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiUserUnfollowFill } from "react-icons/ri";
import { MdPassword } from "react-icons/md";
import { StoreContext } from "../../../../../../../../store/StoreContext";
import NoData from "../../../../../../../widgets/NoData";
import SearchBox from "../../../../../../../widgets/SearchBox";
import Spinner from "../../../../../../../widgets/Spinner";
import {
  setIsAdd,
  setIsConfirm,
} from "../../../../../../../../store/StoreAction";
import LoadMore from "../../../../../../../widgets/LoadMore";
import ModalUserConfirm from "./ModalUserConfirm";
import { AiFillEdit } from "react-icons/ai";

const UsersCitizenActiveList = ({
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
        url="/admin/admin-settings/users/read-user-active-search.php"
      />
      <div className="mb--2">
        {loading && <Spinner />}
        <table id="" className="" cellSpacing="0" width="100%">
          <thead className="">
            <tr>
              <th className="" rowSpan="1">
                #
              </th>
              <th rowSpan="1" style={{ width: "20rem" }}>
                Name
              </th>
              <th rowSpan="1" style={{ width: "20rem" }}>
                Email
              </th>
              <th rowSpan="1" style={{ width: "15rem" }}>
                Contact
              </th>
              <th rowSpan="1">Sitio</th>
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
                    <td>{"Sitio 1"}</td>
                    <td>
                      <div
                        className="dropdown tooltip--reset"
                        onClick={() => handleReset(item)}
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
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="">
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

export default UsersCitizenActiveList;
