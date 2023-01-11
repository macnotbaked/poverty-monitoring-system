import { Form, Formik } from "formik";
import React from "react";
import { FaMapMarkedAlt, FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import {
  setIsAdd,
  setStartIndex,
  viewHousehold,
} from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { fetchData } from "../../../../helpers/fetchData";
import { InputText } from "../../../../helpers/FormInputs";
import SpinnerButton from "../../../../widgets/SpinnerButton";

const ModalViewHouseholdProgram = ({ item }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

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
              <h2 className="mb--1">Resettlement Program</h2>
              <p className="mb--1">
                For Informal Setter Families Affected by Infrastructure Project
                and those Living Along Danger Areas. The program addresses the
                requirements of families affected by government infrastructure
                projects and those living along danger areas. It entails the
                provision of housing units, community facilities, socio-economic
                and other community support programs.
              </p>
              <h2>Contacts</h2>
              <p className="t--right d--flex align-center gap--1">
                <span className="t--bold">Name:</span>
                <span>Mark Ryan Merin</span>
              </p>
              <p className="t--right d--flex align-center gap--1">
                <span className="t--bold">Phone:</span>
                <span>09491040057</span>
              </p>
              <p className="t--right d--flex align-center gap--1">
                <span className="t--bold">Email:</span>
                <span>merin.ryanmark@gmail.com</span>
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
