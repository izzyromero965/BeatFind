import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../store/actions";
import { getUserAlbums } from "../../store/album";
import "./UploadImage.css";

const UploadImage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [albumId, setAlbumId] = useState();
  const [albums, setAlbums] = useState([]);

  useEffect(async () => {
    const userAlbums = await dispatch(getUserAlbums(sessionUser.id));
    setAlbums(userAlbums);
  }, [dispatch]);

  const reset = () => {
    setImageUrl("");
    setContent("");
    setAlbumId();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newImage = {
      userId: sessionUser.id,
      albumId,
      imageUrl,
      content,
    };

    const returnedFromDispatch = await dispatch(uploadImage(newImage));

    reset();
  };

  return (
    <div className="uploadImgContainer">
      <form onSubmit={handleSubmit} className="uploadImageForm">
        <input
          type="text"
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          placeholder="Image url"
          name="imageUrl"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="content"
          placeholder="Add a description"
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
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadImage;
