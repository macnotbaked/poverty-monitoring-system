import React from "react";
import { StoreContext } from "../../store/StoreContext";
import fetchApi from "../helpers/fetchApi";
import { devApiUrl } from "../helpers/functions-general";

const useLoadAllActivePurok = (url, param1 = null, param2 = null) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loadingActivePurok, setLoading] = React.useState(false);
  const [activePurok, setResult] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, [store.isSave]);

  const getData = async () => {
    setLoading(true);
    // get total result of data
    const result = await fetchApi(devApiUrl + url, {
      token: "",
      type: param1,
    });

    console.log(result);

    if (typeof result === "undefined") {
      setLoading(false);
      console.log("undefined");
      return;
    }
    if (!result.status) {
      setLoading(false);
      setResult([]);
      return;
    }
    if (result.status) {
      setLoading(false);
      setResult(result.data);
    }
  };

  return {
    loadingActivePurok,
    activePurok,
  };
};

export default useLoadAllActivePurok;