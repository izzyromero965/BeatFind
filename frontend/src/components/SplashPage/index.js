import React from "react";
import "./SplashPage.css";
import { useHistory } from "react-router-dom";

const SplashPage = () => {
  const routeChange = () => {
    let path = "/signup";
    history.push(path);
  };
  const history = useHistory();
  return (
    <div className="splash-container">
      <div className="description-container">
        <div className="description">
          <h1>Find your inspiration.</h1>
          <p>
            Join the BeatFind community, home to tens of billions of photos of
            your favorite moments.
          </p>
          <button onClick={routeChange} className="description-signupBtn">
            Start for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
