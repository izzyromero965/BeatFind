import { useEffect, useState } from "react";
import * as AlbumActions from "../../store/album";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "../../context/Modal";

import "./ProfilePage.css";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const [albums, setAlbums] = useState([]);

  useEffect(async () => {
    const userAlbums = await dispatch(
      AlbumActions.getUserAlbums(sessionUser.id)
    );
    setAlbums(userAlbums);
  }, [dispatch]);

  return (
    <div className="profile-container">
      <div className="profile header"></div>
      <div className="albums-container">
        <Link to={`/${sessionUser.username}/myImages`}>All My Images</Link>
        {albums.map((album) => {
          return (
            <Link
              to={`/albums/${album.id}`}
              key={album.id}
              className="albumLink"
            >
              {album.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProfilePage;
