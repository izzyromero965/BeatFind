import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal/index";
import ProfileButton from "./ProfileButton";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logoutUser());
    return history.push("/");
  };
  let sessionLinks;
  let homeLink;
  if (sessionUser) {
    homeLink = (
      <>
        <NavLink className="nav-link" to={`/${sessionUser.id}/homepage`}>
          Home
        </NavLink>
        <NavLink to={`/${sessionUser.username}/profile`}>Profile</NavLink>
      </>
    );
    sessionLinks = (
      <>
        <NavLink to={`/${sessionUser.id}/upload`}>Upload</NavLink>
        <button onClick={logout}>Log Out</button>
      </>
    );
  } else {
    homeLink = (
      <NavLink className="nav-link" exact to="/">
        Home
      </NavLink>
    );
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
      <div>{isLoaded && homeLink}</div>
      <div>{isLoaded && sessionLinks}</div>
    </nav>
  );
};

export default Navigation;
