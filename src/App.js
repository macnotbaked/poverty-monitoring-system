import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { devNavUrl } from "./components/helpers/functions-general";
import Citizens from "./components/pages/backend/backend-admin-official/citizens/Citizens";
import CitizenView from "./components/pages/backend/backend-admin-official/citizens/CitizenView";
import Evaluation from "./components/pages/backend/backend-admin-official/evaluation/Evaluation";
import EvaluationFilterCitezenList from "./components/pages/backend/backend-admin-official/evaluation/evaluation-household/EvaluationFilterCitezenList";
import EvaluationFilterResult from "./components/pages/backend/backend-admin-official/evaluation/evaluation-household/EvaluationFilterResult";
import EvaluationFilter from "./components/pages/backend/backend-admin-official/evaluation/EvaluationFilter";
import Dashboard from "./components/pages/backend/backend-admin-official/home/Dashboard";
import InactiveHouseholdCriteria from "./components/pages/backend/backend-admin-official/settings/archived/archived-program-criteria/inactive-household-criteria/InactiveHouseholdCriteria";
import InactiveIncomeCriteria from "./components/pages/backend/backend-admin-official/settings/archived/archived-program-criteria/inactive-income-program/InactiveIncomeCriteria";
import InactivePopulationCriteria from "./components/pages/backend/backend-admin-official/settings/archived/archived-program-criteria/inactive-population-criteria/InactivePopulationCriteria";
import InactiveUnemploymentCriteria from "./components/pages/backend/backend-admin-official/settings/archived/archived-program-criteria/inactive-unemployment-program/InactiveUnemploymentCriteria";
import InactivePurok from "./components/pages/backend/backend-admin-official/settings/archived/archived-purok/InactivePurok";
import InactiveHouseholdProgram from "./components/pages/backend/backend-admin-official/settings/archived/archived-recommended-programs/inactive-household-program/InactiveHouseholdProgram";
import InactiveIncomeProgram from "./components/pages/backend/backend-admin-official/settings/archived/archived-recommended-programs/inactive-income-program/InactiveIncomeProgram";
import InactivePopulationProgram from "./components/pages/backend/backend-admin-official/settings/archived/archived-recommended-programs/inactive-population-program/InactivePopulationProgram";
import InactiveUnemploymentProgram from "./components/pages/backend/backend-admin-official/settings/archived/archived-recommended-programs/inactive-unemployment-program/InactiveUnemploymentProgram";
import InactiveRepresentative from "./components/pages/backend/backend-admin-official/settings/archived/archived-representative/InactiveRepresentative";
import InactiveUser from "./components/pages/backend/backend-admin-official/settings/archived/archived-users/InactiveUser";
import BarangayInfo from "./components/pages/backend/backend-admin-official/settings/barangay-info/BarangayInfo";
import IncomeClassification from "./components/pages/backend/backend-admin-official/settings/income-classification/IncomeClassification";
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
import UsersActive from "./components/pages/backend/backend-admin-official/settings/users/admin-official-user/users-active/UsersActive";
import Citizen from "./components/pages/backend/backend-admin-official/sitio/citizen/Citizen";
import AddCitizen from "./components/pages/backend/backend-admin-official/sitio/citizen/citizen-add/AddCitizen";
import UpdateCitizen from "./components/pages/backend/backend-admin-official/sitio/citizen/citizen-add/UpdateCitizen";
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
              path={`${devNavUrl}/home`}
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/purok/household`}
              element={
                <ProtectedRoute>
                  <Citizen />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path={`${devNavUrl}/household-add`}
              element={
                <ProtectedRoute>
                  <AddCitizen />
                </ProtectedRoute>
              }
            /> */}
            <Route
              path={`${devNavUrl}/evaluation`}
              element={
                <ProtectedRoute>
                  <Evaluation />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/evaluation-filter`}
              element={
                <ProtectedRoute>
                  <EvaluationFilter />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/evaluation-filter/date`}
              element={
                <ProtectedRoute>
                  <EvaluationFilterResult />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/settings`}
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/users`}
              element={
                <ProtectedRoute>
                  <UsersActive />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/sitio`}
              element={
                <ProtectedRoute>
                  <Sitio />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${devNavUrl}/citizens`}
              element={
                <ProtectedRoute>
                  <Citizens />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/purok/household-view`}
              element={
                <ProtectedRoute>
                  <CitizenView />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/recommended-programs`}
              element={
                <ProtectedRoute>
                  <RecommendedPrograms />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/population-rate`}
              element={
                <ProtectedRoute>
                  <PopulationRate />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/household-rate`}
              element={
                <ProtectedRoute>
                  <HouseholdRate />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/income`}
              element={
                <ProtectedRoute>
                  <IncomeRate />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/unemployment-rate`}
              element={
                <ProtectedRoute>
                  <UnemploymentRate />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/population-criteria`}
              element={
                <ProtectedRoute>
                  <PopulationCriteria />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/household-criteria`}
              element={
                <ProtectedRoute>
                  <HouseholdCriteria />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/income-criteria`}
              element={
                <ProtectedRoute>
                  <IncomeCriteria />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/unemployment-criteria`}
              element={
                <ProtectedRoute>
                  <UnemploymentCriteria />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/inactive-users`}
              element={
                <ProtectedRoute>
                  <InactiveUser />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/inactive-population-program`}
              element={
                <ProtectedRoute>
                  <InactivePopulationProgram />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/inactive-household-program`}
              element={
                <ProtectedRoute>
                  <InactiveHouseholdProgram />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/inactive-income-program`}
              element={
                <ProtectedRoute>
                  <InactiveIncomeProgram />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/inactive-unemployment-program`}
              element={
                <ProtectedRoute>
                  <InactiveUnemploymentProgram />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/inactive-population-criteria`}
              element={
                <ProtectedRoute>
                  <InactivePopulationCriteria />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/inactive-household-criteria`}
              element={
                <ProtectedRoute>
                  <InactiveHouseholdCriteria />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/inactive-income-criteria`}
              element={
                <ProtectedRoute>
                  <InactiveIncomeCriteria />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/inactive-unemployment-criteria`}
              element={
                <ProtectedRoute>
                  <InactiveUnemploymentCriteria />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/inactive-sitio`}
              element={
                <ProtectedRoute>
                  <InactivePurok />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/info`}
              element={
                <ProtectedRoute>
                  <BarangayInfo />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/household-add`}
              element={
                <ProtectedRoute>
                  <AddCitizen />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/purok/household-edit`}
              element={
                <ProtectedRoute>
                  <UpdateCitizen />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/income-classification`}
              element={
                <ProtectedRoute>
                  <IncomeClassification />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/evaluation-filter/purok`}
              element={
                <ProtectedRoute>
                  <EvaluationFilterCitezenList />
                </ProtectedRoute>
              }
            />

            <Route
              path={`${devNavUrl}/inactive-representative`}
              element={
                <ProtectedRoute>
                  <InactiveRepresentative />
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
