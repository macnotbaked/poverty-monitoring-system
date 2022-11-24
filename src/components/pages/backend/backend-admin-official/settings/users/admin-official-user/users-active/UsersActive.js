import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { setIsAdd } from "../../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../../store/StoreContext";
import useFetchDataLoadMore from "../../../../../../../custom-hooks/useFetchDataLoadMore";
import useLoadAllInactive from "../../../../../../../custom-hooks/useLoadAllInactive";
import useLoadAllRole from "../../../../../../../custom-hooks/useLoadAllRole";
import Header from "../../../../../../../header/Header";
import Navigation from "../../../../../../../navigation/Navigation";
import Back from "../../../../../../../widgets/Back";
import ModalError from "../../../../../../../widgets/ModalError";
import ModalSuccess from "../../../../../../../widgets/ModalSuccess";
import ModalAddUsers from "./ModalAddUsers";
import UsersActiveList from "./UsersActiveList";

const UsersActive = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { inactive } = useLoadAllInactive(
    "/admin/admin-settings/users/read-user-inactive-all.php"
  );

  const {
    loading,
    handleLoad,
    totalResult,
    result,
    handleSearch,
    handleChange,
  } = useFetchDataLoadMore(
    "/admin/admin-settings/users/read-user-active-limit.php",
    "/admin/admin-settings/users/read-user-active-all.php",
    1 // show number of records on a table
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="settings" />
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="content__header">
                <h3 className="t--bold py--2">Users</h3>
                <div className="content__button">
                  <button className="btn--primary" onClick={handleAdd}>
                    <FaPlusCircle /> <span>Add</span>
                  </button>
                  <Back />
                </div>
              </div>
              <UsersActiveList
                loading={loading}
                handleLoad={handleLoad}
                totalResult={totalResult}
                result={result}
                handleSearch={handleSearch}
                handleChange={handleChange}
                setItemEdit={setItemEdit}
              />
            </div>
          </div>
        </div>
      </div>

      {store.isAdd && <ModalAddUsers item={itemEdit} />}
      {store.error && <ModalError />}
      {store.success && <ModalSuccess />}
    </>
  );
};

export default UsersActive;
