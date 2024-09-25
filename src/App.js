import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { MainContext } from "./context/ContextProvider";
import { Toaster } from "react-hot-toast";

function App() {
  const { state } = MainContext();
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                state?.isAuthenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Login />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                state?.isAuthenticated ? <Dashboard /> : <Navigate to="/" />
              }
            />
          </Routes>
        </Router>
      </div>
      <Toaster />
    </>
  );
}

export default App;
