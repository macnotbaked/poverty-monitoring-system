import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  setIsConfirm,
  setStartIndex,
} from "../../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../../store/StoreContext";
import { fetchData } from "../../../../../../../helpers/fetchData";
import ModalError from "../../../../../../../widgets/ModalError";
import SpinnerButton from "../../../../../../../widgets/SpinnerButton";
import { MdSettingsBackupRestore } from "react-icons/md";

const ModalRestoreUser = ({ id, isDel, mysqlApiRestore, msg, item }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  let pId = id;

  const handleClose = () => {
    dispatch(setIsConfirm(false));
  };

  const handleYes = async () => {
    setLoading(true);

    fetchData(
      setLoading,
      mysqlApiRestore,
      { id: pId },
      null,
      "",
      "",
      dispatch,
      store,
      false,
      false
    );
    dispatch(setStartIndex(0));
  };

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  });

  return (
    <>
      <div className="modal modal-front">
        <div className="display-center">
          <div className="modal-title-container-error">
            <button className="btn--close float--right" onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          <div className="bg--white">
            <div className="mb--2 t--center">
              <MdSettingsBackupRestore />
            </div>
            <h3 className="t--center t--bold mb--1">
              {msg}
              <br />
              <strong> {`"${item}"`}</strong> ?
            </h3>
            <p className="t--center mb--5">You can't undo this action</p>

            <div className="d--flex gap--1">
              <button
                type="submit"
                className="btn--outline"
                disabled={loading}
                onClick={handleYes}
              >
                {loading && <SpinnerButton />}
                Confirm
              </button>
              <button
                className="btn--secondary"
                type="reset"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {store.error && <ModalError />}
    </>
  );
};

export default ModalRestoreUser;
