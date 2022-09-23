import React from "react";
import { ImSearch } from "react-icons/im";

const SearchBox = ({
  search,
  handleSearch,
  handleChange,
  loading,
  result,
  store,
  url,
}) => {
  return (
    <>
      <div className="mb--1">
        <form onChange={(e) => handleSearch(e, search, url)}>
          <div className="input">
            <input
              type="text"
              ref={search}
              onChange={handleChange}
              className="search--bar"
            />
            <label htmlFor="search">Search...</label>

            <i className="icon--input">
              <ImSearch />
            </i>
          </div>
        </form>
        <p className={store.isSearch ? "mxy--2" : "d--none mxy--2"}>
          Search Result: <span>{!loading && result.length}</span>
        </p>
      </div>
    </>
  );
};

export default SearchBox;
