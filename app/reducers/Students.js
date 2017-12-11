import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const REMOVE_STUDENT = 'DELETE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT'

export const getStudents = students => ({
    type: GET_STUDENTS,
    students,
})

export const create = student => ({
    type: CREATE_STUDENT,
    student,
})

export const remove = id => ({
    type: REMOVE_STUDENT,
    id,
})

export const update = id => ({
    type: UPDATE_STUDENT,
    id,
})

export const fetchStudents = () => dispatch => {
    axios.get('/api/students')
        .then(res => {
            dispatch(getStudents(res.data))
        })
        .catch(err => console.error('could not get students', err))
}

export const removeStudent = id => dispatch => {
    dispatch(remove(id));
    axios.delete(`/api/students/${id}`)
         .catch(err => console.error(`could not remove ${id}`, err));
  };
  
  export const addStudent = student => dispatch => {
      console.log('fff')
      console.log(student)
    axios.post('/api/students', student)
         .then(res => {
            console.log('hjhj')
            dispatch(create(res.data))})
         .catch(err => console.error(`could not create ${student}`, err));
  };
  
  export const updateStudent = (id, student) => dispatch => {
      console.log('HEYHEY')
    axios.put(`/api/students/${id}`, student)
         .then(res => dispatch(update(res.data)))
         .catch(err => console.error(`could not update ${student}`, err));
  };



export default (students = [], action) => {
    switch (action.type) {
        case GET_STUDENTS:
            return action.students;
        case REMOVE_STUDENT:
            return students.filter(student => student.id !== action.id);
        case UPDATE_STUDENT:
            return students.map(student => (
                action.students.id === student.id ? action.student : student
            ))
        case CREATE_STUDENT:
            return [...students, action.student];
        default:
            return students
    }
}