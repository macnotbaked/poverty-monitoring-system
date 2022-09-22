import React from "react";
import { FaTimes } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { setIsLogout } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { checkLocalStorage } from "../helpers/CheckLocalStorage";
import { devNavUrl } from "../helpers/functions-general";
import SpinnerButton from "../widgets/SpinnerButton";

const ModalLogout = () => {
  const { dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const handleClose = () => dispatch(setIsLogout(false));

  const handleYes = () => {
    setLoading(true);
    setTimeout(() => {
      if (checkLocalStorage() !== null) {
        localStorage.removeItem("pmstoken");
        window.location.replace(`${devNavUrl}/login`);
        return;
      }
      setLoading(false);
    }, 400);
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
              <MdLogout />
            </div>
            <h3 className="t--center t--bold mb--1">
              Are you sure you want to Logout?
            </h3>
            <p className="t--center ">You can't undo this action</p>
            <div className="d--flex gap--1 mt--3">
              <button
                onClick={handleYes}
                className="btn--outline"
                disabled={loading}
              >
                {loading && <SpinnerButton />} Logout
              </button>
              <button
                className="btn--secondary "
                type="reset"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLogout;
