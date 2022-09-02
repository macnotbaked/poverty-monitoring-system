import React from "react";
import Logo from "../svg/Logo";

const PageNotFound = () => {
  return (
    <>
      <main className="main__login">
        <div className="main__login__wrapper">
          <div className="main__login__form bg-white">
            <div className="welcome__note mb--20">
              <p className="t-center">
                <Logo />
              </p>
              <h2 className="t-left t-exbold mb--20">Page not found</h2>
              <p>
                You don't have any access in this page or, you enter the wrong
                path.
              </p>
              <p>Plase check your URL</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageNotFound;
