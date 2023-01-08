import { Form, Formik } from "formik";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  setCreatePass,
  setError,
  setMessage,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import useLoadAll from "../../../custom-hooks/useLoadAll";
import { fetchData } from "../../../helpers/fetchData";
import { InputText } from "../../../helpers/FormInputs";
import { getUrlParam } from "../../../helpers/functions-general";
import Logo from "../../../widgets/Logo";
import ModalError from "../../../widgets/ModalError";
import PageNotFound from "../../../widgets/PageNotFound";
import Spinner from "../../../widgets/Spinner";
import SpinnerButton from "../../../widgets/SpinnerButton";

const CreatePassword = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [Loading, setLoading] = React.useState(false);
  const Navigate = useNavigate();
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [passwordShownConfirm, setPasswordShownConfirm] = React.useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const togglePasswordConfirm = () => {
    setPasswordShownConfirm(!passwordShownConfirm);
  };

  const { loading, result } = useLoadAll(
    "/admin/admin-settings/users/read-user-key.php",
    getUrlParam().get("key")
  );

  React.useEffect(() => {
    dispatch(setCreatePass(true));
  }, []);

  const initVal = {
    users_password: "",
    users_password_confirm: "",
    key: getUrlParam().get("key"),
  };

  const yupSchema = Yup.object({
    users_password: Yup.string()
      .required("Required")
      .min(8, "Password must be at least 8 characters.")
      .matches(/[a-z]/, "At least one lowercase letter.")
      .matches(/[A-Z]/, "At least one uppercase letter.")
      .matches("(?=.*[@$!%*#?&])", "Atleast 1 special character.")
      .matches("(?=.*[0-9])", "Atleast 1 number."),
    users_password_confirm: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("users_password"), null], "Passwords does not match."),
  });

  if (
    getUrlParam().get("key") === null ||
    getUrlParam().get("key") === "" ||
    result.length === 0
  ) {
    return loading ? (
      <>
        <Spinner />
      </>
    ) : (
      <>
        {store.error && <ModalError />}

        <PageNotFound />
      </>
    );
  }

  return (
    <>
      <div className="login">
        <div className="login__form">
          <div className="t--center">
            <Logo />
          </div>
          <h2 className="t--left t--exbold my--2">CREATE PASSWORD</h2>

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // console.log(values);
              if (values.users_password !== values.users_password_confirm) {
                dispatch(setError(true));
                dispatch(setMessage("Your password did not match."));
                return;
              }

              fetchData(
                setLoading,
                "/admin/admin-settings/users/update-user-new-pass.php",
                values, // form data values
                null, // result set data
                "", // success msg
                "", // additional error msg if needed
                dispatch, // context api action
                store, // context api state
                false, // boolean to show success modal
                false, // boolean to show load more functionality button
                Navigate
              );
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="input mb--3 ">
                    <i className="icon--input">
                      <FaLock />
                    </i>
                    <InputText
                      placeholder="New Password"
                      type={passwordShown ? "text" : "password"}
                      name="users_password"
                    />
                    {props.values.users_password && (
                      <i className="icon--show" onClick={togglePassword}>
                        {passwordShown ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </i>
                    )}
                  </div>
                  <div className="input mb--3">
                    <i className="icon--input">
                      <FaLock />
                    </i>
                    <InputText
                      placeholder="Confirm Password"
                      type={passwordShownConfirm ? "text" : "password"}
                      name="users_password_confirm"
                    />
                    {props.values.users_password_confirm && (
                      <i className="icon--show" onClick={togglePasswordConfirm}>
                        {passwordShownConfirm ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </i>
                    )}
                  </div>
                  <div className="t--center d--flex align-center justify-center">
                    <button
                      type="submit"
                      className="btn--gradient mb--2 d--flex align-center justify-center"
                      disabled={Loading}
                    >
                      {Loading ? <SpinnerButton /> : <span>Submit</span>}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      {store.error && <ModalError />}
    </>
  );
};

export default CreatePassword;
