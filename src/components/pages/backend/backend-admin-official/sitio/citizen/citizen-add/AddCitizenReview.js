import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { setPageNum } from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import useLoadAllActivePurok from "../../../../../../custom-hooks/useLoadAllActivePurok";
import useLoadAllEvaluationList from "../../../../../../custom-hooks/useLoadAllEvaluationList";
import Header from "../../../../../../header/Header";
import { fetchData } from "../../../../../../helpers/fetchData";
import { InputSelect, InputText } from "../../../../../../helpers/FormInputs";
import { getUrlParam } from "../../../../../../helpers/functions-general";
import Navigation from "../../../../../../navigation/Navigation";
import Back from "../../../../../../widgets/Back";
import Spinner from "../../../../../../widgets/Spinner";
import SpinnerButton from "../../../../../../widgets/SpinnerButton";

const AddCitizenReview = ({
  evaluationList,
  loadingevaluationList,
  loadingActivePurok,
  activePurok,
  purokId,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const initVal = {
    representative_aid: store.evaluationPreview.representative_aid,
    representative_eval_id: store.evaluationPreview.representative_eval_id,
    representative_purok_id: store.evaluationPreview.representative_purok_id,
    representative_is_active: store.evaluationPreview.representative_is_active,
    representative_name: store.evaluationPreview.representative_name,
    representative_contact: store.evaluationPreview.representative_contact,
    representative_house_number:
      store.evaluationPreview.representative_house_number,
    representative_total_people:
      store.evaluationPreview.representative_total_people,
    representative_total_underage:
      store.evaluationPreview.representative_total_underage,
    representative_total_midage:
      store.evaluationPreview.representative_total_midage,
    representative_total_adult:
      store.evaluationPreview.representative_total_adult,
    representative_total_pwd: store.evaluationPreview.representative_total_pwd,
    representative_total_elem:
      store.evaluationPreview.representative_total_elem,
    representative_total_highschool:
      store.evaluationPreview.representative_total_highschool,
    representative_total_college:
      store.evaluationPreview.representative_total_college,
    representative_household_living_id:
      store.evaluationPreview.representative_household_living_id,
    representative_monthly_income_id:
      store.evaluationPreview.representative_monthly_income_id,
    representative_bill_expenses_id:
      store.evaluationPreview.representative_bill_expenses_id,
    representative_food_expenses_id:
      store.evaluationPreview.representative_food_expenses_id,
    representative_total_able_work:
      store.evaluationPreview.representative_total_able_work,
    representative_total_employed:
      store.evaluationPreview.representative_total_employed,
  };

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
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      const data = {
                        ...store.basicInfo,
                        ...values,
                      };
                      fetchData(
                        setLoading,
                        "/admin/admin-representative/create-representative.php",
                        data, // form data values
                        null, // result set data
                        "", // success msg
                        "", // additional error msg if needed
                        dispatch, // context api action
                        store, // context api state
                        false, // boolean to show success modal
                        false // boolean to show load more functionality button
                      );
                    }}
                  >
                    {(props) => {
                      return (
                        <Form>
                          <div className="input--form mb--5">
                            <label htmlFor="">Household Representative:</label>
                            <InputText
                              disabled
                              type="text"
                              name="trainee_email"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">Contact Number:</label>
                            <InputText
                              disabled
                              type="text"
                              name="trainee_email"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">Household Number:</label>
                            <InputText
                              disabled
                              type="text"
                              name="trainee_email"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              1. Ilan ang mga taong naninirahan sa bahay na ito?
                              (How many people were living or staying in this
                              house?)
                            </label>
                            <InputText
                              disabled
                              type="number"
                              name="trainee_email"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              2. Ilan ang bilang ng mga batang 5 taong gulang
                              pababa? (How many children are there under the age
                              of 5?)
                            </label>
                            <InputText
                              disabled
                              type="number"
                              name="trainee_fname"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              3. Ilan ang bilang ng mga 6 hanggang 18 taong
                              gulang? (How many are 6- to 18-year-olds?)
                            </label>
                            <InputText
                              disabled
                              type="number"
                              name="trainee_mname"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              4. Ilan ang bilang ng mga nasa edad 19 hanggang 59
                              na taong gulang? (How many are 19 to 59 years
                              old?)
                            </label>
                            <InputText
                              disabled
                              type="number"
                              name="trainee_birth_place"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              5. Ilan ang bilang ng mga nakakatanda na nasa 60
                              na taong gulang pataas? (How many seniors are
                              there who are 60 years old and older?)
                            </label>
                            <InputText
                              disabled
                              type="number"
                              name="trainee_address"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              6. Ilan ang bilang sa miyembro ng pamilya ang may
                              kapansanan? (How many in your family have person
                              with disability?)
                            </label>
                            <InputText
                              disabled
                              type="number"
                              name="trainee_address"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              7. Ilan ang mga nag-aaral ng elementarya? ( How
                              many are in elementary school?)
                            </label>
                            <InputText
                              disabled
                              type="number"
                              name="trainee_lname"
                            />
                          </div>

                          <div className="input--form mb--5">
                            <label htmlFor="">
                              8. Ilan ang mga nag-aaral ng highschool? (How many
                              are in high school students?)
                            </label>
                            <InputText
                              disabled
                              type="number"
                              name="trainee_birth_date"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              9. Ilan ang mga nag-aaral sa kolehiyo? (How many
                              are studying in college?)
                            </label>
                            <InputText
                              disabled
                              type="number"
                              name="trainee_birth_place"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              10. Kayo ba ay nasa inyong sariling bahay,
                              nangungupahan o nakikitara? (Are you living in
                              your own house, renting, or living with
                              relatives?)
                            </label>
                            <InputSelect disabled name="trainee_gender">
                              <option value="">--</option>
                              <option value="owner">Sariling bahay</option>
                              <option value="renting">Nangungupahan</option>
                              <option value="living_with">Nakikitara</option>
                            </InputSelect>
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              11. Magkano ang halaga ng buwanang kita ng inyong
                              pamilya? (How much is your family's monthly
                              income?)
                            </label>
                            <InputSelect disabled name="trainee_gender">
                              <option value="">--</option>
                              <option value="owner">5,000 - 10,000</option>
                              <option value="renting">10,000 - 20,000</option>
                              <option value="living_with">20,000 - more</option>
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
                            <InputSelect disabled name="trainee_gender">
                              <option value="">--</option>
                              <option value="owner">5,000 - 10,000</option>
                              <option value="renting">10,000 - 20,000</option>
                              <option value="living_with">20,000 - more</option>
                            </InputSelect>
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              13. Magkano ang halaga ng inyong nagagastos para
                              sa pang araw araw na pagkain sa loob ng isang
                              Buwan? (How much was spent on daily consumption of
                              food for a month?)
                            </label>
                            <InputSelect disabled name="trainee_gender">
                              <option value="">--</option>
                              <option value="owner">5,000 - 10,000</option>
                              <option value="renting">10,000 - 20,000</option>
                              <option value="living_with">20,000 - more</option>
                            </InputSelect>
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              14. Ilang ang bilang sa miyembro ng pamilya ang
                              may kakayahan na magtrabaho? (How many family
                              members are able to work?)
                            </label>
                            <InputText
                              disabled
                              type="number"
                              name="trainee_guardian_contact"
                            />
                          </div>
                          <div className="input--form mb--5">
                            <label htmlFor="">
                              15. Ilan sa miyembro ng pamilya ang may trabaho o
                              kasalukuyang may hanapbuhay? (How many family
                              members are employed or currently earning?)
                            </label>
                            <InputText
                              disabled
                              type="number"
                              name="trainee_guardian_contact"
                            />
                          </div>
                          <div className="d--flex gap--1">
                            <button
                              className="btn--secondary btn__container"
                              type="button"
                              disabled={loading}
                              onClick={() => {
                                dispatch(setPageNum(store.pageNum - 1));
                              }}
                            >
                              {loading ? (
                                <SpinnerButton />
                              ) : (
                                <span>Previous</span>
                              )}
                            </button>
                            <button
                              className="btn--primary btn__container"
                              type="submit"
                              disabled={loading}
                            >
                              {loading ? (
                                <SpinnerButton />
                              ) : (
                                <span>Submit</span>
                              )}
                            </button>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                ) : (
                  <h3>Evaluation has not yet begun.</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCitizenReview;
