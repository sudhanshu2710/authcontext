import React, { useContext } from "react";
import AuthContext from "../store/AuthContext";
import style from "./Navbar.module.css";
export const Navbar = () => {
  const cartCtx = useContext(AuthContext);
  const handle = () => {
    cartCtx.toggleAuth();
  };
  return (
    <React.Fragment>
      <div className={style.container}>
        <div>Navbar</div>

        <button onClick={handle}>{!cartCtx.isAuth ? "login" : "logout"}</button>
      </div>
    </React.Fragment>
  );
};
