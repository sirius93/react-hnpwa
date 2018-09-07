const Show = (state = [], action) => {
    switch (action.type) {
      case "FETCH_SHOW_DATA_SUCCESS":
        return {
          show : action.payload,
          status: true,
          message: "Data fetch success"
        };
        break;
      case "FETCH_SHOW_DATA_FAILURE":
        return {
          show : [],
          status: false,
          message: action.error
        };
        break;
  
      default:
        return state;
    }
  };
  
  export default Show;