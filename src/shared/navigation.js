/**
 * Created by maxcher on 22/04/2017.
 */
import React, {Component} from 'react';
import NavBtn from './navBtn';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default fullpage-panel">
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-6">
                    <NavBtn text="Start New Game"
                            class="home-btn"
                            linkPath="/game"
                    />
                  </div>
                  <div className="col-md-6">
                    <NavBtn class="home-btn"
                      text="Instructions"
                            linkPath="/instructions"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <NavBtn class="home-btn"
                      text="Settings"
                            linkPath="/settings"/>
                  </div>
                  <div className="col-md-6">
                    <NavBtn text="High Score"
                            class="home-btn"
                            linkPath="/highScore"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Navigation;
