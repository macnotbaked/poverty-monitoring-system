import React from "react";
import { FaPowerOff, FaSignOutAlt, FaTimes } from "react-icons/fa";

const ModalConfirmLogout = () => {
  return (
    <>
      <div className="modal modal-front">
        <div className="display-center">
          <div className="title-container">
            <span className="error-icon color-primary">
              <FaPowerOff />
            </span>
            <button className="btn--close">
              <FaTimes />
            </button>
          </div>
          <div className="bg--white">
            <div className="dialogbox color-primary mb--10">
              <FaSignOutAlt />
            </div>
            <h3 className="t-center t-bold mb--10">
              Are you sure you want LOGOUT?
            </h3>
            <p className="t-center mb--50">You can comeback anytime!</p>
            <div className="button-container-right">
              <button className="btn-outline">Go back</button>
              <button className="btn-gradient">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalConfirmLogout;
