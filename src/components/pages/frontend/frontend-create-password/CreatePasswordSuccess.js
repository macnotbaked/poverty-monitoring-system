import React from "react";
import { BsCheck2Circle, BsFillCheckCircleFill } from "react-icons/bs";
import { devNavUrl } from "../../../helpers/functions-general";
import Logo from "../../../widgets/Logo";

const CreatePasswordSuccess = () => {
  return (
    <>
      <div className="login">
        <div className="login__form">
          <div className="t--center">
            <Logo />
          </div>
          <h2 className="t--left t--exbold mt--2">All set!</h2>
          <div className="success__logo mb--2">
            <BsCheck2Circle />
          </div>
          <p className="mb--2">
            Your password has been successfully set! You can now proceed to
            login.
          </p>

          <a href={`${devNavUrl}/login`} className="color--primary">
            Proceed to login
          </a>
        </div>
      </div>
    </>
  );
};

export default CreatePasswordSuccess;
