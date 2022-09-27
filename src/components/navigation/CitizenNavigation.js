import React from "react";
import {
  FaHome,
  FaHouseUser,
  FaMoneyCheck,
  FaNewspaper,
  FaSitemap,
  FaUserCircle,
  FaUserFriends,
} from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  setIsActive,
  setIsLogout,
  setStartIndex,
} from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { devBaseUrl, devNavUrl } from "../helpers/functions-general";
import ModalLogout from "../widgets/ModalLogout";

const CitizenNavigation = ({ menu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const role = store.credentials.roles_name;

  const handleLogout = () => {
    dispatch(setIsLogout(true));
    setItemEdit(null);
  };

  const handleshow = () => {
    dispatch(setIsActive(!store.isActive));
  };

  return (
    <>
      <nav className="navigation">
        <div className="navigation__logo">
          <a
            href={`${devNavUrl}/citizen/my-info`}
            onClick={() => dispatch(setStartIndex(0))}
          >
            <img src={`${devBaseUrl}/img/pms-logo-transparent.png`} alt="PMS" />
          </a>
        </div>
        <ul>
          <li className={menu === "my-info" ? "tab--active" : ""}>
            <Link
              to={`${devNavUrl}/citizen/my-info`}
              onClick={() => dispatch(setStartIndex(0))}
            >
              <FaHouseUser />
              <span>My Info</span>
            </Link>
            <div className="shape-wrapper-bottom">
              <div className="circle-wrapper">
                <span className="circle-bottom"></span>
              </div>
            </div>
          </li>
          <li className={menu === "citizen-evaluation" ? "tab--active" : ""}>
            <div className="shape-wrapper-top">
              <div className="circle-wrapper">
                <span className="circle-top"></span>
              </div>
            </div>
            <Link
              to={`${devNavUrl}/citizen/evaluation`}
              onClick={() => dispatch(setStartIndex(0))}
            >
              <FaNewspaper />
              <span>Evaluation</span>
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
                Hi{" "}
                <span className="t--bold">
                  {role === "Citizen"
                    ? store.credentials.citizen_fname
                    : store.credentials.users_fname}
                  ,
                </span>
              </span>
              <span>{store.credentials.roles_name}</span>
            </div>
          </div>
          <button type="sumbit" className="btn--primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {store.isLogout && <ModalLogout />}
      {/* <ModalLogout /> */}
    </>
  );
};

export default CitizenNavigation;
