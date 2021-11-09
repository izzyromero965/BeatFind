import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal/index";
import ProfileButton from "./ProfileButton";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logoutUser());
  };
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to={`${sessionUser.id}/upload`}>Upload</NavLink>
        <button onClick={logout}>Log Out</button>
      </>
    );
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
      <div>
        <NavLink className="nav-link" exact to="/">
          Home
        </NavLink>
      </div>
      <div>{isLoaded && sessionLinks}</div>
    </nav>
  );
};

export default Navigation;
