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
import Users from "./components/pages/backend/backend-admin-official/settings/users/Users";

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

            {/* ADMIN HOME */}

            <Route path={`${devNavUrl}/admin/home`} element={<Home />} />
            <Route path={`${devNavUrl}/admin/citizen`} element={<Citizen />} />
            <Route
              path={`${devNavUrl}/admin/citizen-add`}
              element={<AddCitizen />}
            />
            <Route
              path={`${devNavUrl}/admin/evaluation`}
              element={<Evaluation />}
            />
            <Route
              path={`${devNavUrl}/admin/evaluation-filter`}
              element={<EvaluationFilter />}
            />
            <Route path={`${devNavUrl}/admin/sitio`} element={<Sitio />} />
            <Route
              path={`${devNavUrl}/admin/settings`}
              element={<Settings />}
            />
            <Route path={`${devNavUrl}/admin/users`} element={<Users />} />
          </Routes>
        </Router>
      </StoreProvider>
    </>
  );
}

export default App;
