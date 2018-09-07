const Jobs = (state = [], action) => {
    switch (action.type) {
      case "FETCH_JOBS_DATA_SUCCESS":
        return {
          jobs:action.payload,
          status: true,
          message: "Data fetch success"
        };
        break;
      case "FETCH_JOBS_DATA_FAILURE":
        return {
          jobs:[],
          status: false,
          message: action.error
        };
        break;
  
      default:
        return state;
    }
  };
  
  export default Jobs;