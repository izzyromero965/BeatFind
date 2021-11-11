import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import UserHomePage from "./components/UserHomePage/UserHomePage";
import ProfilePage from "./components/ProfilePage";
import AlbumPage from "./components/AlbumPage";
import PhotoPage from "./components/PhotoPage";
import UntitledImages from "./components/UntitledImages";
import AllMyPhotos from "./components/AllMyPhotos";
import Footer from "./components/Footer";

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
          <Route path={`/photos/:id`}>
            <PhotoPage />
          </Route>
          <Route path={`/homepage`}>
            <UserHomePage />
          </Route>
          {sessionUser && (
            <Switch>
              <Route path={`/${sessionUser.username}/profile`}>
                <ProfilePage />
              </Route>
              <Route path={`/albums/:id`}>
                <AlbumPage />
              </Route>
              <Route path={`/${sessionUser.username}/untitled`}>
                <UntitledImages />
              </Route>
              <Route path={`/${sessionUser.username}/allmyphotos`}>
                <AllMyPhotos />
              </Route>
            </Switch>
          )}

          <Route>404 not found!</Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
