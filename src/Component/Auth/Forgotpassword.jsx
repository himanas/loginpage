import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Auth/Styles.css";
import CustomNavbar from "../Pages/CustomNavbar";

function Forgotpassword() {
  const [forusername, setforusername] = useState("");
  const naviagte = useNavigate();
  const forgtPassword = () => {
    const link = "http://localhost:5000/forgotpassword/" + forusername;
    Axios.get(link, {
      email_id_or_username: forusername,
    })
      .then((response) => {
        console.log(response.data);
        alert("Please check mail & reset the password!");
        naviagte("/resetpassword");
        setforusername("");
      })
      .catch((err) => {
        alert(JSON.stringify(err.response.data.message));
      });
  };
  return (
    <>
      <CustomNavbar />
      <div className="parent_container">
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
            <button type="submit" className="butn" onClick={forgtPassword}>
              Send Mail
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgotpassword;
