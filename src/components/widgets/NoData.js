import React from "react";
import { devBaseUrl } from "../helpers/functions-general";
// import nodata from "../../img/nodata.png";

const NoData = () => {
  return (
    <>
      <div className="nodata__container">
        <div className="nodata__item">
          <img src={`${devBaseUrl}/img/pms-no-data.png`} alt="no data" />
        </div>
      </div>
    </>
  );
};

export default NoData;
