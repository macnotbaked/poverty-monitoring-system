import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArchive, FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setIsConfirm } from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import { devNavUrl } from "../../../../../helpers/functions-general";
import LoadMore from "../../../../../widgets/LoadMore";
import ModalConfirm from "../../../../../widgets/ModalConfirm";
import NoData from "../../../../../widgets/NoData";
import SearchBox from "../../../../../widgets/SearchBox";
import Spinner from "../../../../../widgets/Spinner";

const CitizenList = ({
  loading,
  handleLoad,
  totalResult,
  result,
  handleSearch,
  handleChange,
  purokId,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const search = React.useRef(null);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);

  let count = 0;

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.representative_aid);
    setDel(null);
    setData(item);
  };

  // // console.log(result);

  return (
    <>
      <SearchBox
        search={search}
        handleSearch={handleSearch}
        handleChange={handleChange}
        loading={loading}
        result={result}
        store={store}
        url="/admin/admin-representative/read-representative-search-active.php"
      />

      <div className="table__container">
        {loading && <Spinner />}
        <table>
          <thead className="">
            <tr>
              <th>#</th>
              <th>Household Number</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {result.length > 0 ? (
              result.map((item, key) => {
                count += 1;
                return (
                  <tr key={key}>
                    <td data-label="#">{count}.</td>
                    <td data-label="House Number">
                      House #{Number(item.representative_house_number)}
                    </td>
                    <td data-label="Representative Name">
                      {item.representative_name}
                    </td>
                    <td data-label="Contact">{item.representative_contact}</td>
                    <td data-label="Action">
                      <div className="d--flex">
                        <Link
                          to={`${devNavUrl}/purok/household-view?hid=${item.representative_aid}`}
                          className="dropdown tooltip--table"
                          data-tooltip="View"
                        >
                          <span>
                            <FaEye />
                          </span>
                        </Link>

                        <div className="dropdown">
                          <span>
                            <BsThreeDotsVertical />
                          </span>
                          <div className="dropdown-content">
                            <Link
                              to={`${devNavUrl}/purok/household-edit?hid=${item.representative_aid}`}
                              className="tooltip--table"
                              data-tooltip="View"
                            >
                              <span>
                                <FaEdit /> Edit
                              </span>
                            </Link>
                            <button onClick={() => handleArchive(item)}>
                              <FaArchive /> Archive
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="nodata">
                <td colSpan="100%">
                  <NoData />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {store.isConfirm && (
        <ModalConfirm
          id={id}
          isDel={isDel}
          mysqlApiArchive={
            "/admin/admin-representative/archive-representative.php"
          }
          msg={"Are you sure you want to archive"}
          item={`House # ${dataItem.representative_house_number} "${dataItem.representative_name}"`}
        />
      )}

      <div className="mt--2 t--center row">
        {!store.isSearch && (
          <LoadMore
            handleLoad={handleLoad}
            loading={loading}
            result={result}
            totalResult={totalResult}
          />
        )}
      </div>
    </>
  );
};

export default CitizenList;
