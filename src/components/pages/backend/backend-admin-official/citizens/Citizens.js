import React from "react";
import { AiFillPlusCircle, AiOutlinePlus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { devNavUrl, getUrlParam } from "../../../../helpers/functions-general";
import Navigation from "../../../../navigation/Navigation";
import CitizensList from "./CitizensList";

const Citizens = () => {
  const sitioId = getUrlParam().get("sid");

  return (
    <>
      <Navigation menu="citizens" />
      <div className="main-content">
        <div className="container">
          <div className="title">
            <div className="row">
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="tab-title color--primary">All Citizens</span>
                {/* <Link
                  className="btn float--right "
                  to={`${devNavUrl}/admin/citizen-add?sid=${sitioId}`}
                >
                  <AiFillPlusCircle /> <span>Add</span>
                </Link> */}
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="content-block bg-highlight ">
              <div className="tab">
                <CitizensList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Citizens;
