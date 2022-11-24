export const checkLocalStorage = () => {
  let pmstoken = null;
  try {
    pmstoken = JSON.parse(localStorage.getItem("pmstoken"));
  } catch (error) {
    pmstoken = null;
  }

  return pmstoken;
};
