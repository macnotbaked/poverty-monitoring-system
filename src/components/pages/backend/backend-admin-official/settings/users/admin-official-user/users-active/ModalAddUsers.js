import { Form, Formik } from "formik";
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaTimes,
  FaTransgender,
  FaUser,
  FaUserEdit,
  FaUsersCog,
} from "react-icons/fa";
import * as Yup from "yup";
import {
  setIsAdd,
  setStartIndex,
} from "../../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../../store/StoreContext";
import { fetchData } from "../../../../../../../helpers/fetchData";
import {
  InputSelect,
  InputText,
} from "../../../../../../../helpers/FormInputs";
import SpinnerButton from "../../../../../../../widgets/SpinnerButton";

const ModalAddUsers = ({ item, role }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const initVal = {
    users_aid: item ? item.users_aid : "",
    users_fname: item ? item.users_fname : "",
    users_mname: item ? item.users_mname : "",
    users_lname: item ? item.users_lname : "",
    users_email: item ? item.users_email : "",
    users_phone: item ? item.users_phone : "",
    users_gender: item ? item.users_gender : "",
    users_role_id: item ? item.users_role_id : "",
  };

  const yupSchema = Yup.object({
    users_fname: Yup.string().required("Required"),
    users_mname: Yup.string().required("Required"),
    users_lname: Yup.string().required("Required"),
    users_email: Yup.string().required("Required").email("Invalid email"),
    users_phone: Yup.string().required("Required"),
    users_gender: Yup.string().required("Required"),
    users_role_id: Yup.string().required("Required"),
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
            <h4 className="t--bold">{item ? "Update" : "Add"} user</h4>
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
                    ? "/admin/admin-settings/users/update-user.php"
                    : "/admin/admin-settings/users/create-user.php",
                  values, // form data values
                  null, // result set data
                  item
                    ? "User updated!" // success msg
                    : "Please check the email to proceed.",
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
                        <FaUserEdit />
                      </i>
                      <InputText
                        placeholder="First name"
                        type="text"
                        name="users_fname"
                        disabled={loading}
                      />
                    </div>

                    <div className="input my--3">
                      <i className="icon--input">
                        <FaUserEdit />
                      </i>
                      <InputText
                        placeholder="Middle name"
                        type="text"
                        name="users_mname"
                        disabled={loading}
                      />
                    </div>
                    <div className="input my--3">
                      <i className="icon--input">
                        <FaUserEdit />
                      </i>
                      <InputText
                        placeholder="Last name"
                        type="text"
                        name="users_lname"
                        disabled={loading}
                      />
                    </div>
                    <div className="input my--3">
                      <i className="icon--input">
                        <FaEnvelope />
                      </i>
                      <InputText
                        placeholder="Email"
                        type="text"
                        name="users_email"
                        disabled={loading}
                      />
                    </div>
                    <div className="input my--3">
                      <i className="icon--input">
                        <FaPhone />
                      </i>
                      <InputText
                        placeholder="Phone number"
                        type="text"
                        name="users_phone"
                        disabled={loading}
                      />
                    </div>
                    <div className="input my--3">
                      <i className="icon--input">
                        <FaTransgender />
                      </i>
                      <InputSelect name="users_gender" disabled={loading}>
                        <option value="">
                          {loading ? "loading..." : "Gender"}
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </InputSelect>
                    </div>

                    <div className="input my--3">
                      <i className="icon--input">
                        <FaUsersCog />
                      </i>
                      <InputSelect name="users_role_id" disabled={loading}>
                        <option value="">
                          {" "}
                          {loading ? "loading..." : "Role"}
                        </option>
                        {role.length > 0 ? (
                          role.map((item, key) => {
                            return (
                              <option key={key} value={item.roles_aid}>
                                {item.roles_name}
                              </option>
                            );
                          })
                        ) : (
                          <option value="">No data</option>
                        )}
                      </InputSelect>
                    </div>

                    <div className="d--flex gap--1">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn--default d--flex align-center justify-center"
                      >
                        {loading && <SpinnerButton />} {item ? "Save" : "Add"}
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

export default ModalAddUsers;
