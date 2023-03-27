import React from "react";
import Cookies from "js-cookie";

export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const login = () => {
    setIsLoggedIn(true);
    Cookies.set("isLoggedIn", "true");
  };
  const logout = () => {
    Cookies.remove("isLoggedIn");
  };
  const isAuthenticated = () => {
    return isLoggedIn || localStorage.getItem("isLoggedIn") === "true";
  };
  return { login, logout, isAuthenticated };
}
