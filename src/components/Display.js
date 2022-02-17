import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../store/AuthContext";
export const Display = () => {
  const cartCtx = useContext(AuthContext);
  const [token, setToken] = useState("");
  const displayFun = () => {
    console.log(token);
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      }),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    displayFun();
  }, [cartCtx.isAuth]);

  return (
    <React.Fragment>
      {cartCtx.isAuth
        ? token + `-----------------------------user is logged in`
        : "user is logged out"}
    </React.Fragment>
  );
};
