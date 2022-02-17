import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  const [login, setLogin] = useState(false);
  const authHandler = () => {
    setLogin((prev) => !prev);
  };
  const auth = {
    isAuth: login,
    toggleAuth: authHandler,
  };
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
