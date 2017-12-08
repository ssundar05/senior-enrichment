import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import store from '../store';
import { addStudent } from '../reducers/Students'
import { removeCampus, updateCampus } from '../reducers/Campuses';
import { connect } from 'react-redux'
import _ from 'lodash';


class SingleCampus extends React.Component {
    
      constructor(props) {
        super(props);
      }
    
      render() {
          const campusStudents = this.props.students.map(student => <li><h3>{student.fullName}</h3></li>)
        return (
          <div>
            
              <h1>{this.props.campus.name} {console.log(this.props.students[0].fullName)} Students</h1>
              <ul> 
                {campusStudents}
              </ul>
            
          </div>
    
        );
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