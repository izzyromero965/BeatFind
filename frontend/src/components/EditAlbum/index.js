import React, { useState, useEffect } from "react";
import * as AlbumActions from "../../store/album";
import { useDispatch, useSelector } from "react-redux";
import { getUserAlbums } from "../../store/album";

const EditAlbum = ({ id }) => {
  const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      title,
      id,
    };
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditAlbum;
