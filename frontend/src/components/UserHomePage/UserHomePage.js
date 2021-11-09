import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "../../store/actions";
import "./UserHomePage.css";

const UserHomePage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const imageObj = useSelector((state) => state.imageState.images);
  const images = Object.values(imageObj);
  console.log("imageslolololol", images);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);
  console.log(imageObj);

  return (
    <div className="homepage-container">
      <div className="images">
        {images.map((image) => {
          return (
            <img
              src={image.imageUrl}
              className="homepageImg"
              key={image.id}
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default UserHomePage;
