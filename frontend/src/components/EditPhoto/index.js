import React, { useState, useEffect } from "react";
import * as imageActions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { getUserAlbums } from "../../store/album";
import "./EditPhoto.css";

const EditPhoto = ({ id }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [content, setContent] = useState("");
  const [albumId, setAlbumId] = useState();
  const [albums, setAlbums] = useState([]);

  useEffect(async () => {
    const userAlbums = await dispatch(getUserAlbums(sessionUser.id));
    setAlbums(userAlbums);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      content,
      albumId,
    };
    return dispatch(imageActions.editImage({ payload, id }));
  };

  return (
    <div className="EditImageModal">
      <form onSubmit={handleSubmit} className="EditImageForm">
        <textarea
          placeholder="Edit description"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="10"
        ></textarea>
        <select value={albumId} onChange={(e) => setAlbumId(e.target.value)}>
          <option value={albumId} key={albumId}>
            none
          </option>
          {albums?.map((album) => {
            return (
              <option value={album.id} key={album.id}>
                {album.title}
              </option>
            );
          })}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditPhoto;
