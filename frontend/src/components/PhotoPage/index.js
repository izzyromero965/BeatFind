import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages, getOneImage } from "../../store/actions";
import { useParams } from "react-router";
import EditPhotoModal from "../EditPhoto/EditPhotoModal";
import DeletePhotoModal from "../DeletePhoto/DeletePhotoModal";
import "./PhotoPage.css";

const PhotoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [image, setImage] = useState();
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(async () => {
    const oneImage = await dispatch(getOneImage(id));
    setImage(oneImage);
    setIsLoaded(true);
  }, [dispatch]);

  return (
    isLoaded && (
      <div className="photoPageContainer">
        <div className="photoHeader">
          <img src={image.imageUrl} className="photoPageImage"></img>
        </div>
        <div className="photoDescription">
          <h3>{image.content}</h3>
        </div>
        {image.userId == sessionUser?.id && (
          <div className="modalBtns">
            <EditPhotoModal id={+id} />
            <DeletePhotoModal id={+id} />
          </div>
        )}
      </div>
    )
  );
};

export default PhotoPage;
