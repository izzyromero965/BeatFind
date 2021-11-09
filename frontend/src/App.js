import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import UserHomePage from "./components/UserHomePage/UserHomePage";
import UploadImage from "./components/UploadImage/UploadImage.js";
import ProfilePage from "./components/ProfilePage";
import AlbumPage from "./components/AlbumPage";

function App() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          {sessionUser && (
            <Switch>
              <Route path={`/${sessionUser.id}/homepage`}>
                <UserHomePage />
              </Route>
              <Route path={`/${sessionUser.id}/upload`}>
                <UploadImage />
              </Route>
              <Route path={`/${sessionUser.username}/profile`}>
                <ProfilePage />
              </Route>
              <Route path={`/albums/:id`}>
                <AlbumPage />
              </Route>
            </Switch>
          )}
          <Route>404 not found!</Route>
        </Switch>
      )}
    </>
  );
}

export default App;
