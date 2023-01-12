import React from "react";
import { StoreContext } from "../../../../../store/StoreContext";
import Header from "../../../../header/Header";
import Navigation from "../../../../navigation/Navigation";
import PageNotFound from "../../../../widgets/PageNotFound";
import SettingList from "./SettingList";

const Settings = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  if (store.credentials.users_role === "Official") {
    return <PageNotFound />;
  }

  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="settings" />
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="content__header">
                <h3 className="t--bold py--2">Settings</h3>
              </div>
              <SettingList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
