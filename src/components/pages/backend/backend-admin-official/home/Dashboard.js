import React from "react";
import { StoreContext } from "../../../../../store/StoreContext";
import Header from "../../../../header/Header";
import Navigation from "../../../../navigation/Navigation";
import DashboardList from "./DashboardList";

const Dashboard = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="home" />
        <div className="container">
          <div className="content">
            <h3 className="t--bold py--2">Dashboard</h3>
            <DashboardList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
