import React from "react";
import { NavLink } from "react-router-dom";

const SignoutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">Sign in</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Log in</NavLink>
      </li>
    </ul>
  );
};

export default SignoutLinks;
