import { Form, Formik } from "formik";
import React from "react";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import {
  setIsAdd,
  setStartIndex,
} from "../../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../../store/StoreContext";
import { fetchData } from "../../../../../../../helpers/fetchData";
import { InputText } from "../../../../../../../helpers/FormInputs";
import SpinnerButton from "../../../../../../../widgets/SpinnerButton";

const ModalAddRole = ({ item }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const initVal = {
    roles_aid: item ? item.roles_aid : "",
    roles_name: item ? item.roles_name : "",
  };

  const yupSchema = Yup.object({
    roles_name: Yup.string().required("Required"),
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
            <h4 className="t--bold">{item ? "Update" : "Add"} role</h4>
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
                    ? "/admin/admin-settings/roles/update-role.php"
                    : "/admin/admin-settings/roles/create-role.php",
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
                      <InputText
                        label="Role"
                        type="text"
                        name="roles_name"
                        disabled={loading}
                        required
                      />
                    </div>

                    <div className="d--flex gap--1">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn--outline"
                      >
                        {loading && <SpinnerButton />} {item ? "Save" : "Add"}
                      </button>
                      <button
                        className="btn--secondary "
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

export default ModalAddRole;
