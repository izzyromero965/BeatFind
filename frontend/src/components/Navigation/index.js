import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal/index";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup" className="nav-link">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
