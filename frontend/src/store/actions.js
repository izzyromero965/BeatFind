import { csrfFetch } from "./csrf";

const LOAD_IMAGES = "images/loadImages";
const ADD_IMAGES = "images/addImages";
export const loadImages = (images) => {
  return { type: LOAD_IMAGES, images };
};

export const addImages = (newImage) => ({
  type: ADD_IMAGES,
  newImage,
});

export const getImages = () => async (dispatch) => {
  const res = await csrfFetch("/api/images");
  console.log(res);
  const images = await res.json();
  console.log(images);
  dispatch(loadImages(images));
  return images;
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
      return {
        ...state,
        images: {
          ...state.images,
          [action.newImage.id]: action.newImage,
        },
      };
    default:
      return state;
  }
};

export default imageReducer;
