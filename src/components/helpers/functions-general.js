import { setEvaluationPreview } from "../../store/StoreAction";

// development url
export const devApiUrl =
  "http://localhost/school-works/poverty-monitoring-system/rest";
export const devBaseUrl =
  "http://localhost/school-works/poverty-monitoring-system/public";
export const devNavUrl = "/dev-app";

// Copyright year
export const copyrightYear = () => {
  return new Date().getFullYear();
};

// do load more
export const doLoadmore = (data, setResult) => {
  if (data.data === null || !data.status) {
    setResult([]);
  } else {
    setResult((prevState) => [...prevState, ...data.data]);
  }
};

// do list
export const doList = (data, setResult) => {
  if (data.data === null || !data.status) {
    setResult([]);
  } else {
    setResult(data.data);
    // setResult([]);
  }
};

// get the url id parameter
export const getUrlParam = (id) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  // const param = urlParams.get(id);
  // return param;
  return urlParams;
};

// fetch for uploading photo or file
export const fetchFormData = (url, fd = {}) => {
  const data = fetch(url, {
    method: "post",
    body: fd,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error + " api endpint error");
    });
  return data;
};

// formatting date
export const formatDate = (dateVal) => {
  const d = new Date(dateVal);
  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  const day = d.getDay();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // return `${days[day]} ${months[month]} ${date} ${year}`;
  // return `${days[day]}, ${months[month]} ${date}`;
  return `${months[month]} ${date} ${year}`;
  // return `${months[month]}. ${date}, ${year}`;
  // return `${date} `;
};

export function setStorageRoute(jwt) {
  localStorage.setItem("pmstoken", JSON.stringify({ token: jwt }));
}

export const loadEvaluationPreview = (dispatch, values) => {
  dispatch(
    setEvaluationPreview(
      values.representative_aid,
      values.representative_purok_id,
      values.representative_is_active,
      values.representative_name,
      values.representative_contact,
      values.representative_house_number,
      values.representative_total_people,
      values.representative_total_underage,
      values.representative_total_midage,
      values.representative_total_adult,
      values.representative_total_pwd,
      values.representative_total_elem,
      values.representative_total_highschool,
      values.representative_total_college,
      values.representative_household_living_id,
      values.representative_monthly_income_id,
      values.representative_bill_expenses_id,
      values.representative_food_expenses_id,
      values.representative_total_able_work,
      values.representative_total_employed
    )
  );
};
