import { Form, Formik } from "formik";
import React from "react";
import {
  FaEdit,
  FaEnvelope,
  FaNotesMedical,
  FaPhone,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import * as Yup from "yup";
import {
  setIsAdd,
  setStartIndex,
} from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import { fetchData } from "../../../../../../helpers/fetchData";
import { InputText } from "../../../../../../helpers/FormInputs";
import SpinnerButton from "../../../../../../widgets/SpinnerButton";

const ModalAddUnemploymentProgram = ({ item }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const initVal = {
    unemployment_program_aid: item ? item.unemployment_program_aid : "",
    unemployment_program_name: item ? item.unemployment_program_name : "",
    unemployment_program_name_old: item ? item.unemployment_program_name : "",
    unemployment_program_description: item
      ? item.unemployment_program_description
      : "",
    unemployment_program_contact_person: item
      ? item.unemployment_program_contact_person
      : "",
    unemployment_program_contact_number: item
      ? item.unemployment_program_contact_number
      : "",
    unemployment_program_contact_email: item
      ? item.unemployment_program_contact_email
      : "",
  };

  const yupSchema = Yup.object({
    unemployment_program_name: Yup.string().required("Required"),
    unemployment_program_description: Yup.string().required("Required"),
    unemployment_program_contact_person: Yup.string().required("Required"),
    unemployment_program_contact_number: Yup.string().required("Required"),
    unemployment_program_contact_email: Yup.string()
      .required("Required")
      .email("Invalid email"),
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
            <h4 className="t--bold">{item ? "Update" : "Add"} program</h4>
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
                    ? "/admin/admin-settings/unemployment-program/update-unemployment-program.php"
                    : "/admin/admin-settings/unemployment-program/create-unemployment-program.php",
                  values, // form data values
                  null, // result set data
                  "", // success msg
                  "", // additional error msg if needed
                  dispatch, // context api action
                  store, // context api state
                  false, // boolean to show success modal
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
                        <FaNotesMedical />
                      </i>
                      <InputText
                        placeholder="Program Name"
                        type="text"
                        name="unemployment_program_name"
                        disabled={loading}
                      />
                    </div>

                    <div className="input my--3">
                      <i className="icon--input">
                        <FaEdit />
                      </i>
                      <InputText
                        placeholder="Description"
                        type="text"
                        name="unemployment_program_description"
                        disabled={loading}
                      />
                    </div>
                    <div className="input my--3">
                      <i className="icon--input">
                        <FaUser />
                      </i>
                      <InputText
                        placeholder="Contact Person"
                        type="text"
                        name="unemployment_program_contact_person"
                        disabled={loading}
                      />
                    </div>
                    <div className="input my--3">
                      <i className="icon--input">
                        <FaPhone />
                      </i>
                      <InputText
                        placeholder="Contact Number"
                        type="text"
                        name="unemployment_program_contact_number"
                        disabled={loading}
                      />
                    </div>
                    <div className="input my--3">
                      <i className="icon--input">
                        <FaEnvelope />
                      </i>
                      <InputText
                        placeholder="Contact Email"
                        type="text"
                        name="unemployment_program_contact_email"
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

export default ModalAddUnemploymentProgram;
