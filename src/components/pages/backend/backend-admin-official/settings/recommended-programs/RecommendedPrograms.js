import React from "react";
import { StoreContext } from "../../../../../../store/StoreContext";
import Header from "../../../../../header/Header";
import Navigation from "../../../../../navigation/Navigation";
import Back from "../../../../../widgets/Back";
import RecommendedProgramsList from "./RecommendedProgramsList";

const RecommendedPrograms = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="settings" />
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="content__header">
                <h3 className="t--bold py--2">Recommended Programs</h3>
                <div className="content__button">
                  <Back />
                </div>
              </div>
              <RecommendedProgramsList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedPrograms;
