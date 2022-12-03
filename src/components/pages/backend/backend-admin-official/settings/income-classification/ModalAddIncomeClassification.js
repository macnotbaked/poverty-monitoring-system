import { Form, Formik } from "formik";
import React from "react";
import {
  FaArrowCircleRight,
  FaEdit,
  FaTimes,
  FaUserEdit,
} from "react-icons/fa";
import * as Yup from "yup";
import { setIsAdd, setStartIndex } from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import { fetchData } from "../../../../../helpers/fetchData";
import { InputText } from "../../../../../helpers/FormInputs";
import SpinnerButton from "../../../../../widgets/SpinnerButton";

const ModalAddIncomeClassifation = ({ item }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const initVal = {
    monthly_income_aid: item ? item.monthly_income_aid : "",
    monthly_income_name: item ? item.monthly_income_name : "",
    monthly_income_from: item ? item.monthly_income_from : "",
    monthly_income_to: item ? item.monthly_income_to : "",
  };

  const yupSchema = Yup.object({
    monthly_income_name: Yup.string().required("Required"),
    monthly_income_from: Yup.string().required("Required"),
    monthly_income_to: Yup.string().required("Required"),
  });

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
            <h4 className="t--bold">
              {item ? "Update" : "Add"} income classification
            </h4>
            <button className="btn--close" onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          <div className="bg--white">
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                // console.log(values);
                fetchData(
                  setLoading,
                  item
                    ? "/admin/admin-settings/income-classification/update-income-classification.php"
                    : "/admin/admin-settings/income-classification/create-income-classification.php",
                  values, // form data values
                  null, // result set data
                  item
                    ? "Succesfully updated." // success msg
                    : "Succesfully added.",
                  "", // additional error msg if needed
                  dispatch, // context api action
                  store, // context api state
                  true, // boolean to show success modal
                  false // boolean to show load more functionality button
                );
                dispatch(setStartIndex(0));
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="input my--3">
                      <i className="icon--input">
                        <FaEdit />
                      </i>
                      <InputText
                        placeholder="Name"
                        type="text"
                        name="monthly_income_name"
                        disabled={loading}
                      />
                    </div>

                    <div className="input my--3">
                      <i className="icon--input">
                        <FaArrowCircleRight />
                      </i>
                      <InputText
                        placeholder="From"
                        type="text"
                        name="monthly_income_from"
                        disabled={loading}
                      />
                    </div>
                    <div className="input my--3">
                      <i className="icon--input">
                        <FaArrowCircleRight />
                      </i>
                      <InputText
                        placeholder="To"
                        type="text"
                        name="monthly_income_to"
                        disabled={loading}
                      />
                    </div>

                    <div className="d--flex gap--1">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn--default d--flex align-center justify-center"
                      >
                        {loading ? (
                          <SpinnerButton />
                        ) : (
                          <span>{item ? "Save" : "Add"}</span>
                        )}
                      </button>
                      <button
                        className="btn--outline "
                        type="reset"
                        onClick={handleClose}
                      >
                        Cancel
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddIncomeClassifation;
