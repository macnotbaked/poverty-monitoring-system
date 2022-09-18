import React from "react";
import { devBaseUrl } from "../helpers/functions-general";
// import nodata from "../../img/nodata.png";

const NoData = () => {
  return (
    <>
      <div className="no--data">
        <div className="nodata-icon">
          <img src={`${devBaseUrl}/img/no-data.png`} alt="no data" />

          <h3>
            <strong>No Data</strong>
          </h3>
        </div>
      </div>
    </>
  );
};

export default NoData;
