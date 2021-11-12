import * as AlbumActions from "../../store/album";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./DeleteAlbum.css";

const DeleteAlbum = ({ id, setShowModal }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const removeAlbum = (e) => {
    e.preventDefault();
    dispatch(AlbumActions.removeAlbum(+id));
    setShowModal(false);
    return history.push(`/${sessionUser.username}/profile`);
  };

  return (
    <div className="removeAlbumModal">
      <span>Are you sure you want to delete this album?</span>
      <button onClick={removeAlbum} className="removeAlbumBtn">
        Delete
      </button>
    </div>
  );
};

export default DeleteAlbum;
