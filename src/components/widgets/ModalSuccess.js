import React from "react";
import { FaCheck, FaTimes, FaTrophy } from "react-icons/fa";
import { setSuccess } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";

const ModalSuccess = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setSuccess(false));
  };

  return (
    <>
      <div className="modal modal-front">
        <div className="display-center">
          <div className="title-container">
            <span className="success-icon color-green"></span>
            <button className="btn--close" onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          <div className="bg--white">
            <div className="dialogbox color-primary mb--20 t-center">
              <FaCheck />
            </div>
            <h3 className="t-center t-bold mb--10">Success!</h3>
            <p className="t-center mb--50">{store.message}</p>
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

export default ModalSuccess;
