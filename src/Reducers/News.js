const News = (state = [], action) => {
    switch (action.type) {
      case "FETCH_NEWS_DATA_SUCCESS":
        return {
          news:action.payload,
          status: true,
          message: "Data fetch success"
        };
        break;
      case "FETCH_NEWS_DATA_FAILURE":
        return {
          news:[],
          status: false,
          message: action.error
        };
        break;
  
      default:
        return state;
    }
  };
  
  export default News;