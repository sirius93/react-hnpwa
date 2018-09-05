const Newest = (state = [], action) => {
    switch (action.type) {
      case "FETCH_NEWEST_DATA_SUCCESS":
        return {
          ...state,
          comments: action.comments,
          status: true,
          message: ""
        };
        break;
      case "FETCH_NEWEST_DATA_SUCCESS_FAILURE":
        return {
          ...state,
          comments: {},
          status: false,
          message: action.error
        };
        break;
  
      default:
        return state;
    }
  };
  
  export default Newest;