import React from "react";
import { devBaseUrl } from "../helpers/functions-general";

const PageNotFound = () => {
  return (
    <>
      <div className="login">
        <div className="login__form">
          <div className="mb--2">
            <div className="t--center">
              <img
                className="mb--2"
                src={`${devBaseUrl}/img/pms-404-error.png`}
                alt="404 page not found"
                style={{ width: "15rem" }}
              />
            </div>
            <p className="mb--1">
              You don't have access to this page or you enter the wrong path.
            </p>
            <p>Plase check your URL</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
