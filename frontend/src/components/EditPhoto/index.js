import React, { useState, useEffect } from "react";
import * as imageActions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { getUserAlbums } from "../../store/album";
import { useHistory } from "react-router";
import "./EditPhoto.css";

const EditPhoto = ({ id, setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const photo = useSelector()
  const [content, setContent] = useState("");
  const [albumId, setAlbumId] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [image, setImage] = useState();
  useEffect(async () => {
    const userAlbums = await dispatch(getUserAlbums(sessionUser.id));
    const image = await dispatch(imageActions.getOneImage(id));
    setImage(image);
    setAlbums(userAlbums);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      content,
      albumId,
      id,
    };
    dispatch(imageActions.editImage(payload));
    setShowModal(false);
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
          <option value={null} key={1000}>
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
        <button type="submit" className="submitEditBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditPhoto;
