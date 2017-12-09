import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import store from '../store';
import { addStudent } from '../reducers/Students'
import { removeCampus, updateCampus } from '../reducers/Campuses';
import { connect } from 'react-redux'
import _ from 'lodash';



class SingleCampus extends Component {
    
      constructor() {
        super();
        this.handleUpdateCampus = this.handleUpdateCampus.bind(this)
      }

      handleUpdateCampus(event) {
        event.preventDefault()
        const id = Number(this.props.match.params.id);
        const campus = event.target.campus.value
        const image = event.target.campus.value
        const description = event.target.description.value
        const updated = {
          id: id,
            name: campus,
            description: description,
            imageUrl: image,
        }
         store.dispatch(updateCampus(id, updated))
      }
    
      render() {
        if (!this.props.campus) return <div />
          const { students, name} = this.props
          const campusStudents = this.props.students.map(student => <li key = {student.id}><h3>{student.fullName}</h3></li>)
        return (
          <div>
            {console.log(this.props.campus)}
              <h1>{name} Students</h1>
              <ul> 
                {campusStudents}
              </ul>
              <div> {this.renderEditCampus()} </div>
            
          </div>
    
        );
      }
    
    renderEditCampus(){
     
    
      return (
        <div>  
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
              placeholder={this.props.campus.description}
            />
            <span>
              <button  type="submit">Save Changes</button>
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

  const mapDispatchToProps = {removeCampus, addStudent, updateCampus}
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);