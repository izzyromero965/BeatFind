import { csrfFetch } from "./csrf";

const LOAD_IMAGES = "images/loadImages";
const ADD_IMAGES = "images/addImages";
const REMOVE_IMAGES = "images/removeImages";
const UPDATE_IMAGES = "images/updateImages";

const removeImages = (imageId) => ({
  type: REMOVE_IMAGES,
  imageId,
});

export const loadImages = (images) => {
  return { type: LOAD_IMAGES, images };
};

export const addImages = (newImage) => ({
  type: ADD_IMAGES,
  newImage,
});

export const updateImage = (image) => ({
  type: UPDATE_IMAGES,
  image,
});

export const removeImage = (imageId) => ({
  type: REMOVE_IMAGES,
  imageId,
});

export const getImages = () => async (dispatch) => {
  const res = await csrfFetch("/api/images");
  console.log(res);
  const images = await res.json();
  console.log(images);
  dispatch(loadImages(images));
  return images;
};

export const uploadImage = (payload) => async (dispatch) => {
  const res = await csrfFetch("/api/images", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const newImage = await res.json();
  dispatch(addImages(newImage));
  return newImage;
};

export const editImage = (payload, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const updatedImage = await res.json();
  dispatch(updateImage(updatedImage));
  return updatedImage;
};

export const getUserImages = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${id}/images`);
  const images = await res.json();
  dispatch(loadImages(images));
  return images;
};

export const deleteImage = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${id}`, {
    method: "DELETE",
  });
  dispatch(removeImages(id));
  return res;
};

const initialState = { images: {} };

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGES:
      const newState = { ...state, images: { ...state.images } };
      action.images.forEach((image) => {
        newState.images[image.id] = image;
      });
      return newState;
    case ADD_IMAGES:
    case UPDATE_IMAGES:
      return {
        ...state,
        images: {
          ...state.images,
          [action.newImage.id]: action.newImage,
        },
      };
    case REMOVE_IMAGES: {
      const newState = { ...state };
      delete newState[action.imageId];
      return newState;
    }
    default:
      return state;
  }
};

export default imageReducer;
