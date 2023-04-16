const ListReducer = (state, action) => {
  switch (action.type) {
    // CREATE
    case "CREATE_LIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "CREATE_LIST_SUCCESS":
      return {
        lists: [...state.lists, action.payload],
        isFetching: false,
        error: false,
      };

    case "CREATE_LIST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    // GET
    case "GET_LIST_START":
      return {
        lists: [],
        isFetching: true,
        error: false,
      };

    case "GET_LIST_SUCCESS":
      return {
        lists: action.payload,
        isFetching: false,
        error: false,
      };

    case "GET_LIST_FAILURE":
      return {
        lists: [],
        isFetching: false,
        error: true,
      };

    // UPDATE
    case "UPDATE_LIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "UPDATE_LIST_SUCCESS":
      return {
        lists: state.lists.filter((list) => list._id !== action.payload),
        isFetching: false,
        error: false,
      };

    case "UPDATE_LIST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    // DELETE
    case "DELETE_LIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "DELETE_LIST_SUCCESS":
      return {
        lists: state.lists.filter((list) => list._id !== action.payload),
        isFetching: false,
        error: false,
      };

    case "DELETE_LIST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default ListReducer;
