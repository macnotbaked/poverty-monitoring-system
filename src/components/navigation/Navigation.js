import React from "react";
import { AiFillSetting } from "react-icons/ai";
import {
  FaChartBar,
  FaHome,
  FaHouseUser,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { setIsActive, setStartIndex } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { devBaseUrl, devNavUrl } from "../helpers/functions-general";

const Navigation = ({ menu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const role = store.credentials.roles_name;

  const handleshow = () => {
    dispatch(setIsActive(!store.isActive));
  };

  return (
    <>
      <nav className="navigation">
        <ul>
          <>
            <div className="navigation__logo">
              <a
                href={`${devNavUrl}/admin/home`}
                onClick={() => dispatch(setStartIndex(0))}
              >
                <img src={`${devBaseUrl}/img/pms-logo.png`} alt="PMS" />
              </a>
              {/* <span></span> */}
            </div>
            <li className={menu === "home" ? "tab--active" : ""}>
              <Link
                to={`${devNavUrl}/admin/home`}
                onClick={() => dispatch(setStartIndex(0))}
                className="tooltip"
                data-tooltip="Home"
              >
                <FaHome />
              </Link>
            </li>
            <li className={menu === "sitio" ? "tab--active" : ""}>
              <Link
                to={`${devNavUrl}/admin/sitio`}
                onClick={() => dispatch(setStartIndex(0))}
                className="tooltip"
                data-tooltip="Purok"
              >
                <FaMapMarkedAlt />
              </Link>
            </li>
            <li className={menu === "household" ? "tab--active" : ""}>
              <Link
                to={`${devNavUrl}/admin/citizens`}
                onClick={() => dispatch(setStartIndex(0))}
                className="tooltip"
                data-tooltip="Household"
              >
                <FaHouseUser />
              </Link>
            </li>
            <li className={menu === "evaluation" ? "tab--active" : ""}>
              <Link
                to={`${devNavUrl}/admin/evaluation`}
                onClick={() => dispatch(setStartIndex(0))}
                className="tooltip"
                data-tooltip="Evaluation"
              >
                <FaChartBar />
              </Link>
            </li>
          </>

          {store.credentials.users_role === "Admin" && (
            <>
              <li className={menu === "settings" ? "tab--active" : ""}>
                <Link
                  to={`${devNavUrl}/admin/settings`}
                  onClick={() => dispatch(setStartIndex(0))}
                  className="tooltip"
                  data-tooltip="Settings"
                >
                  <AiFillSetting />
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
