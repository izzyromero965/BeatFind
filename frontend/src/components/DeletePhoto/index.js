import * as imageActions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import "./DeletePhoto.css";
import { useHistory } from "react-router-dom";

const DeleteImage = ({ id }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const removeImage = (e) => {
    e.preventDefault();
    dispatch(imageActions.deleteImage(+id));
    return history.push(`/${sessionUser.username}/profile`);
  };

  return (
    <div className="removeImageModal">
      <span>Are you sure you want to delete this image?</span>
      <button onClick={removeImage} className="deleteImageBtn">Delete</button>
    </div>
  );
};

export default DeleteImage;
