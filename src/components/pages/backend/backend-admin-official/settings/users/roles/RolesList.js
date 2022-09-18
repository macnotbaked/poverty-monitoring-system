import React from "react";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setIsAdd, setIsConfirm } from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import ModalConfirm from "../../../../../../widgets/ModalConfirm";
import NoData from "../../../../../../widgets/NoData";
import Spinner from "../../../../../../widgets/Spinner";

const RolesList = ({ role, loading, setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);

  let count = 0;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.roles_aid);
    setData(item);
    setDel(true);
  };

  return (
    <>
      <div className="mb--2">
        {loading && <Spinner />}
        <table id="" className="" cellSpacing="0" width="100%">
          <thead className="">
            <tr>
              <th className="" rowSpan="1">
                #
              </th>
              <th rowSpan="1">Name</th>
              <th rowSpan="1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {role.length > 0 ? (
              role.map((item, key) => {
                count += 1;
                return (
                  <tr key={key}>
                    <td>{count}.</td>
                    <td>{item.roles_name}</td>
                    <td>
                      <button
                        className="dropdown tooltip--edit"
                        onClick={() => handleEdit(item)}
                      >
                        <span>
                          <AiFillEdit />
                        </span>
                      </button>
                      <button
                        className="dropdown tooltip--delete"
                        onClick={() => handleDelete(item)}
                      >
                        <span>
                          <FaTrashAlt />
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

      {store.isConfirm && (
        <ModalConfirm
          id={id}
          isDel={isDel}
          mysqlApiDelete={"/admin/admin-settings/roles/delete-role.php"}
          msg={"Are you sure you want to delete this"}
          item={`"${dataItem.roles_name}"`}
        />
      )}
    </>
  );
};

export default RolesList;
