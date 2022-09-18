import React from "react";
import {
  FaHome,
  FaMoneyCheck,
  FaUserCircle,
  FaUserFriends,
} from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { devBaseUrl, devNavUrl } from "../helpers/functions-general";

const Navigation = ({ menu }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <nav className="navigation">
        <div className="navigation__logo">
          <a
            href={`${devNavUrl}/admin/home`}
            onClick={() => dispatch(setStartIndex(0))}
          >
            <img src={`${devBaseUrl}/img/pms-logo-transparent.png`} alt="PMS" />
          </a>
        </div>
        <ul>
          <li className={menu === "home" ? "tab--active" : ""}>
            <Link
              to={`${devNavUrl}/admin/home`}
              onClick={() => dispatch(setStartIndex(0))}
            >
              <FaHome />
              <span>Home</span>
            </Link>
            <div className="shape-wrapper-bottom">
              <div className="circle-wrapper">
                <span className="circle-bottom"></span>
              </div>
            </div>
          </li>
          <li className={menu === "citizen" ? "tab--active" : ""}>
            <div className="shape-wrapper-top">
              <div className="circle-wrapper">
                <span className="circle-top"></span>
              </div>
            </div>
            <Link
              to={`${devNavUrl}/admin/citizen`}
              onClick={() => dispatch(setStartIndex(0))}
            >
              <FaUserFriends />
              <span>Citizen</span>
            </Link>
            <div className="shape-wrapper-bottom">
              <div className="circle-wrapper">
                <span className="circle-bottom"></span>
              </div>
            </div>
          </li>
          <li className={menu === "evaluation" ? "tab--active" : ""}>
            <div className="shape-wrapper-top">
              <div className="circle-wrapper">
                <span className="circle-top"></span>
              </div>
            </div>
            <Link
              to={`${devNavUrl}/admin/evaluation`}
              onClick={() => dispatch(setStartIndex(0))}
            >
              <FaMoneyCheck />
              <span>Evaluation</span>
            </Link>
            <div className="shape-wrapper-bottom">
              <div className="circle-wrapper">
                <span className="circle-bottom"></span>
              </div>
            </div>
          </li>
          <li className={menu === "settings" ? "tab--active" : ""}>
            <div className="shape-wrapper-top">
              <div className="circle-wrapper">
                <span className="circle-top"></span>
              </div>
            </div>
            <Link
              to={`${devNavUrl}/admin/settings`}
              onClick={() => dispatch(setStartIndex(0))}
            >
              <AiFillSetting />
              <span>Settings</span>
            </Link>
            <div className="shape-wrapper-bottom">
              <div className="circle-wrapper">
                <span className="circle-bottom"></span>
              </div>
            </div>
          </li>
        </ul>

        <div className="profile">
          <span className="title">Profile</span>
          <div className="profile__user my--2">
            {/* <img src="" alt="" /> */}
            <FaUserCircle />
            <div className="profile__name">
              <span>
                Hi, <span className="t--bold">Mark Ryan</span>
              </span>
              <span>Admin</span>
            </div>
          </div>
          <button type="sumbit" className="btn--primary">
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
