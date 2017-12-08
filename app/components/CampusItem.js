import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCampus } from '../reducers/Campuses'
import { removeStudent } from '../reducers/Students'

class CampusItem extends Component 
{
      constructor (props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
      }
    render() {
        const {campus} = this.props
        return (
            <div className="row">
            <div className="col s12 m7">
              <div className="card">
              <Link to = {`/campuses/${campus.id}`}>
                <div className="card-image">
                  <img className="responsive-img" width='140' height= '140' src={campus.image}></img>
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
              <div>
              <a className="btn-floating btn-large waves-effect waves-light red"
               onClick = {this.handleDelete}><i className="material-icons">X</i></a>
          </div>
            </div>
          </div>
         
        )
    }


handleDelete(event){
    const { campus, removeCampus, removeStudent } = this.props
    event.stopPropagation();
    console.log('hi')
   removeCampus(campus.id);
  }
}




  const mapPropsToState = ({ students }) => ({ students })

  const mapDispatchToProps = {removeCampus, removeStudent }

export default connect(mapPropsToState, mapDispatchToProps)(CampusItem);