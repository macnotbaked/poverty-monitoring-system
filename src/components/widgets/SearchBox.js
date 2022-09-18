import React from "react";
import { ImSearch } from "react-icons/im";

const SearchBox = (
  {
    // search,
    // handleSearch,
    // handleChange,
    // loading,
    // result,
    // store,
    // url,
  }
) => {
  return (
    <div className="mb--1">
      <form>
        <div className="input">
          <input className="search--bar" type="text" />
          <label htmlFor="">Search...</label>
          <i className="icon--input">
            <ImSearch />
          </i>
        </div>
      </form>
      {/* <p style={{ margin: "1rem 1.5rem" }}>
        Search Result: <span>{"1"}</span>
      </p> */}
    </div>
    // <div className="row">
    //   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb--10">
    //     <div className="search-bar mt--15">
    //       <form onSubmit={(e) => handleSearch(e, search, url)}>
    //         <input
    //           type="text"
    //           ref={search}
    //           placeholder="Search"
    //           onChange={handleChange}
    //           className="block"
    //         />

    //         <button className="" type="submit" value="SEARCH">
    //           <ImSearch />
    //         </button>
    //       </form>
    //       <p
    //         className={
    //           store.isSearch
    //             ? "searchresult mxy--15"
    //             : "searchresult invisible mxy--15"
    //         }
    //       >
    //         Search Result: <span>{!loading && result.length}</span>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SearchBox;
