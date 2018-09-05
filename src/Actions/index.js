import  Apis  from '../Configs/Apis';
import { ajax } from '../Utils'

export const getData = (path, props) => {
        let url = `${Apis.HN_BASE_API}${path}.json`,
        page = path.split('/')[1];
        ajax(url).
        then(data => {
            console.log(page)
            switch(page){
                case 'newest':
                    props.dispatch({ type: "FETCH_NEWEST_DATA_SUCCESS", payload: data })
                    break;
                case 'news':  
                    props.dispatch({ type: "FETCH_NEWS_DATA_SUCCESS", payload: data })
                    break;  
                default: 
                    console.log('error')    
            }
        }
        );
  };