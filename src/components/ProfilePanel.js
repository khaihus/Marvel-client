import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Login from "./form/Login"
import { Link } from 'react-router-dom';

class ProfilePanel extends Component {
    render() {
        const display = this.props.username ? (
            <div>
                <span className = "navbar-text">Welcome, {this.props.username}</span>
            </div>
        ) : (
            <Link to = {"/Login"} className = "btn btn-primary btn-facebook">
                Sign In 
            </Link> 
        );
        return (
            <div className="col-3 profile_panel text-right">
                {display}
            </div>
        );
    }
}

export default ProfilePanel;