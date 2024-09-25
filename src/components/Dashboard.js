import { useNavigate } from "react-router-dom";
import { MainContext } from "../context/ContextProvider";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { state, dispatch } = MainContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    toast.success("Logout Successfully!");
    navigate("/");
  };

  return (
    <div className="dashboard_section">
      <h1>
        Welcome, <span>{state.user?.username}</span>
      </h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
