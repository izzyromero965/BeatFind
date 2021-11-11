import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAlbum } from "../../store/album";

const CreateAlbum = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [title, setTitle] = useState("");
  const [albumCoverUrl, setAlbumCoverUrl] = useState("");

  const reset = () => {
    setTitle("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      userId: sessionUser.id,
      title,
      albumCoverUrl,
    };

    const returnedFromDispatch = await dispatch(createAlbum(payload));
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="album's title"
        name="albumTitle"
        required
      />
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
  );
};

export default CreateAlbum;
