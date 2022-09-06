import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { StoreContext } from "../../../../store/StoreContext";
import { getUrlParam } from "../../../helpers/functions-general";
import Logo from "../../../widgets/Logo";
import { setError, setMessage } from "../../../../store/StoreAction";
import { InputText } from "../../../helpers/FormInputs";
import SpinnerButton from "../../../widgets/SpinnerButton";
import ModalError from "../../../widgets/ModalError";

const CreatePassword = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [Loading, setLoading] = React.useState(false);
  const Navigate = useNavigate();
  const [passwordShown, setPasswordShown] = React.useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const initVal = {
    settings_account_password: "",
    settings_account_password_confirm: "",
    key: getUrlParam().get("key"),
  };

  const yupSchema = Yup.object({
    settings_account_password: Yup.string().required("Required"),
    settings_account_password_confirm: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="login">
        <div className="login__form">
          <div className="t--center">
            <Logo />
          </div>
          <h2 className="t--left t--exbold my--2">CREATE PASSWORD</h2>
          {/* <span className="t--left mb--2">Fill out fields</span> */}

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // console.log(values);
              if (
                values.settings_account_password !==
                values.settings_account_password_confirm
              ) {
                dispatch(setError(true));
                dispatch(setMessage("Your password did not match."));
                return;
              }

              // fetchData(
              //   setLoading,
              //   "/admin/admin-settings/account/update-account-new-pass.php",
              //   values, // form data values
              //   null, // result set data
              //   "", // success msg
              //   "", // additional error msg if needed
              //   dispatch, // context api action
              //   store, // context api state
              //   false, // boolean to show success modal
              //   false, // boolean to show load more functionality button
              //   Navigate
              // );
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="input mb--2 ">
                    <InputText
                      label="New Password"
                      type={passwordShown ? "text" : "password"}
                      name="settings_account_password"
                      required
                    />
                    <i
                      className="show--pass"
                      onMouseDown={togglePassword}
                      onMouseUp={togglePassword}
                    >
                      {passwordShown ? (
                        <AiOutlineEye />
                      ) : (
                        <AiOutlineEyeInvisible />
                      )}
                    </i>
                  </div>
                  <div className="input mb--3">
                    <InputText
                      label="Confirm Password"
                      type={passwordShown ? "text" : "password"}
                      name="settings_account_password_confirm"
                      required
                    />
                    <i
                      className="show--pass"
                      onMouseDown={togglePassword}
                      onMouseUp={togglePassword}
                    >
                      {passwordShown ? (
                        <AiOutlineEye />
                      ) : (
                        <AiOutlineEyeInvisible />
                      )}
                    </i>
                  </div>
                  <button
                    type="submit"
                    className="btn--outline"
                    disabled={Loading ? true : false}
                  >
                    {Loading && <SpinnerButton />} <span>Create</span>
                  </button>
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
