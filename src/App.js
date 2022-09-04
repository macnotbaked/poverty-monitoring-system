import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { devNavUrl } from "./components/helpers/functions-general";
import { StoreProvider } from "./store/StoreContext";
import Login from "./components/pages/frontend/frontend-login/Login";

function App() {
  return (
    <>
      <StoreProvider>
        <Router>
          <Routes>
            {/* LOGIN */}

            <Route path={`${devNavUrl}/login`} element={<Login />} />
          </Routes>
        </Router>
      </StoreProvider>
    </>
  );
}

export default App;
