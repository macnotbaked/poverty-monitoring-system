import React from "react";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  setIsAdd,
  setIsConfirm,
  setIsEvalEnabled,
  setStartIndex,
} from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import useFetchDataLoadMore from "../../../../custom-hooks/useFetchDataLoadMore";
import useLoadAllActive from "../../../../custom-hooks/useLoadAllActive";
import useLoadAllEvaluationList from "../../../../custom-hooks/useLoadAllEvaluationList";
import Header from "../../../../header/Header";
import { devNavUrl } from "../../../../helpers/functions-general";
import Navigation from "../../../../navigation/Navigation";
import ModalAddEvaluation from "../../../../widgets/ModalAddEvaluation";
import ModalConfirmEvaluation from "../../../../widgets/ModalConfirmEvaluation";
import ModalError from "../../../../widgets/ModalError";
import EvaluationList from "./EvaluationList";

const Evaluation = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const { evaluationList } = useLoadAllEvaluationList(
    "/admin/admin-evaluation/enable-evaluation/read-enable-evaluation.php"
  );

  const evaluationId =
    evaluationList.length && evaluationList[0].evaluation_list_aid;

  // console.log(evaluationId);

  const {
    loading,
    handleLoad,
    totalResult,
    result,
    handleSearch,
    handleChange,
  } = useFetchDataLoadMore(
    "/admin/admin-sitio/read-sitio-limit.php",
    "/admin/admin-sitio/read-sitio-all.php",
    10 // show number of records on a table
  );

  React.useEffect(() => {
    dispatch(setIsEvalEnabled(true));
  }, []);

  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="evaluation" />
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="content__header">
                <h3 className="t--bold py--2">Santa Elena</h3>
                <div className="content__button">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={evaluationList.length > 0 ? true : false}
                      onChange={(e) => {
                        evaluationList.length > 0
                          ? dispatch(setIsAdd(true))
                          : dispatch(setIsConfirm(true));
                      }}
                    />
                    <span className="slider"></span>
                  </label>
                  <Link
                    className="btn--primary mr--1"
                    to={`${devNavUrl}/evaluation-filter`}
                    onClick={() => dispatch(setStartIndex(0))}
                  >
                    <FaFilter /> <span>Filter</span>
                  </Link>
                </div>
              </div>
              <EvaluationList
                loading={loading}
                handleLoad={handleLoad}
                totalResult={totalResult}
                result={result}
                handleSearch={handleSearch}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      {store.isAdd && <ModalConfirmEvaluation id={evaluationId} />}
      {store.isConfirm && <ModalAddEvaluation />}
      {store.error && <ModalError />}
    </>
  );
};

export default Evaluation;
