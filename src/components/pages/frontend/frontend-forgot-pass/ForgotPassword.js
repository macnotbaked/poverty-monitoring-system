import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { StoreContext } from "../../../../store/StoreContext";
import { InputText } from "../../../helpers/FormInputs";
import Logo from "../../../widgets/Logo";
import { devNavUrl } from "../../../helpers/functions-general";

const ForgotPassword = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [passwordShown, setPasswordShown] = React.useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const initVal = {
    settings_account_email: "",
    settings_account_password: "",
  };

  const yupSchema = Yup.object({
    settings_account_email: Yup.string()
      .email("Invalid Email")
      .required("Required"),
    settings_account_password: Yup.string().required("Required"),
  });
  return (
    <>
      <div className="login">
        <div className="login__form">
          <div className="t--center">
            <Logo />
          </div>
          <h2 className="t--left t--exbold my--2">LOGIN</h2>

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // clear first the local storage
              //   localStorage.removeItem("lcsstoken");
              // fetchData(
              //   setLoading,
              //   "/admin/admin-settings/account/read-account-login.php",
              //   values, // form data values
              //   null, // result set data
              //   "Access granted.", // success msg
              //   "Access denied.", // additional error msg if needed
              //   dispatch, // context api action
              //   store, // context api state
              //   false, // boolean to show success modal
              //   false, // boolean to show load more functionality button
              //   navigate // props optional
              // );
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="input mb--3">
                    <InputText
                      label="Email address"
                      type="text"
                      name="settings_account_email"
                      required
                    />
                  </div>

                  <button type="submit" className="btn--outline mb--2">
                    <span>Submit</span>
                  </button>

                  <p className="t--left">
                    Go back to{" "}
                    <a
                      href={`${devNavUrl}/login`}
                      className="color-primary"
                      style={{ position: "relative" }}
                    >
                      <u> Login</u>
                    </a>
                  </p>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
