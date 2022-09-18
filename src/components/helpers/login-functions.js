import { devNavUrl } from "./functions-general";

export const checkRoleToRedirect = (navigate, data) => {
  console.log(data.settings_role_name);
  switch (data.settings_role_name) {
    case "Admin":
      navigate(`${devNavUrl}/admin/home`);
      break;
    case "Official":
      navigate(`${devNavUrl}/admin/announcement`);
      break;
    default:
      navigate(`${devNavUrl}/trainee/announcement`);
      break;
  }
};
