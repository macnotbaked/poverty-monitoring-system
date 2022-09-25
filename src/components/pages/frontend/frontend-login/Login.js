import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { StoreContext } from "../../../../store/StoreContext";
import { InputText } from "../../../helpers/FormInputs";
import Logo from "../../../widgets/Logo";
import { devNavUrl, fetchFormData } from "../../../helpers/functions-general";
import Spinner from "../../../widgets/Spinner";
import { useNavigate } from "react-router-dom";
import useIsLogin from "../../../custom-hooks/useIsLogin";
import { fetchData } from "../../../helpers/fetchData";
import ModalError from "../../../widgets/ModalError";

const Login = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [passwordShown, setPasswordShown] = React.useState(false);
  const navigate = useNavigate();
  const [btnLoading, setLoading] = React.useState(false);
  const { loading } = useIsLogin(navigate);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const initVal = {
    users_email: "",
    users_password: "",
  };

  const yupSchema = Yup.object({
    users_email: Yup.string().email("Invalid Email").required("Required"),
    users_password: Yup.string().required("Required"),
  });
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
                localStorage.removeItem("pmstoken");
                fetchData(
                  setLoading,
                  "/admin/admin-settings/users/read-user-login.php",
                  values, // form data values
                  null, // result set data
                  "Access granted.", // success msg
                  "Access denied.", // additional error msg if needed
                  dispatch, // context api action
                  store, // context api state
                  false, // boolean to show success modal
                  false, // boolean to show load more functionality button
                  navigate // props optional
                );
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="input mb--2">
                      <InputText
                        label="Email address"
                        type="text"
                        name="users_email"
                        required
                      />
                    </div>
                    <div className="input mb--3">
                      <InputText
                        label="Password"
                        type={passwordShown ? "text" : "password"}
                        name="users_password"
                        required
                      />
                      <i
                        className="icon--input"
                        onMouseUp={togglePassword}
                        onMouseDown={togglePassword}
                      >
                        {passwordShown ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </i>
                    </div>

                    <button type="submit" className="btn--outline mb--2">
                      <span>Log in</span>
                    </button>

                    <p className="t--left">
                      Did you forget your password?{" "}
                      <a
                        href={`${devNavUrl}/forgot-password`}
                        className="color--primary"
                        style={{ position: "relative" }}
                      >
                        <u> Forgot Password</u>
                      </a>
                    </p>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      )}

      {store.error && <ModalError />}
    </>
  );
};

export default Login;
