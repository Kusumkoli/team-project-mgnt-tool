import React, { Component } from "react";
import { Link } from "react-router-dom";
import './landing.css';
import { AiFillMacCommand } from "react-icons/ai";

class Landing extends Component {
  render() {
    return (
      <div className="bgStyle">
        <div className= "navbar">
          <div className="logo">
            < AiFillMacCommand className="logoStyle" />
          </div>
          <div className="flex">
            <Link
              to="/register"
              className="buttonStyle buttontwo btn btn-large waves-effect waves-light hoverable"
            >
              Register
            </Link>
            <Link
              to="/login"
              
              className="buttonStyle buttontwo btn btn-large btn-flat waves-effect white-text"
            >
              Log In
            </Link>
          </div>
        </div>
        <div className="midDiv">
          <div className="content">
            <p className="para para1">Teams helps teams work more collaboratively and get more done.</p>
            <p className="para para2">Trello’s boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.</p>
            <Link
              to="/register"
              className="buttonStyle buttonOne btn btn-large waves-effect waves-light hoverable"
            >
              Register
            </Link>
            <Link
              to="/login"
              
              className="buttonStyle btn btn-large btn-flat waves-effect white black-text"
            >
              Log In
            </Link>
          </div>
          <div className="illustration">
            
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;

