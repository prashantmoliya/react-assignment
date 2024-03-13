import { ADD, DELETE, ERROR, GET, REQUEST } from "./ActionType";

const initiastate = {
  loader: false,
  error: null,
  data: [],
};

const Reducer = (state = initiastate, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        loader: true,
      };

    case ERROR:
      return {
        loader: false,
        error: action.payload,
      };

    case ADD:
      return {
        loader: false,
        error: null,
        data: [...state.data, action.payload],
      };

    case GET:
      return {
        loader: false,
        error: null,
        data: action.payload,
      };

    case DELETE:
      return {
        loader: false,
        error: null,
      };

    default:
      return state;
  }
};

export default Reducer;
