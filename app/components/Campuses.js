import React, { Component } from 'react';
import store from '../store';
import { fetchCampuses } from '../reducers/Campuses';
import { connect } from 'react-redux'

const mapStateToProps = ({campuses}) => 
  ({ campuses })



const mapDispatchToProps = null

class Campuses extends Component {
  constructor(props) {
    super(props)
  }

render(){
  return (
    <div>
    <ul>
      <li> {this.props.campuses} </li>
      </ul>
     <h1> hi</h1>
</div>
  )
}
}


  


const CampusesContainer = connect(mapStateToProps, mapDispatchToProps)(Campuses)

export default CampusesContainer

// this.stata.map((campus => {
//   return <li> {campus} </li>
// }))