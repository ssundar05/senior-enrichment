import React, { Component } from 'react';
import store from '../store';
import { fetchCampuses } from '../reducers/Campuses';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import CampusItem from './CampusItem';

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
    {this.props.campuses.map(campus =>
     (
      <CampusItem key={campus.id} campus={campus} />
      )
     )}
    </ul>
</div>
  )
}
}


  

 
const CampusesContainer = connect(mapStateToProps, mapDispatchToProps)(Campuses)

 export default CampusesContainer 


