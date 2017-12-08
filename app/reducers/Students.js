import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const REMOVE_STUDENT = 'DELETE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT'

export const getStudents = students => ({
    type: GET_STUDENTS,
    students,
})

export const getCampus = student=> ({
    type: GET_STUDENT,
    student,
})

export const remove = id => ({
    type: REMOVE_STUDENT,
    id,
})

export const update = id => ({
    type: UPDATE_STUDENT,
    id
})

export const fetchStudents = () => dispatch => {
    axios.get('/api/students')
    .then(res => { 
        dispatch(getStudents(res.data))})
    .catch(err => console.error('could not get students', err))
}


export default (students = [], action) => {
    switch (action.type) {
      case GET_STUDENTS:
        return action.students;
        default:
        return students
    }
}