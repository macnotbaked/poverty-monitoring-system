import { Form, Formik } from "formik";
import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import {
  FaCamera,
  FaEdit,
  FaPowerOff,
  FaSave,
  FaTimesCircle,
  FaUserCircle,
} from "react-icons/fa";
import {
  setIsActive,
  setIsAdd,
  setIsClick,
  setIsEdit,
  setIsLogout,
  setStartIndex,
} from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import useLoadAll from "../custom-hooks/useLoadAll";
import useUploadPhoto from "../custom-hooks/useUploadPhoto";
import { fetchData } from "../helpers/fetchData";
import { InputFileUpload } from "../helpers/FormInputs";
import { devBaseUrl } from "../helpers/functions-general";
import ModalError from "../widgets/ModalError";
import ModalLogout from "../widgets/ModalLogout";
import ModalSuccess from "../widgets/ModalSuccess";

const Header = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const handleShow = () => {
    dispatch(setIsActive(!store.isActive));
  };

  const handleClick = () => {
    dispatch(setIsClick(!store.isClick));
    setStartIndex(0);
  };

  const handleLogout = () => {
    dispatch(setIsLogout(true));
  };

  const handleEdit = () => {
    dispatch(setIsEdit(true));
  };

  const handleCancel = () => {
    dispatch(setIsEdit(false));
  };

  const { result } = useLoadAll(
    "/admin/admin-settings/users/read-user-by-id.php",
    store.credentials.users_aid
  );

  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    "/admin/upload-photo.php",
    dispatch
  );

  const initVal = {
    users_aid: result.length && result[0].users_aid,
    users_photo: result.length && result[0].users_photo,
  };

  return (
    <>
      <header className="header">
        <div className="header__collapse" onClick={handleShow}>
          <AiOutlineMenuFold />
        </div>
        <div className="header__credential">
          <div className="profile__user">
            <span>
              Hi{" "}
              <span className="color--primary t--bold">
                {store.credentials.users_fname}!
              </span>
            </span>
          </div>
          {result.length && result[0].users_photo ? (
            <img
              id="img_preview"
              src={devBaseUrl + "/img/" + result[0].users_photo}
              alt="avatar"
              onClick={handleClick}
            />
          ) : (
            <FaUserCircle className="avatar" onClick={handleClick} />
          )}
          <div
            className={
              store.isClick ? "profile__container show" : "profile__container"
            }
          >
            {!store.isEdit && (
              <div className="d--flex align-center gap--1">
                <div className="profile__avatar ">
                  {result.length && result[0].users_photo ? (
                    <img
                      id="img_preview"
                      src={devBaseUrl + "/img/" + result[0].users_photo}
                      alt="avatar"
                    />
                  ) : (
                    <FaUserCircle className="avatar" />
                  )}
                </div>
                <div className="profile__credentials ml--2">
                  <span className="t--bold">
                    {store.credentials.users_fname}{" "}
                    {store.credentials.users_lname} (
                    {store.credentials.roles_name})
                  </span>
                  <span>{store.credentials.users_email}</span>
                  <div className="d--flex gap--1">
                    <button
                      type="sumbit"
                      onClick={handleEdit}
                      className="btn--profile mt--2"
                      disabled={loading}
                    >
                      <FaEdit /> <span>Edit</span>
                    </button>
                    <button
                      type="sumbit"
                      onClick={handleLogout}
                      className="btn--profile mt--2"
                      disabled={loading}
                    >
                      <FaPowerOff /> <span>Log out</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {store.isEdit && (
              <Formik
                initialValues={initVal}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  // console.log(values);
                  uploadPhoto();
                  fetchData(
                    setLoading,
                    "/admin/admin-settings/users/update-user-photo.php",
                    {
                      ...values,
                      users_photo: photo ? (
                        photo.name
                      ) : result ? (
                        result[0].users_photo
                      ) : (
                        <FaUserCircle />
                      ),
                    }, // form data values
                    null, // result set data
                    "Profile picture updated.", // success msg
                    "", // additional error msg if needed
                    dispatch, // context api action
                    store, // context api state
                    true, // boolean to show success modal
                    false // boolean to show load more functionality button
                  );
                }}
              >
                {(props) => {
                  return (
                    <Form>
                      <div className="d--flex align-center gap--1">
                        <div className="profile__avatar">
                          {photo || result[0].users_photo !== "" ? (
                            <img
                              id="img_preview"
                              src={
                                photo
                                  ? URL.createObjectURL(photo) // preview
                                  : result.length &&
                                    result[0].users_photo !== "" // check db
                                  ? devBaseUrl + "/img/" + result[0].users_photo
                                  : null
                              }
                              alt="avatar"
                            />
                          ) : (
                            <FaUserCircle className="avatar" />
                          )}
                          <div className="upload-button">
                            <FaCamera />
                            <InputFileUpload
                              name="photo"
                              type="file"
                              accept="image/*"
                              onChange={handleChangePhoto}
                            />
                          </div>
                        </div>
                        <div className="profile__credentials ml--2">
                          <span className="t--bold">
                            {store.credentials.users_fname}{" "}
                            {store.credentials.users_lname} (
                            {store.credentials.roles_name})
                          </span>
                          <span>{store.credentials.users_email}</span>
                          <div className="d--flex gap--1">
                            <button
                              type="sumbit"
                              className="btn--profile mt--2"
                              disabled={loading}
                            >
                              <FaSave /> <span>Save</span>
                            </button>
                            <button
                              type="reset"
                              className="btn--cancel mt--2"
                              onClick={handleCancel}
                            >
                              <FaTimesCircle /> <span>Cancel</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            )}
          </div>
        </div>
      </header>

      {store.isLogout && <ModalLogout />}
      {store.error && <ModalError />}
      {store.success && <ModalSuccess />}
    </>
  );
};

export default Header;
