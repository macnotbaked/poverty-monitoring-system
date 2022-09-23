import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { devNavUrl } from "./components/helpers/functions-general";
import { StoreProvider } from "./store/StoreContext";
import Login from "./components/pages/frontend/frontend-login/Login";
import ForgotPassword from "./components/pages/frontend/frontend-forgot-pass/ForgotPassword";
import CreatePassword from "./components/pages/frontend/frontend-create-password/CreatePassword";
import CreatePasswordSuccess from "./components/pages/frontend/frontend-create-password/CreatePasswordSuccess";
import Home from "./components/pages/backend/backend-admin-official/home/Home";
import Citizen from "./components/pages/backend/backend-admin-official/citizen/Citizen";
import AddCitizen from "./components/pages/backend/backend-admin-official/citizen/citizen-add/AddCitizen";
import Evaluation from "./components/pages/backend/backend-admin-official/evaluation/Evaluation";
import EvaluationFilter from "./components/pages/backend/backend-admin-official/evaluation/EvaluationFilter";
import Sitio from "./components/pages/backend/backend-admin-official/evaluation/sitio/Sitio";
import Settings from "./components/pages/backend/backend-admin-official/settings/Settings";
import PageNotFound from "./components/widgets/PageNotFound";
import UsersActive from "./components/pages/backend/backend-admin-official/settings/users/users-active/UsersActive";
import UsersInactive from "./components/pages/backend/backend-admin-official/settings/users/users-inactive/UsersInactive";
import Roles from "./components/pages/backend/backend-admin-official/settings/users/roles/Roles";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPasswordAlmostDone from "./components/pages/frontend/frontend-forgot-pass/ForgotPasswordAlmostDone";

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
              path={`${devNavUrl}/admin/home`}
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/citizen`}
              element={
                <ProtectedRoute>
                  <Citizen />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/citizen-add`}
              element={
                <ProtectedRoute>
                  <AddCitizen />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/evaluation`}
              element={
                <ProtectedRoute>
                  <Evaluation />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/evaluation-filter`}
              element={
                <ProtectedRoute>
                  <EvaluationFilter />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/sitio`}
              element={
                <ProtectedRoute>
                  <Sitio />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/settings`}
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/users`}
              element={
                <ProtectedRoute>
                  <UsersActive />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/users-inactive`}
              element={
                <ProtectedRoute>
                  <UsersInactive />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/users-roles`}
              element={
                <ProtectedRoute>
                  <Roles />
                </ProtectedRoute>
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
