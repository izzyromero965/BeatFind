import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/actions";
import { useParams } from "react-router";

import "./PhotoPage.css";
import EditPhotoModal from "../EditPhoto/EditPhotoModal";
import DeletePhotoModal from "../DeletePhoto/DeletePhotoModal";

const PhotoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const oneImage = useSelector((state) => state.imageState.images[id]);
  console.log(oneImage);
  useEffect(() => {
    dispatch(getImages()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <div className="photoPageContainer">
        <div className="photoHeader">
          {<img src={oneImage.imageUrl} className="photoPageImage"></img>}
        </div>
        <div className="photoDescription">
          <p>{oneImage.content}</p>
          <EditPhotoModal id={+id} />
          <DeletePhotoModal id={+id} />
        </div>
      </div>
    )
  );
};

export default PhotoPage;