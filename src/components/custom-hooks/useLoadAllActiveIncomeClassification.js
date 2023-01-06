import React from "react";
import { StoreContext } from "../../store/StoreContext";
import fetchApi from "../helpers/fetchApi";
import { fetchData } from "../helpers/fetchData";
import { devApiUrl } from "../helpers/functions-general";

const useLoadAllActiveIncomeClassification = (
  url,
  param1 = null,
  param2 = null
) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loadingincomeClass, setLoading] = React.useState(false);
  const [incomeClass, setResult] = React.useState([]);

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
    loadingincomeClass,
    incomeClass,
  };
};

export default useLoadAllActiveIncomeClassification;
