import React from "react";
import { StoreContext } from "../../../../../../../store/StoreContext";
import useLoadAllActivePurok from "../../../../../../custom-hooks/useLoadAllActivePurok";
import useLoadAllEvaluationList from "../../../../../../custom-hooks/useLoadAllEvaluationList";
import { getUrlParam } from "../../../../../../helpers/functions-general";
import Spinner from "../../../../../../widgets/Spinner";
import AddCitizen from "./AddCitizen";
import AddCitizenReview from "./AddCitizenReview";

const Representative = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const purokId = getUrlParam().get("sid");

  const { loadingActivePurok, activePurok } = useLoadAllActivePurok(
    "/admin/admin-sitio/read-sitio-by-id.php",
    purokId
  );

  const { evaluationList, loadingevaluationList } = useLoadAllEvaluationList(
    "/admin/admin-evaluation/enable-evaluation/read-enable-evaluation.php",
    "isEvalEnabled"
  );

  if (loadingevaluationList) {
    return <Spinner />;
  } else if (evaluationList.length > 0) {
    switch (store.pageNum) {
      case 1:
        return (
          <AddCitizen
            evaluationList={evaluationList}
            loadingevaluationList={loadingevaluationList}
            loadingActivePurok={loadingActivePurok}
            activePurok={activePurok}
            purokId={purokId}
          />
        );
      case 2:
        return (
          <AddCitizenReview
            evaluationList={evaluationList}
            loadingevaluationList={loadingevaluationList}
            loadingActivePurok={loadingActivePurok}
            activePurok={activePurok}
            purokId={purokId}
          />
        );
      default:
        return <p>Page not found.</p>;
    }
  } else {
    return (
      <>
        <h2 className="t-center t-exbold mb--20">
          This application is already closed.
        </h2>
      </>
    );
  }
};

export default Representative;
