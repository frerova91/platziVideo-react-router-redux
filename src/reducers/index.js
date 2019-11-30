const reducer = (state, actions) => {
  // type hace referencia al nombre del action que estamos invocando para evaluar el caso
  switch (actions.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        myList: [...state.myList, actions.payload]
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        // Usamos filter para crear un nuevo arrys con todos los elementos que cumplan la condicion implementada en la funcion dada, evaluaremos el id y lo comparamos con actions.payload.
        myList: state.myList.filter(items => items.id !== actions.payload)
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: actions.payload
      };
    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: actions.payload
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        user: actions.payload
      };
    case "GET_VIDEO_SOUCER":
      return {
        ...state,
        playing:
          state.trends.find(item => item.id === Number(actions.payload)) ||
          state.originals.find(item => item.id === Number(actions.payload)) ||
          []
      };
    case "SEARCH_VIDEO_TITLE":
      if (actions.payload === "") {
        return {
          ...state,
          search: []
        };
      }
      return {
        ...state,
        search:
          state.trends.filter(items =>
            items.title.toLowerCase().includes(actions.payload.toLowerCase())
          ) || []
      };
    default:
      //regresamos el estado si todo falla
      return state;
  }
};

export default reducer;
