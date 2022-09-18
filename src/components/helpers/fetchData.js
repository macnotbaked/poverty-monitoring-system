import fetchApi from "./fetchApi";

import {
  baseUrl,
  devApiUrl,
  devNavUrl,
  doList,
  doLoadmore,
  setStorageRoute,
} from "./functions-general";

import {
  setSuccess,
  setMessage,
  setError,
  setSave,
  setIsConfirm,
  setIsAdd,
  // setIsDonorSignUp,
  setCreatePass,
  setIsLogin,
  setCredentials,
  setForgotPass,
  // setSelfEvaluationComplete,
  // setPeerEvaluationComplete,
  setIsEvalEnabled,
  setIsSignup,
} from "../../store/StoreAction";
// import { checkRoleToRedirect } from "./login-functions";

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
      // if (fd.settings_account_aid === store.credentials.settings_account_aid) {
      //   localStorage.removeItem("hrisv3token");
      //   window.location.replace(`${devNavUrl}/admin/login`);
      // }
      dispatch(setIsAdd(false));
      //this will refresh table list
      store.isSave ? dispatch(setSave(false)) : dispatch(setSave(true));
    }

    // delete modal will be closed when used
    if (store.isConfirm) {
      dispatch(setIsConfirm(false));
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
      navigate(`${devNavUrl}/admin/application-almost-done`);
    }

    // check if eval is enabled
    // if (store.isEvalEnabled) {
    //   console.log(11111);
    //   dispatch(setIsEvalEnabled(false));
    //   store.isSave ? dispatch(setSave(false)) : dispatch(setSave(true));
    // }

    // redirect to other page after create password
    if (store.isCreatePass) {
      dispatch(setCreatePass(false));
      navigate(`${devNavUrl}/admin/all-set`);
    }

    // redirect to other page after request forgot password
    if (store.isForgotPassword) {
      dispatch(setForgotPass(false));
      navigate(`${devNavUrl}/admin/almost-done`);
    }

    // redirect to other page after login
    // if (store.isLogin) {
    //   // dispatch(setCredentials(data.mail));
    //   dispatch(
    //     setCredentials(
    //       data.mail.settings_account_aid,
    //       data.mail.settings_account_fname,
    //       data.mail.settings_role_name,
    //       data.mail.settings_account_email,
    //       data.mail.settings_account_aid
    //     )
    //   );
    //   setStorageRoute(data.data);
    //   // setStorageRoute(data.data, data.mail);
    //   dispatch(setIsLogin(false));
    //   checkRoleToRedirect(navigate, data.mail);
    // }
  }
};
