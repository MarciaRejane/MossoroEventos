import { useState, useEffect } from "react";

export function useAuth() {
  return { isAuthenticad: true };

  //{Descomentar quando colocar a tela de login novamente}
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   const checkAuth = () => {
  //     const hasToken = document.cookie.includes("token=");
  //     setIsAuthenticated(hasToken);
  //   };

  //   checkAuth();

  //   const interval = setInterval(checkAuth, 500);

  //   return () => clearInterval(interval);
  // }, []);
  // return { isAuthenticated };
}
