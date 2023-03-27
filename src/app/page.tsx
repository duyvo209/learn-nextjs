"use client";

import { Button } from "@mui/material";
import useAuth from "./login/[...auth]";

export default function Home() {
  const { isAuthenticated, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      {isAuthenticated() ? (
        <>
          <h1>Duy Vo</h1>
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <p>you do not have permission to view this page</p>
        </>
      )}
    </>
  );
}
