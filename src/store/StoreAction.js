export const setError = (val) => {
  return {
    type: "ERROR",
    payload: val,
  };
};

export const setMessage = (val) => {
  return {
    type: "MESSAGE",
    payload: val,
  };
};

export const setSuccess = (val) => {
  return {
    type: "SUCCESS",
    payload: val,
  };
};

export const setSave = (val) => {
  return {
    type: "SAVE",
    payload: val,
  };
};

export const setIsActive = (val) => {
  return {
    type: "ACTIVE",
    payload: val,
  };
};

export const setIsConfirm = (val) => {
  return {
    type: "CONFIRM",
    payload: val,
  };
};

//#4 check if is_add is on reducer - go to reducer
export const setIsAdd = (val) => {
  return {
    type: "IS_ADD",
    payload: val,
  };
};

export const setIsEdit = (val) => {
  return {
    type: "IS_EDIT",
    payload: val,
  };
};

export const setIsSearch = (val) => {
  return {
    type: "IS_SEARCH",
    payload: val,
  };
};

export const setStartIndex = (val) => {
  return {
    type: "START_INDEX",
    payload: val,
  };
};

export const setCreatePass = (val) => {
  return {
    type: "IS_CREATE_PASS",
    payload: val,
  };
};

export const setForgotPass = (val) => {
  return {
    type: "IS_FORGOT_PASS",
    payload: val,
  };
};

export const setIsLogin = (val) => {
  return {
    type: "IS_LOGIN",
    payload: val,
  };
};

export const setIsLogout = (val) => {
  return {
    type: "IS_LOGOUT",
    payload: val,
  };
};

export const setIsSignup = (val) => {
  return {
    type: "IS_SIGNUP",
    payload: val,
  };
};

export const setIsClick = (val) => {
  return {
    type: "IS_CLICK",
    payload: val,
  };
};

export const setIsRestore = (val) => {
  return {
    type: "RESTORE",
    payload: val,
  };
};

export const setIsAccountUpdated = (val) => {
  return {
    type: "IS_ACCOUNT_UPDATED",
    payload: val,
  };
};

export const setIsEvalEnabled = (val) => {
  return {
    type: "IS_EVAL_ENABLED",
    payload: val,
  };
};

export const setSubmitEval = (val) => {
  return {
    type: "IS_SUBMIT_EVAL",
    payload: val,
  };
};

export const setCredentials = (
  users_aid,
  users_fname,
  users_mname,
  users_lname,
  users_email,
  users_photo,
  users_role
) => {
  return {
    type: "CREDENTIALS",
    payload: {
      users_aid,
      users_fname,
      users_mname,
      users_lname,
      users_email,
      users_photo,
      users_role,
    },
  };
};

export const setPageNum = (val) => {
  return {
    type: "PAGE_NUM",
    payload: val,
  };
};

export const setEvaluationPreview = (
  representative_aid,
  representative_eval_id,
  representative_purok_id,
  representative_is_active,
  representative_name,
  representative_contact,
  representative_house_number,
  representative_total_people,
  representative_total_underage,
  representative_total_midage,
  representative_total_adult,
  representative_total_pwd,
  representative_total_elem,
  representative_total_highschool,
  representative_total_college,
  representative_household_living_id,
  representative_monthly_income_id,
  representative_bill_expenses_id,
  representative_food_expenses_id,
  representative_total_able_work,
  representative_total_employed,
  representative_created,
  representative_datetime
) => {
  return {
    type: "EVALUATION_PREVIEW",
    payload: {
      representative_aid,
      representative_eval_id,
      representative_purok_id,
      representative_is_active,
      representative_name,
      representative_contact,
      representative_house_number,
      representative_total_people,
      representative_total_underage,
      representative_total_midage,
      representative_total_adult,
      representative_total_pwd,
      representative_total_elem,
      representative_total_highschool,
      representative_total_college,
      representative_household_living_id,
      representative_monthly_income_id,
      representative_bill_expenses_id,
      representative_food_expenses_id,
      representative_total_able_work,
      representative_total_employed,
      representative_created,
      representative_datetime,
    },
  };
};
