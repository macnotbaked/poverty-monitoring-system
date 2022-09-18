export const checkLocalStorage = () => {
  let lcsstoken = null;
  try {
    lcsstoken = JSON.parse(localStorage.getItem("pmstoken"));
  } catch (error) {
    lcsstoken = null;
  }

  return lcsstoken;
};
