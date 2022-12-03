import React from "react";
import { FaPrint } from "react-icons/fa";
import { StoreContext } from "../../../../../store/StoreContext";
import useLoadAllActiveRepresentative from "../../../../custom-hooks/useLoadAllActiveRepresentative";
import Header from "../../../../header/Header";
import {
  getUrlParam,
  numberWithCommas,
} from "../../../../helpers/functions-general";
import Navigation from "../../../../navigation/Navigation";
import Back from "../../../../widgets/Back";

const CitizenView = () => {
  const { store } = React.useContext(StoreContext);

  const houseId = getUrlParam().get("hid");

  const { activeRepresentative } = useLoadAllActiveRepresentative(
    "/admin/admin-representative/read-representative-by-id.php",
    houseId
  );

  const getHouseholdName = () => {
    let household = "";
    // let own = "Sariling Bahay (Own)"
    // let livingwith = "Nakikitira (Living to/with someone)"

    if (activeRepresentative.length > 0) {
      activeRepresentative.map((item) => {
        if (item.representative_household_living_id === "1") {
          household = "Sariling Bahay (Own)";
        }
        if (item.representative_household_living_id === "2") {
          household = "Nangungupahan (Renting)";
        }
        if (item.representative_household_living_id === "3") {
          household = "Nakikitira (Living to/with someone)";
        }
      });
    }

    return household;
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
                  {activeRepresentative.length === 0 ||
                  houseId === null ||
                  houseId === ""
                    ? "No Data"
                    : activeRepresentative.length
                    ? activeRepresentative[0].sitio_name
                    : "Loading..."}
                  :{" "}
                  <span className="color--primary">
                    Household{" "}
                    {activeRepresentative.length === 0 ||
                    houseId === null ||
                    houseId === ""
                      ? "No Data"
                      : activeRepresentative.length
                      ? activeRepresentative[0].representative_house_number
                      : "Loading..."}
                  </span>
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
                    <h3 className="mt--2">
                      {activeRepresentative.length === 0 ||
                      houseId === null ||
                      houseId === ""
                        ? "No Data"
                        : activeRepresentative.length
                        ? activeRepresentative[0].representative_name
                        : "Loading..."}
                    </h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>Household contact:</label>
                    <h3 className="mt--2">
                      {activeRepresentative.length === 0 ||
                      houseId === null ||
                      houseId === ""
                        ? "No Data"
                        : activeRepresentative.length
                        ? activeRepresentative[0].representative_contact
                        : "Loading..."}
                    </h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      1. Ilan ang mga taong naninirahan sa bahay na ito? (How
                      many people were living or staying in this house?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      {activeRepresentative.length === 0 ||
                      houseId === null ||
                      houseId === ""
                        ? "No Data"
                        : activeRepresentative.length
                        ? activeRepresentative[0].representative_total_people
                        : "Loading..."}
                    </h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      2. Ilan ang bilang ng mga batang 5 taong gulang pababa?
                      (How many children are there under the age of 5?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      {activeRepresentative.length === 0 ||
                      houseId === null ||
                      houseId === ""
                        ? "No Data"
                        : activeRepresentative.length
                        ? activeRepresentative[0].representative_total_underage
                        : "Loading..."}
                    </h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      3. Ilan ang bilang ng mga 6 hanggang 18 taong gulang? (How
                      many are 6 to 18 years old?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      {activeRepresentative.length === 0 ||
                      houseId === null ||
                      houseId === ""
                        ? "No Data"
                        : activeRepresentative.length
                        ? activeRepresentative[0].representative_total_midage
                        : "Loading..."}
                    </h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      4. Ilan ang bilang ng mga nasa edad 19 hanggang 59 na
                      taong gulang? (How many are 19 to 59 years old?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      {activeRepresentative.length === 0 ||
                      houseId === null ||
                      houseId === ""
                        ? "No Data"
                        : activeRepresentative.length
                        ? activeRepresentative[0].representative_total_adult
                        : "Loading..."}
                    </h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      5. Ilan ang bilang ng mga nakakatanda na nasa 60 na taong
                      gulang pataas? (How many seniors are there who are 60
                      years old and older?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      {activeRepresentative.length === 0 ||
                      houseId === null ||
                      houseId === ""
                        ? "No Data"
                        : activeRepresentative.length
                        ? activeRepresentative[0].representative_total_seniors
                        : "Loading..."}
                    </h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      6. Ilan ang bilang sa miyembro ng pamilya ang may
                      kapansanan? (How many in your family have person with
                      disability?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      {activeRepresentative.length === 0 ||
                      houseId === null ||
                      houseId === ""
                        ? "No Data"
                        : activeRepresentative.length
                        ? activeRepresentative[0].representative_total_pwd
                        : "Loading..."}
                    </h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      7. Ilan ang mga nag-aaral ng elementarya? ( How many are
                      in elementary school?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      {activeRepresentative.length === 0 ||
                      houseId === null ||
                      houseId === ""
                        ? "No Data"
                        : activeRepresentative.length
                        ? activeRepresentative[0].representative_total_elem
                        : "Loading..."}
                    </h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      8. Ilan ang mga nag-aaral ng highschool? (How many are in
                      high school students?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      {activeRepresentative.length === 0 ||
                      houseId === null ||
                      houseId === ""
                        ? "No Data"
                        : activeRepresentative.length
                        ? activeRepresentative[0]
                            .representative_total_highschool
                        : "Loading..."}
                    </h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      9. Ilan ang mga nag-aaral sa kolehiyo? (How many are
                      studying in college?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      {activeRepresentative.length === 0 ||
                      houseId === null ||
                      houseId === ""
                        ? "No Data"
                        : activeRepresentative.length
                        ? activeRepresentative[0].representative_total_college
                        : "Loading..."}
                    </h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      10. Kayo ba ay nasa inyong sariling bahay, nangungupahan o
                      nakikitara? (Are you living in your own house, renting, or
                      living with relatives?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      {activeRepresentative.length === 0 ||
                      houseId === null ||
                      houseId === ""
                        ? "No Data"
                        : activeRepresentative.length
                        ? getHouseholdName()
                        : "Loading..."}
                    </h3>
                  </div>

                  <div className="input--form mb--5">
                    <label>
                      11. Magkano ang halaga ng buwanang kita ng inyong pamilya?
                      (How much is your family's monthly income?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      {activeRepresentative.length === 0 ||
                      houseId === null ||
                      houseId === ""
                        ? "No Data"
                        : activeRepresentative.length
                        ? `${numberWithCommas(
                            activeRepresentative[0].monthly_income_from
                          )} - ${numberWithCommas(
                            activeRepresentative[0].monthly_income_to
                          )} (${activeRepresentative[0].monthly_income_name})`
                        : "Loading..."}
                    </h3>
                  </div>
                  {/* <div className="input--form mb--5">
                    <label>
                      12. Halaga na nagagastos para sa buwanang bayarin?
                      (Kuryente at tubig, gastusin pang edukasyon, at iba pa.)
                      (Amount spent on monthly fees, i.e., Water and Eletricity
                      Bills, Educational expenses, and other utilities.)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">--</h3>
                  </div> */}
                  <div className="input--form mb--5">
                    <label>
                      14. Ilang ang bilang sa miyembro ng pamilya ang may
                      kakayahan na magtrabaho? (How many family members are able
                      to work?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      {activeRepresentative.length === 0 ||
                      houseId === null ||
                      houseId === ""
                        ? "No Data"
                        : activeRepresentative.length
                        ? activeRepresentative[0].representative_total_able_work
                        : "Loading..."}
                    </h3>
                  </div>
                  <div className="input--form mb--5">
                    <label>
                      15. Ilan sa miyembro ng pamilya ang may trabaho o
                      kasalukuyang may hanapbuhay? (How many family members are
                      employed or currently earning?)
                    </label>
                    <h3 className="mt--2 half--width t--bold t--center">
                      {activeRepresentative.length === 0 ||
                      houseId === null ||
                      houseId === ""
                        ? "No Data"
                        : activeRepresentative.length
                        ? activeRepresentative[0].representative_total_employed
                        : "Loading..."}
                    </h3>
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
