import React from "react";
import { FaHome, FaMoneyCheck, FaUserFriends } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { devNavUrl } from "../helpers/functions-general";

const Navigation = ({ menu }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <nav className="navigation">
        <ul>
          <li className={menu === "home" ? "tab--active" : ""}>
            <Link
              to={`${devNavUrl}/admin/home`}
              onClick={() => dispatch(setStartIndex(0))}
            >
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li className={menu === "client" ? "tab--active" : ""}>
            <Link
              to={`${devNavUrl}/admin/client`}
              onClick={() => dispatch(setStartIndex(0))}
            >
              <FaUserFriends />
              <span>Client</span>
            </Link>
          </li>
          <li className={menu === "payment" ? "tab--active" : ""}>
            <Link
              to={`${devNavUrl}/admin/payment`}
              onClick={() => dispatch(setStartIndex(0))}
            >
              <FaMoneyCheck />
              <span>Payment</span>
            </Link>
          </li>
          <li className={menu === "settings" ? "tab--active" : ""}>
            <Link
              to={`${devNavUrl}/admin/settings`}
              onClick={() => dispatch(setStartIndex(0))}
            >
              <AiFillSetting />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
