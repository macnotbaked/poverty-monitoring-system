import React from "react";
import Navigation from "../../../../navigation/Navigation";
import SettingList from "./SettingList";

const Settings = () => {
  return (
    <>
      <Navigation menu="settings" />
      <div className="main-content">
        <div className="container">
          <div className="title">
            <div className="row">
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="tab-title">{"Settings"}</span>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="content-block">
              <SettingList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
