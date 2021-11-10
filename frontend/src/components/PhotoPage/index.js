import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/actions";
import { useParams } from "react-router";

import "./PhotoPage.css";

const PhotoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [image, setImage] = useState();

  const oneImage = useSelector((state) => state.imageState.images[id]);
  console.log(oneImage);
  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className="photoPageContainer">
      <div className="photoHeader">
        {<img src={oneImage.imageUrl} className="photoPageImage"></img>}
      </div>
      <div className="photoDescription">
        <p>{oneImage.content}</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default PhotoPage;
