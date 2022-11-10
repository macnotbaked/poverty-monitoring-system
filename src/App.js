import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { devNavUrl } from "./components/helpers/functions-general";
import Citizens from "./components/pages/backend/backend-admin-official/citizens/Citizens";
import Evaluation from "./components/pages/backend/backend-admin-official/evaluation/Evaluation";
import EvaluationFilter from "./components/pages/backend/backend-admin-official/evaluation/EvaluationFilter";
import SitioEvaluation from "./components/pages/backend/backend-admin-official/evaluation/sitio/SitioEvaluation";
import Dashboard from "./components/pages/backend/backend-admin-official/home/Dashboard";
import Settings from "./components/pages/backend/backend-admin-official/settings/Settings";
import Roles from "./components/pages/backend/backend-admin-official/settings/users/admin-official-user/roles/Roles";
import UsersActive from "./components/pages/backend/backend-admin-official/settings/users/admin-official-user/users-active/UsersActive";
import UsersInactive from "./components/pages/backend/backend-admin-official/settings/users/admin-official-user/users-inactive/UsersInactive";
import UsersCitizenActive from "./components/pages/backend/backend-admin-official/settings/users/citizen-users/citizen-active/UsersCitizenActive";
import Users from "./components/pages/backend/backend-admin-official/settings/users/Users";
import Citizen from "./components/pages/backend/backend-admin-official/sitio/citizen/Citizen";
import AddCitizen from "./components/pages/backend/backend-admin-official/sitio/citizen/citizen-add/AddCitizen";
import Sitio from "./components/pages/backend/backend-admin-official/sitio/Sitio";
import CreatePassword from "./components/pages/frontend/frontend-create-password/CreatePassword";
import CreatePasswordSuccess from "./components/pages/frontend/frontend-create-password/CreatePasswordSuccess";
import ForgotPassword from "./components/pages/frontend/frontend-forgot-pass/ForgotPassword";
import ForgotPasswordAlmostDone from "./components/pages/frontend/frontend-forgot-pass/ForgotPasswordAlmostDone";
import Login from "./components/pages/frontend/frontend-login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import PageNotFound from "./components/widgets/PageNotFound";
import { StoreProvider } from "./store/StoreContext";

function App() {
  return (
    <>
      <StoreProvider>
        <Router>
          <Routes>
            {/* LOGIN */}

            <Route path={`${devNavUrl}/login`} element={<Login />} />
            <Route
              path={`${devNavUrl}/forgot-password`}
              element={<ForgotPassword />}
            />
            <Route
              path={`${devNavUrl}/create-password`}
              element={<CreatePassword />}
            />
            <Route
              path={`${devNavUrl}/all-set`}
              element={<CreatePasswordSuccess />}
            />
            <Route
              path={`${devNavUrl}/almost-done`}
              element={<ForgotPasswordAlmostDone />}
            />

            {/* ADMIN HOME */}

            <Route
              path={`/`}
              element={
                // <ProtectedRoute>
                <Dashboard />
                // </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/home`}
              element={
                // <ProtectedRoute>
                <Dashboard />
                // </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/citizen`}
              element={
                // <ProtectedRoute>
                <Citizen />
                // </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/citizen-add`}
              element={
                // <ProtectedRoute>
                <AddCitizen />
                // </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/evaluation`}
              element={
                // <ProtectedRoute>
                <Evaluation />
                // </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/evaluation-filter`}
              element={
                // <ProtectedRoute>
                <EvaluationFilter />
                // </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/sitio-evaluation`}
              element={
                // <ProtectedRoute>
                <SitioEvaluation />
                // </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/settings`}
              element={
                // <ProtectedRoute>
                <Settings />
                // </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/users`}
              element={
                // <ProtectedRoute>
                <Users />
                // </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/admin-official-users`}
              element={
                // <ProtectedRoute>
                <UsersActive />
                // </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/admin-official-users-inactive`}
              element={
                // <ProtectedRoute>
                <UsersInactive />
                // </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/users-roles`}
              element={
                // <ProtectedRoute>
                <Roles />
                // </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/sitio`}
              element={
                // <ProtectedRoute>
                <Sitio />
                // </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/citizen-user`}
              element={
                // <ProtectedRoute>
                <UsersCitizenActive />
                // </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/citizens`}
              element={
                // <ProtectedRoute>
                <Citizens />
                // </ProtectedRoute>
              }
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </StoreProvider>
    </>
  );
}

export default App;
