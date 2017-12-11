import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCampus } from '../reducers/Campuses'
import { removeStudent } from '../reducers/Students'

class CampusItem extends Component 
{
      constructor (props) {
        super(props);
      
      }
    render() {
        const {campus} = this.props
        return (
            <div className="row">
            <div className="col s12 m7">
              <div className="card">
              <Link to = {`/campuses/${campus.id}`}>
                <div className="card-image">
                  <img className="responsive-img"  width='50' height= '50' src = {campus.imageUrl}></img>
                  <span className="card-title"></span>
                </div>
                <div className="card-content">
                  <p>{campus.name}</p>
                </div>
                <div className="card-action">
                  <p> CLICK TO VIEW CAMPUS DETAILS</p>
                </div>
                </Link>
              </div>
            </div>
          </div>
         
        )
    }
   


}




  const mapPropsToState = null

  const mapDispatchToProps = null

export default connect(mapPropsToState, mapDispatchToProps)(CampusItem);