import { useEffect, useState } from "react";
import * as AlbumActions from "../../store/album";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAlbumsImages } from "../../store/actions";

import "./AlbumPage.css";

const AlbumPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [AlbumImages, setAlbumImages] = useState([]);

  useEffect(async () => {
    const returnedFromDispatch = await dispatch(getAlbumsImages(id));
    console.log(returnedFromDispatch);
    setAlbumImages(returnedFromDispatch);
  }, [dispatch]);

  return (
    <div className="AlbumPageContainer">
      <div className="images-container">
        {AlbumImages.map((image) => {
          return (
            <img src={image.imageUrl} key={image.id} className="albumImg"></img>
          );
        })}
      </div>
    </div>
  );
};

export default AlbumPage;
