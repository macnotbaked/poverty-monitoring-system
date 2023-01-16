import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import {
  setIsAccountUpdated,
  setSubmitEval,
  setSuccess,
} from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { devNavUrl } from "../helpers/functions-general";

const ModalSuccess = ({ email }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  // console.log(email);

  const handleClose = () => {
    dispatch(setSuccess(false));

    // refresh page after confirm
    if (store.isSubmitEval) {
      window.location.reload(false);
      dispatch(setSubmitEval(false));
      return;
    }

    // logout when there's a change in account
    if (store.isAccountUpdated && store.credentials.users_email === email) {
      localStorage.removeItem("pmstoken");
      window.location.replace(`${devNavUrl}/login`);
      dispatch(setIsAccountUpdated(false));
      return;
    }
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
