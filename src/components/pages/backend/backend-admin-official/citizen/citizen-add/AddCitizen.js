import { Form, Formik } from "formik";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { devNavUrl } from "../../../../../helpers/functions-general";
import Navigation from "../../../../../navigation/Navigation";
import * as Yup from "yup";
import { FaUserCircle } from "react-icons/fa";
import { AiFillCamera } from "react-icons/ai";
import {
  InputFileUpload,
  InputSelect,
  InputText,
} from "../../../../../helpers/FormInputs";
import SpinnerButton from "../../../../../widgets/SpinnerButton";
import NoData from "../../../../../widgets/NoData";

const AddCitizen = () => {
  const initVal = {};

  const yupSchema = Yup.object({});
  return (
    <>
      <Navigation menu="citizen" />
      <div className="main-content">
        <div className="container">
          <div className="title">
            <div className="row">
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="tab-title">Citizen</span>
                <Link
                  className="btn float--right "
                  to={`${devNavUrl}/admin/citizen`}
                >
                  <IoMdArrowRoundBack /> <span>Back</span>
                </Link>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="content-block  ">
              <div className="tab-menu shadow--primary mb--4">
                <input
                  type="radio"
                  name="tabs"
                  id="tab-personal"
                  defaultChecked
                />
                <label htmlFor="tab-personal" className="menu-label">
                  <span>Personal</span>
                </label>
                <div className="tab">
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
                          <div className="tab-content">
                            <h4 className="title-box mb--2">
                              <strong>Profile Image</strong>
                            </h4>
                            <div className="profile--upload ">
                              <div className="profile--upload">
                                {/* {photo || result[0].trainee_photo !== "" ? (
                                    <img
                                      className="upAvatar"
                                      id="img_preview"
                                      src={
                                        photo
                                          ? URL.createObjectURL(photo) // preview
                                          : result[0].trainee_photo !== "" // check db
                                          ? devBaseUrl +
                                            "/img/" +
                                            result[0].trainee_photo
                                          : null
                                      }
                                      alt="avatar"
                                    />
                                  ) : (
                                    <FaUserCircle className="svg" />
                                              )} */}
                                <FaUserCircle className="svg" />
                              </div>
                              <div className="upload--button">
                                <AiFillCamera />
                                <InputFileUpload
                                  name="photo"
                                  type="file"
                                  accept="image/*"
                                  //   onChange={handleChangePhoto}
                                  className="fill-upload"
                                />
                              </div>
                            </div>
                            <h4 className=" title-box mb--3">
                              <strong>Basic Information</strong>
                            </h4>
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
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                  <NoData />
                </div>

                <input type="radio" name="tabs" id="tab-academic" />
                <label htmlFor="tab-academic" className="menu-label">
                  <Link to={`${devNavUrl}/admin/trainees-edit-academic?eid`}>
                    Academic
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCitizen;
