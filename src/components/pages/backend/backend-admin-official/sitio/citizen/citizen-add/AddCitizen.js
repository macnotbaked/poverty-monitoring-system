import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  setIsEvaluated,
  setPageNum,
  setStartIndex,
  setSubmitEval,
} from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import useLoadAllActivePurok from "../../../../../../custom-hooks/useLoadAllActivePurok";
import useLoadAllEvaluationList from "../../../../../../custom-hooks/useLoadAllEvaluationList";
import Header from "../../../../../../header/Header";
import { fetchData } from "../../../../../../helpers/fetchData";
import { InputSelect, InputText } from "../../../../../../helpers/FormInputs";
import {
  getUrlParam,
  loadEvaluationPreview,
} from "../../../../../../helpers/functions-general";
import Navigation from "../../../../../../navigation/Navigation";
import Back from "../../../../../../widgets/Back";
import ModalError from "../../../../../../widgets/ModalError";
import ModalSuccess from "../../../../../../widgets/ModalSuccess";
import NoData from "../../../../../../widgets/NoData";
import Spinner from "../../../../../../widgets/Spinner";
import SpinnerButton from "../../../../../../widgets/SpinnerButton";

const AddCitizen = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const purokId = getUrlParam().get("sid");

  const { loadingActivePurok, activePurok } = useLoadAllActivePurok(
    "/admin/admin-sitio/read-sitio-by-id.php",
    purokId
  );

  const { evaluationList, loadingevaluationList } = useLoadAllEvaluationList(
    "/admin/admin-evaluation/enable-evaluation/read-enable-evaluation.php",
    "isEvalEnabled"
  );

  const initVal = {
    representative_aid: "",
    representative_eval_id:
      evaluationList.length && evaluationList[0].evaluation_list_aid,
    representative_purok_id: activePurok.length && activePurok[0].sitio_aid,
    representative_is_active: "",
    representative_name: "",
    representative_contact: "",
    representative_house_number: "",
    representative_total_people: "",
    representative_total_underage: "",
    representative_total_midage: "",
    representative_total_adult: "",
    representative_total_seniors: "",
    representative_total_pwd: "",
    representative_total_elem: "",
    representative_total_highschool: "",
    representative_total_college: "",
    representative_household_living_id: "",
    representative_monthly_income_id: "",
    representative_bill_expenses_id: "",
    representative_food_expenses_id: "",
    representative_total_able_work: "",
    representative_total_employed: "",
  };

  const yupSchema = Yup.object({
    // representative_name: Yup.string().required("Required"),
    // representative_contact: Yup.string().required("Required"),
    // representative_house_number: Yup.string().required("Required"),
    // representative_total_people: Yup.string().required("Required"),
    // representative_total_underage: Yup.string().required("Required"),
    // representative_total_midage: Yup.string().required("Required"),
    // representative_total_adult: Yup.string().required("Required"),
    // representative_total_seniors: Yup.string().required("Required"),
    // representative_total_pwd: Yup.string().required("Required"),
    // representative_total_elem: Yup.string().required("Required"),
    // representative_total_highschool: Yup.string().required("Required"),
    // representative_total_college: Yup.string().required("Required"),
    // representative_household_living_id: Yup.string().required("Required"),
    // representative_monthly_income_id: Yup.string().required("Required"),
    // representative_bill_expenses_id: Yup.string().required("Required"),
    // representative_food_expenses_id: Yup.string().required("Required"),
    // representative_total_able_work: Yup.string().required("Required"),
    // representative_total_employed: Yup.string().required("Required"),
  });

  React.useEffect(() => {
    dispatch(setSubmitEval(false));
  }, []);

  return (
    <>
      <div className={store.isActive ? "main-content show" : "main-content"}>
        <Header />
        <Navigation menu="sitio" />
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="content__header">
                <h3 className="t--bold py--2">
                  {activePurok.length > 0
                    ? activePurok[0].sitio_name
                    : "Loading..."}
                </h3>
                <div className="content__button">
                  <Back />
                </div>
              </div>

              <div className="form__container">
                {loadingevaluationList && <Spinner />}

                {evaluationList.length > 0 ? (
                  <Formik
                    initialValues={initVal}
                    validationSchema={yupSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      fetchData(
                        setLoading,
                        "/admin/admin-representative/create-representative.php",
                        values, // form data values
                        null, // result set data
                        "Succesfully evaluated.", // success msg
                        "", // additional error msg if needed
                        dispatch, // context api action
                        store, // context api state
                        true, // boolean to show success modal
                        false // boolean to show load more functionality button
                      );
                      dispatch(setStartIndex(0));
                    }}
                  >
                    {(props) => {
                      return (
                        <Form>
                          <div className="input--form mb--5">
                            <label htmlFor="">Household Representative:</label>
                            <InputText type="text" name="representative_name" />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">Contact Number:</label>
                            <InputText
                              type="text"
                              name="representative_contact"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">Household Number:</label>
                            <InputText
                              type="text"
                              name="representative_house_number"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              1. Ilan ang mga taong naninirahan sa bahay na ito?
                              (How many people were living or staying in this
                              house?)
                            </label>
                            <InputText
                              type="number"
                              name="representative_total_people"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              2. Ilan ang bilang ng mga batang 5 taong gulang
                              pababa? (How many children are there under the age
                              of 5?)
                            </label>
                            <InputText
                              type="number"
                              name="representative_total_underage"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              3. Ilan ang bilang ng mga 6 hanggang 18 taong
                              gulang? (How many are 6 to 18 years old?)
                            </label>
                            <InputText
                              type="number"
                              name="representative_total_midage"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              4. Ilan ang bilang ng mga nasa edad 19 hanggang 59
                              na taong gulang? (How many are 19 to 59 years
                              old?)
                            </label>
                            <InputText
                              type="number"
                              name="representative_total_adult"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              5. Ilan ang bilang ng mga nakakatanda na nasa 60
                              na taong gulang pataas? (How many seniors are
                              there who are 60 years old and older?)
                            </label>
                            <InputText
                              type="number"
                              name="representative_total_seniors"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              6. Ilan ang bilang sa miyembro ng pamilya ang may
                              kapansanan? (How many in your family have person
                              with disability?)
                            </label>
                            <InputText
                              type="number"
                              name="representative_total_pwd"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              7. Ilan ang mga nag-aaral ng elementarya? ( How
                              many are in elementary school?)
                            </label>
                            <InputText
                              type="number"
                              name="representative_total_elem"
                            />
                          </div>

                          <div className="input--form mb--5">
                            <label htmlFor="">
                              8. Ilan ang mga nag-aaral ng highschool? (How many
                              are in high school students?)
                            </label>
                            <InputText
                              type="number"
                              name="representative_total_highschool"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              9. Ilan ang mga nag-aaral sa kolehiyo? (How many
                              are studying in college?)
                            </label>
                            <InputText
                              type="number"
                              name="representative_total_college"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              10. Kayo ba ay nasa inyong sariling bahay,
                              nangungupahan o nakikitara? (Are you living in
                              your own house, renting, or living with
                              relatives?)
                            </label>
                            <InputSelect name="representative_household_living_id">
                              <option value="">--</option>
                              <option value="1">Sariling bahay</option>
                              <option value="2">Nangungupahan</option>
                              <option value="3">Nakikitara</option>
                            </InputSelect>
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              11. Magkano ang halaga ng buwanang kita ng inyong
                              pamilya? (How much is your family's monthly
                              income?)
                            </label>
                            <InputSelect name="representative_monthly_income_id">
                              <option value="">--</option>
                              <option value="1">5,000 - 10,000</option>
                              <option value="2">10,000 - 20,000</option>
                              <option value="3">20,000 - more</option>
                            </InputSelect>
                          </div>

                          <div className="input--form mb--5">
                            <label htmlFor="">
                              12. Halaga na nagagastos para sa buwanang bayarin?
                              (Kuryente at tubig, gastusin pang edukasyon, at
                              iba pa.) (Amount spent on monthly fees, i.e.,
                              Water and Eletricity Bills, Educational expenses,
                              and other utilities.)
                            </label>
                            <InputSelect name="representative_bill_expenses_id">
                              <option value="">--</option>
                              <option value="1">5,000 - 10,000</option>
                              <option value="2">10,000 - 20,000</option>
                              <option value="3">20,000 - more</option>
                            </InputSelect>
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              13. Magkano ang halaga ng inyong nagagastos para
                              sa pang araw araw na pagkain sa loob ng isang
                              Buwan? (How much was spent on daily consumption of
                              food for a month?)
                            </label>
                            <InputSelect name="representative_food_expenses_id">
                              <option value="">--</option>
                              <option value="1">5,000 - 10,000</option>
                              <option value="2">10,000 - 20,000</option>
                              <option value="3">20,000 - more</option>
                            </InputSelect>
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              14. Ilang ang bilang sa miyembro ng pamilya ang
                              may kakayahan na magtrabaho? (How many family
                              members are able to work?)
                            </label>
                            <InputText
                              type="number"
                              name="representative_total_able_work"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              15. Ilan sa miyembro ng pamilya ang may trabaho o
                              kasalukuyang may hanapbuhay? (How many family
                              members are employed or currently earning?)
                            </label>
                            <InputText
                              type="number"
                              name="representative_total_employed"
                            />
                          </div>
                          <button
                            className="btn--default m-left btn__container"
                            type="submit"
                            disabled={loading}
                          >
                            {loading ? <SpinnerButton /> : <span>Submit</span>}
                          </button>
                        </Form>
                      );
                    }}
                  </Formik>
                ) : (
                  <>
                    <h3>
                      Sorry this page is not available due to the restriction
                      from the administrators. To be able to access this page
                      you may request consent or wait for its availability.
                      Thank you!
                    </h3>
                    <NoData />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.error && <ModalError />}
      {store.success && <ModalSuccess />}
    </>
  );
};

export default AddCitizen;
