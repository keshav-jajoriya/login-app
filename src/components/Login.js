// src/components/Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../context/ContextProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const { dispatch } = MainContext();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (userData?.username === "" || userData?.password === "") {
      toast.error("Please fill the form!");
      return;
    }

    if (userData.password.length < 4) {
      toast.error("Password must 4 character long!");
      return;
    }

    const user = { username: userData?.username };
    dispatch({ type: "LOGIN", payload: user });
    toast.success("Login Successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="login_section">
      <h2>LOGIN</h2>
      <form className="login_form" onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData?.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData?.password}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
