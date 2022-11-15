import { Form, Formik } from "formik";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { StoreContext } from "../../../../store/StoreContext";
import useIsLogin from "../../../custom-hooks/useIsLogin";
import { fetchData } from "../../../helpers/fetchData";
import { InputText } from "../../../helpers/FormInputs";
import { devNavUrl, fetchFormData } from "../../../helpers/functions-general";
import Logo from "../../../widgets/Logo";
import ModalError from "../../../widgets/ModalError";
import Spinner from "../../../widgets/Spinner";

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
            <div className="t--center mb--2">
              <Logo />
            </div>

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
                    <div className="input mb--3">
                      <i className="icon--input">
                        <FaUser />
                      </i>
                      <InputText
                        placeholder="Email address"
                        type="text"
                        name="users_email"
                      />
                    </div>
                    <div className="input mb--3">
                      <i className="icon--input">
                        <FaLock />
                      </i>
                      <InputText
                        placeholder="Password"
                        type={passwordShown ? "text" : "password"}
                        name="users_password"
                      />
                      <i
                        className="icon--show"
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

                    <div className="t--center">
                      <button type="submit" className="btn--gradient mb--2 ">
                        <span>LOGIN</span>
                      </button>
                    </div>

                    <p className="t--center">
                      <a
                        href={`${devNavUrl}/forgot-password`}
                        className="color--primary"
                        style={{ position: "relative" }}
                      >
                        <u>Forgot Password?</u>
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
