import { Form, Formik } from "formik";
import React from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { setForgotPass } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { fetchData } from "../../../helpers/fetchData";
import { InputText } from "../../../helpers/FormInputs";
import { devNavUrl } from "../../../helpers/functions-general";
import Logo from "../../../widgets/Logo";
import ModalError from "../../../widgets/ModalError";
import SpinnerButton from "../../../widgets/SpinnerButton";

const ForgotPassword = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [Loading, setLoading] = React.useState(false);
  const Navigate = useNavigate();

  const initVal = {
    users_email: "",
  };

  const yupSchema = Yup.object({
    users_email: Yup.string().email("Invalid Email").required("Required"),
  });

  React.useEffect(() => {
    dispatch(setForgotPass(true));
  }, []);

  return (
    <>
      <div className="login">
        <div className="login__form">
          <div className="t--center">
            <Logo />
          </div>
          <h2 className="t--left t--exbold my--2">FORGOT PASSWORD</h2>

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              fetchData(
                setLoading,
                "/admin/admin-settings/users/update-user-forgot-pass.php",
                values, // form data values
                null, // result set data
                "", // success msg
                "", // additional error msg if needed
                dispatch, // context api action
                store, // context api state
                false, // boolean to show success modal
                false, // boolean to show load more functionality button
                Navigate // props optional
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
                      disabled={Loading}
                    />
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

                  <p className="t--left">
                    Go back to{" "}
                    <a href={`${devNavUrl}/login`} className="color-primary">
                      <u> Login</u>
                    </a>
                  </p>
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

export default ForgotPassword;
