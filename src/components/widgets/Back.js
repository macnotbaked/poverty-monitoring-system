import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { setStartIndex } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";

const Back = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  let navigate = useNavigate();

  return (
    <button
      className="d--flex tooltip--table"
      data-tooltip="Back"
      onClick={() => {
        navigate(-1);
        dispatch(setStartIndex(0));
      }}
    >
      <FaArrowLeft />
    </button>
  );
};

export default Back;
