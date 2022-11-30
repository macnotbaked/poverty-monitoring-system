import React from "react";
import { StoreContext } from "../../store/StoreContext";
import { fetchData } from "../helpers/fetchData";

const useLoadAllActiveRepresentativeCount = (
  url,
  param1 = null,
  param2 = null
) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [countRepresentative, setResult] = React.useState([]);
  const [loadingCountRepresentative, setLoading] = React.useState(false);

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
    loadingCountRepresentative,
    countRepresentative,
  };
};

export default useLoadAllActiveRepresentativeCount;
