export const setFavorite = payload => ({
  type: "SET_FAVORITE", // cuidado con los nombres al llamr en los reducers debe ser exactam,ente los mismo
  payload
});

export const deleteFavorite = payload => ({
  type: "DELETE_FAVORITE",
  payload
});

export const logingRequest = payload => ({
  type: "LOGIN_REQUEST",
  payload
});

export const logoutRequest = payload => ({
  type: "LOGOUT_REQUEST",
  payload
});

export const registerRequest = payload => ({
  type: "REGISTER_REQUEST",
  payload
});

export const getVideoSource = payload => ({
  type: "GET_VIDEO_SOUCER",
  payload
});
