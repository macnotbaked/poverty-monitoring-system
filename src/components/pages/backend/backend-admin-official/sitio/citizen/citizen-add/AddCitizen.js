import { Form, Formik } from "formik";
import React from "react";
import { AiFillCamera } from "react-icons/ai";
import { FaArrowLeft, FaUserCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { StoreContext } from "../../../../../../../store/StoreContext";
import Header from "../../../../../../header/Header";
import {
  InputFileUpload,
  InputSelect,
  InputText,
} from "../../../../../../helpers/FormInputs";
import {
  devNavUrl,
  getUrlParam,
} from "../../../../../../helpers/functions-general";
import Navigation from "../../../../../../navigation/Navigation";
import NoData from "../../../../../../widgets/NoData";
import SpinnerButton from "../../../../../../widgets/SpinnerButton";

const AddCitizen = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const sitioId = getUrlParam().get("sid");

  const initVal = {};

  const yupSchema = Yup.object({});
  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="sitio" />
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="content__header">
                <h3 className="t--bold py--2">Purok 1</h3>
                <div className="content__button">
                  <button
                    className="d--flex tooltip--table"
                    data-tooltip="Back"
                  >
                    <FaArrowLeft />
                  </button>
                </div>
              </div>

              <div className="form__container">
                <Formik
                  initialValues={initVal}
                  validationSchema={yupSchema}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    //   uploadPhoto();
                    //   fetchData(
                    //     setLoading,
                    //     "/admin/admin-trainee/update-trainee-personal.php",
                    //     {
                    //       ...values,
                    //       trainee_photo: photo ? (
                    //         photo.name
                    //       ) : result ? (
                    //         result[0].trainee_photo
                    //       ) : (
                    //         <FaUserCircle className="svg" />
                    //       ),
                    //     }, // form data values
                    //     null, // result set data
                    //     "Personal info updated.", // success msg
                    //     "", // additional error msg if needed
                    //     dispatch, // context api action
                    //     store, // context api state
                    //     true, // boolean to show success modal
                    //     false // boolean to show load more functionality button
                    //   );
                  }}
                >
                  {(props) => {
                    return (
                      <Form>
                        <div className="input mb--3">
                          <InputText
                            label="Email"
                            type="text"
                            name="trainee_email"
                          />
                        </div>
                        <div className="input mb--3">
                          <InputText
                            label="First Name"
                            type="text"
                            name="trainee_fname"
                          />
                        </div>
                        <div className="input mb--3">
                          <InputText
                            label="Middle Name"
                            type="text"
                            name="trainee_mname"
                          />
                        </div>
                        <div className="input mb--3">
                          <InputText
                            label="Last Name"
                            type="text"
                            name="trainee_lname"
                          />
                        </div>
                        <div className="input mb--3">
                          <InputText
                            label="Date of Birth"
                            type="date"
                            name="trainee_birth_date"
                          />
                        </div>
                        <div className="input mb--3">
                          <InputText
                            label="Place of Birth"
                            type="text"
                            name="trainee_birth_place"
                          />
                        </div>
                        <div className="input mb--3">
                          <InputSelect label="Gender" name="trainee_gender">
                            <option value=""> -- </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </InputSelect>
                        </div>
                        <div className="input mb--3">
                          <InputText
                            label="Complete Address"
                            type="text"
                            name="trainee_address"
                          />
                        </div>
                        <div className="input mb--3">
                          <InputText
                            label="Mobile Number"
                            type="text"
                            name="trainee_mobile"
                          />
                        </div>
                        <div className="input mb--3">
                          <InputText
                            label="Landline Number"
                            type="text"
                            name="trainee_landline"
                          />
                        </div>

                        <h4 className="title-box mb--3">
                          <strong>Emergency Contact</strong>
                        </h4>

                        <div className="input mb--3">
                          <InputText
                            label="Parent / Guardian"
                            type="text"
                            name="trainee_guardian"
                          />
                        </div>
                        <div className="input mb--3">
                          <InputText
                            label="Contact"
                            type="text"
                            name="trainee_guardian_contact"
                          />
                        </div>
                        <button
                          className="btn--outline m-left mb--1"
                          type="submit"
                        >
                          <SpinnerButton /> Save
                        </button>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCitizen;
