/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import campuses from './Campuses';
import students from './Students';



export default combineReducers({ campuses, students });


