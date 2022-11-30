import { Form, Formik } from "formik";
import React from "react";
import { FaArrowCircleRight, FaNotesMedical, FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import {
  setIsAdd,
  setStartIndex,
} from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import useLoadAllActivePopulationProgram from "../../../../../../custom-hooks/useLoadAllActivePopulationProgram";
import { fetchData } from "../../../../../../helpers/fetchData";
import { InputSelect, InputText } from "../../../../../../helpers/FormInputs";
import SpinnerButton from "../../../../../../widgets/SpinnerButton";

const ModalAddPopulationCriteria = ({ item }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const { activePopulationProgram, loadingPopulationProgram } =
    useLoadAllActivePopulationProgram(
      "/admin/admin-settings/population-program/read-all-active-population-program.php"
    );

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const initVal = {
    population_criteria_aid: item ? item.population_criteria_aid : "",
    population_criteria_program_id: item
      ? item.population_criteria_program_id
      : "",
    population_criteria_program_id_old: item
      ? item.population_criteria_program_id
      : "",
    population_criteria_range_from: item
      ? item.population_criteria_range_from
      : "",
    population_criteria_range_from_old: item
      ? item.population_criteria_range_from
      : "",
    population_criteria_range_to: item ? item.population_criteria_range_to : "",
    population_criteria_range_to_old: item
      ? item.population_criteria_range_to
      : "",
    population_criteria_category: "Population",
  };

  const yupSchema = Yup.object({
    population_criteria_program_id: Yup.string().required("Required"),
    population_criteria_range_from: Yup.string().required("Required"),
    population_criteria_range_to: Yup.string().required("Required"),
  });

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  });
  return (
    <>
      <div className="modal modal--front">
        <div className="display-center">
          <div className="modal-title-container">
            <h4 className="t--bold">{item ? "Update" : "Add"} criteria</h4>
            <button className="btn--close" onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          <div className="bg--white">
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                // console.log(values);
                fetchData(
                  setLoading,
                  item
                    ? "/admin/admin-settings/population-criteria/update-population-criteria.php"
                    : "/admin/admin-settings/population-criteria/create-population-criteria.php",
                  values, // form data values
                  null, // result set data
                  "", // success msg
                  "", // additional error msg if needed
                  dispatch, // context api action
                  store, // context api state
                  false, // boolean to show success modal
                  false // boolean to show load more functionality button
                );
                dispatch(setStartIndex(0));
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="input my--3">
                      <i className="icon--input">
                        <FaNotesMedical />
                      </i>
                      <InputSelect
                        placeholder="Program Name"
                        type="text"
                        name="population_criteria_program_id"
                        disabled={loading}
                      >
                        {loadingPopulationProgram ? (
                          <option value="">Loading...</option>
                        ) : (
                          <>
                            <option value="">Program Name</option>
                            {activePopulationProgram.length > 0 ? (
                              <>
                                {activePopulationProgram.map((item, key) => {
                                  return (
                                    <option
                                      key={key}
                                      value={item.population_program_aid}
                                    >
                                      {item.population_program_name}
                                    </option>
                                  );
                                })}
                              </>
                            ) : (
                              <option value="">No Data</option>
                            )}
                          </>
                        )}
                      </InputSelect>
                    </div>

                    <div className="input my--3">
                      <i className="icon--input">
                        <FaArrowCircleRight />
                      </i>
                      <InputText
                        placeholder="Members From"
                        type="number"
                        name="population_criteria_range_from"
                        disabled={loading}
                      />
                    </div>
                    <div className="input my--3">
                      <i className="icon--input">
                        <FaArrowCircleRight />
                      </i>
                      <InputText
                        placeholder="Members To"
                        type="number"
                        name="population_criteria_range_to"
                        disabled={loading}
                      />
                    </div>

                    <div className="input my--3">
                      <i className="icon--input">
                        <FaArrowCircleRight />
                      </i>
                      <InputText
                        placeholder="Income From"
                        type="number"
                        name="asd"
                        disabled={loading}
                      />
                    </div>
                    <div className="input my--3">
                      <i className="icon--input">
                        <FaArrowCircleRight />
                      </i>
                      <InputText
                        placeholder="Income To"
                        type="number"
                        name="asdd"
                        disabled={loading}
                      />
                    </div>

                    <div className="d--flex gap--1">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn--default d--flex align-center justify-center"
                      >
                        {loading ? (
                          <SpinnerButton />
                        ) : (
                          <span>{item ? "Save" : "Add"}</span>
                        )}
                      </button>
                      <button
                        type="reset"
                        className="btn--outline "
                        onClick={handleClose}
                      >
                        Cancel
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddPopulationCriteria;
