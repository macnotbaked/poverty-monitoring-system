import React from "react";
import { FaLock, FaQuestion, FaTimes } from "react-icons/fa";
import { setIsAdd, setStartIndex } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { fetchData } from "../helpers/fetchData";
import SpinnerButton from "../widgets/SpinnerButton";

const ModalConfirmEvaluation = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const handleYes = async () => {
    fetchData(
      setLoading, // Boolean loading values optional
      "/admin/admin-evaluation/enable-evaluation/delete-enable-evaluation.php",
      {
        token: "",
      },
      null,
      "", // success msg optional
      "", // additional error msg if needed optional
      dispatch, // context api action
      store, // context api state
      false, // optional for success modal
      false // boolean to show load more functionality button
    );
    dispatch(setStartIndex(0));
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
            <button className="btn--close" onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          <div className="bg--white">
            <div className="color-primary mb--2 t--center">
              <FaQuestion />
            </div>

            <h3 className="t--center t--bold mb--1 ">
              Are you sure you want to end the evaluation?
            </h3>
            <p className="t--center mb--5">You can't undo this action</p>
            <div className="d--flex gap--1">
              <button
                type="submit"
                className="btn--default d--flex justify-center align-center"
                disabled={loading}
                onClick={handleYes}
              >
                {loading ? <SpinnerButton /> : " Confirm"}
              </button>
              <button
                className="btn--outline"
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

export default ModalConfirmEvaluation;
