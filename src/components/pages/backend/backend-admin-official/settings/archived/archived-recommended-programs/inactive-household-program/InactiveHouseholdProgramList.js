import React from "react";
import { FaHistory, FaTrash } from "react-icons/fa";
import { setIsRestore } from "../../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../../store/StoreContext";
import LoadMore from "../../../../../../../widgets/LoadMore";
import ModalDeleteRestore from "../../../../../../../widgets/ModalDeleteRestore";
import NoData from "../../../../../../../widgets/NoData";
import SearchBox from "../../../../../../../widgets/SearchBox";
import Spinner from "../../../../../../../widgets/Spinner";

const InactiveHouseholdProgramList = ({
  loading,
  handleLoad,
  totalResult,
  result,
  handleSearch,
  handleChange,
}) => {
  const search = React.useRef(null);
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  const [id, setId] = React.useState(null);

  let count = 0;

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.household_program_aid);
    setData(item);
    setDel(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsRestore(true));
    setId(item.household_program_aid);
    setData(item);
    setDel(true);
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
        url="/admin/admin-settings/household-program/read-search-inactive-household-program.php"
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
                    <td>{item.household_program_name}</td>
                    <td>{item.household_program_description}</td>
                    <td>{item.household_program_contact_person}</td>
                    <td>{item.household_program_contact_number}</td>
                    <td>{item.household_program_contact_email}</td>
                    <td>
                      <div className="d--flex justify-center">
                        <button
                          className="dropdown tooltip--table"
                          data-tooltip="Edit"
                          onClick={() => handleRestore(item)}
                        >
                          <span>
                            <FaHistory />
                          </span>
                        </button>
                        <button
                          className="dropdown tooltip--table"
                          data-tooltip="Archive"
                          onClick={() => handleDelete(item)}
                        >
                          <span>
                            <FaTrash />
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

      {store.isRestore && (
        <ModalDeleteRestore
          id={id}
          isDel={isDel}
          mysqlApiDelete="/admin/admin-settings/household-program/delete-household-program.php"
          mysqlApiRestore="/admin/admin-settings/household-program/restore-household-program.php"
          msg={
            isDel
              ? "Are you sure you want to permanently delete"
              : "Are you sure you want to restore"
          }
          item={dataItem.household_program_name}
        />
      )}
    </>
  );
};

export default InactiveHouseholdProgramList;
