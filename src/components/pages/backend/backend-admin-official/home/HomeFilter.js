import React from "react";
import { Link } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";
import Navigation from "../../../../navigation/Navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Bar } from "react-chartjs-2";
import { AiFillEye } from "react-icons/ai";
import NoData from "../../../../widgets/NoData";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputText } from "../../../../helpers/FormInputs";
import SpinnerButton from "../../../../widgets/SpinnerButton";

const HomeFilter = () => {
  const background = [];
  const border = [];
  const labels = ["Sitio 1", "Sitio 2", "Sitio 3", "Sitio 4", "Sitio 5"];

  for (let i = 0; i < labels.length; i++) {
    let r = Math.floor(Math.random() * 73);
    let g = Math.floor(Math.random() * 149);
    let b = Math.floor(Math.random() * 139);
    background.push("rgba(" + r + ", " + g + ", " + b + ", .5)");
    border.push("rgba(" + r + ", " + g + ", " + b + ", 1)");
  }
  const userData = {
    labels: ["Sitio 1", "Sitio 2", "Sitio 3", "Sitio 4", "Sitio 5"],
    datasets: [
      {
        label: "Yearly Poverty Rate",
        data: [80, 76, 89, 100, 92, 88],
        backgroundColor: background,
        borderColor: border,
        borderWidth: 1,
      },
    ],
  };

  const initVal = {
    task_trainee_id: "",
    date_from: "",
    date_to: "",
  };

  const yupSchema = Yup.object({
    date_from: Yup.string().required("Required"),
    date_to: Yup.string().required("Required"),
  });

  return (
    <>
      <Navigation menu="home" />
      <div className="main-content">
        <div className="container">
          <div className="title">
            <div className="row">
              <div style={{ marginBottom: "1.5rem" }} className="tab-header ">
                <span className="tab-title">Filter</span>
                <Link
                  className="btn float--right"
                  to={`${devNavUrl}/admin/home`}
                >
                  <IoMdArrowRoundBack /> <span>Back</span>
                </Link>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <h4 className="title-box-light ">Date Range</h4>
            <div className="content-block">
              <div className="tab">
                {/* <h4 className=" title-box-light mb--20">
                    Information Posting
                  </h4> */}

                <div className="list responsive-table ">
                  <div className="row">
                    <Formik
                      initialValues={initVal}
                      validationSchema={yupSchema}
                      onSubmit={async (
                        values,
                        { setSubmitting, resetForm }
                      ) => {
                        console.log(values);
                        //   setLoading(true);
                        //   const result = await fetchApi(
                        //     devApiUrl + "/admin/admin-task/read-task-by-trainee-filter.php",
                        //     values
                        //   );
                        //   console.log(result);

                        //   if (typeof result === "undefined") {
                        //     console.log("undefined");
                        //     setLoading(false);
                        //     dispatch(setError(true));
                        //     dispatch(setMessage("API / Network Error"));
                        //     return;
                        //   }
                        //   if (!result.status) {
                        //     console.log("no data");
                        //     setLoading(false);
                        //     setTimeSpent("0h 0m 0s");
                        //     return;
                        //   }
                        //   if (result.status) {
                        //     setResult(result.data);
                        //     setTimeSpent(getTimeSpent(result.data));
                        //     // setResult([]);
                        //     setLoading(false);
                        //   }
                      }}
                    >
                      {(props) => {
                        return (
                          <Form>
                            <div className="tab">
                              <div className="row">
                                <div className="d--flex gap--2 mx--3">
                                  <div className="half--width">
                                    <div className="input mb--2">
                                      <InputText
                                        label="Start Date"
                                        type="date"
                                        name="date_from"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="half--width">
                                    <div className="input mb--2">
                                      <InputText
                                        label="End Date"
                                        type="date"
                                        name="date_to"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="content-box mb--2 t--center">
                                      <button
                                        className="btn--primary "
                                        type="submit"
                                      >
                                        <SpinnerButton /> FILTER
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                  </div>
                </div>

                <div
                  className="graph"
                  style={{ maxWidth: "90rem", maxHeight: "35rem" }}
                >
                  {/* <Bar
                    style={{ maxWidth: "90rem", maxHeight: "30rem" }}
                    data={userData}
                  /> */}
                  <NoData />
                </div>

                <div className="mb--2" style={{ padding: "unset" }}>
                  <table id="" className="" cellSpacing="0" width="100%">
                    <thead className="">
                      <tr>
                        <th className="" rowSpan="1">
                          #
                        </th>
                        <th
                          className="row--name"
                          rowSpan="1"
                          style={{ width: "15rem" }}
                        >
                          Name
                        </th>
                        <th rowSpan="1">Ratings</th>
                        <th rowSpan="1">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className=" ">
                        <td>1.</td>
                        <td>Sitio 1</td>
                        <td>80%</td>
                        <td>
                          <div className="dropdown tooltip--view">
                            <span>
                              <Link to={`${devNavUrl}`} className="d-block">
                                <AiFillEye />
                              </Link>
                            </span>
                          </div>
                        </td>
                      </tr>
                      <>
                        <tr className="">
                          <td colSpan="100%">
                            <NoData />
                          </td>
                        </tr>
                      </>
                    </tbody>
                  </table>
                </div>
                <div className="t--center row">{/* <LoadMore /> */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFilter;
