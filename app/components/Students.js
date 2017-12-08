import React, { Component } from 'react';
import store from '../store';
import { fetchStudents } from '../reducers/Students';
import { connect } from 'react-redux'

const mapStateToProps = ({students}) => 
  ({ students })



const mapDispatchToProps = null

class Students extends Component {
  constructor(props) {
    super(props)
  }

render(){
  return (
    <div>
    <ul>
      <li> hi</li>
      </ul>   
     <h1> hi</h1>
</div>
  )
}
}


  


const StudentsContainer = connect(mapStateToProps, mapDispatchToProps)(Students)

export default StudentsContainer
