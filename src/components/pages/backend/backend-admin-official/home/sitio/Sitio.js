import React from "react";
import { HiFilter } from "react-icons/hi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { devNavUrl } from "../../../../../helpers/functions-general";
import Navigation from "../../../../../navigation/Navigation";
import SitioList from "./SitioList";

const Sitio = () => {
  return (
    <>
      <Navigation menu="home" />
      <div className="main-content">
        <div className="container">
          <div className="title">
            <div className="row">
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="t--bold mb--1">
                  Baranggay San Marcos{": "}
                  <span className="tab-title color--accent">Sitio 1</span>
                </span>

                <Link
                  className="btn float--right "
                  to={`${devNavUrl}/admin/home`}
                >
                  <IoMdArrowRoundBack /> <span>Back</span>
                </Link>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="content-block bg-highlight ">
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
