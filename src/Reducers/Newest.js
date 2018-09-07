const Newest = (state = [], action) => {
    switch (action.type) {
      case "FETCH_NEWEST_DATA_SUCCESS":
        return {
          newest:action.payload,
          status: true,
          message: ""
        };
        break;
      case "FETCH_NEWEST_DATA_FAILURE":
        return {
          newest:[],
          status: false,
          message: action.error
        };
        break;
  
      default:
        return state;
    }
  };
  
  export default Newest;