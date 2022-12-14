import { useEffect, useState } from "react";
import AppContext from "./AppContext";

const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    localStorage.darkModeNext = darkMode ? "dark" : "light";
  }, [darkMode]);
  useEffect(() => {
    if (localStorage.darkModeNext) {
      setDarkMode(localStorage.darkModeNext === "dark" ? true : false);
    }
  }, []);
  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
