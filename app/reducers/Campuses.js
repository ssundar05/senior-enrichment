
import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const REMOVE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'
const CREATE_CAMPUS = 'CREATE_CAMPUS'

export const getCampuses = campuses => ({
    type: GET_CAMPUSES,
    campuses,
})


export const remove = id => ({
    type: REMOVE_CAMPUS,
    id,
})

export const update = campus => ({
    type: UPDATE_CAMPUS,
    campus
})

export const create = campus => ({
    type: UPDATE_CAMPUS,
    campus
})


export default (campuses = [], action) => {
    switch (action.type) {
      case GET_CAMPUSES:
        return action.campuses;
    case REMOVE_CAMPUS:
        return campuses.filter(campus => campus.id !== action.id);
    case UPDATE_CAMPUS:
        return campuses.map(campus => (
            action.campus.id === campus.id ? action.campus : campus
          ))
    case CREATE_CAMPUS:
        return [...campuses, action.campuses];
    default:
        return campuses;
    }
}

export const fetchCampuses = () => dispatch => {
    axios.get('/api/campuses')
    .then(res => {  console.log(res)
        dispatch(getCampuses(res.data))})
    .catch(err => console.error('could not get campuses', err))
}

export const fetchCampus = id => dispatch => {
    axios.get(`/api/campuses/${id}`)
      .then(res => dispatch(update(res.data)))
      .catch(err => console.error('could not get campus', err));
  };
  
  export const removeCampus = id => dispatch => {
   
    dispatch(remove(id));
    axios.delete(`/api/campuses/${id}`)
      .catch(err => console.error(`could not remove ${id}`, err));
  };
  
  export const addCampus = campus => dispatch => {
    axios.post('/api/campuses/', campus)
      .then(res => dispatch(create(res.data)))
      .catch(err => console.error(`could not create ${campus}`, err));
  };
  
  export const updateCampus = (id, campus) => dispatch => {
      console.log('HUDSHUE')
    axios.put(`/api/campuses/${id}`, campus)
      .then(res => {
          console.log(res)
      dispatch(update(res.data)
      )}
    )
    
      .catch(err => console.error(`Ucould not update ${campus}`, err));
  };