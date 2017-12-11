import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux'
import { Link} from 'react-router-dom';
import CampusItem from './CampusItem';
import { addCampus } from '../reducers/Campuses'



class Campuses extends Component {
  constructor() {
    super()
    this.handleCreateCampus = this.handleCreateCampus.bind(this)
  }
  handleCreateCampus(event){
    event.preventDefault()
    const campus = {
      name: event.target.campus.value,
      imageUrl: event.target.image.value,
      description: event.target.description.value
    };
    this.props.addCampus(campus);
    event.target.campus.value = '';
    event.target.image.value = '';
    event.target.description.value = '';
    // this.props.history.push('/campuses')
  
   
    // this.props.history.push(`/campuses/${this.props.campuses[this.props.campuses.length-1].id}`)
      
  
  }

render(){
  if (!this.props.campuses) return <div />
  const campuses = this.props.campuses.map(campus =>
    (
     <CampusItem key={campus.id} campus={campus}  />
     )
    )
  return (
    <div>
    <ul>
    {campuses}
    </ul>
    <h4> {this.renderCreateCampus()} </h4>
</div>
  )
}
renderCreateCampus(){
   return (
     <div>  
     <form id = "createCampus" onSubmit={this.handleCreateCampus}>
       <div>
         <input
           type="text"
           name="campus"
           placeholder= "Enter Campus Name"
         />
            <input
           type="text"
           name="image"
           placeholder= "Enter Image Name"
         />
              <input
           type="text"
           name="description"
           placeholder= "Enter Campus Desciption"
         />
         <span>
           <button  type="submit">Create Campus</button>
         </span>
       </div>
     </form>
     </div>
   )
 }

}

const mapPropsToState = ({campuses}) => 
({ campuses })

const mapDispatchToProps = {addCampus}
 
 export default connect(mapPropsToState, mapDispatchToProps)(Campuses);
