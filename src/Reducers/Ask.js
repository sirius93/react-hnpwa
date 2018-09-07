const Ask = (state = [], action) => {
    switch (action.type) {
      case "FETCH_ASK_DATA_SUCCESS":
        return {
          ask:action.payload,
          status: true,
          message: "Data fetch success"
        };
        break;
      case "FETCH_ASK_DATA_FAILURE":
        return {
          ask : [],
          status: false,
          message: action.error
        };
        break;
  
      default:
        return state;
    }
  };
  
  export default Ask;