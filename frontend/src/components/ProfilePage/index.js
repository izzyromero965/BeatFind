import { useEffect, useState } from "react";
import * as AlbumActions from "../../store/album";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Header/index";

import "./ProfilePage.css";
import DeleteAlbumModal from "../DeleteAlbum/DeleteAlbumModal";
import EditAlbumModal from "../EditAlbum/EditAlbumModal";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const albumSelect = useSelector((state) => Object.values(state.albumState));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(AlbumActions.getUserAlbums(sessionUser.id));
    if (albumSelect) {
      setIsLoaded(true);
    }
  }, [dispatch]);

  return (
    isLoaded && (
      <div className="profile-container">
        <Header />
        <div className="albums-container">
          {albumSelect.map((album) => {
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
                <div className="btnDiv">
                  <EditAlbumModal id={album.id} key={""} />
                  <DeleteAlbumModal id={album.id} key={""} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default ProfilePage;
