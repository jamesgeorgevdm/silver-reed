import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/userSlice"; // Redux action for user login
import Login from "./Login";
import Registration from "./Registration";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  const handleLogin = (username) => {
    dispatch(login(username));
  };

  return (
    /*Home-page layout*/
    <div className="home-background">
      <h1 className="header-title">
        Welcome to the{" "}
        <span className="silver-reed">Silver Reed Saxophone</span> Store
      </h1>
      <div className="home-container">
        <div className="input-forms">
          <div className="form-container">
            <Login handleLogin={handleLogin} />
          </div>
          <div className="form-container">
            <Registration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
