"use client";
import React, { useState, useContext, useEffect } from "react";

const StateContext = React.createContext();

const StateProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <StateContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalStateContext = () => {
  return useContext(StateContext);
};

export { StateContext, StateProvider };
