import React from "react";
import { setIsLogin } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { checkLocalStorage } from "../helpers/CheckLocalStorage";
import fetchApi from "../helpers/fetchApi";
import { devApiUrl } from "../helpers/functions-general";
import { checkRoleToRedirect } from "../helpers/login-functions";

const useIsLogin = (navigate) => {
  const { dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const fetchLogin = async () => {
      const login = await fetchApi(
        devApiUrl + "/admin/admin-settings/account/read-account-token.php",
        {
          token: checkLocalStorage().token,
          // idNumber: checkLocalStorage().data.settings_account_aid,
        }
      );

      // console.log(login);

      if (typeof login === "undefined" || !login.status) {
        setLoading(false);
      } else {
        setLoading(false);
        checkRoleToRedirect(navigate, login.data);
      }
    };

    if (
      checkLocalStorage() !== null &&
      checkLocalStorage().token !== undefined
    ) {
      fetchLogin();
      dispatch(setIsLogin(false));
    } else {
      setLoading(false);
      dispatch(setIsLogin(true));
    }
  }, []);

  return { loading };
};

export default useIsLogin;
