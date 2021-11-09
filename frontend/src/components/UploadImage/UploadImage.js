import { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { addImages } from "../../store/actions";
import { uploadImage } from "../../store/actions";
import "./UploadImage.css";

const UploadImage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [albumId, setAlbumId] = useState();

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
      //I need to create a new image. check the requirements from the backend route.
    };

    const returnedFromDispatch = await dispatch(uploadImage(newImage));
    console.log(returnedFromDispatch);
    reset();
  };

  return (
    <div className="uploadImgContainer">
      <div>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default UploadImage;
