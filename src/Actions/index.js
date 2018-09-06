import  Apis  from '../Configs/Apis';
import { ajax } from '../Utils'

export const getData = (path, props) => {
        let url = `${Apis.HN_BASE_API}${path}.json`,
        page = path.split('/')[1];
        ajax(url).
        then(data => {
            switch(page){
                case 'newest':
                    props.dispatch({ type: "FETCH_NEWEST_DATA_SUCCESS", payload: data })
                    break;
                case 'news':  
                    props.dispatch({ type: "FETCH_NEWS_DATA_SUCCESS", payload: data })
                    break;
                case 'show':  
                    props.dispatch({ type: "FETCH_SHOW_DATA_SUCCESS", payload: data })
                    break;
                case 'ask':  
                    props.dispatch({ type: "FETCH_ASK_DATA_SUCCESS", payload: data })
                    break;
                case 'jobs':  
                    props.dispatch({ type: "FETCH_JOBS_DATA_SUCCESS", payload: data })
                    break;             
                default: 
                    console.log('error')    
            }
        }
        );
  };