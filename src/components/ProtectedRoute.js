import React from "react";
import { setCredentials } from "../store/StoreAction";
import { StoreContext } from "../store/StoreContext";
import fetchApi from "./helpers/fetchApi";
import { devApiUrl, devNavUrl } from "./helpers/functions-general";
import { Navigate } from "react-router-dom";
import Spinner from "./widgets/Spinner";

const ProtectedRoute = ({ children }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(true);
  const [isAuth, setIsAuth] = React.useState("");
  const pmstoken = JSON.parse(localStorage.getItem("pmstoken"));

  React.useEffect(() => {
    const fetchLogin = async () => {
      const login = await fetchApi(
        devApiUrl + "/admin/admin-settings/users/read-user-token.php",
        {
          token: pmstoken.token,
          roleId: pmstoken.roleId,
        }
      );

      console.log(login);

      if (typeof login === "undefined" || !login.status) {
        setLoading(false);
        setIsAuth("456");
      } else {
        // dispatch(setCredentials(login.data));
        dispatch(
          setCredentials(
            login.data.users_aid,
            login.data.roles_aid,
            login.data.users_fname,
            login.data.roles_name,
            login.data.users_email
          )
        );
        setIsAuth("123");
        setLoading(false);
      }
    };

    if (pmstoken !== null) {
      fetchLogin();
    } else {
      setLoading(false);
      localStorage.removeItem("pmstoken");
      setIsAuth("456");
    }
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : isAuth === "123" ? (
    children
  ) : isAuth === "456" ? (
    <Navigate to={`${devNavUrl}/login`} />
  ) : (
    <p>API end point error / Page not found.</p>
  );
};

export default ProtectedRoute;
