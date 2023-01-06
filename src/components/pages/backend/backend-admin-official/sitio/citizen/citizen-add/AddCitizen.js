import React from "react";
import { StoreContext } from "../../../../../../../store/StoreContext";
import useLoadAllActivePurok from "../../../../../../custom-hooks/useLoadAllActivePurok";
import Header from "../../../../../../header/Header";
import { getUrlParam } from "../../../../../../helpers/functions-general";
import Navigation from "../../../../../../navigation/Navigation";
import Back from "../../../../../../widgets/Back";
import ModalError from "../../../../../../widgets/ModalError";
import ModalSuccess from "../../../../../../widgets/ModalSuccess";
import AddCitizenList from "./AddCitizenList";

const AddCitizen = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const purokId = getUrlParam().get("sid");

  const { activePurok } = useLoadAllActivePurok(
    "/admin/admin-sitio/read-sitio-by-id.php",
    purokId
  );

  // console.log(purokId);

  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="sitio" />
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="content__header">
                <h3 className="t--bold py--2">
                  {activePurok.length > 0
                    ? activePurok[0].sitio_name
                    : "Loading..."}
                </h3>
                <div className="content__button">
                  <Back />
                </div>
              </div>
              <AddCitizenList purokId={purokId} />
            </div>
          </div>
        </div>
      </div>

      {store.error && <ModalError />}
      {store.success && <ModalSuccess />}
    </>
  );
};

export default AddCitizen;
