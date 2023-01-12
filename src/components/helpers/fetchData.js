import fetchApi from "./fetchApi";

import {
  devApiUrl,
  devNavUrl,
  doList,
  doLoadmore,
  setStorageRoute,
} from "./functions-general";

import {
  setCreatePass,
  setCredentials,
  setError,
  setForgotPass,
  setIsAdd,
  setIsConfirm,
  setIsEdit,
  setIsEvaluated,
  setIsLogin,
  setIsRestore,
  setIsSignup,
  setMessage,
  setSave,
  setSuccess,
} from "../../store/StoreAction";
import { checkRoleToRedirect } from "./login-functions";

export const fetchData = async (
  //parameters
  setLoading,
  endpoint,
  fd,
  setResult,
  successMsg,
  errorMsg,
  dispatch,
  store,
  successModal,
  isLoadMore,
  navigate = null // props optional
) => {
  setLoading !== null && setLoading(true);

  const data = await fetchApi(devApiUrl + endpoint, fd, dispatch);
  console.log(data);

  // used for result set by read api
  isLoadMore && setResult !== null && doLoadmore(data, setResult);
  !isLoadMore && setResult !== null && doList(data, setResult);

  // if result data is undefined
  if (data === undefined) {
    console.log("undefined");
    dispatch(setError(true));
    dispatch(setMessage("API / Network Error"));
    setLoading !== null && setLoading(false);
    return;
  }

  // if result data is empty and status is false
  if (!data.status) {
    console.log(data.message);
    setLoading !== null && setLoading(false);
    dispatch(setError(true));
    dispatch(setMessage(data.message));
  }

  // if result data is not empty and status is true
  if (data.status) {
    console.log("Fetch success");
    setLoading !== null && setLoading(false);

    // add modal will be closed when used
    if (store.isAdd) {
      dispatch(setIsAdd(false));
      //this will refresh table list
      store.isSave ? dispatch(setSave(false)) : dispatch(setSave(true));
    }

    // profile edit will be canceled when used
    if (store.isEdit) {
      dispatch(setIsEdit(false));
      //this will refresh table list
      store.isSave ? dispatch(setSave(false)) : dispatch(setSave(true));
    }

    // delete modal will be closed when used
    if (store.isConfirm) {
      dispatch(setIsConfirm(false));
      store.isSave ? dispatch(setSave(false)) : dispatch(setSave(true));
    }

    // restore modal will be closed when used
    if (store.isRestore) {
      dispatch(setIsRestore(false));
      store.isSave ? dispatch(setSave(false)) : dispatch(setSave(true));
    }

    // success modal will be closed when used
    if (successModal) {
      dispatch(setSuccess(true));
      dispatch(setMessage(successMsg));
      // return;
    }

    // redirect to other page after success application
    if (store.isSignup) {
      dispatch(setIsSignup(false));
      navigate(`${devNavUrl}/application-almost-done`);
    }

    // redirect to other page after create password
    if (store.isCreatePass) {
      dispatch(setCreatePass(false));
      navigate(`${devNavUrl}/all-set`);
    }

    // redirect to other page after request forgot password
    if (store.isForgotPassword) {
      dispatch(setForgotPass(false));
      navigate(`${devNavUrl}/almost-done`);
    }

    // redirect to other page after login
    if (store.isLogin) {
      // dispatch(setCredentials(data.mail));
      dispatch(
        setCredentials(
          data.mail.users_aid,
          data.mail.users_fname,
          data.mail.users_mname,
          data.mail.users_lname,
          data.mail.users_email,
          data.mail.users_role,
          data.mail.users_aid
        )
      );
      setStorageRoute(data.data);
      // setStorageRoute(data.data, data.mail);
      dispatch(setIsLogin(false));
      checkRoleToRedirect(navigate, data.mail);
    }
  }
};
