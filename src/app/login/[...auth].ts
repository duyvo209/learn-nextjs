import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { logoutAPI } from "../services/LoginService";

export default function useAuth() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const login = () => {
    setIsLoggedIn(true);
    Cookies.set("isLoggedIn", "true");
  };
  const logout = () => {
    Cookies.remove("isLoggedIn");
    Cookies.remove("token");

    logoutAPI();
  };
  const isAuthenticated = () => {
    // return isLoggedIn || Cookies.get("isLoggedIn") === "true";
    if (
      Cookies.get("token") !== undefined ||
      isLoggedIn ||
      Cookies.get("isLoggedIn")
    ) {
      console.log("home");
      return true;
    } else {
      console.log("login");
      router.push("/login");
      return false;
    }
  };
  return { login, logout, isAuthenticated };
}
