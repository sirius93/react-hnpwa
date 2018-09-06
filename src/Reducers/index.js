import { combineReducers } from "redux";
import Newest from './Newest';
import News from './News';
import Ask from './Ask';
import Show from './Show';
import Jobs from './Jobs';

export default combineReducers({
    Newest,
    News,
    Ask,
    Show,
    Jobs
});