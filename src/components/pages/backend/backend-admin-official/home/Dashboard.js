import React from "react";
import { StoreContext } from "../../../../../store/StoreContext";
import useFetchDataLoadMore from "../../../../custom-hooks/useFetchDataLoadMore";
import Header from "../../../../header/Header";
import Navigation from "../../../../navigation/Navigation";
import DashboardList from "./DashboardList";

const Dashboard = () => {
  const { store, dispatch } = React.useContext(StoreContext);

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

  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="home" />
        <div className="container">
          <div className="row">
            <div className="content">
              <h3 className="t--bold py--2">Dashboard</h3>
              <DashboardList
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
    </>
  );
};

export default Dashboard;
