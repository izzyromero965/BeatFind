import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getUntitledImages } from "../../store/actions";
import Header from "../Header";
import "./UntitledImage.css";
const UntitledImages = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [AlbumImages, setAlbumImages] = useState([]);

  useEffect(async () => {
    const returnedFromDispatch = await dispatch(
      getUntitledImages(sessionUser.id)
    );
    console.log(returnedFromDispatch);
    setAlbumImages(returnedFromDispatch);
  }, [dispatch]);

  return (
    <div className="AlbumPageContainer">
      <Header />
      <div className="images-container">
        {AlbumImages.map((image) => {
          return (
            <Link to={`/photos/${image.id}`} key={image.id}>
              <img
                src={image.imageUrl}
                key={image.id}
                className="albumImg"
              ></img>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default UntitledImages;
