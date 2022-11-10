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
        <form onSubmit={(e) => handleSearch(e, search, url)}>
          <div className="input">
            <input
              type="text"
              ref={search}
              onChange={handleChange}
              placeholder="Search here.."
              className="search--bar"
            />
            {/* <label htmlFor="search">Search...</label> */}

            <button type="submit" className="icon--search">
              <ImSearch />
            </button>
          </div>
        </form>
        <p className={store.isSearch ? "mxy--2" : "d--none mxy--2"}>
          Result: {loading ? "Searching..." : !loading && result.length}
        </p>
      </div>
    </>
  );
};

export default SearchBox;
