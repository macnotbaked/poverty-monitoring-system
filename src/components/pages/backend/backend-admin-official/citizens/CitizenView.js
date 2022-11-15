import { Form, Formik } from "formik";
import React from "react";
import { FaPrint } from "react-icons/fa";
import * as Yup from "yup";
import { StoreContext } from "../../../../../store/StoreContext";
import Header from "../../../../header/Header";
import { InputSelect, InputText } from "../../../../helpers/FormInputs";
import { getUrlParam } from "../../../../helpers/functions-general";
import Navigation from "../../../../navigation/Navigation";
import Back from "../../../../widgets/Back";
import SpinnerButton from "../../../../widgets/SpinnerButton";

const CitizenView = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const sitioId = getUrlParam().get("sid");

  const initVal = {};

  const yupSchema = Yup.object({});
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
                  Purok 1: <span className="color--primary">Household 001</span>
                </h3>
                <div className="content__button">
                  <button
                    className="btn--primary"
                    onClick={() => window.print()}
                  >
                    <FaPrint /> <span>Print</span>
                  </button>
                  <Back />
                </div>
              </div>

              <div className="form__container ">
                <div className="to_print">
                  <div className="t--right">
                    <i>Conducted by: Meirejoy Maralit</i>
                  </div>
                  <h2 className="t--center mb--3">
                    <span className="t--bold">Santa Elena</span> <br /> City of
                    San Pablo <br /> Province of Laguna
                  </h2>
                  <div className="input--form mb--5">
                    <label>Household representative:</label>
                    <h3 className="mt--2">Mark Ryan Merin</h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      1. Ilan ang mga taong naninirahan sa bahay na ito? (How
                      many people were living or staying in this house?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">2</h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      2. Ilan ang bilang ng mga batang 5 taong gulang pababa?
                      (How many children are there under the age of 5?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">0</h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      3. Ilan ang bilang ng mga 6 hanggang 18 taong gulang? (How
                      many are 6- to 18-year-olds?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">0</h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      4. Ilan ang mga nag-aaral ng elementarya? ( How many are
                      in elementary school?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">2</h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      5. Ilan ang mga nag-aaral ng highschool? (How many are in
                      high school students?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">2</h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      6. Ilan ang mga nag-aaral sa kolehiyo? (How many are
                      studying in college?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">0</h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      7. Ilan ang bilang ng mga nasa edad na 19 na taong gulang
                      pataas? (How many are aged 19 and over?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">2</h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      8. Ilan ang bilang ng mga nakakatanda na nasa 60 na taong
                      gulang pataas? (How many seniors are there who are 60
                      years old and older?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">0</h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      9. Kayo ba ay nasa inyong sariling bahay, nangungupahan o
                      nakikitara? (Are you living in your own house, renting, or
                      living with relatives?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      Nangungupahan (Renting)
                    </h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      10. Magkano ang halaga ng buwanang kita ng inyong pamilya?
                      (How much is your family's monthly income?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      10,000 Php - 20,000 Php
                    </h3>
                  </div>

                  <div className="input--form mb--5">
                    <label>
                      11. Halaga na nagagastos para sa buwanang bayarin?
                      (Kuryente at tubig, gastusin pang edukasyon, at iba pa.)
                      (Amount spent on monthly fees, i.e., Water and Eletricity
                      Bills, Educational expenses, and other utilities.)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      10,000 Php - 20,000 Php
                    </h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      12. Magkano ang halaga ang inyong nagagastos para sa pang
                      araw araw na pagkain sa loob ng isang Buwan? (How much was
                      spent on food per day for a month?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      10,000 Php - 20,000 Php
                    </h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      13. Ilang ang bilang ng miyembro ng pamilya na may
                      kakayahan na magtrabaho? (How many family members are able
                      to work?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">2</h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      14. Ilan sa miyembro ng pamilya ang may kasalukuyang
                      hanapbuhay? (How many family members are currently
                      employed?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">2</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CitizenView;
