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
            className="btn--loadmore mb--20"
            onClick={handleLoad}
            disabled={loading}
          >
            {loading && <SpinnerButton />} Load more
          </button>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default LoadMore;
