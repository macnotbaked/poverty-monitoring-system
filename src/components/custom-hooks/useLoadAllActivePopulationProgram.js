import React from "react";
import { StoreContext } from "../../store/StoreContext";
import { fetchData } from "../helpers/fetchData";

const useLoadAllActivePopulationProgram = (
  url,
  param1 = null,
  param2 = null
) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loadingPopulationProgram, setLoading] = React.useState(false);
  const [activePopulationProgram, setResult] = React.useState([]);

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
    loadingPopulationProgram,
    activePopulationProgram,
  };
};

export default useLoadAllActivePopulationProgram;
