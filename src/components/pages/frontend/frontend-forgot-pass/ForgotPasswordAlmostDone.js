import React from "react";
import { BsCheck2Circle, BsFillCheckCircleFill } from "react-icons/bs";
import Logo from "../../../widgets/Logo";
import { devNavUrl } from "../../../helpers/functions-general";

const ForgotPasswordAlmostDone = () => {
  return (
    <>
      <div className="login">
        <div className="login__form">
          <div className="t--center">
            <Logo />
          </div>
          <h2 className="t--left t--exbold mt--2">Almost done!</h2>
          <div className="success__logo mb--2">
            <BsCheck2Circle />
          </div>
          <p className="mb--2">
            Please check your spam or junk email folder to continue.
          </p>

          <a href={`${devNavUrl}/login`} className="color--primary">
            Proceed to <u>login</u>
          </a>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordAlmostDone;
