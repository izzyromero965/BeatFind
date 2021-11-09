import { csrfFetch } from "./csrf";
const SET_USER = "user/setUser";
const REMOVE_USER = "user/removeUser";

export const setUser = (user) => {
  return { type: SET_USER, user };
};

const removeUser = () => {
  return { type: REMOVE_USER };
};

// dispatch(loginUser({credential : "email@email.com", password : 'password'}))
export const loginUser = (payload) => async (dispatch) => {
  const res = await csrfFetch("/api/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const loggedInUser = await res.json();
  dispatch(setUser(loggedInUser.user));
  return loggedInUser;
};

export const restoreUser = () => async (dispatch) => {
  const res = await csrfFetch("/api/session");
  const data = await res.json();
  console.log(data);
  dispatch(setUser(data.user));
  return res;
};

export const signupUser = (payload) => async (dispatch) => {
  const res = await csrfFetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  dispatch(setUser(data.user));
  return res;
};

export const logoutUser = () => async (dispatch) => {
  const res = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  return res;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case REMOVE_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;
