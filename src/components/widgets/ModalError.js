import React from "react";
import { FaExclamation, FaTimes } from "react-icons/fa";
import { setError } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";

const ModalError = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setError(false));
  };

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
            <div className="error__logo mb--1 t--center">
              <FaExclamation />
            </div>

            <h3 className="t--center t--bold mb--1">{store.message}</h3>
            <p className="t--center mb--5"></p>
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

export default ModalError;
