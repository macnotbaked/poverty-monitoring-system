import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { devNavUrl } from "./components/helpers/functions-general";
import Citizens from "./components/pages/backend/backend-admin-official/citizens/Citizens";
import CitizenView from "./components/pages/backend/backend-admin-official/citizens/CitizenView";
import Evaluation from "./components/pages/backend/backend-admin-official/evaluation/Evaluation";
import EvaluationHousehold from "./components/pages/backend/backend-admin-official/evaluation/evaluation-household/EvaluationHousehold";
import EvaluationFilter from "./components/pages/backend/backend-admin-official/evaluation/EvaluationFilter";
import Dashboard from "./components/pages/backend/backend-admin-official/home/Dashboard";
import HouseholdCriteria from "./components/pages/backend/backend-admin-official/settings/program-criteria/household-criteria/HouseholdCriteria";
import IncomeCriteria from "./components/pages/backend/backend-admin-official/settings/program-criteria/income-criteria/IncomeCriteria";
import PopulationCriteria from "./components/pages/backend/backend-admin-official/settings/program-criteria/population-criteria/PopulationCriteria";
import UnemploymentCriteria from "./components/pages/backend/backend-admin-official/settings/program-criteria/unemployment-criteria/UnemploymentCriteria";
import HouseholdRate from "./components/pages/backend/backend-admin-official/settings/recommended-programs/household-rate/HouseholdRate";
import IncomeRate from "./components/pages/backend/backend-admin-official/settings/recommended-programs/income-rate/IncomeRate";
import { PopulationRate } from "./components/pages/backend/backend-admin-official/settings/recommended-programs/population-rate/PopulationRate";
import RecommendedPrograms from "./components/pages/backend/backend-admin-official/settings/recommended-programs/RecommendedPrograms";
import UnemploymentRate from "./components/pages/backend/backend-admin-official/settings/recommended-programs/unemployment-rate/UnemploymentRate";
import Settings from "./components/pages/backend/backend-admin-official/settings/Settings";
import Roles from "./components/pages/backend/backend-admin-official/settings/users/admin-official-user/roles/Roles";
import UsersActive from "./components/pages/backend/backend-admin-official/settings/users/admin-official-user/users-active/UsersActive";
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
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/home`}
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/admin/purok/household`}
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
              path={`${devNavUrl}/admin/evaluation/household`}
              element={
                <ProtectedRoute>
                  <EvaluationHousehold />
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
              path={`${devNavUrl}/admin/users-roles`}
              element={
                <ProtectedRoute>
                  <Roles />
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
              path={`${devNavUrl}/admin/citizens`}
              element={
                <ProtectedRoute>
                  <Citizens />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/admin/household-view`}
              element={
                <ProtectedRoute>
                  <CitizenView />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/admin/recommended-programs`}
              element={
                <ProtectedRoute>
                  <RecommendedPrograms />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/admin/population-rate`}
              element={
                <ProtectedRoute>
                  <PopulationRate />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/admin/household-rate`}
              element={
                <ProtectedRoute>
                  <HouseholdRate />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/admin/income`}
              element={
                <ProtectedRoute>
                  <IncomeRate />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/admin/unemployment-rate`}
              element={
                <ProtectedRoute>
                  <UnemploymentRate />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/admin/population-criteria`}
              element={
                <ProtectedRoute>
                  <PopulationCriteria />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/admin/household-criteria`}
              element={
                <ProtectedRoute>
                  <HouseholdCriteria />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/admin/income-criteria`}
              element={
                <ProtectedRoute>
                  <IncomeCriteria />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/admin/unemployment-criteria`}
              element={
                <ProtectedRoute>
                  <UnemploymentCriteria />
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
