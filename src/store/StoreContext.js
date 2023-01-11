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
  isViewHousehold: false,
  isViewIncome: false,
  isViewPopulation: false,
  isViewUnemployment: false,
  credentials: {},
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
