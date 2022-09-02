import React from "react";
import { setIsSearch, setSave, setStartIndex } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import fetchApi from "../helpers/fetchApi";
import { fetchData } from "../helpers/fetchData";
import { devApiUrl } from "../helpers/functions-general";

const useFetchDataLoadMore = (url, url2, perPage = 2, param1 = null) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [totalResult, setTotalResult] = React.useState(perPage);
  const [result, setResult] = React.useState([]);

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setResult([]);
    fData();
  }, [store.isSave]);

  const fData = async () => {
    fetchData(
      setLoading, // Boolean loading values optional
      url,
      { token: "", start: store.startIndex, total: perPage, type: param1 }, // form data values
      setResult,
      "",
      "", // additional error msg if needed optional
      dispatch, // context api action
      store, // context api state
      false, // boolean to show success modal
      true // boolean to show load more functionality button
    );
    /* para maupdate yun number nng nakaload sa table na items */
    dispatch(setStartIndex(store.startIndex + perPage));

    // get total result of data
    const result = await fetchApi(devApiUrl + url2, {
      token: "",
      type: param1,
    });

    console.log(result);

    if (typeof result === "undefined") {
      console.log("undefined");
      return;
    }
    if (!result.status) {
      setTotalResult([]);
      return;
    }
    if (result.status) {
      setTotalResult(result.data.length);
    }
  };

  const handleLoad = () => {
    fetchData(
      setLoading, // Boolean loading values optional
      url,
      { token: "", start: store.startIndex, total: perPage, type: param1 }, // form data values
      setResult,
      "", // success msg optional
      "Server connection error. Please contact  technical support.", // additional error msg if needed optional
      dispatch, // context api action
      store, // context api state
      false, // boolean to show success modal
      true // boolean to show load more functionality button
    );
    // setStartIndex((prevState) => prevState + perPage);
    dispatch(setStartIndex(store.startIndex + perPage));
  };

  const handleSearch = async (e, search, endpoint) => {
    e.preventDefault();
    // setIsSearch(true);

    let val = search.current.value;
    if (val === "") return;
    dispatch(setIsSearch(true));
    fetchData(
      setLoading,
      endpoint,
      { token: "", search: val }, // form data values
      setResult,
      "", // success msg
      "Server connection error. Please contact technical support.", // additional error msg if needed
      dispatch, // context api action
      store, // context api state
      false, // boolean to show success modal
      false // boolean to show load more functionality button
    );
  };

  // const handleChangeClass = (e) => {
  //   const val = e.target.value;
  //   if (e.target.value === "") {
  //     dispatch(setIsSearch(false));
  //     dispatch(setStartIndex(0));
  //     store.isSave ? dispatch(setSave(false)) : dispatch(setSave(true));
  //     return;
  //   }

  //   dispatch(setIsSearch(true));
  //   fetchData(
  //     setLoading,
  //     "/admin/students/read-students-by-class-level.php",
  //     { token: "", classLevel: val }, // form data values
  //     setResult,
  //     "", // success msg
  //     "Server connection error. Please contact FBAS technical support.", // additional error msg if needed
  //     dispatch, // context api action
  //     store, // context api state
  //     false, // boolean to show success modal
  //     false // boolean to show load more functionality button
  //   );
  // };

  const handleChange = (e) => {
    if (e.target.value === "") {
      dispatch(setIsSearch(false));
      dispatch(setStartIndex(0));
      store.isSave ? dispatch(setSave(false)) : dispatch(setSave(true));
    }
  };

  return {
    loading,
    handleLoad,
    totalResult,
    result,
    handleSearch,
    handleChange,
  };
};

export default useFetchDataLoadMore;
