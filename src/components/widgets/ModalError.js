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
          <div className="title-container">
            <span className="error-icon color-primary"></span>
            <button className="btn--close" onClick={handleClose}>
              <FaTimes />
            </button>
          </div>

          <div className="bg--white">
            <div className="dialogbox color-primary mb--10 t-center">
              <FaExclamation />
            </div>

            <h3 className="t-center t-bold mb--10">{store.message}</h3>
            <p className="t-center mb--50"></p>
            <div className="button-container">
              <button className="btn-gradient" onClick={handleClose}>
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
