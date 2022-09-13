import React from "react";
import { FaArchive, FaTimes, FaTrashAlt } from "react-icons/fa";
import { RiInboxArchiveLine } from "react-icons/ri";
import ModalError from "./ModalError";
import { StoreContext } from "../../store/StoreContext";
import { fetchData } from "../helpers/fetchData";
import SpinnerButton from "./SpinnerButton";
import { setIsConfirm, setStartIndex } from "../../store/StoreAction";

const ModalConfirm = ({
  id,
  isDel,
  stripeApiDelete,
  stripeApiArchive,
  mysqlApiDelete,
  mysqlApiArchive,
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
      isDel ? mysqlApiDelete : mysqlApiArchive,
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
          <div className="title-container">
            <span className="error-icon color-primary"></span>
            <button className="btn--close" onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          <div className="bg--white">
            <div className="dialogbox color-primary mb--20 t-center">
              {isDel ? <FaTrashAlt /> : <FaArchive />}
            </div>

            <h3 className="t-center t-bold mb--10 ">
              {msg} <br />
              <strong>{item}</strong> ?
            </h3>
            <p className="t-center mb--50">You can't undo this action</p>
            <div className="button-container-right">
              <button
                type="submit"
                className="btn-gradient"
                disabled={loading}
                onClick={handleYes}
              >
                {loading && <SpinnerButton />}
                {isDel ? "Delete" : "Archive"}
              </button>
              <button
                className="btn-outline"
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

export default ModalConfirm;
