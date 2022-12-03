export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "MESSAGE":
      return {
        ...state,
        message: action.payload,
      };

    case "SUCCESS":
      return {
        ...state,
        success: action.payload,
      };

    case "SAVE":
      return {
        ...state,
        isSave: action.payload,
      };
    case "ACTIVE":
      return {
        ...state,
        isActive: action.payload,
      };
    case "CONFIRM":
      return {
        ...state,
        isConfirm: action.payload,
      };
    case "IS_ADD":
      return {
        ...state,
        isAdd: action.payload,
      };
    case "IS_EDIT":
      return {
        ...state,
        isEdit: action.payload,
      };

    case "IS_SEARCH":
      return {
        ...state,
        isSearch: action.payload,
      };

    case "START_INDEX":
      return {
        ...state,
        startIndex: action.payload,
      };

    case "IS_CREATE_PASS":
      return {
        ...state,
        isCreatePass: action.payload,
      };

    case "IS_FORGOT_PASS":
      return {
        ...state,
        isForgotPassword: action.payload,
      };

    case "IS_LOGIN":
      return {
        ...state,
        isLogin: action.payload,
      };

    case "IS_LOGOUT":
      return {
        ...state,
        isLogout: action.payload,
      };

    case "IS_SIGNUP":
      return {
        ...state,
        isSignup: action.payload,
      };

    case "IS_CLICK":
      return {
        ...state,
        isClick: action.payload,
      };

    case "RESTORE":
      return {
        ...state,
        isRestore: action.payload,
      };

    case "IS_ACCOUNT_UPDATED":
      return {
        ...state,
        isAccountUpdated: action.payload,
      };

    case "IS_EVAL_ENABLED":
      return {
        ...state,
        isEvalEnabled: action.payload,
      };

    case "IS_SUBMIT_EVAL":
      return {
        ...state,
        isSubmitEval: action.payload,
      };

    case "CREDENTIALS":
      return {
        ...state,
        credentials: action.payload,
      };

    default:
      return state;
  }
};
