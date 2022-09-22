import { devNavUrl } from "./functions-general";

export const checkRoleToRedirect = (navigate, data) => {
  console.log(data.roles_name);
  switch (data.roles_name) {
    case "Admin":
      navigate(`${devNavUrl}/admin/home`);
      break;
    case "Official":
      navigate(`${devNavUrl}/admin/home`);
      break;
    default:
      navigate(`${devNavUrl}/trainee/my-info`);
      break;
  }
};
