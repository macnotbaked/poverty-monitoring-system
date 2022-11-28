import React from "react";
import { StoreContext } from "../../store/StoreContext";
import fetchApi from "../helpers/fetchApi";
import { fetchData } from "../helpers/fetchData";
import { devApiUrl } from "../helpers/functions-general";

const useLoadAllActivePurok = (url, param1 = null, param2 = null) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loadingActivePurok, setLoading] = React.useState(false);
  const [activePurok, setResult] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, [store.isSave]);

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
    loadingActivePurok,
    activePurok,
  };
};

export default useLoadAllActivePurok;
