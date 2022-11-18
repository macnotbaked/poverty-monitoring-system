import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { setIsSearch, setSave, setStartIndex } from "../../store/StoreAction";

const SearchBox = ({
  search,
  handleSearch,
  handleChange,
  loading,
  result,
  store,
  dispatch,
  url,
}) => {
  const handleClear = () => {
    dispatch(setIsSearch(false));
    dispatch(setStartIndex(0));
  };
  return (
    <>
      <div className="mb--1">
        <form onSubmit={(e) => handleSearch(e, search, url)}>
          <div className="input">
            <input
              type="search"
              ref={search}
              onChange={handleChange}
              placeholder="Search here.."
              className="search--bar"
            />
            <button type="submit" className="icon--search">
              <FaSearch />
            </button>
          </div>
        </form>
        <p
          className={
            store.isSearch ? "mt--1 mb--1 ml--2" : "d--none mt--1 mb--1 ml--2"
          }
        >
          Result: {loading ? "Searching..." : !loading && result.length}
        </p>
      </div>
    </>
  );
};

export default SearchBox;
