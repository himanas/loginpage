// StateProvider.js
import React, { useState } from "react";
import StateContext from "./StateContext";

const StateProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState("Login");

  const updateState = (newState) => {
    setSharedState(newState);
  };

  return (
    <StateContext.Provider value={{ sharedState, updateState }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
