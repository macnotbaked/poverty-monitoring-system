import React from "react";
import { FaHistory, FaTimes, FaTrashAlt } from "react-icons/fa";
import { setIsConfirm, setStartIndex } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { fetchData } from "../helpers/fetchData";
import ModalError from "./ModalError";
import SpinnerButton from "./SpinnerButton";

const ModalDeleteRestore = ({
  id,
  isDel,
  mysqlApiDelete,
  mysqlApiRestore,
  msg,
  item,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  let pId = id;

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(setIsConfirm(false));
  };

  const handleYes = async () => {
    setLoading(true);

    fetchData(
      setLoading,
      isDel ? mysqlApiDelete : mysqlApiRestore,
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

  return (
    <>
      <div className="modal modal-front">
        <div className="display-center">
          <div className="modal-title-container-error">
            <button className="btn--close" onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          <div className="bg--white">
            <div className="color-primary mb--2 t--center">
              {isDel ? <FaTrashAlt /> : <FaHistory />}
            </div>

            <h3 className="t--center t--bold mb--1 ">
              {msg} <br />
              <strong>{item}</strong> ?
            </h3>
            <p className="t--center mb--5">You can't undo this action</p>
            <div className="d--flex gap--1">
              <button
                type="submit"
                className="btn--default d--flex justify-center align-center"
                disabled={loading}
                onClick={handleYes}
              >
                {loading ? <SpinnerButton /> : <span>Confirm</span>}
              </button>
              <button
                className="btn--outline"
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

export default ModalDeleteRestore;
