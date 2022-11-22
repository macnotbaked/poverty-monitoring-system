import React from "react";
import { FaCheck, FaTimes, FaTrophy } from "react-icons/fa";
import { setSuccess } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";

const ModalSuccess = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setSuccess(false));
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
              <FaCheck />
            </div>
            <h3 className="t--center t--bold mb--1">Success!</h3>
            <p className="t--center mb--5">{store.message}</p>
            <div className="button-container">
              <button className="btn--outline" onClick={handleClose}>
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSuccess;
