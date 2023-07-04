import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Auth/Styles.css";
import CustomNavbar from "../Pages/CustomNavbar";

function Resetpassword() {
  const [resusername, setResusername] = useState("");
  const [new_password, setnew_password] = useState("");
  const [otp, setotp] = useState(0);
  const navigate = useNavigate();

  const resetpassword = () => {
    Axios.post("http://localhost:5000/forgotpassword", {
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
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert(JSON.stringify(err.response.data.error));
      });
  };

  const resendMail = () => {
    navigate("/forgotpassword");
  };

  return (
    <>
      <CustomNavbar />
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
            className="butn"
            style={{ width: "180px" }}
            type="submit"
            onClick={resetpassword}
          >
            Change Password
          </button>

          <button
            className="butn"
            style={{ width: "180px", "margin-left": "10px" }}
            type="submit"
            onClick={resendMail}
          >
            Resend OTP
          </button>
        </div>
      </div>
    </>
  );
}

export default Resetpassword;
