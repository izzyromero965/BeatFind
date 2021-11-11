import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAlbumsImages } from "../../store/actions";
import { Link } from "react-router-dom";
import Header from "../Header/index";

import "./AlbumPage.css";

const AlbumPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [AlbumImages, setAlbumImages] = useState([]);

  useEffect(async () => {
    const returnedFromDispatch = await dispatch(getAlbumsImages(id));
    setAlbumImages(returnedFromDispatch);
  }, [dispatch]);

  return (
    <div className="AlbumPageContainer">
      <Header />
      <div className="images-container">
        {AlbumImages.map((image) => {
          return (
            <Link to={`/photos/${image.id}`} key={image.id}>
              <img
                src={image.imageUrl}
                key={image.id}
                className="albumImg"
              ></img>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AlbumPage;
