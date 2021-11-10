import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAlbum } from "../../store/album";

const CreateAlbum = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [title, setTitle] = useState("");

  const reset = () => {
    setTitle("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      userId: sessionUser.id,
      title,
    };

    const returnedFromDispatch = await dispatch(createAlbum(payload));
    console.log(returnedFromDispatch);
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
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateAlbum;
