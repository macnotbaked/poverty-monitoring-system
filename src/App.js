import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { devNavUrl } from "./components/helpers/functions-general";
import { StoreProvider } from "./store/StoreContext";
import Login from "./components/pages/frontend/frontend-login/Login";
import ForgotPassword from "./components/pages/frontend/frontend-forgot-pass/ForgotPassword";
import CreatePassword from "./components/pages/frontend/frontend-create-password/CreatePassword";
import CreatePasswordSuccess from "./components/pages/frontend/frontend-create-password/CreatePasswordSuccess";
import Home from "./components/pages/backend/backend-admin-official/home/Home";
import HomeFilter from "./components/pages/backend/backend-admin-official/home/HomeFilter";
import Sitio from "./components/pages/backend/backend-admin-official/home/sitio/Sitio";
import Citizen from "./components/pages/backend/backend-admin-official/citizen/Citizen";
import AddCitizen from "./components/pages/backend/backend-admin-official/citizen/citizen-add/AddCitizen";

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
            <Route
              path={`${devNavUrl}/admin/filter`}
              element={<HomeFilter />}
            />
            <Route path={`${devNavUrl}/admin/sitio`} element={<Sitio />} />
            <Route path={`${devNavUrl}/admin/citizen`} element={<Citizen />} />
            <Route
              path={`${devNavUrl}/admin/citizen-add`}
              element={<AddCitizen />}
            />
          </Routes>
        </Router>
      </StoreProvider>
    </>
  );
}

export default App;
