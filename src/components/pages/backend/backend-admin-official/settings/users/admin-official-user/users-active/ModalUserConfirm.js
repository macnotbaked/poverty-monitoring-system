import React from "react";
import { FaTimes } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { RiUserUnfollowLine } from "react-icons/ri";
import {
  setIsAccountUpdated,
  setIsConfirm,
  setStartIndex,
} from "../../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../../store/StoreContext";
import { fetchData } from "../../../../../../../helpers/fetchData";
import SpinnerButton from "../../../../../../../widgets/SpinnerButton";

const ModalUserConfirm = ({ isSus, susEndpoint, resetEndpoint, item }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  let id = item.users_aid;
  let email = item.users_email;
  let name = item.users_fname;

  const handleClose = () => {
    dispatch(setIsConfirm(false));
  };

  const handleYes = () => {
    // console.log(isSus);
    if (store.credentials.users_email === email) {
      dispatch(setIsAccountUpdated(true));
    }

    fetchData(
      setLoading, // Boolean loading values optional
      isSus ? susEndpoint : resetEndpoint,
      { id: id, users_email: email, users_fname: name },
      null,
      isSus
        ? "Account succesfully suspended."
        : "Please check your email to continue resetting password.",
      "", // additional error msg if needed optional
      dispatch, // context api action
      store, // context api state
      true, // optional for success modal
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
            <button className="btn--close float--right" onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          <div className="bg--white">
            <div className="mb--2 t--center">
              {isSus ? <RiUserUnfollowLine /> : <MdPassword />}
            </div>
            <h3 className="t--center t--bold mb--1 ">
              {isSus
                ? "Are you sure you want to suspend "
                : "Are you sure you want to reset password to "}
              <strong>{`"${email}"`}</strong> ?
            </h3>
            <p className="t--center mb--5">You can't undo this action</p>

            <div className="d--flex gap--1">
              <button
                type="submit"
                className="btn--default d--flex align-center justify-center"
                disabled={loading}
                onClick={handleYes}
              >
                {loading ? <SpinnerButton /> : "Confirm"}
              </button>
              <button
                className="btn--outline "
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

export default ModalUserConfirm;
