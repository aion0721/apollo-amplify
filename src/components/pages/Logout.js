import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "../utils/firebase";

export default function Logout() {
  useEffect(() => {
    (async () => {
      await localStorage.removeItem("name");
      await firebase.auth().signOut();
    })();
    return () => {};
  }, []);

  return (
    <div>
      <div>Logout</div>
      <Link to="/">goto login</Link>
    </div>
  );
}
