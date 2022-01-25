import { csrfFetch } from './csrf';

const LOAD_IMAGES = 'images/loadImages';
const ADD_IMAGES = 'images/addImages';
const REMOVE_IMAGES = 'images/removeImages';
const UPDATE_IMAGES = 'images/updateImages';
const LOAD_ONEIMAGE = 'images/loadOneImage';

const loadOneImage = (image) => {
  return { type: LOAD_ONEIMAGE, image };
};

export const loadImages = (images) => {
  return { type: LOAD_IMAGES, images };
};

const removeImages = (imageId) => ({
  type: REMOVE_IMAGES,
  imageId,
});

export const addImages = (newImage) => ({
  type: ADD_IMAGES,
  newImage,
});

export const updateImage = (newImage) => ({
  type: UPDATE_IMAGES,
  newImage,
});

export const getImages = () => async (dispatch) => {
  const res = await csrfFetch('/api/images');
  const images = await res.json();
  dispatch(loadImages(images));
  return images;
};

export const getUntitledImages = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${id}/null`);
  const images = await res.json();
  dispatch(loadImages(images));
  return images;
};

export const getAlbumsImages = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/albums/${id}`);
  const images = await res.json();
  dispatch(loadImages(images));
  return images;
};

export const uploadImage = (formdata) => async (dispatch) => {
  const res = await csrfFetch('/api/images', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formdata,
  });

  const newImage = await res.json();
  dispatch(addImages(newImage));
  return newImage;
};

export const editImage = (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${payload.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const updatedImage = await res.json();
  dispatch(updateImage(updatedImage));
  return updatedImage;
};

export const getOneImage = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${id}`);
  const image = await res.json();
  dispatch(loadOneImage(image));
  return image;
};

export const getUserImages = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${id}/images`);
  const images = await res.json();
  dispatch(loadImages(images));
  return images;
};

export const deleteImage = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${id}`, {
    method: 'DELETE',
  });
  dispatch(removeImages(id));
  return res;
};

const initialState = {};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGES:
      const newState = { ...state };
      action.images.forEach((image) => {
        newState[image.id] = image;
      });
      return newState;
    case ADD_IMAGES:
    case UPDATE_IMAGES:
      return {
        ...state,
        [action.newImage.id]: action.newImage,
      };
    case REMOVE_IMAGES: {
      const newState = { ...state };
      delete newState[action.imageId];
      return newState;
    }
    case LOAD_ONEIMAGE: {
      let newState = { ...state };
      newState[action.image.id] = action.image;
      return newState;
    }
    default:
      return state;
  }
};

export default imageReducer;
