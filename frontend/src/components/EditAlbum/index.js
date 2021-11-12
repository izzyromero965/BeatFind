import React, { useState, useEffect } from "react";
import * as AlbumActions from "../../store/album";
import { useDispatch, useSelector } from "react-redux";
import "./EditAlbum.css";

const EditAlbum = ({ id, setShowModal }) => {
  const dispatch = useDispatch();
  const albumState = useSelector((state) => state.albumState[id]);
  const [title, setTitle] = useState(albumState.title);
  const [albumCoverUrl, setAlbumCoverUrl] = useState(albumState.albumCoverUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      title,
      id,
      albumCoverUrl,
    };

    dispatch(AlbumActions.editAlbum(payload));
    setShowModal(false);
  };

  return (
    <div className="EditAlbumModal">
      <form onSubmit={handleSubmit} className="EditAlbumForm">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Album Title"
          required
        ></input>
        <input
          type="text"
          onChange={(e) => setAlbumCoverUrl(e.target.value)}
          value={albumCoverUrl}
          placeholder="Album picture url"
          name="AlbumProfilePic"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditAlbum;
