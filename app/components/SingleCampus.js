import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import store from '../store';
import { addStudent, removeStudent } from '../reducers/Students'
import { removeCampus, updateCampus} from '../reducers/Campuses';
import { connect } from 'react-redux'
import _ from 'lodash';



class SingleCampus extends Component {
    
      constructor(props) {
        super(props);
        this.handleUpdateCampus = this.handleUpdateCampus.bind(this)
        this.handleDeleteStudent = this.handleDeleteStudent.bind(this)
        this.handleAddStudent = this.handleAddStudent.bind(this)
      }

      handleDelete(event){
        event.stopPropagation();
        const id = Number(this.props.match.params.id)
        this.props.history.push('/')
      store.dispatch(removeCampus(id));
 
      }

      handleAddStudent(event) {
        event.preventDefault()
        console.log(this.props)
        // const id = Number(this.props.match.params.id);
        const first = event.target.firstName.value
        const last = event.target.lastName.value
        const email = event.target.email.value
        const gpa = event.target.gpa.value
        const student = {
            firstName: first,
            lastName: last,
            gpa: gpa,
            email: email,
         
            CampusId: this.props.campus.id
        }
        
        this.props.addStudent(student)
      }
    
      handleDeleteStudent(event){
        event.preventDefault()
        console.log(typeof event.target.id)
        this.props.removeStudent(Number(event.target.id))
        console.log(event.target.id)
        // const id = Number(this.props.match.params.id)
        // this.props.history.push('/campuses/{')
        // this.props.removeStudent(id);
 
      }

      

      handleUpdateCampus(event) {
        event.preventDefault()
        const id = Number(this.props.match.params.id);
        const campus = event.target.campus.value
        const image = event.target.image.value
        const description = event.target.description.value
        const updated = {
          id: id,
            name: campus,
            description: description,
            imageUrl: image,
        }
         this.props.updateCampus(id, updated)
         event.target.campus.value = ''
         event.target.image.value = ''
         event.target.description.value = ''
      }
    
      render() {
        if (!this.props.campus) return <div />
        console.log(this.props)
          const { students, name} = this.props
          const campusStudents = this.props.students.map(student => <Link to = {`/students/${student.id}`} key = {student.id}>
          <li ><h3>{student.fullName}</h3><button  onClick = {this.handleDeleteStudent} id = {student.id}>   Remove Student </button> </li></Link>  )
        return (
          <div>
            <div> <img src = {this.props.campus.imageUrl} ></img> </div>
            <h1>Campus Description: {this.props.campus.description} </h1>
            <h5> click X to delete Campus and all Students; update Campus and add Students on Forms Below </h5>
        <div>
              <a className="btn-floating btn-large waves-effect waves-light red"
               onClick = {this.handleDelete}><i className="material-icons">X</i></a>
          </div>
              <h1>{this.props.campus.name} Students</h1>
              <ul> 
                {campusStudents}
              </ul>
            <h4>{this.renderEditCampus()} 
              {this.renderAddStudent()} 
            </h4>
          </div>
    
        );
      }
    
    renderEditCampus(){
     
    
      return (
        <div>  
          <h5> UPDATE CAMPUS </h5>
        <form id = "editCampus" onSubmit={this.handleUpdateCampus}>
          <div>
            <input
              type="text"
              name="campus"
              placeholder= {this.props.campus.name}
            />
               <input
              type="text"
              name="image"
              placeholder={this.props.campus.imageUrl}
            />
                 <input
              type="text"
              name="description"
              placeholder= {this.props.campus.description}
            />
            <span>
              <button  type="submit">Update Campus</button>
            </span>
          </div>
        </form>
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
             <span>
               <button  type="submit">Add Student to Campus</button>
             </span>
           </div>
         </form>
         </div>
       )
     }
  }

  

  
  
const mapStateToProps = ({ students, campuses }, ownProps) => {
    const paramId = Number(ownProps.match.params.id);
    return {
      campus: _.find(campuses, campus => campus.id === paramId),
      students: students.filter(student => student.CampusId === paramId)
    };
  };

  const mapDispatchToProps = {removeCampus, addStudent, removeStudent, updateCampus}
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);