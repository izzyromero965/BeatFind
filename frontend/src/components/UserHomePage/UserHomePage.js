import React from "react";
import "./UserHomePage.css";
import { useSelector } from "react-redux";

const UserHomePage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div>
      <h1> Hello {sessionUser.username}</h1>
    </div>
  );
};

export default UserHomePage;
