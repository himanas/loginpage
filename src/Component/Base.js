import React from "react";
import CustomNavbar from "./Pages/CustomNavbar";

export default function Base({ title = "Welcome to netAIsys", children }) {
  return (
    <div>
      <CustomNavbar />
      {children}
    </div>
  );
}
