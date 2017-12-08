
import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const REMOVE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'

export const getCampuses = campuses => ({
    type: GET_CAMPUSES,
    campuses,
})

export const getCampus = campus => ({
    type: GET_CAMPUS,
    campus,
})

export const remove = id => ({
    type: REMOVE_CAMPUS,
    id,
})

export const update = id => ({
    type: UPDATE_CAMPUS,
    id
})


export default (campuses = [], action) => {
    switch (action.type) {
      case GET_CAMPUSES:
        return action.campuses;
        default:
        return campuses
    }
}

export const fetchCampuses = () => dispatch => {
    axios.get('/api/campuses')
    .then(res => {  console.log(res)
        dispatch(getCampuses(res.data))})
    .catch(err => console.error('could not get campuses', err))
}

