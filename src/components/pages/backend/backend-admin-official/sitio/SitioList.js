import React from "react";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setIsAdd, setIsConfirm } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { devNavUrl } from "../../../../helpers/functions-general";
import LoadMore from "../../../../widgets/LoadMore";
import ModalConfirm from "../../../../widgets/ModalConfirm";
import NoData from "../../../../widgets/NoData";
import SearchBox from "../../../../widgets/SearchBox";
import Spinner from "../../../../widgets/Spinner";

const SitioList = ({
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
  const [isSus, setSus] = React.useState(false);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  let count = 0;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.sitio_aid);
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
        url="/admin/admin-sitio/read-sitio-search.php"
      />
      <div className="mb--2">
        <h3 className="t--bold mb--1">Baranggay San Mateo</h3>
        {loading && <Spinner />}
        <table id="" className="" cellSpacing="0" width="100%">
          <thead className="">
            <tr>
              <th className="" rowSpan="1">
                #
              </th>
              <th className="row--name" rowSpan="1" style={{ width: "15rem" }}>
                Name
              </th>
              <th rowSpan="1">Total Population</th>
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
                    <td>{item.sitio_name}</td>
                    <td>{100}</td>
                    <td>
                      <Link
                        to={`${devNavUrl}/admin/citizen?sid=${item.sitio_aid}`}
                        className="dropdown tooltip--view"
                      >
                        <span>
                          <AiFillEye />
                        </span>
                      </Link>

                      <div className="dropdown">
                        <span>
                          <BsThreeDotsVertical />
                        </span>
                        <div className="dropdown-content">
                          <button onClick={() => handleEdit(item)}>
                            <AiFillEdit /> Edit
                          </button>
                          <button onClick={() => handleDelete(item)}>
                            <FaTrashAlt /> Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="100%">
                  <NoData />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="t--center row">
        {!store.isSearch && (
          <LoadMore
            handleLoad={handleLoad}
            loading={loading}
            result={result}
            totalResult={totalResult}
          />
        )}
      </div>

      {store.isConfirm && (
        <ModalConfirm
          id={id}
          isDel={isDel}
          mysqlApiDelete={"/admin/admin-sitio/delete-sitio.php"}
          msg={"Are you sure you want to delete this"}
          item={`"${dataItem.sitio_name}"`}
        />
      )}
    </>
  );
};

export default SitioList;
