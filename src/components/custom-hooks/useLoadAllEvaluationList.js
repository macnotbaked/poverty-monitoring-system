import React from "react";
import { setIsEvalEnabled } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { fetchData } from "../helpers/fetchData";

const useLoadAllEvaluationList = (url, param1 = null, param2 = null) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [evaluationList, setResult] = React.useState([]);
  const [loadingevaluationList, setLoading] = React.useState(false);

  React.useEffect(() => {
    // use by enable evaluation settings
    param1 === "isEvalEnabled" && dispatch(setIsEvalEnabled(true));
    getData();
  }, [store.isSave, param2]);

  const getData = async () => {
    fetchData(
      setLoading, // Boolean loading values optional
      url,
      { token: "", val1: param1, val2: param2 }, // form data values
      setResult,
      "", // success msg optional
      "", // additional error msg if needed optional
      dispatch, // context api action
      store, // context api state
      false, // boolean to show success modal
      false // boolean to show load more functionality button
    );
  };

  return {
    loadingevaluationList,
    evaluationList,
  };
};

export default useLoadAllEvaluationList;
