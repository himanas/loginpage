import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Auth/Styles.css";
import CustomNavbar from "../Pages/CustomNavbar";

const Signup = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [useremail, setuseremail] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const naviagte = useNavigate();

  // const handleLoginClick = () => {
  //   naviagte("/login");
  // };

  const register = () => {
    const fullname = Firstname + " " + Lastname;
    Axios.post("http://localhost:5000/signup", {
      username: username,
      name: fullname,
      email_id: useremail,
      password: password,
    })
      .then((response) => {
        console.log("Registered successfully!\n Please login.");
        alert("Please check your mail!");
        naviagte("/login");
        //handleLoginClick();
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

  return (
    <>
      <CustomNavbar />
      <div className="parent_container">
        <div className="registration">
          <h1>Register</h1>
          <label>First Name</label>
          <input
            type="text"
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            required
          />
          <label>Last Name</label>
          <input
            type="text"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            required
          />
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
            <button type="submit" className="butn" onClick={register}>
              Register
            </button>
            {/* <button
            type="submit"
            className="butn"
            style={{ width: "100px", margin: "22px 10px 0px 10px" }}
            onClick={handleLoginClick}
          >
            Login
          </button> */}
            <p>
              By clicking the Sign Up button,you agree to our <br />
              <Link to="">Terms and Condition</Link> and{" "}
              <Link to="">Policy Privacy</Link>
            </p>
          </div>
          <p class="para-2">
            Already have an account? <a href="login.html">Login here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
