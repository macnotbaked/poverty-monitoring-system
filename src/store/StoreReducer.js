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

    case "PAGE_NUM":
      return {
        ...state,
        pageNum: action.payload,
      };

    case "EVALUATION_PREVIEW":
      return {
        ...state,
        evaluationPreview: {
          representative_aid: action.payload.representative_aid,
          representative_eval_id: action.payload.representative_eval_id,
          representative_purok_id: action.payload.representative_purok_id,
          representative_is_active: action.payload.representative_is_active,
          representative_name: action.payload.representative_name,
          representative_contact: action.payload.representative_contact,
          representative_house_number:
            action.payload.representative_house_number,
          representative_total_people:
            action.payload.representative_total_people,
          representative_total_underage:
            action.payload.representative_total_underage,
          representative_total_midage:
            action.payload.representative_total_midage,
          representative_total_adult: action.payload.representative_total_adult,
          representative_total_pwd: action.payload.representative_total_pwd,
          representative_total_elem: action.payload.representative_total_elem,
          representative_total_highschool:
            action.payload.representative_total_highschool,
          representative_total_college:
            action.payload.representative_total_college,
          representative_household_living_id:
            action.payload.representative_household_living_id,
          representative_monthly_income_id:
            action.payload.representative_monthly_income_id,
          representative_bill_expenses_id:
            action.payload.representative_bill_expenses_id,
          representative_food_expenses_id:
            action.payload.representative_food_expenses_id,
          representative_total_able_work:
            action.payload.representative_total_able_work,
          representative_total_employed:
            action.payload.representative_total_employed,
          representative_created: action.payload.representative_created,
          representative_datetime: action.payload.representative_datetime,
        },
      };

    default:
      return state;
  }
};
