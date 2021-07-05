import React from "react";
import { NavLink as RouterNavlink } from "react-router-dom";

const NavLink = (props) => (
  <RouterNavlink {...props} activeClassName="active" />
);

export default NavLink;
