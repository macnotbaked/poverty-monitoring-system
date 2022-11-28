import React from "react";
import { StoreReducer } from "./StoreReducer";

const initVal = {
  error: false,
  message: "",
  success: false,
  isSave: false,
  isActive: false,
  isConfirm: false,
  isAdd: false,
  isEdit: false,
  isSearch: false,
  startIndex: 0,
  isCreatePass: false,
  isForgotPassword: false,
  isLogin: false,
  isLogout: false,
  isSignup: false,
  isClick: false,
  isRestore: false,
  isAccountUpdated: false,
  isEvalEnabled: false,
  isSubmitEval: false,
  pageNum: 1,
  credentials: {},
  evaluationPreview: {
    representative_aid: "",
    representative_eval_id: "",
    representative_purok_id: "",
    representative_is_active: "",
    representative_name: "",
    representative_contact: "",
    representative_house_number: "",
    representative_total_people: "",
    representative_total_underage: "",
    representative_total_midage: "",
    representative_total_adult: "",
    representative_total_pwd: "",
    representative_total_elem: "",
    representative_total_highschool: "",
    representative_total_college: "",
    representative_household_living_id: "",
    representative_monthly_income_id: "",
    representative_bill_expenses_id: "",
    representative_food_expenses_id: "",
    representative_total_able_work: "",
    representative_total_employed: "",
    representative_created: "",
    representative_datetime: "",
  },
};

const StoreContext = React.createContext();

const StoreProvider = (props) => {
  const [store, dispatch] = React.useReducer(StoreReducer, initVal);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
