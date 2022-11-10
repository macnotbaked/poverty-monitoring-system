import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  setIsAdd,
  setStartIndex,
} from "../../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../../store/StoreContext";
import useLoadAllRole from "../../../../../../../custom-hooks/useLoadAllRole";
import { devNavUrl } from "../../../../../../../helpers/functions-general";
import Navigation from "../../../../../../../navigation/Navigation";
import ModalError from "../../../../../../../widgets/ModalError";
import ModalAddRole from "./ModalAddRole";
import RolesList from "./RolesList";

const Roles = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  const { loading, role } = useLoadAllRole(
    "/admin/admin-settings/roles/read-role.php"
  );

  return (
    <>
      <Navigation menu="settings" />
      <div className="main-content">
        <div className="container">
          <div className="title">
            <div className="row">
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="tab-title">{"Settings"}</span>
                <Link
                  className="btn--back float--right"
                  to={`${devNavUrl}/admin/settings`}
                >
                  <IoMdArrowRoundBack /> <span>Back</span>
                </Link>
                <button className="btn float--right" onClick={handleAdd}>
                  <AiFillPlusCircle /> <span>Add</span>
                </button>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="content-block">
              <div className="tab-menu shadow--primary pxy--3">
                <input type="radio" name="tabs" id="tab-users" />
                <label htmlFor="tab-users" className="menu-label">
                  <Link
                    to={`${devNavUrl}/admin/admin-official-users`}
                    onClick={() => {
                      dispatch(setStartIndex(0));
                    }}
                  >
                    List{" "}
                  </Link>
                </label>

                <input type="radio" name="tabs" id="tab-role" defaultChecked />
                <label htmlFor="tab-role" className="menu-label">
                  <span>Role</span>
                </label>
                <div className="tab">
                  <RolesList
                    role={role}
                    loading={loading}
                    setItemEdit={setItemEdit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.isAdd && <ModalAddRole item={itemEdit} />}
      {store.error && <ModalError />}
    </>
  );
};

export default Roles;
