import { csrfFetch } from "./csrf";

const LOAD_ALBUMS = "albums/loadAlbums";
const ADD_ALBUMS = "albums/addAlbums";
const REMOVE_ALBUMS = "albums/removeAlbums";
const UPDATE_ALBUMS = "albums/updateAlbums";

const removeAlbums = (albumId) => ({
  type: REMOVE_ALBUMS,
  albumId,
});

export const loadAlbums = (albums) => {
  return {
    type: LOAD_ALBUMS,
    albums,
  };
};

export const addAlbum = (newAlbum) => ({
  type: ADD_ALBUMS,
  newAlbum,
});

export const updateAlbums = (newAlbum) => ({
  type: UPDATE_ALBUMS,
  newAlbum,
});

export const getUserAlbums = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${id}/albums`);
  const albums = await res.json();
  dispatch(loadAlbums(albums));
  return albums;
};

export const createAlbum = (payload) => async (dispatch) => {
  const res = await csrfFetch("/api/albums", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const newAlbum = await res.json();
  dispatch(addAlbum(newAlbum));
  return newAlbum;
};

export const editAlbum = (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/albums/${payload.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const updatedAlbum = await res.json();
  dispatch(updateAlbums(updatedAlbum));
  return updatedAlbum;
};

export const removeAlbum = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/albums/${id}`, {
    method: "DELETE",
  });
  dispatch(removeAlbums(id));
  return res;
};
const initialState = { albums: {} };

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALBUMS:
      const newState = { ...state, albums: { ...state.albums } };
      action.albums.forEach((album) => {
        newState.albums[album.id] = album;
      });
      return newState;
    case ADD_ALBUMS:
    case UPDATE_ALBUMS:
      return {
        ...state,
        albums: {
          ...state.albums,
          [action.newAlbum.id]: action.newAlbum,
        },
      };
    case REMOVE_ALBUMS: {
      const newState = { ...state };
      delete newState[action.albumId];
      return newState;
    }
    default:
      return state;
  }
};

export default albumReducer;
