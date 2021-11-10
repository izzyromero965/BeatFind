import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "../../store/actions";
import { Link } from "react-router-dom";
import "./UserHomePage.css";

const UserHomePage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const imageObj = useSelector((state) => state.imageState.images);
  const images = Object.values(imageObj);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className="homepage-container">
      <div className="images">
        {images.map((image) => {
          return (
            <Link
              to={`/${sessionUser.username}/photos/${image.id}`}
              key={image.id}
            >
              <img
                src={image.imageUrl}
                className="homepageImg"
                key={image.id}
              />
              <div className="bottomLeft">{image.content}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default UserHomePage;
