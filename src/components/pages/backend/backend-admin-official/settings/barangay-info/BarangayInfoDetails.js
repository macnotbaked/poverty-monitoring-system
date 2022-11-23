import { Form, Formik } from "formik";
import React from "react";
import { FaCamera, FaUserCircle } from "react-icons/fa";
import { StoreContext } from "../../../../../../store/StoreContext";
import useUploadPhoto from "../../../../../custom-hooks/useUploadPhoto";
import { fetchData } from "../../../../../helpers/fetchData";
import { InputFileUpload, InputText } from "../../../../../helpers/FormInputs";
import { devBaseUrl } from "../../../../../helpers/functions-general";
import ModalError from "../../../../../widgets/ModalError";
import ModalSuccess from "../../../../../widgets/ModalSuccess";
import SpinnerButton from "../../../../../widgets/SpinnerButton";

const BarangayInfoDetails = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    "/admin/upload-photo.php",
    dispatch
  );

  const initVal = {
    barangay_aid: "",
    barangay_name: "",
    barangay_municipality: "",
    barangay_province: "",
    barangay_contact_person_primary: "",
    barangay_contact_number_primary: "",
    barangay_contact_person_secondary: "",
    barangay_contact_number_secondary: "",
    barangay_photo: "",
  };

  return (
    <>
      <div className="form__container">
        <Formik
          initialValues={initVal}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            uploadPhoto();
            fetchData(
              setLoading,
              "/admin/admin-settings/barangay-info/create-barangay.php",
              {
                ...values,
                barangay_photo: photo ? (
                  photo.name
                ) : (
                  <FaUserCircle className="avatar" />
                ),
              }, // form data values
              null, // result set data
              "Barangay information updated.", // success msg
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
                <div className="input--form mb--3 ">
                  <label htmlFor="">Your logo here:</label>
                  <div className="logo__container d--flex justify-center align-center">
                    {photo ? (
                      <img
                        id="img_preview"
                        src={
                          photo
                            ? URL.createObjectURL(photo) // preview
                            : null
                        }
                        alt="logo"
                      />
                    ) : (
                      <FaUserCircle className="avatar" />
                    )}
                  </div>
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
                <div className="input--form mb--3">
                  <label htmlFor="">Barangay Name:</label>
                  <InputText
                    type="text"
                    name="barangay_name"
                    placeholder="Ex: Santa Elena"
                  />
                </div>
                <div className="input--form mb--3">
                  <label htmlFor="">Barangay Municipality</label>
                  <InputText
                    type="text"
                    name="barangay_municipality"
                    placeholder="Ex: San Pablo City"
                  />
                </div>
                <div className="input--form mb--3">
                  <label htmlFor="">Barangay Province</label>
                  <InputText
                    type="text"
                    name="barangay_province"
                    placeholder="Ex: Laguna"
                  />
                </div>
                <div className="input--form mb--3">
                  <label htmlFor="">Contact Person Primary</label>
                  <InputText
                    type="text"
                    name="barangay_contact_person_primary"
                  />
                </div>
                <div className="input--form mb--3">
                  <label htmlFor="">Contact Number</label>
                  <InputText
                    type="text"
                    name="barangay_contact_number_primary"
                  />
                </div>
                <div className="input--form mb--3">
                  <label htmlFor="">Contact Person Secondary</label>
                  <InputText
                    type="text"
                    name="barangay_contact_person_secondary"
                  />
                </div>
                <div className="input--form mb--3">
                  <label htmlFor="">Contact Number</label>
                  <InputText
                    type="text"
                    name="barangay_contact_number_secondary"
                  />
                </div>
                <button
                  className="btn--default m-left mb--1 btn__container"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? <SpinnerButton /> : <span>Save</span>}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>

      {store.error && <ModalError />}
      {store.success && <ModalSuccess />}
    </>
  );
};

export default BarangayInfoDetails;
