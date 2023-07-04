import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import HomePage from "./Component/Pages/Homepage";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";
import Forgotpassword from "./Component/Auth/Forgotpassword";
import Resetpassword from "./Component/Auth/Resetpasswword";
import Footer from "./Component/Pages/Footer";
import StateProvider from "./Component/GlobalContext/StateProvider";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <StateProvider>
        <CookiesProvider>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/homepage" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />s
              <Route path="/forgotpassword" element={<Forgotpassword />} />
              <Route path="/resetpassword" element={<Resetpassword />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </CookiesProvider>
      </StateProvider>
    </div>
  );
}

export default App;
