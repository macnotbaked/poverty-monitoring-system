import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../../../../store/StoreContext";
import useFetchDataLoadMore from "../../../../../custom-hooks/useFetchDataLoadMore";
import useLoadAllActiveIncomeClassification from "../../../../../custom-hooks/useLoadAllActiveIncomeClassification";
import useLoadAllActiveRepresentative from "../../../../../custom-hooks/useLoadAllActiveRepresentative";
import useLoadAllActiveRepresentativeCount from "../../../../../custom-hooks/useLoadAllActiveRepresentativeCount";
import Header from "../../../../../header/Header";
import {
  devNavUrl,
  formatDate,
  getUrlParam,
} from "../../../../../helpers/functions-general";
import Navigation from "../../../../../navigation/Navigation";
import Back from "../../../../../widgets/Back";
import EvaluationFitlerResultList from "./EvaluationFitlerResultList";

const EvaluationFilterResult = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const evaluationId = getUrlParam().get("eid");

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
    5 // show number of records on a table
  );

  const { countRepresentative } = useLoadAllActiveRepresentativeCount(
    "/admin/admin-evaluation/enable-evaluation/read-count-representative-evaluation.php",
    evaluationId
  );

  const { activeRepresentative } = useLoadAllActiveRepresentative(
    "/admin/admin-evaluation/enable-evaluation/read-all-representatives-evaluation.php",
    evaluationId
  );

  const { incomeClass } = useLoadAllActiveIncomeClassification(
    "/admin/admin-settings/income-classification/read-income-classification-all.php"
  );

  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="evaluation" />
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="content__header">
                <h3 className="t--bold py--2">
                  {activeRepresentative.length === 0 ||
                  evaluationId === null ||
                  evaluationId === ""
                    ? "No Data"
                    : activeRepresentative.length > 0
                    ? `${formatDate(
                        activeRepresentative[0].evaluation_list_created
                      )} to ${formatDate(
                        activeRepresentative[0].evaluation_list_datetime
                      )}`
                    : "Loading..."}
                </h3>
                <div className="content__button">
                  <Back />
                </div>
              </div>
              <EvaluationFitlerResultList
                loading={loading}
                handleLoad={handleLoad}
                totalResult={totalResult}
                result={result}
                handleSearch={handleSearch}
                handleChange={handleChange}
                evaluationId={evaluationId}
                countRepresentative={countRepresentative}
                activeRepresentative={activeRepresentative}
                incomeClass={incomeClass}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EvaluationFilterResult;
