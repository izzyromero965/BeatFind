import React, { useState, useEffect } from "react";
import * as AlbumActions from "../../store/album";
import { useDispatch, useSelector } from "react-redux";
import { getUserAlbums } from "../../store/album";

const EditAlbum = ({ id }) => {
  const dispatch = useDispatch();
  const albumState = useSelector((state) => state.albumState.albums[id]);
  const [title, setTitle] = useState(albumState.title);
  const [albumCoverUrl, setAlbumCoverUrl] = useState(albumState.albumCoverUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      title,
      id,
      albumCoverUrl,
    };
    console.log(albumCoverUrl);
    return dispatch(AlbumActions.editAlbum(payload));
  };

  return (
    <form onSubmit={handleSubmit} className="EditAlbumForm">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Album Title"
      ></input>
      <input
        type="text"
        onChange={(e) => setAlbumCoverUrl(e.target.value)}
        value={albumCoverUrl}
        placeholder="Album picture url"
        name="AlbumProfilePic"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default EditAlbum;
