import React, { useContext, useState } from "react";
import Axios from "axios";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import CustomNavbar from "../Pages/CustomNavbar";
import StateContext from "../GlobalContext/StateContext";

const Login = () => {
  const { sharedState, updateState } = useContext(StateContext);
  const [logusername, setLogusername] = useState("");
  const [logpassword, setLogpassword] = useState("");

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/signup");
  };
  const handleForgotClick = () => {
    navigate("/forgotpassword");
  };

  const validate_login = async () => {
    const jwtCookie = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(Cookies.get("jwt"));
      }, 0);
    });

    if (jwtCookie && jwtCookie !== "") {
      return true;
    } else {
      return false;
    }
  };

  const signin = async () => {
    const isAlreadyLoggedIn = await validate_login();
    if (isAlreadyLoggedIn === true) {
      alert("Already logged in!!!");
    } else {
      Axios.post("http://localhost:5000/login", {
        username: logusername,
        password: logpassword,
      })
        .then((response) => {
          console.log(JSON.stringify(response.data.message));
          alert(JSON.stringify(response.data.message));
          // console.log(response.data.token);
          updateState("Logout");
          Cookies.set("jwt", response.data.token, {
            secure: true,
            expires: 0.25,
          });
          console.log(sharedState);
          setLogusername("");
          setLogpassword("");
          navigate("/homepage");
        })
        .catch((err) => {
          alert(JSON.stringify(err.response.data.error));
          console.log(err);
        });
    }
  };

  return (
    <>
      <CustomNavbar />
      <div className="parent_container">
        <div className="login">
          <h1>Login</h1>
          <label>Username</label>
          <input
            type="emails"
            onChange={(e) => {
              setLogusername(e.target.value);
            }}
            required
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setLogpassword(e.target.value);
            }}
            required
          />
          <div className="button-wrapper">
            <button type="submit" className="butn" onClick={signin}>
              Login
            </button>

            <button
              type="submit"
              className="butn"
              style={{ width: "150px", margin: "21px 11px 0px 23px" }}
              onClick={handleRegisterClick}
            >
              Register Here!
            </button>

            <button
              type="submit"
              className="butn"
              style={{ width: "150px", margin: "22px 10px 0px 10px" }}
              onClick={handleForgotClick}
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
