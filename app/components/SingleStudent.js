import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import store from '../store';
import { removeStudent, updateStudent } from '../reducers/Students'
import { connect } from 'react-redux'
import _ from 'lodash';



class SingleStudent extends Component {
    
      constructor() {
        super();
        this.handleUpdateStudent = this.handleUpdateStudent.bind(this)
        this.handleDeleteStudent = this.handleDeleteStudent.bind(this)
      }

      
handleDeleteStudent(event){
    event.preventDefault()
    this.props.removeStudent(Number(event.target.id))
    const id = Number(this.props.match.params.id)
    this.props.removeStudent(id);
    this.props.history.push('/students')

  }
    

      handleUpdateStudent(event) {
        event.preventDefault()
        const id = Number(this.props.match.params.id);
        const first = event.target.firstName.value
        const last = event.target.lastName.value
        const email = event.target.email.value
        const gpa = event.target.gpa.value
     
        const updated = {
            firstName: first,
            lastName: last,
            gpa: Number(gpa),
            email: email,
        }
         this.props.updateStudent(id, updated)
      }
    
      render() {
        if (!this.props.student) return <div />
        return (
          <div>
            <h1>Student Details: </h1>
            <h3>Name: {this.props.student.fullName} </h3>
            <Link to = {`/campuses/${this.props.student.CampusId}`}><h3> Campus </h3> </Link>
            <h4> Email {this.props.student.email} </h4>
            <h4> GPA: {this.props.student.gpa} </h4>
            <h5> click X to delete a Student; update Student on Forms Below </h5>
        <div>
              <a className="btn-floating btn-large waves-effect waves-light red"
               onClick = {this.handleDeleteStudent}><i className="material-icons">X</i></a>
          </div>
            <h4>{this.renderEditStudent()} 
            </h4>
          </div>
    
        );
      }
    
    renderEditStudent(){
     
    
      return (
        <div>  
          <h5> UPDATE Student </h5>
        <form id = "editCampus" onSubmit={this.handleUpdateStudent}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder= "Edit First Name"
            />
              <input
              type="text"
              name="lastName"
              placeholder= "Edit Last Name"
            />
              <input
              type="text"
              name="email"
              placeholder= "Edit email"
            />
            <input
              type="text"
              name="gpa"
              placeholder= "Edit GPA"
            />
             {/* <input
              type="text"
              name="campus"
              placeholder = 'campus'
            /> */}

            <span>
              <button  type="submit">Update Student</button>
            </span>
          </div>
        </form>
        </div>
      )
    }

}
  

  
  
const mapStateToProps = ({ students, campuses}, ownProps) => {
    const paramId = Number(ownProps.match.params.id);
    return {
      student: _.find(students, student => student.id === paramId),
      students
    };
  };

  const mapDispatchToProps = {removeStudent, updateStudent}
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);