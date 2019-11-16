import React from "react";
import { Redirect } from "react-router-dom";

function Auth(props) {
  return localStorage.getItem("name") ? (
    props.children
  ) : (
    <Redirect to={"/login"} />
  );
}

export default Auth;
