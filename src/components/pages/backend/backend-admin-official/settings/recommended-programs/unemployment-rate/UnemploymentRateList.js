import React from "react";
import { FaArchive, FaEdit } from "react-icons/fa";
import { setIsAdd, setIsConfirm } from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import LoadMore from "../../../../../../widgets/LoadMore";
import ModalConfirm from "../../../../../../widgets/ModalConfirm";
import NoData from "../../../../../../widgets/NoData";
import SearchBox from "../../../../../../widgets/SearchBox";
import Spinner from "../../../../../../widgets/Spinner";

const UnemploymentRateList = ({
  loading,
  handleLoad,
  totalResult,
  result,
  handleSearch,
  handleChange,
  setItemEdit,
}) => {
  const search = React.useRef(null);
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  const [id, setId] = React.useState(null);

  let count = 0;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.unemployment_program_aid);
    setDel(null);
    setData(item);
  };
  return (
    <>
      <SearchBox
        search={search}
        handleSearch={handleSearch}
        handleChange={handleChange}
        loading={loading}
        result={result}
        store={store}
        url="/admin/admin-settings/unemployment-program/read-search-active-unemployment-program.php"
      />
      <div className="table__container">
        {loading && <Spinner />}
        <table>
          <thead className="">
            <tr>
              <th className="" rowSpan="1">
                #
              </th>
              <th className="row--name" rowSpan="1">
                Name
              </th>
              <th rowSpan="1">Description</th>
              <th rowSpan="1">Contact Person</th>
              <th rowSpan="1">Contact Number</th>
              <th rowSpan="1">Email</th>
              <th rowSpan="1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {result.length > 0 ? (
              result.map((item, key) => {
                count += 1;
                return (
                  <tr key={key}>
                    <td>{count}.</td>
                    <td>{item.unemployment_program_name}</td>
                    <td>{item.unemployment_program_description}</td>
                    <td>{item.unemployment_program_contact_person}</td>
                    <td>{item.unemployment_program_contact_number}</td>
                    <td>{item.unemployment_program_contact_email}</td>
                    <td>
                      <div className="d--flex">
                        <button
                          className="dropdown tooltip--table"
                          data-tooltip="Edit"
                          onClick={() => handleEdit(item)}
                        >
                          <span>
                            <FaEdit />
                          </span>
                        </button>
                        <button
                          className="dropdown tooltip--table"
                          data-tooltip="Archive"
                          onClick={() => handleArchive(item)}
                        >
                          <span>
                            <FaArchive />
                          </span>
                        </button>
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
      </div>

      {store.isConfirm && (
        <ModalConfirm
          id={id}
          isDel={isDel}
          mysqlApiArchive={
            "/admin/admin-settings/unemployment-program/archive-unemployment-program.php"
          }
          msg={"Are you sure you want to archive this"}
          item={`"${dataItem.unemployment_program_name}"`}
        />
      )}
    </>
  );
};

export default UnemploymentRateList;
