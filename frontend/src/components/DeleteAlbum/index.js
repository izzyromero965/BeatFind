import * as AlbumActions from "../../store/album";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const DeleteAlbum = ({ id }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const removeAlbum = (e) => {
    e.preventDefault();
    dispatch(AlbumActions.removeAlbum(+id));
    return history.push(`/${sessionUser.username}/profile`);
  };

  return (
    <div className="removeAlbumModal">
      <span>Are you sure you want to delete this album?</span>
      <button onClick={removeAlbum}>Delete</button>
    </div>
  );
};

export default DeleteAlbum;
