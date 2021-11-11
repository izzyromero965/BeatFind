import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserImages } from "../../store/actions";
import "./AllMyPhotos.css";
import Header from "../Header";

const AllMyPhotos = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  useEffect(async () => {
    const allImages = await dispatch(getUserImages(sessionUser.id));
    return setImages(allImages);
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="image-container">
        {images.map((image) => {
          return (
            <img src={image.imageUrl} key={image.id} className="image"></img>
          );
        })}
      </div>
    </>
  );
};

export default AllMyPhotos;
