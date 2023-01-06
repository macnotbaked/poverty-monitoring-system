import { Form, Formik } from "formik";
import React from "react";
import { FaMapMarkedAlt, FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import { setIsAdd, setStartIndex } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { fetchData } from "../../../../helpers/fetchData";
import { InputText } from "../../../../helpers/FormInputs";
import SpinnerButton from "../../../../widgets/SpinnerButton";

const ModalAddSitio = ({ item }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const initVal = {
    sitio_aid: item ? item.sitio_aid : "",
    sitio_name: item ? item.sitio_name : "",
    sitio_name_old: item ? item.sitio_name : "",
  };

  const yupSchema = Yup.object({
    sitio_name: Yup.string().required("Required"),
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
            <h4 className="t--bold">{item ? "Update" : "Add"} purok</h4>
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
                    ? "/admin/admin-sitio/update-sitio.php"
                    : "/admin/admin-sitio/create-sitio.php",
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
                        <FaMapMarkedAlt />
                      </i>
                      <InputText
                        placeholder="Sitio name"
                        type="text"
                        name="sitio_name"
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

export default ModalAddSitio;
