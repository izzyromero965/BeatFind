import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/actions";
import { useParams } from "react-router";
import { Modal } from "../../context/Modal";

import "./PhotoPage.css";
import EditPhoto from "../EditPhoto";
import DeleteImage from "../DeletePhoto";

const PhotoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
          <button onClick={() => setShowModal(true)}>Edit</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EditPhoto id={id} />
            </Modal>
          )}
          <button onClick={() => setShowModal(true)}>Delete</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <DeleteImage id={id} />
            </Modal>
          )}
        </div>
      </div>
    )
  );
};

export default PhotoPage;
