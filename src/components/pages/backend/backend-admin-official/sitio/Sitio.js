import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";
import Navigation from "../../../../navigation/Navigation";
import SitioList from "./SitioList";

const Sitio = () => {
  return (
    <>
      <Navigation menu="sitio" />
      <div className="main-content">
        <div className="container">
          <div className="title">
            <div className="row">
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="tab-title">Sitio</span>
                <button className="btn float--right ">
                  <AiFillPlusCircle /> <span>Add</span>
                </button>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="content-block bg--highlight ">
              <div className="tab">
                <SitioList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitio;
