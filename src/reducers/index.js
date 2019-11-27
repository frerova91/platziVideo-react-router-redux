const reducer = (state, actions) => {
  // type hace referencia al nombre del action que estamos invocando para evaluar el caso
  switch (actions.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        myList: [...state.myList, actions.payload]
      };
    default:
      //regresamos el estado si todo falla
      return state;
  }
};

export default reducer;
