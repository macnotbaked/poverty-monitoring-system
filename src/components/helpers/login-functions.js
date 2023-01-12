import { devNavUrl } from "./functions-general";

export const checkRoleToRedirect = (navigate, data) => {
  // console.log(data.users_role);
  switch (data.users_role) {
    case "Admin":
      navigate(`${devNavUrl}/home`);
      break;
    default:
      navigate(`${devNavUrl}/home`);
      break;
  }
};
