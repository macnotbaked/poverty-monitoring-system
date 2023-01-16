import React from "react";
import { FaTimes } from "react-icons/fa";
import { viewHousehold } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";

const ModalViewHouseholdProgram = ({ item }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(viewHousehold(false));
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
      <div className="modal modal--front">
        <div className="display-center">
          <div className="modal-title-container">
            <h4 className="t--bold"></h4>
            <button className="btn--close" onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          <div className="bg--white">
            <div className="pxy--1">
              <h2 className="mb--1">{item.household_program_name}</h2>
              <p className="mb--1">{item.household_program_description}</p>
              <h2>Contacts</h2>
              <p className="t--right d--flex align-center gap--1">
                <span className="t--bold">Name:</span>
                <span>{item.household_program_contact_person}</span>
              </p>
              <p className="t--right d--flex align-center gap--1">
                <span className="t--bold">Phone:</span>
                <span>{item.household_program_contact_person}</span>
              </p>
              <p className="t--right d--flex align-center gap--1">
                <span className="t--bold">Email:</span>
                <span>{item.household_program_contact_email}</span>
              </p>
            </div>
            <div className="pt--2">
              <button
                className="btn--outline "
                type="reset"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalViewHouseholdProgram;
