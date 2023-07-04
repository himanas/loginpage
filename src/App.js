import React, { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [useremail, setuseremail] = useState("");
  const [logusername, setLogusername] = useState("");
  const [logpassword, setLogpassword] = useState("");
  const [forusername, setforusername] = useState("");
  const [resusername, setResusername] = useState("");
  const [isLoginVisible, setisLoginVisible] = useState(true);
  const [isRegisterVisible, setisRegisterVisible] = useState(false);
  const [isResetVisible, setisResetVisible] = useState(false);
  const [isForgotVisible, setisForgotVisible] = useState(false);
  const [new_password, setnew_password] = useState("");
  const [otp, setotp] = useState(0);

  const handleRegisterClick = () => {
    setisLoginVisible(false);
    setisRegisterVisible(true);
    setisResetVisible(false);
    setisForgotVisible(false);
  };

  const handleLoginClick = () => {
    setisLoginVisible(true);
    setisRegisterVisible(false);
    setisResetVisible(false);
    setisForgotVisible(false);
  };

  const handleForgotClick = () => {
    setisForgotVisible(true);
    setisRegisterVisible(false);
    setisResetVisible(false);
    setisLoginVisible(false);
  };

  const handleAll = () => {
    alert("Please login again!");
    setisLoginVisible(false);
    setisRegisterVisible(false);
    setisResetVisible(true);
    setisForgotVisible(false);
  };

  const register = () => {
    Axios.post("http://localhost:3000/auth/signup", {
      username: username,
      email_id: useremail,
      password: password,
    })
      .then((response) => {
        console.log("Registered successfully");
        alert("Please check your mail!");
        handleLoginClick();
        setusername("");
        setuseremail("");
        setpassword("");
      })
      .catch((err) => {
        // const errorMessage =
        alert(err.response.data.error);
        // if (errorMessage.slice(0, 16) === "Duplicate entry") {
        //   alert(
        //     "Username/Email id is already present, please try again with new email!"
        //   );
        // }
      });
  };

  const login = () => {
    Axios.post("http://localhost:3000/auth/login", {
      username: logusername,
      password: logpassword,
    })
      .then((response) => {
        alert(JSON.stringify(response.data.message));
        setLogusername("");
        setLogpassword("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const forgotPassword = () => {
    const link = "http://localhost:3000/auth/password-reset/" + forusername;
    Axios.get(link, {
      email_id_or_username: forusername,
    })
      .then((response) => {
        handleAll();
        console.log(response.data);

        setforusername("");
      })
      .catch((err) => {
        alert(JSON.stringify(err.response.data.message));
      });

    // handleResetPassword();
  };

  const resetpassword = () => {
    Axios.post("http://localhost:3000/auth/password-reset/", {
      username: resusername,
      otp: otp,
      new_password: new_password,
    })
      .then((response) => {
        alert(JSON.stringify(response.data.message));
        console.log(response.data.message);
        setResusername("");
        setotp("");
        setnew_password("");
      })
      .catch((err) => {
        console.log(err);
      });

    handleLoginClick();
  };

  return (
    <div className="App">
      <div className="header">
        <h1>netAIsys</h1>
      </div>
      {isRegisterVisible && (
        <div className="registration">
          <h1>Register</h1>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => {
              setusername(e.target.value);
            }}
            required
          />
          <label>Email</label>
          <input
            type="text"
            onChange={(e) => {
              setuseremail(e.target.value);
            }}
            required
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
          />

          <div className="button-wrapper">
            <button type="submit" className="btn" onClick={register}>
              Register
            </button>
            <button
              type="submit"
              className="btn"
              style={{ width: "100px", margin: "22px 10px 0px 10px" }}
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        </div>
      )}
      {isLoginVisible && (
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
            <button type="submit" className="btn" onClick={login}>
              Login
            </button>

            <button
              type="submit"
              className="btn"
              style={{ width: "150px", margin: "21px 11px 0px 23px" }}
              onClick={handleRegisterClick}
            >
              Register Here!
            </button>

            <button
              type="submit"
              className="btn"
              style={{ width: "150px", margin: "22px 10px 0px 10px" }}
              onClick={handleForgotClick}
            >
              Reset Password
            </button>
          </div>
        </div>
      )}
      {isForgotVisible && (
        <div className="forgotPassword">
          <h1>Forgot Password</h1>
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => {
              setforusername(e.target.value);
            }}
            required
          />
          <div className="button-wrapper">
            <button type="submit" className="btn" onClick={forgotPassword}>
              Send Mail
            </button>
          </div>
        </div>
      )}
      {isResetVisible && (
        <div className="resetpassword">
          <h1>Reset Password</h1>
          <label>Username</label>
          <input
            type="text"
            name=""
            onChange={(e) => {
              setResusername(e.target.value);
            }}
          />
          <label>New Password</label>
          <input
            type="password"
            onChange={(e) => {
              setnew_password(e.target.value);
            }}
          />
          <label>OTP</label>
          <input
            type="text"
            name="otp"
            onChange={(e) => {
              setotp(e.target.value);
            }}
            required
          />

          <div className="button_wrapper">
            <button
              className="btn"
              style={{ width: "180px" }}
              type="submit"
              onClick={resetpassword}
            >
              Change Password
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
