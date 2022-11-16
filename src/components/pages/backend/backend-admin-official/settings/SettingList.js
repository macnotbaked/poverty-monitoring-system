import React from "react";
import {
  FaArchive,
  FaListAlt,
  FaListUl,
  FaNotesMedical,
  FaUserCircle,
} from "react-icons/fa";
import { MdCategory, MdHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { setStartIndex } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { devNavUrl } from "../../../../helpers/functions-general";

const SettingList = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <div className="grid-col-3 mb--2 shadow--primary pxy--2">
        {/* 1 */}
        <Link
          to={`${devNavUrl}/admin/users`}
          onClick={() => {
            dispatch(setStartIndex(0));
          }}
          className="setting shadow--primary "
        >
          <FaUserCircle />
          <h4 className="t--bold my--1">Users</h4>
          <h5>Manage the system users.</h5>
        </Link>

        {/* 2 */}
        <Link
          to={`${devNavUrl}/admin/users`}
          onClick={() => {
            dispatch(setStartIndex(0));
          }}
          className="setting shadow--primary "
        >
          <FaNotesMedical />
          <h4 className="t--bold my--1">Recommended Program</h4>
          <h5>Manage the services being offered.</h5>
        </Link>

        {/* 3 */}
        <Link
          to={`${devNavUrl}/admin/users`}
          onClick={() => {
            dispatch(setStartIndex(0));
          }}
          className="setting shadow--primary "
        >
          <FaListAlt />
          <h4 className="t--bold my--1">Program Criteria</h4>
          <h5>Manage the services being offered.</h5>
        </Link>

        {/* 4 */}
        <Link
          to={`${devNavUrl}/admin/users`}
          onClick={() => {
            dispatch(setStartIndex(0));
          }}
          className="setting shadow--primary "
        >
          <MdCategory />
          <h4 className="t--bold mb--1">Category</h4>
          <h5>Manage the services being offered.</h5>
        </Link>

        {/* 5 */}
        <Link
          to={`${devNavUrl}/admin/users`}
          onClick={() => {
            dispatch(setStartIndex(0));
          }}
          className="setting shadow--primary "
        >
          <FaArchive />
          <h4 className="t--bold mb--1">Archived</h4>
          <h5>Manage the services being offered.</h5>
        </Link>

        {/* 6 */}
        <Link
          to={`${devNavUrl}/admin/users`}
          onClick={() => {
            dispatch(setStartIndex(0));
          }}
          className="setting shadow--primary "
        >
          <MdHomeWork />
          <h4 className="t--bold mb--1">Barangay Information</h4>
          <h5>Manage the services being offered.</h5>
        </Link>
      </div>
    </>
  );
};

export default SettingList;
