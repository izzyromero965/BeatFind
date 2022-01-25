import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../../store/actions';
import { getUserAlbums } from '../../store/album';
import { useHistory } from 'react-router';
import './UploadImage.css';

const UploadImage = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');
  const [albumId, setAlbumId] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(async () => {
    const userAlbums = await dispatch(getUserAlbums(sessionUser.id));
    setAlbums(userAlbums);
  }, [dispatch]);

  const reset = () => {
    setImageUrl('');
    setContent('');
    setAlbumId();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userId', sessionUser.id);
    formData.append('albumId', albumId);
    formData.append('image_url', imageUrl);
    formData.append('content', content);

    // const newImage = {
    //   userId: sessionUser.id,
    //   albumId,
    //   imageUrl,
    //   content,
    // };

    const newImageDispatched = await dispatch(uploadImage(formData));
    setShowModal(false);
    history.push(`/photos/${newImageDispatched.id}`);
    reset();
  };

  return (
    <div className="uploadImgContainer">
      <form onSubmit={handleSubmit} className="uploadImageForm">
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.gif"
          onChange={(e) => setImageUrl(e.target.files[0])}
          name="imageUrl"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="content"
          placeholder="Add a description"
          rows="10"
          required
        ></textarea>
        <select value={albumId} onChange={(e) => setAlbumId(e.target.value)}>
          <option value={null} key={999}>
            none
          </option>
          {albums?.map((album) => {
            return (
              <option value={album.id} key={album.id}>
                {album.title}
              </option>
            );
          })}
        </select>
        <button type="submit" className="uploadImageBtn">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadImage;
