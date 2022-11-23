import { Form, Formik } from "formik";
import React from "react";
import { FaCamera, FaUserCircle } from "react-icons/fa";
import { StoreContext } from "../../../../../../store/StoreContext";
import useLoadAll from "../../../../../custom-hooks/useLoadAll";
import useUploadPhoto from "../../../../../custom-hooks/useUploadPhoto";
import Header from "../../../../../header/Header";
import { fetchData } from "../../../../../helpers/fetchData";
import { InputFileUpload, InputText } from "../../../../../helpers/FormInputs";
import { devBaseUrl } from "../../../../../helpers/functions-general";
import Navigation from "../../../../../navigation/Navigation";
import Back from "../../../../../widgets/Back";
import ModalError from "../../../../../widgets/ModalError";
import ModalSuccess from "../../../../../widgets/ModalSuccess";
import SpinnerButton from "../../../../../widgets/SpinnerButton";
import BarangayInfoDetails from "./BarangayInfoDetails";
import BarangayInfoList from "./BarangayInfoList";

const BarangayInfo = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const { result } = useLoadAll(
    "/admin/admin-settings/barangay-info/read-barangay.php"
  );

  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="settings" />
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="content__header">
                <h3 className="t--bold py--2">Barangay Information</h3>
                <div className="content__button">
                  <Back />
                </div>
              </div>

              {result.length > 0 ? (
                <BarangayInfoList result={result} />
              ) : (
                <BarangayInfoDetails />
              )}
            </div>
          </div>
        </div>
      </div>

      {store.error && <ModalError />}
      {store.success && <ModalSuccess />}
    </>
  );
};

export default BarangayInfo;
