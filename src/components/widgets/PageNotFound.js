import React from "react";
import { devBaseUrl } from "../helpers/functions-general";

const PageNotFound = () => {
  return (
    <>
      <div className="login">
        <div className="login__form">
          <div className="mb--2 t--center">
            <img
              className="mb--2"
              src={`${devBaseUrl}/img/404.png`}
              alt="404 page not found"
            />
            <p>
              You don't have any access in this page or, you enter the wrong
              path.
            </p>
            <p>Plase check your URL</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
