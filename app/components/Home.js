import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Home extends Component {
  render() {
    return (
      <div>
        <div id='center' className="row">
          <div className="col s6">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img id='homepic' className="activator" src='https://www.collegeboard.org/sites/default/files/about-collegeboard-video_0.jpg'></img>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4 activator">OUR MISSION

          </span>

              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 activator">OUR MISSION
            <i className="material-icons right">close</i>
                </span>
                <p>We're still trying to make something up</p>
              </div>
            </div>
          </div>
          <div className="col s6">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img id='homepic' className="activator" src='http://www.kosovapress.com/public/uploads/image/stuuuu.jpg'></img>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4 activator">SERVICES

          </span>

              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 activator">SERVICES
            <i className="material-icons right">close</i>
                </span>
                <p>College is a waste, go to Fullstack.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

