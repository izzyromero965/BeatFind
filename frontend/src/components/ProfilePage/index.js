import { useEffect, useState } from "react";
import * as AlbumActions from "../../store/album";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Header/index";

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
      <Header />
      <div className="albums-container">
        {albums.map((album) => {
          return (
            <div className="one-album">
              <img className="albumCoverPic" src={album.albumCoverUrl}></img>
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
