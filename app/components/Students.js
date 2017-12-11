import React, { Component } from 'react';
import store from '../store';
import { addStudent } from '../reducers/Students';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = ({students, campuses}) => 
  ({ students, campuses })



const mapDispatchToProps = {addStudent}

class Students extends Component {
  constructor(props) {
    super(props)
    this.handleAddStudent = this.handleAddStudent.bind(this)
  }
  

  handleAddStudent(event) {
    event.preventDefault()
  
  
    const first = event.target.firstName.value
    const last = event.target.lastName.value
    const email = event.target.email.value
    const gpa = event.target.gpa.value
    const campId= event.target.campId.value
    const student = {
        firstName: first,
        lastName: last,
        gpa: gpa,
        email: email,
        CampusId: campId
    }
    this.props.addStudent(student)
    event.target.firstName.value =  "enter first name"
    event.target.lastName.value = "enter last name"
    event.target.email.value = "enter email"
   event.target.gpa.value = "enter G.P.A"
   event.target.campId.value = "enter Campus Id"
  }

render(){
  let studentList = this.props.students.map(student => <Link to = {`/students/${student.id}`}>
  <li className="collection-header">{student.fullName}</li> </Link>)
  return (
    <div>
    <ul className="collection with-header">
    {studentList}
  </ul>
  <div> {this.renderAddStudent()} </div>
</div>
  )
}
renderAddStudent(){
   return (
     <div>  
       <h5> Add Student  </h5>
     <form id = "addStudent" onSubmit={this.handleAddStudent}>
       <div>
         <input
           type="text"
           name="firstName"
           placeholder= "enter first name"
         />
            <input
           type="text"
           name="lastName"
           placeholder="enter last name"
         />
              <input
           type="text"
           name="email"
           placeholder="enter email"
         />
          <input
           type="number"
           name="gpa"
           placeholder= "enter G.P.A"
         />
          <input
           type="number"
           name="campId"
           placeholder= "enter Campus Id"
         />
         <span>
           <button  type="submit">Add Student to Campus</button>
         </span>
       </div>
     </form>
     </div>
   )
 }
}


  


const StudentsContainer = connect(mapStateToProps, mapDispatchToProps)(Students)

export default StudentsContainer
