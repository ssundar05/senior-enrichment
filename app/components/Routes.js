import {Component} from 'react'
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux';
import Home from './Home';
import Campuses from './Campuses';
import Students from './Students';
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'
import { fetchCampuses } from '../reducers/Campuses';
import { fetchStudents } from '../reducers/Students';
import Root from './Root';


class Routes extends Component {
    
      componentDidMount() {
        this.props.fetchInitialData();
      }
    
      render() {
        return (
          <Router>
            <Root>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/campuses" component={Campuses} />
                <Route path="/campuses/:id" component={SingleCampus} />
                <Route exact path="/students" component={Students} />
                <Route exact path="/students/:id" component={SingleStudent} />
                <Route component={Home} />
              </Switch>
            </Root>
          </Router>
        );
      }
    }


const mapPropsToState = null;

const  mapDispatchToProps = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCampuses());
    dispatch(fetchStudents())
  }
})


export default connect(mapPropsToState, mapDispatchToProps)(Routes)