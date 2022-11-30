import React from "react";
import SpinnerButton from "./SpinnerButton";

const LoadMore = ({ handleLoad, loading, totalResult, result }) => {
  if (totalResult === result.length && totalResult > 0 && result.length > 0) {
    return <div className="loadmore_container mb--2">End of list.</div>;
  }

  if (result.length > 0) {
    return (
      <>
        <div className="loadmore_container mb--2">
          <button
            className="cssbuttons-io-button"
            onClick={handleLoad}
            disabled={loading}
          >
            Load more
            <div className="icon">
              {loading ? (
                <SpinnerButton />
              ) : (
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              )}
            </div>
          </button>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default LoadMore;
