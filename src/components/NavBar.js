import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchField from './SearchField'
import ProfilePanel from './ProfilePanel'
// import logo from '../img/logo.png'
import logo from '../img/Capture.PNG'

class NavBar extends Component { 
    render() {
        return (
            <div> 
                <nav className="navbar navbar-expand-lg topNav">
                    <div className="container ">
                        <div className="col-3">
                            <ProfilePanel username = {this.props.username} onLogin={this.props.onLogin}/>
                        </div>
                        <div className="col-6 text-center" >
                            <Link to={"/"}>
                                <img src={logo} alt="logo" className="logo" />
                            </Link>
                        </div>
                        <div className="col-3">
                            <SearchField onSearchChanged = {this.props.onSearchChanged}  />
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;