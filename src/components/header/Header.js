import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { setIsActive } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";

const Header = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleShow = () => {
    dispatch(setIsActive(!store.isActive));
  };

  return (
    <>
      <header className="header">
        <div className="header__collapse" onClick={handleShow}>
          <AiOutlineMenuFold />
        </div>
        <div className="header__credential">
          <div className="profile__user">
            <span>
              Hi{" "}
              <span className="color--primary t--bold">
                {store.credentials.users_fname}!
              </span>
            </span>
          </div>
          <FaUserCircle />
        </div>
      </header>
    </>
  );
};

export default Header;
