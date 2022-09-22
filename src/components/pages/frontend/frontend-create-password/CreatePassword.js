import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { StoreContext } from "../../../../store/StoreContext";
import { getUrlParam } from "../../../helpers/functions-general";
import Logo from "../../../widgets/Logo";
import {
  setCreatePass,
  setError,
  setMessage,
} from "../../../../store/StoreAction";
import { InputText } from "../../../helpers/FormInputs";
import SpinnerButton from "../../../widgets/SpinnerButton";
import ModalError from "../../../widgets/ModalError";
import useLoadAll from "../../../custom-hooks/useLoadAll";
import Spinner from "../../../widgets/Spinner";
import PageNotFound from "../../../widgets/PageNotFound";
import { fetchData } from "../../../helpers/fetchData";

const CreatePassword = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [Loading, setLoading] = React.useState(false);
  const Navigate = useNavigate();
  const [passwordShown, setPasswordShown] = React.useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
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
    users_password: Yup.string().required("Required"),
    users_password_confirm: Yup.string().required("Required"),
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
                  <div className="input mb--2 ">
                    <InputText
                      label="New Password"
                      type={passwordShown ? "text" : "password"}
                      name="users_password"
                      required
                    />
                    <i
                      className="icon--input"
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
                      name="users_password_confirm"
                      required
                    />
                    <i
                      className="icon--input"
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
