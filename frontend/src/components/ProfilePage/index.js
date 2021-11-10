import { useEffect, useState } from "react";
import * as AlbumActions from "../../store/album";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./ProfilePage.css";
import DeleteAlbumModal from "../DeleteAlbum/DeleteAlbumModal";
import EditAlbumModal from "../EditAlbum/EditAlbumModal";
import CreateAlbumModal from "../CreateAlbum/CreateAlbumModal";
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
        <CreateAlbumModal />
        <Link to={`/${sessionUser.username}/untitled`}>Untitled Images</Link>
        {albums.map((album) => {
          return (
            <div>
              <Link
                to={`/albums/${album.id}`}
                key={album.id}
                className="albumLink"
              >
                {album.title}
              </Link>
              <EditAlbumModal id={album.id} key={""} />
              <DeleteAlbumModal id={album.id} key={""} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfilePage;
