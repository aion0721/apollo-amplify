import React, { useEffect } from "react";
import { Auth } from "aws-amplify";
import { Redirect } from "react-router-dom";

export default function Logout() {
  useEffect(() => {
    Auth.signOut()
      .then(alert("Thank you for your using!"))
      .then(data => console.log(data))
      .catch(err => console.log(err));
    return () => {};
  }, []);

  return <Redirect to="/" />;
}
