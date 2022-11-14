import React from "react";
import { devBaseUrl } from "../helpers/functions-general";

const Logo = () => {
  return (
    <>
      <img src={`${devBaseUrl}/img/pms-logo.png`} alt="PMS" />
    </>
  );
};

export default Logo;
